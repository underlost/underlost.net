import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { PageLayout } from '@/components/layouts/PageLayout'
import { FullPageLayout } from '@/components/layouts/FullPageLayout'

import { GhostPostOrPage, GhostPostsOrPages, GhostSettings } from '@/lib/ghost'
import { getPageBySlug, getAllPages, getAllSettings } from '@/lib/ghost'
import { resolveUrl } from '@/utils/routing'

import { ISeoImage, seoImage } from '@/components/meta/seoImage'
import { processEnv } from '@/lib/processEnv'
import { BodyClass } from '@/components/helpers/BodyClass'

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
}

interface PostOrPageProps {
  cmsData: CmsData
}

const PostOrPageIndex = ({ cmsData }: PostOrPageProps) => {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>
  const { bodyClass } = cmsData
  if (bodyClass.includes(`tag-layout-fullbleed`)) {
    return <FullPageLayout cmsData={cmsData} />
  } else {
    return <PageLayout cmsData={cmsData} />
  }
}

export default PostOrPageIndex

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!(params && params.slug && Array.isArray(params.slug))) throw Error(`getStaticProps: wrong parameters.`)
  const [slug] = params.slug.reverse()
  console.time(`Page ${slug} - getStaticProps`)
  const settings = await getAllSettings()
  let page: GhostPostOrPage | null = null
  page = await getPageBySlug(slug)
  if (!page) {
    return {
      notFound: true,
    }
  }

  const siteUrl = settings.processEnv.siteUrl
  const imageUrl = page?.feature_image || undefined
  const image = await seoImage({ siteUrl, imageUrl })
  const tags = (page && page.tags) || undefined
  console.timeEnd(`Page ${slug} - getStaticProps`)

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
  const { enable, maxNumberOfPages } = processEnv.isr
  const limitForPages = (enable && { limit: maxNumberOfPages }) || undefined
  const pages = await getAllPages(limitForPages)
  const settings = await getAllSettings()
  const { url: cmsUrl } = settings
  const pageRoutes = (pages as GhostPostsOrPages).map(({ slug, url }) => resolveUrl({ cmsUrl, slug, url }))
  const paths = [...pageRoutes]
  console.log(`Paths:`, paths)
  return {
    paths,
    fallback: enable && `blocking`,
  }
}
