import { GetStaticProps } from 'next'
import Script from 'next/script'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { processEnv } from '@/lib/processEnv'
import { getAllSettings, GhostSettings, GhostPostsOrPages, getPageBySlug, GhostPostOrPage } from '@/lib/ghost'

import { Layout } from '@/components/Layout'
import { SEO } from '@/components/meta/seo'
import { seoImage } from '@/components/meta/seoImage'
import { PageHeader } from '@/components/PageHeader'
import { BodyClass } from '@/components/helpers/BodyClass'
import { PostClass } from '@/components/helpers/PostClass'
import { RenderContent } from '@/components/RenderContent'
import { SubscribePortal } from '@/components/membership/SubscribePortal'

/**
 *
 * Renders the Membership page
 *
 */

interface CmsData {
  settings: GhostSettings
  posts: GhostPostsOrPages
  page: GhostPostOrPage
  seoImage: any
  links: any
  bodyClass: string
}

interface MembershipPageProps {
  cmsData: CmsData
}

export default function MembershipPage({ cmsData }: MembershipPageProps) {
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
  if (htmlAst === undefined) throw Error(`membership.tsx: htmlAst must be defined.`)

  return (
    <Layout isHome={true} settings={settings} bodyClass={bodyClass}>
      <SEO {...{ settings, seoImage, title, description }} />
      <article className={`${postClass}`}>
        <div className="container lg:pt-24 mb-11 my-11 relative lg:min-h-[300px]">
          {featImg &&
            (nextImages.feature && featImg.dimensions ? (
              <figure className="page-full-image" style={{ display: `inherit` }}>
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
                <figure className="page-full-image">
                  <img src={page.feature_image} alt={page.title} />
                </figure>
              )
            ))}
          <div className="max-w-3xl mx-auto relative">
            <PageHeader title={page.title} excerpt={page.excerpt} size="small" />
          </div>
        </div>
        <div className="inner gh-canvas lg:py-11">
          <SubscribePortal />

          <section className="post-full-content post-content load-external-scripts gh-content text-lg">
            <div className="max-w-lg mx-auto my-16 squiggle s1 px-8" />
            <RenderContent htmlAst={htmlAst} />

            <div className="max-w-lg mx-auto my-16! squiggle s1 px-8" />
          </section>
        </div>
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let settings
  let page
  console.time(`Writing Membership Page - getStaticProps`)
  try {
    settings = await getAllSettings()
    page = await getPageBySlug(`membership`)
  } catch (error) {
    throw new Error(`Membership page creation failed.`)
  }

  const tags = (page && page.tags) || undefined
  const cmsData = {
    settings,
    page,
    bodyClass: BodyClass({ page: page || undefined, tags }),
    seoImage: await seoImage({ siteUrl: settings.processEnv.siteUrl }),
  }
  console.timeEnd(`Writing Membership Page - getStaticProps`)

  return {
    props: {
      cmsData,
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }), // re-generate at most once every revalidate second
  }
}
