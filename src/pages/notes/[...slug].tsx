import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'

import { getPostsByTag, getTagBySlug, GhostPostOrPage, GhostPostsOrPages, GhostSettings } from '../../lib/ghost'
import { getPostBySlug, getAllAsidePosts, getAllSettings, getAllAsidePostSlugs } from '../../lib/ghost'
import { resolveUrl } from '../../utils/routing'

import { ISeoImage, seoImage } from '../../components/meta/seoImage'
import { processEnv } from '../../lib/processEnv'
import { BodyClass } from '../../components/helpers/BodyClass'
import { AsideLayout } from '../../components/layouts/AsideLayout'


/**
 *
 * Renders a single thought.
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

const ThoughtPost = ({ cmsData }: PostOrPageProps) => {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>
  return <AsideLayout cmsData={cmsData} />
}

export default ThoughtPost

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!(params && params.slug && Array.isArray(params.slug))) throw Error(`getStaticProps: wrong parameters.`)
  const [slug] = params.slug.reverse()
  console.time(`Aside Post - getStaticProps`)
  const settings = await getAllSettings()
  let post: GhostPostOrPage | null = null
  
  post = await getPostBySlug(slug)
  if (post?.primary_tag) {
    const primaryTag = await getTagBySlug(post?.primary_tag.slug)
    post.primary_tag = primaryTag
  }

  let previewPosts: GhostPostsOrPages | never[] = []
  let prevPost: GhostPostOrPage | null = null
  let nextPost: GhostPostOrPage | null = null

  if (post?.id && post?.slug) {
    const tagSlug = post?.primary_tag?.slug
    previewPosts = (tagSlug && (await getPostsByTag(tagSlug, 4, post?.id))) || []
  }

  const siteUrl = settings.processEnv.siteUrl
  const imageUrl = (post)?.feature_image || undefined
  const image = await seoImage({ siteUrl, imageUrl })
  const tags = (post && post.tags) || undefined

  console.timeEnd(`Aside Post - getStaticProps`)

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
  const pages = await getAllAsidePosts()
  const settings = await getAllSettings()
  const { url: cmsUrl } = settings
  const pageRoutes = (pages as GhostPostsOrPages).map(({ slug, url }) => resolveUrl({ cmsUrl, collectionPath: `notes/`, slug, url }))
  const paths = [...pageRoutes]

  console.log(`Paths:`, paths)

  return {
    paths,
    fallback: enable && `blocking`,
  }
}
