import { Layout } from '@/components/Layout'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { SEO } from '../components/meta/seo'
import { seoImage } from '../components/meta/seoImage'
import { processEnv } from '../lib/processEnv'
import { getAllSettings, GhostSettings, getAllNoteworthyPosts, getAllPosts, GhostPostsOrPages, getPageBySlug, GhostPostOrPage, getAllFeatredPosts } from '../lib/ghost'
import { PageHeader } from '@/components/PageHeader'
import Image from 'next/image'
import PongGame from '@/components/consulting/PongGame'
import { NewsletterForm } from '@/components/NewsletterForm'
import Link from 'next/link'

/**
 *
 * Renders the writing index page
 *
 */

interface CmsData {
  settings: GhostSettings
  seoImage: any
}

interface ErrorPageProps {
  cmsData: CmsData
}

export default function ErrorPage({ cmsData }: ErrorPageProps) {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>

  const { settings, seoImage } = cmsData
  const title = `Page Not Found - ${settings.title}`
  const meta_title = `Page Not Found - ${settings.title}`
  const meta_description = `The page you are looking for does not exist.`

  return (
    <Layout isHome={false} settings={settings} bodyClass="tag-color-scheme-g 404-page" image="/images/background_duotone.jpg">
      <SEO {...{ settings, title, meta_title, meta_description, seoImage }} />

      <div className="container">
        <div className="tag-color-scheme-g container-inner">
          <div className="border-color container-border">
            <figure className="featured-image-blob" style={{ display: `inherit` }}>
                <Image src="/images/404.jpg" alt="cat." width={500} height={500} className="aspect-square w-full grayscale" />
            </figure>
            <div className='py-11 lg:py-24' />
            <article className="container-content">
            <h1 className='h1-xl text-outline '>Page Not Found</h1>
            <p className='text-left text-lg mb-8'>The page you are looking for does not exist. Sorry about that.</p>

            <Link className="btn btn-lg" href='/'>Go Home</Link>
            </article>
          </div>

          <div className="pb-11 py-11 container  min-h-[350px]">
            <div className="md:max-w-3xl mx-auto relative">
              <PongGame color1={0x04284A} color2={0xFF294C} />
            </div>
          </div>

        </div>

        <section className="relative tag-color-scheme-i p-11">
          <div className="max-w-xl py-16 mx-auto">
                    <NewsletterForm />
                  </div>
        </section>

      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let settings

  console.time(`Writing Error Page - getStaticProps`)
  try {
    settings = await getAllSettings()
  } catch (error) {
    throw new Error(`Writing Error Page creation failed.`)
  }
  const cmsData = {
    settings,
    seoImage: await seoImage({ siteUrl: settings.processEnv.siteUrl }),
  }
  console.timeEnd(`Writing Error Page - getStaticProps`)

  return {
    props: {
      cmsData,
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }), // re-generate at most once every revalidate second
  }
}
