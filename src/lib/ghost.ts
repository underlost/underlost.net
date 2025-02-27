import { parse as urlParse } from 'url'
import GhostContentAPI, { Params, PostOrPage, SettingsResponse, Pagination, PostsOrPages, Tag, Author } from '@tryghost/content-api'
import { normalizePost } from './ghost-normalize'
import { Node } from 'unist'
import { collections as config } from './routesConfig'
import { Collections } from './collections'

import { ghostAPIUrl, ghostAPIKey, processEnv, ProcessEnvProps } from './processEnv'
import { imageDimensions, normalizedImageUrl, Dimensions } from './images'
import { IToC } from './toc'

import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

export interface NextImage {
  url: string
  dimensions: Dimensions
}

export interface NavItem {
  url: string
  label: string
}

interface BrowseResults<T> extends Array<T> {
  meta: { pagination: Pagination }
}

export interface GhostSettings extends SettingsResponse {
  processEnv: ProcessEnvProps
  secondary_navigation?: NavItem[]
  iconImage?: NextImage
  logoImage?: NextImage
  coverImage?: NextImage
}

export interface GhostTag extends Tag {
  featureImage?: NextImage
}

export interface GhostAuthor extends Author {
  profileImage?: NextImage
}

export interface GhostPostOrPage extends PostOrPage {
  featureImage?: NextImage | null
  htmlAst?: Node | null
  toc?: IToC[] | null
  tags?: GhostTag[]
  featured?: boolean
}

export interface GhostPostsOrPages extends BrowseResults<GhostPostOrPage> {}

export interface GhostTags extends BrowseResults<GhostTag> {}

export interface GhostAuthors extends BrowseResults<GhostAuthor> {}

export interface GhostTiers {
  monthly_price: number
  yearly_price: number
  benefits: string[]
  type: string
  id: string
  name: string
}

const api = new GhostContentAPI({
  url: ghostAPIUrl,
  key: ghostAPIKey,
  version: `v5.0`,
})

const postAndPageFetchOptions: Params = {
  limit: `all`,
  include: [`tags`, `authors`, `count.posts`],
  order: [`featured DESC`, `published_at DESC`],
}

const tagAndAuthorFetchOptions: Params = {
  limit: `all`,
  filter: `visibility:public`,
  include: `count.posts`,
}

const postAndPageSlugOptions: Params = {
  limit: `all`,
  fields: `slug`,
}

// helpers
export const createNextImage = async (url?: string | null): Promise<NextImage | undefined> => {
  if (!url) return undefined
  const normalizedUrl = await normalizedImageUrl(url)
  const dimensions = await imageDimensions(normalizedUrl)
  return (dimensions && { url: normalizedUrl, dimensions }) || undefined
}

async function createNextFeatureImages(nodes: BrowseResults<Tag | PostOrPage>): Promise<GhostTags | PostsOrPages> {
  const { meta } = nodes
  const images = await Promise.all(nodes.map((node) => createNextImage(node.feature_image)))
  const results = nodes.map((node, i) => {
    return { ...node, ...(images[i] && { featureImage: images[i] }) }
  })
  return Object.assign(results, { meta })
}

async function createNextProfileImages(nodes: BrowseResults<Author>): Promise<GhostAuthors> {
  const { meta } = nodes
  const images = await Promise.all(nodes.map((node) => createNextImage(node.profile_image)))
  const results = nodes.map((node, i) => {
    return { ...node, ...(images[i] && { profileImage: images[i] }) }
  })
  return Object.assign(results, { meta })
}

export async function createNextProfileImagesFromAuthors(nodes: Author[] | undefined): Promise<Author[] | undefined> {
  if (!nodes) return undefined
  const images = await Promise.all(nodes.map((node) => createNextImage(node.profile_image)))
  return nodes.map((node, i) => {
    return { ...node, ...(images[i] && { profileImage: images[i] }) }
  })
}

async function createNextProfileImagesFromPosts(nodes: BrowseResults<PostOrPage>): Promise<PostsOrPages> {
  const { meta } = nodes
  const authors = await Promise.all(nodes.map((node) => createNextProfileImagesFromAuthors(node.authors)))
  const results = nodes.map((node, i) => {
    return { ...node, ...(authors[i] && { authors: authors[i] }) }
  })
  return Object.assign(results, { meta })
}

export async function getAllSettings(): Promise<GhostSettings> {
  //const cached = getCache<SettingsResponse>('settings')
  //if (cached) return cached
  const settings = await api.settings.browse()
  settings.url = settings?.url?.replace(/\/$/, ``)

  const iconImage = await createNextImage(settings.icon)
  const logoImage = await createNextImage(settings.logo)
  const coverImage = await createNextImage(settings.cover_image)

  const result = {
    processEnv,
    ...settings,
    ...(iconImage && { iconImage }),
    ...(logoImage && { logoImage }),
    ...(coverImage && { coverImage }),
  }
  //setCache('settings', result)
  return result
}

export async function getAllTags(): Promise<GhostTags> {
  const tags = await api.tags.browse(tagAndAuthorFetchOptions)
  return await createNextFeatureImages(tags)
}

export async function getAllTiers(): Promise<GhostTiers> {
  const tiers = await api.tiers.browse({
    limit: `all`,
    filter: `visibility:public`,
    include: [`monthly_price`, `yearly_price`, `benefits`],
  })
  return tiers
}

export async function getAllAuthors() {
  const authors = await api.authors.browse(tagAndAuthorFetchOptions)
  return await createNextProfileImages(authors)
}

export async function getallNewsletters() {
  const newsletters = await api.newsletters.browse({
    limit: `all`,
    filter: `visibility:public`,
  })
  return newsletters
}

// Get all posts with #blog tag
export async function getAllPosts(props?: { limit: number; page: number }): Promise<GhostPostsOrPages> {
  const posts = await api.posts.browse({
    ...postAndPageFetchOptions,
    // filter by blog tag and not featured
    filter: `tags:hash-blog`,
    order: `published_at DESC`,
    ...(props && { ...props }),
  })
  const results = await createNextProfileImagesFromPosts(posts)

  return await createNextFeatureImages(results)
}

// Get all posts with #projects tag
export async function getAllProjectPosts(props?: { limit: number; page: number }): Promise<GhostPostsOrPages> {
  const posts = await api.posts.browse({
    ...postAndPageFetchOptions,
    // filter by blog tag and not featured
    filter: `tags:hash-projects`,
    order: `published_at DESC`,
    ...(props && { ...props }),
  })
  const results = await createNextProfileImagesFromPosts(posts)
  return await createNextFeatureImages(results)
}

// Get all posts with #current-projects tag
export async function getAllCurrentProjectPosts(props?: { limit: number; page: number }): Promise<GhostPostsOrPages> {
  const posts = await api.posts.browse({
    ...postAndPageFetchOptions,
    // filter by blog tag and not featured
    filter: `tags:hash-current-projects`,
    order: `published_at DESC`,
    ...(props && { ...props }),
  })
  const results = await createNextProfileImagesFromPosts(posts)
  return await createNextFeatureImages(results)
}

// Get all posts with #old-projects tag
export async function getAllOldProjectPosts(props?: { limit: number; page: number }): Promise<GhostPostsOrPages> {
  const posts = await api.posts.browse({
    ...postAndPageFetchOptions,
    // filter by blog tag and not featured
    filter: `tags:hash-old-projects`,
    order: `published_at DESC`,
    ...(props && { ...props }),
  })
  const results = await createNextProfileImagesFromPosts(posts)
  return await createNextFeatureImages(results)
}

// Get all post slugs with #blog tag
export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await api.posts.browse({
    limit: `all`,
    fields: `slug`,
    filter: `tags:hash-blog`,
  })
  return posts.map((p) => p.slug)
}

// Get external pages tagged with #page
export async function getAllPages(props?: { limit: number }): Promise<GhostPostsOrPages> {
  const pages = await api.pages.browse({
    filter: `tags:hash-page`,
    ...postAndPageFetchOptions,
    ...(props && { ...props }),
  })
  return await createNextFeatureImages(pages)
}

// Portfolio Pages
export async function getAllPortfolioPages(props?: { limit: number }): Promise<GhostPostsOrPages> {
  const pages = await api.pages.browse({
    filter: `tags:hash-portfolio`,
    ...postAndPageFetchOptions,
    ...(props && { ...props }),
  })
  return await createNextFeatureImages(pages)
}

export async function getAllConsultingPages(props?: { limit: number }): Promise<GhostPostsOrPages> {
  const pages = await api.pages.browse({
    filter: `tags:hash-consulting`,
    ...postAndPageFetchOptions,
    ...(props && { ...props }),
  })
  return await createNextFeatureImages(pages)
}

// Photo posts
export async function getAllPhotoPosts(props?: { limit: number }): Promise<GhostPostsOrPages> {
  const pages = await api.posts.browse({
    filter: `tags:hash-photos`,
    ...postAndPageFetchOptions,
    ...(props && { ...props }),
  })
  return await createNextFeatureImages(pages)
}

// Twitter posts
export async function getAllTwitterPosts(props?: { limit: number }): Promise<GhostPostsOrPages> {
  const pages = await api.posts.browse({
    filter: `tags:hash-twitter`,
    ...postAndPageFetchOptions,
    ...(props && { ...props }),
  })
  return await createNextFeatureImages(pages)
}

// Thoughts and random links with the #aside tag
export async function getAllAsidePosts(props?: { limit: number }): Promise<GhostPostsOrPages> {
  const pages = await api.posts.browse({
    filter: `tags:hash-aside`,
    ...postAndPageFetchOptions,
    ...(props && { ...props }),
  })
  return await createNextFeatureImages(pages)
}

// Get all post slugs with #aside tag
export async function getAllAsidePostSlugs(): Promise<string[]> {
  const posts = await api.posts.browse({
    limit: `all`,
    fields: `slug`,
    filter: `tags:hash-aside`,
  })
  return posts.map((p) => p.slug)
}

// Get all photo slugs with #aside tag
export async function getAllPhotoPostSlugs(): Promise<string[]> {
  const posts = await api.posts.browse({
    limit: `all`,
    fields: `slug`,
    filter: `tags:hash-photos`,
  })
  return posts.map((p) => p.slug)
}

// Linked posts
export async function getAllLinkedPosts(props?: { limit: number }): Promise<GhostPostsOrPages> {
  const pages = await api.posts.browse({
    filter: `tags:hash-linked`,
    ...postAndPageFetchOptions,
    ...(props && { ...props }),
  })
  return await createNextFeatureImages(pages)
}

// Noteworthy Posts
export async function getAllNoteworthyPosts(props?: { limit: number }): Promise<GhostPostsOrPages> {
  const pages = await api.posts.browse({
    filter: `tags:hash-noteworthy`,
    order: `published_at DESC`,
    ...postAndPageFetchOptions,
    ...(props && { ...props }),
  })
  return await createNextFeatureImages(pages)
}

// Featured Posts
export async function getAllFeatredPosts(props?: { limit: number }): Promise<GhostPostsOrPages> {
  const pages = await api.posts.browse({
    filter: `tags:hash-featured`,
    order: `published_at DESC`,
    ...postAndPageFetchOptions,
    ...(props && { ...props }),
  })
  return await createNextFeatureImages(pages)
}

// specific data by slug
export async function getTagBySlug(slug: string): Promise<Tag> {
  return await api.tags.read({
    ...tagAndAuthorFetchOptions,
    slug,
  })
}

export async function getAuthorBySlug(slug: string): Promise<GhostAuthor> {
  const author = await api.authors.read({
    ...tagAndAuthorFetchOptions,
    slug,
  })
  const profileImage = await createNextImage(author.profile_image)
  const result = {
    ...author,
    ...(profileImage && { profileImage }),
  }
  return result
}

export async function getPostBySlug(slug: string): Promise<GhostPostOrPage | null> {
  const cacheKey = `post:${slug}`
  try {
    // Try to fetch from Redis cache
    const cachedPost = await redis.get(cacheKey)
    if (cachedPost) {
      return JSON.parse(typeof cachedPost === `string` ? cachedPost : JSON.stringify(cachedPost))
    }

    // If not cached, fetch from Ghost API
    const post = await api.posts.read({
      ...postAndPageFetchOptions,
      slug,
    })
    if (!post) return null
    const url = process.env.CMS_GHOST_API_URL
    const result = await normalizePost(post, (url && urlParse(url)) || undefined)
    // Store in Redis with an expiration of 1 year (31536000 seconds)
    await redis.set(cacheKey, JSON.stringify(result), { ex: 31536000 })

    return result
  } catch (e) {
    const error = e as { response?: { status: number } }
    if (error.response?.status === 404) return null
    throw e
  }
}

export async function getPageBySlug(slug: string): Promise<GhostPostOrPage | null> {
  const cacheKey = `page:${slug}`
  try {
    // Try to fetch from Redis cache
    const cachedPage = await redis.get(cacheKey)
    if (cachedPage) {
      return JSON.parse(typeof cachedPage === `string` ? cachedPage : JSON.stringify(cachedPage))
    }
    // If not cached, fetch from Ghost API
    const page = await api.pages.read({
      ...postAndPageFetchOptions,
      slug,
    })
    if (!page) return null
    const url = process.env.CMS_GHOST_API_URL
    const result = await normalizePost(page, (url && urlParse(url)) || undefined)
    // Store in Redis with an expiration of 1 year (31536000 seconds)
    await redis.set(cacheKey, JSON.stringify(result), { ex: 31536000 })
    return result
  } catch (e) {
    const error = e as { response?: { status: number } }
    if (error.response?.status === 404) return null
    throw e
  }
}

export async function getPortfolioPageBySlug(slug: string): Promise<GhostPostOrPage | null> {
  let result: GhostPostOrPage
  try {
    const page = await api.pages.read({
      filter: `tags:hash-portfolio`,
      ...postAndPageFetchOptions,
      slug,
    })
    // older Ghost versions do not throw error on 404
    if (!page) return null
    const url = process.env.CMS_GHOST_API_URL
    result = await normalizePost(page, (url && urlParse(url)) || undefined)
  } catch (e) {
    const error = e as { response?: { status: number } }
    if (error.response?.status === 404) return null
    throw e
  }
  return result
}

// specific data by author/tag slug
export async function getPostsByAuthor(slug: string, limit?: number): Promise<GhostPostsOrPages> {
  const posts = await api.posts.browse({
    ...postAndPageFetchOptions,
    ...(limit && { limit: `${limit}` }),
    filter: `authors.slug:${slug}`,
  })
  return await createNextFeatureImages(posts)
}

export async function getPostsByTag(slug: string, limit?: number, excludeId?: string): Promise<GhostPostsOrPages> {
  const exclude = (excludeId && `+id:-${excludeId}`) || ``
  const posts = await api.posts.browse({
    ...postAndPageFetchOptions,
    ...(limit && { limit: `${limit}` }),
    filter: `tags.slug:${slug}${exclude}`,
  })
  return await createNextFeatureImages(posts)
}

// Collections
export const collections = new Collections<PostOrPage>(config)
