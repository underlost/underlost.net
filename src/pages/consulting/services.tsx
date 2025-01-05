import { Layout } from '@/components/Layout'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { SEO } from '@/components/meta/seo'
import { seoImage } from '@/components/meta/seoImage'
import { processEnv } from '@/lib/processEnv'
import { getAllSettings, GhostSettings, getPageBySlug, GhostPostOrPage } from '@/lib/ghost'
import { PostClass } from '@/components/helpers/PostClass'
import { RenderContent } from '@/components/RenderContent'
import Image from 'next/image'
import { BodyClass } from '@/components/helpers/BodyClass'

import { ConsultingHeader } from '@/components/consulting/ConsultingHeader'

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
  const description = meta_description || settings.description
  const featImg = page.featureImage
  const postClass = PostClass({ tags: page.tags, isPage: page && true, isImage: !!featImg })
  const htmlAst = page.htmlAst
  if (htmlAst === undefined) throw Error(`FullPageLayout.tsx: htmlAst must be defined.`)

  return (
    <Layout isHome={true} settings={settings} bodyClass={`tag-color-scheme-l ${bodyClass}`} className="color-scheme-full-page tag-color-scheme-l">
      <SEO {...{ settings, seoImage, title, description  }} />

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
                      
        </div>
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let settings
  let page
  console.time(`Writing Consulting Services Page - getStaticProps`)
  try {
    page = await getPageBySlug(`services`)
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
  console.timeEnd(`Writing Consulting Services Page - getStaticProps`)

  return {
    props: {
      cmsData,
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }), // re-generate at most once every revalidate second
  }
}
