import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'

import { getPostsByTag, getTagBySlug, GhostPostOrPage, GhostPostsOrPages, GhostSettings } from '@/lib/ghost'
import { getPostBySlug, getAllPosts, getAllSettings, getAllPostSlugs, getAllNoteworthyPosts } from '@/lib/ghost'
import { resolveUrl } from '@/utils/routing'

import { ISeoImage, seoImage } from '@/components/meta/seoImage'
import { processEnv } from '@/lib/processEnv'
import { BodyClass } from '@/components/helpers/BodyClass'
import { PostLayout } from '@/components/layouts/PostLayout'
import { AsideLayout } from '@/components/layouts/AsideLayout'


/**
 *
 * Renders a single post or page and loads all content.
 *
 */

interface CmsDataCore {
  post: GhostPostOrPage
  settings: GhostSettings
  seoImage: ISeoImage
  previewPosts?: GhostPostsOrPages
  noteworthyPosts?: GhostPostsOrPages
  prevPost?: GhostPostOrPage
  nextPost?: GhostPostOrPage
  bodyClass: string
}

interface CmsData extends CmsDataCore {
  isPost: boolean
}

interface PostOrPageProps {
  cmsData: CmsData
}

const PostIndex = ({ cmsData }: PostOrPageProps) => {
  const router = useRouter()
  const isLinked = cmsData.post.tags?.some((tag) => (tag.name === `#linked` || tag.name === `#twitter`))
  if (router.isFallback) return <div>Loading...</div>

  if (isLinked) {
    return <AsideLayout cmsData={cmsData} />
  } else {
    return <PostLayout cmsData={cmsData} />
  }
}

export default PostIndex

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!(params && params.slug && Array.isArray(params.slug))) throw Error(`getStaticProps: wrong parameters.`)
  const [slug] = params.slug.reverse()
  console.time(`Post ${slug} - getStaticProps`)
  const settings = await getAllSettings()
  let post: GhostPostOrPage | null = null
  let recentPosts: GhostPostsOrPages | never[] = []
  
  post = await getPostBySlug(slug)
  recentPosts = await getAllNoteworthyPosts({ limit: 5 }) || []

  if (post?.primary_tag) {
    const primaryTag = await getTagBySlug(post?.primary_tag.slug)
    post.primary_tag = primaryTag
  }
  let previewPosts: GhostPostsOrPages | never[] = []
  
  if (post?.id && post?.slug) {
    const tagSlug = post?.primary_tag?.slug
    previewPosts = (tagSlug && (await getPostsByTag(tagSlug, 5, post?.id))) || []
    if (previewPosts.length === 0) {
      previewPosts = recentPosts
    }
  }

  const siteUrl = settings.processEnv.siteUrl
  const imageUrl = (post)?.feature_image || undefined
  const image = await seoImage({ siteUrl, imageUrl })
  const tags = (post && post.tags) || undefined

  console.timeEnd(`Post ${slug} - getStaticProps`)

  return {
    props: {
      cmsData: {
        settings,
        post,
        seoImage: image,
        previewPosts,
        bodyClass: BodyClass({ tags }),
      },
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }), // re-generate at most once every revalidate second
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { enable, maxNumberOfPages } = processEnv.isr
  const pages = await getAllPosts()
  const settings = await getAllSettings()
  const { url: cmsUrl } = settings
  const pageRoutes = (pages as GhostPostsOrPages).map(({ slug, url }) => resolveUrl({ cmsUrl, collectionPath: `writing/`, slug, url }))
  const paths = [...pageRoutes]
  console.log(`Paths:`, paths)
  return {
    paths,
    fallback: enable && `blocking`,
  }
}
