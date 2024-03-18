import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { PageLayout } from '../../components/layouts/PageLayout'

import { GhostPostOrPage, GhostPostsOrPages, GhostSettings } from '../../lib/ghost'
import { getPostBySlug, getAllSettings, getAllProjectPosts } from '../../lib/ghost'
import { resolveUrl } from '../../utils/routing'

import { ISeoImage, seoImage } from '../../components/meta/seoImage'
import { processEnv } from '../../lib/processEnv'
import { BodyClass } from '../../components/helpers/BodyClass'

/**
 *
 * Renders a page and loads all content.
 *
 */

interface CmsDataCore {
  page: GhostPostOrPage
  settings: GhostSettings
  seoImage: ISeoImage
  previewPosts?: GhostPostsOrPages
  bodyClass: string
}

interface CmsData extends CmsDataCore {
  isPost: boolean
  extraProjectData: any
}

interface ProjectPostProps {
  cmsData: CmsData
}

const ProjectPostSlug = ({ cmsData }: ProjectPostProps) => {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>
  return (
    <PageLayout cmsData={cmsData} />
  )
}

export default ProjectPostSlug

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!(params && params.slug && Array.isArray(params.slug))) throw Error(`getStaticProps: wrong parameters.`)
  const [slug] = params.slug.reverse()
  console.time(`Project Page - getStaticProps`)
  const settings = await getAllSettings()
  let page: GhostPostOrPage | null = null

  page = await getPostBySlug(slug)
  if (!page) {
    return {
      notFound: true,
    }
  }

  const siteUrl = settings.processEnv.siteUrl
  const imageUrl = (page)?.feature_image || undefined
  const image = await seoImage({ siteUrl, imageUrl })
  const tags = (page && page.tags) || undefined
  console.timeEnd(`Project Page - getStaticProps`)

  return {
    props: {
      cmsData: {
        settings,
        page,
        seoImage: image,
        bodyClass: BodyClass({ page: page || undefined, tags }),
      },
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }), // re-generate at most once every revalidate second
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { enable } = processEnv.isr
  const pages = await getAllProjectPosts()
  const settings = await getAllSettings()
  const { url: cmsUrl } = settings
  const pageRoutes = (pages as GhostPostsOrPages).map(({ slug, url }) => resolveUrl({ cmsUrl, collectionPath: `projects/`, slug, url }))
  const paths = [...pageRoutes]

  console.log(`Paths:`, paths)

  return {
    paths,
    fallback: enable && `blocking`,
  }
}
