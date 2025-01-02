import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'


import { SEO } from '@/components/meta/seo'
import { GhostPostOrPage, GhostPostsOrPages, GhostSettings } from '@/lib/ghost'
import { getPageBySlug, getAllConsultingPages, getAllSettings } from '@/lib/ghost'
import { resolveUrl } from '@/utils/routing'
import { RenderContent } from '@/components/RenderContent'
import { processEnv } from '@/lib/processEnv'
import { BodyClass } from '@/components/helpers/BodyClass'
import { PostClass } from '@/components/helpers/PostClass'

import { Layout } from '@/components/Layout'
import { ISeoImage, seoImage } from '@/components/meta/seoImage'
import { PricingTable } from '@/components/consulting/PricingTable'
import { BookNowButton } from '@/components/consulting/BookNowButton'
import { ConsultingHeader } from '@/components/consulting/ConsultingHeader'

/**
 *
 * Renders various consulting pages
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

const ConsultingPage = ({ cmsData }: PostOrPageProps) => {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>
  const { page, settings, seoImage, bodyClass } = cmsData
  const { meta_title, meta_description } = page
  const { nextImages } = settings.processEnv
  const title = meta_title || `${page.title} - ${settings.title}`
  const featImg = page.featureImage
  const postClass = PostClass({ tags: page.tags, isPage: page && true, isImage: !!featImg })
  const htmlAst = page.htmlAst
  const canBookNow = cmsData.page.tags?.some((tag) => (tag.name === `#booknow`))


  if (htmlAst === undefined) throw Error(`FullPageLayout.tsx: htmlAst must be defined.`)
  
  return (
    <Layout isHome={true} settings={settings} bodyClass={`tag-color-scheme-l ${bodyClass}`} className="color-scheme-full-page tag-color-scheme-l">
      <SEO {...{ settings, seoImage, title }} />

      <article className={`${postClass}`}>

        <ConsultingHeader />

        <div className="max-w-lg mx-auto squiggle s12 px-8" />

        <div className="gh-canvas py-11 relative">

          <h1 className="text-center h4 mb-11">{page.title}</h1>

          {featImg &&
            (nextImages.feature && featImg.dimensions ? (
              <figure className="post-full-image" style={{ display: `inherit` }}>
                <Image
                  src={featImg.url}
                  alt={page.title || ``}
                  quality={nextImages.quality}
                  sizes={`
                            (max-width: 350px) 350px,
                            (max-width: 530px) 530px,
                            (max-width: 710px) 710px,
                            (max-width: 1170px) 1170px,
                            (max-width: 2110px) 2110px, 2000px
                          `}
                  {...featImg.dimensions}
                />
              </figure>
            ) : (
              page.feature_image && (
                <figure className="post-full-image">
                  <img src={page.feature_image} alt={page.title} />
                </figure>
              )
            ))}
          <section className="post-full-content post-content load-external-scripts gh-content text-lg mb-11">
            <RenderContent htmlAst={htmlAst} />
          </section>

          {canBookNow && <BookNowButton slug={page.slug} />}
          
        </div>


      </article>
    </Layout>
  )
}

export default ConsultingPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!(params && params.slug && Array.isArray(params.slug))) throw Error(`getStaticProps: wrong parameters.`)
  const [slug] = params.slug.reverse()
  console.time(`Writing Consulting Page - getStaticProps`)
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
  console.timeEnd(`Writing Consulting Page - getStaticProps`)

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
  const pages = await getAllConsultingPages()
  const settings = await getAllSettings()
  const { url: cmsUrl } = settings
  const pageRoutes = (pages as GhostPostsOrPages).map(({ slug, url }) => resolveUrl({ cmsUrl, collectionPath: `consulting/`, slug, url }))
  const paths = [...pageRoutes]
  console.log(`Paths:`, paths)
  return {
    paths,
    fallback: enable && `blocking`,
  }
}
