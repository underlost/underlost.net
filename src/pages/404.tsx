import { Layout } from "@/components/Layout"
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { SEO } from '../components/meta/seo'
import { seoImage } from '../components/meta/seoImage'
import { processEnv } from '../lib/processEnv'
import { getAllSettings, GhostSettings, getAllNoteworthyPosts, getAllPosts, GhostPostsOrPages, getPageBySlug, GhostPostOrPage, getAllFeatredPosts } from '../lib/ghost'
import { PageHeader } from "@/components/PageHeader"
import Image from 'next/image'

/**
 *
 * Renders the writing index page
 *
 */


interface CmsData {
  settings: GhostSettings
  seoImage : any
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
    <Layout isHome={true} settings={settings} bodyClass="">
      <SEO {...{ settings, title, meta_title, meta_description, seoImage }} />
      <div className="inner gh-canvas mb-56">
        <article className="stacked-sm post-full">
          <PageHeader
            title="Page Not Found"
            excerpt=""
          />
          <Image src="/images/404.jpg" alt="cat." width={500} height={500} className="aspect-square w-full grayscale" />
        </article>
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