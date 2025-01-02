import { Layout } from '@/components/Layout'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { SEO } from '../components/meta/seo'
import { seoImage } from '../components/meta/seoImage'
import { processEnv } from '../lib/processEnv'
import { getAllSettings, GhostSettings, getAllNoteworthyPosts, GhostPostsOrPages, getPageBySlug, GhostPostOrPage } from '../lib/ghost'
import { getAllLinks } from '../lib/markdown'
import { PageHeader } from '@/components/PageHeader'
import { readingTime as readingTimeHelper } from '@/lib/readingTime'
import { resolveUrl } from '@/utils/routing'
import { BodyClass } from '@/components/helpers/BodyClass'
import dayjs from 'dayjs'
import { getLang, get } from '@/utils/use-lang'
import { RenderContent } from '@/components/RenderContent'
import Link from 'next/link'
import UnderlostxyzBlock from '@/components/UnderlostxyzBlock'
import Image from 'next/image'
import { PreviewPosts } from '@/components/PreviewPosts'
import { PostView } from '@/components/PostView'
import { ConsultingHeader } from '@/components/consulting/ConsultingHeader'
import SocialLinks from '@/components/SocialLinks'

/**
 *
 * Renders the links page
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

interface LinksPageProps {
  cmsData: CmsData
}

export default function LinksPage({ cmsData }: LinksPageProps) {
  const router = useRouter()

  if (router.isFallback) return <div>Loading...</div>
  const { settings, seoImage, links, bodyClass } = cmsData
  const posts = cmsData.posts
  const page = cmsData.page
  const featImg = page.featureImage
  const title = `@underlost's Link In Bio - ${settings.title}`
  const { nextImages } = settings.processEnv

  const htmlAst = page.htmlAst
  if (htmlAst === undefined) throw Error(`Links page index: htmlAst must be defined.`)

  return (
    <Layout isHome={true} settings={settings} bodyClass={bodyClass} image="/images/background_duotone.jpg">
      <SEO {...{ settings, seoImage, title }} />
      <div className="container">
        <article className="tag-color-scheme-c container-inner">
          <div className="border-color container-border">
            {featImg && (nextImages.feature && featImg.dimensions ? (
              <figure className="featured-image-blob" style={{ display: `inherit` }}>
                <Image
                  src={featImg.url}
                  alt={page.title || ``}
                  quality={nextImages.quality}
                  sizes={`(max-width: 350px) 350px,(max-width: 530px) 530px,(max-width: 710px) 710px,(max-width: 1170px) 1170px,(max-width: 2110px) 2110px, 2000px`}
                  {...featImg.dimensions}
                />
              </figure>
            ) : (
              page.feature_image && (
                <figure className="featured-image-blob">
                  <img src={page.feature_image} alt={page.title} />
                </figure>
              )
            ))}
            <div className="container-content">
              <PageHeader title="@underlost" />
              
              <section className="post-full-content post-content load-external-scripts gh-content text-2xl mb-11">
                <RenderContent htmlAst={htmlAst} />
              </section>

              <SocialLinks />

              <div className="max-w-lg mx-auto my-16 squiggle s1 px-8" />
              <section className="max-w-lg mx-auto">
                

                <div className="max-w-lg mx-auto">
                  <ul>
                    {links.map((externalLink: any, i: number) => (
                      <li key={i} className="mb-5">
                        <a className="btn btn-lg w-full" href={externalLink.website} target="_blank" rel="noreferrer">
                          {externalLink.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-11">
   
                  <div className="flex-none my-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-emberglow-red" viewBox="0 0 55.19 42.73">
                      <path
                        d="M31.34 9.1C12.74-16.08-29.6 21.81 33 42.6a1.77 1.77 0 002.29-.93 2.29 2.29 0 00-.29-1.45c4.72-.09 17.11-19.13 19.16-23.8C59.88-3.24 39.68-4.69 31.34 9.1zm20.08 3.63c-3 9.78-11.05 17.12-16.91 25.29a1.53 1.53 0 00-.28 1.29c-1.62-1.21-4.69-1.57-6.14-2.67-9-3.58-18.06-8.45-23.14-17-7.33-15.52 20.3-20.25 24.5-7.09-3.06 5.94 2.52 7.94 2.28 4.21a4.3 4.3 0 001.45-4.28c4.57-8.81 19.64-14.76 18.24.25z"
                        fill="fill-emberglow-red"
                      />
                    </svg>
                  </div>
                </div>
              </section>
              <div className="max-w-lg mx-auto mt-16 squiggle s1 px-8" />
            </div>
          </div>
        </article>

        <PostView title="Popular Posts" className="tag-color-scheme-d" posts={posts} settings={settings} />

        <section className='tag-color-scheme-m pb-11'>

          <ConsultingHeader pongColor2={0xFFBCAA} pongColor1={0x4645D1} />

          <div className='text-lg max-w-xl text-center mx-auto px-8 mb-8'>
            <p>I offer personalized consulting and web services for developers and designers looking to build and launch websites or web apps. Whether you’re refining an idea, troubleshooting technical issues, or creating something from scratch, I’ll help you make meaningful progress and achieve your goals. Each package includes a detailed critique of your project and the opportunity to collaborate directly with me to improve functionality, optimize performance, and bring your vision to life. With over two decades of experience, I’m here to guide you through every step of your journey.</p>
          </div>

          <div className='max-w-lg mx-auto mb-11'>
            <div className='px-8 text-center'>
              <Link className='btn btn-lg mx-auto' href="/consulting">
                Learn More
              </Link>
            </div>
          </div>
          <Image src="/images/svg/catpaw.svg" alt="cat paw sketch" width={50} height={50} className="block ml-auto mr-8 -rotate-12 dark:invert filter-none" />
        </section>
      
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let settings
  let links
  let posts
  let page
  console.time(`Writing Links Page - getStaticProps`)
  try {
    settings = await getAllSettings()
    posts = await getAllNoteworthyPosts({ limit: 8 })
    page = await getPageBySlug(`links`)
  } catch (error) {
    throw new Error(`Links Index creation failed.`)
  }

  try {
    links = await getAllLinks()
  } catch (error) {
    throw new Error(`Links Index creation failed.`)
  }

  const tags = (page && page.tags) || undefined
  const cmsData = {
    settings,
    posts,
    page,
    links,
    bodyClass: BodyClass({ page: page || undefined, tags }),
    seoImage: await seoImage({ siteUrl: settings.processEnv.siteUrl }),
  }
  console.timeEnd(`Writing Links Page - getStaticProps`)

  return {
    props: {
      cmsData,
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }), // re-generate at most once every revalidate second
  }
}
