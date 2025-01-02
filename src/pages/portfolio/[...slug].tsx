import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { PortfolioLayout } from '../../components/layouts/PortfolioLayout'

import { GhostPostOrPage, GhostPostsOrPages, GhostSettings } from '../../lib/ghost'
import { getPageBySlug, getAllPages, getAllSettings, getAllPortfolioPages } from '../../lib/ghost'
import { getPortfolioBySlug } from '../../lib/markdown'
import { resolveUrl } from '../../utils/routing'

import { SEO } from '../../components/meta/seo'
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
  extraPortfolioData: any
}

interface PortfolioPostProps {
  cmsData: CmsData
}

const PortfolioPostSlug = ({ cmsData }: PortfolioPostProps) => {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>
  return (
    <PortfolioLayout cmsData={cmsData} />
  )
}

export default PortfolioPostSlug

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!(params && params.slug && Array.isArray(params.slug))) throw Error(`getStaticProps: wrong parameters.`)
  const [slug] = params.slug.reverse()
  console.time(`Portfolio Page ${slug} - getStaticProps`)
  const settings = await getAllSettings()
  let page: GhostPostOrPage | null = null
  let extraPortfolioData

  page = await getPageBySlug(slug)
  if (!page) {
    return {
      notFound: true,
    }
  }

  try {
    extraPortfolioData = await getPortfolioBySlug(slug)
  } catch (error) {
    console.error(`Error fetching extraPortfolioData:`, error)
    extraPortfolioData = null
  }

  const siteUrl = settings.processEnv.siteUrl
  const imageUrl = (page)?.feature_image || undefined
  const image = await seoImage({ siteUrl, imageUrl })
  const tags = (page && page.tags) || undefined
  console.timeEnd(`Portfolio Page ${slug} - getStaticProps`)

  return {
    props: {
      cmsData: {
        settings,
        page,
        extraPortfolioData,
        seoImage: image,
        bodyClass: BodyClass({ page: page || undefined, tags }),
      },
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }), // re-generate at most once every revalidate second
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { enable } = processEnv.isr
  const pages = await getAllPortfolioPages()
  const settings = await getAllSettings()
  const { url: cmsUrl } = settings
  const pageRoutes = (pages as GhostPostsOrPages).map(({ slug, url }) => resolveUrl({ cmsUrl, collectionPath: `portfolio/`, slug, url }))
  const paths = [...pageRoutes]

  console.log(`Paths:`, paths)

  return {
    paths,
    fallback: enable && `blocking`,
  }
}
