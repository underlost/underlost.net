import { Layout } from '@/components/Layout'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { SEO } from '@/components/meta/seo'
import { seoImage } from '@/components/meta/seoImage'
import { processEnv } from '@/lib/processEnv'
import { getAllSettings, GhostSettings, GhostPostsOrPages, getPageBySlug, GhostPostOrPage } from '@/lib/ghost'
import { PostClass } from '@/components/helpers/PostClass'
import { RenderContent } from '@/components/RenderContent'
import { PageHeader } from '@/components/PageHeader'
import { resolveUrl } from '@/utils/routing'
import { getLang, get } from '@/utils/use-lang'
import Link from 'next/link'
import Image from 'next/image'
import { BodyClass } from '@/components/helpers/BodyClass'

import ClientSlider from '@/components/ClientSlider'
import PongGame from '@/components/consulting/PongGame'
import { PricingTable } from '@/components/consulting/PricingTable'

/**
 *
 * Renders the consulting page
 *
 */

interface CmsData {
  settings: GhostSettings
  page: GhostPostOrPage
  seoImage: any
  bodyClass: string
}

interface ConsultingIndexPageProps {
  cmsData: CmsData
}

export default function ConsultingIndexPage({ cmsData }: ConsultingIndexPageProps) {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>

  const { page, settings, seoImage, bodyClass } = cmsData
  const { meta_title, meta_description } = page
  const { nextImages } = settings.processEnv
  const title = meta_title || `${page.title} - ${settings.title}`
  const featImg = page.featureImage
  const postClass = PostClass({ tags: page.tags, isPage: page && true, isImage: !!featImg })
  const htmlAst = page.htmlAst
  if (htmlAst === undefined) throw Error(`FullPageLayout.tsx: htmlAst must be defined.`)

  return (
    <Layout isHome={true} settings={settings} bodyClass={`tag-color-scheme-l ${bodyClass}`} className="color-scheme-full-page tag-color-scheme-l">
      <SEO {...{ settings, seoImage, title }} />

      <article className={`${postClass}`}>
        <div className="lg:pt-24 pb-11 py-11 container min-h-[300px]">
          <div className="md:max-w-3xl mx-auto relative">
            <PongGame />
          </div>
          <header className="page-full-header text-center relative z-30">
            <h1 className="h1-xl mx-auto text-center ">{page.title}</h1>
          </header>
        </div>

        <PricingTable />

        <div className="max-w-lg mx-auto squiggle s12 px-8" />

        <div className="gh-canvas py-11">
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

          <div className='mx-8 lg:mx-auto'>
            <div className="p-8 text-center kg-card kg-callout-card bg-wisteriabloom-blue text-white border-blushwood-pink justify-center">
              <div>
                <p className="text-2xl lg:text-4xl font-black mb-5">
                Some of the clients <br /> I&apos;ve worked with:
                </p>
                <ClientSlider />
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let settings
  let page
  console.time(`Writing Consulting Index Page - getStaticProps`)
  try {
    page = await getPageBySlug(`consulting`)
    settings = await getAllSettings()
  } catch (error) {
    throw new Error(`Consulting Index Page creation failed.`)
  }

  const tags = (page && page.tags) || undefined
  const cmsData = {
    settings,
    page,
    bodyClass: BodyClass({ page: page || undefined, tags }),
    seoImage: await seoImage({ siteUrl: settings.processEnv.siteUrl }),
  }
  console.timeEnd(`Writing Consulting IndexPage - getStaticProps`)

  return {
    props: {
      cmsData,
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }), // re-generate at most once every revalidate second
  }
}
