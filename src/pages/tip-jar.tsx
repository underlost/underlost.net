import { Layout } from '@/components/Layout'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { SEO } from '../components/meta/seo'
import { seoImage } from '../components/meta/seoImage'
import { processEnv } from '../lib/processEnv'
import { getAllSettings, GhostSettings, getAllNoteworthyPosts, getAllPosts, GhostPostsOrPages, getPageBySlug, GhostPostOrPage, getAllFeatredPosts } from '../lib/ghost'
import Image from 'next/image'
import { PageHeader } from '@/components/PageHeader'
import TipButton from '@/components/TipButton'

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

export default function TipJarPage({ cmsData }: ErrorPageProps) {
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
              <Image src="/images/background.jpg" alt="cat." width={500} height={500} className="aspect-square w-full" />
            </figure>
            <article className="container-content">
              <PageHeader title="Tip Jar" excerpt="Donate to underlost.net" size="large" className="text-outline" />

              <TipButton />
            </article>
          </div>
        </div>
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
