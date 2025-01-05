import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { PhotoLayout } from '../../components/layouts/PhotoLayout'

import { getPostsByTag, getTagBySlug, GhostPostOrPage, GhostPostsOrPages, GhostSettings } from '../../lib/ghost'
import { getPostBySlug, getAllSettings, getAllPhotoPostSlugs, getAllPhotoPosts } from '../../lib/ghost'
import { resolveUrl } from '../../utils/routing'

import { ISeoImage, seoImage } from '../../components/meta/seoImage'
import { processEnv } from '../../lib/processEnv'
import { BodyClass } from '../../components/helpers/BodyClass'

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

const PhotoPost = ({ cmsData }: PostOrPageProps) => {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>
  return <PhotoLayout cmsData={cmsData} />
}

export default PhotoPost

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!(params && params.slug && Array.isArray(params.slug))) throw Error(`getStaticProps: wrong parameters.`)
  const [slug] = params.slug.reverse()
  console.time(`Photo ${slug} - getStaticProps`)
  const settings = await getAllSettings()
  let post: GhostPostOrPage | null = null
  post = await getPostBySlug(slug)
  if (post?.primary_tag) {
    const primaryTag = await getTagBySlug(post?.primary_tag.slug)
    post.primary_tag = primaryTag
  }

  let prevPost: GhostPostOrPage | null = null
  let nextPost: GhostPostOrPage | null = null

  if (post?.id && post?.slug) {
    const postSlugs = await getAllPhotoPostSlugs()
    const index = postSlugs.indexOf(post?.slug)
    const prevSlug = index > 0 ? postSlugs[index - 1] : null
    const nextSlug = index < postSlugs.length - 1 ? postSlugs[index + 1] : null
    prevPost = (prevSlug && (await getPostBySlug(prevSlug))) || null
    nextPost = (nextSlug && (await getPostBySlug(nextSlug))) || null
  }

  const siteUrl = settings.processEnv.siteUrl
  const imageUrl = (post)?.feature_image || undefined
  const image = await seoImage({ siteUrl, imageUrl })
  const tags = (post && post.tags) || undefined

  console.timeEnd(`Photo ${slug} - getStaticProps`)

  return {
    props: {
      cmsData: {
        settings,
        post,
        seoImage: image,
        prevPost,
        nextPost,
        bodyClass: BodyClass({ tags }),
      },
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }), // re-generate at most once every revalidate second
  }
}


export const getStaticPaths: GetStaticPaths = async () => {
  const { enable, maxNumberOfPages } = processEnv.isr
  const pages = await getAllPhotoPosts()
  const settings = await getAllSettings()
  const { url: cmsUrl } = settings
  const pageRoutes = (pages as GhostPostsOrPages).map(({ slug, url }) => resolveUrl({ cmsUrl, collectionPath: `photos/`, slug, url }))
  const paths = [...pageRoutes]

  console.log(`Paths:`, paths)

  return {
    paths,
    fallback: enable && `blocking`,
  }
}
