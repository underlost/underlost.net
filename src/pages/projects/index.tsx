import { Layout } from "@/components/Layout"
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { SEO } from '../../components/meta/seo'
import { seoImage } from '../../components/meta/seoImage'
import { processEnv } from '../../lib/processEnv'
import { getAllSettings, GhostSettings, getPageBySlug, GhostPostOrPage, GhostPostsOrPages, getAllPortfolioPages } from '../../lib/ghost'
import { PortfolioCard } from "@/components/PortfolioCard"
import { PageHeader } from "@/components/PageHeader"
import { RenderContent } from '@/components/RenderContent'

/**
 *
 * Renders the writing index page
 *
 */


interface CmsData {
  settings: GhostSettings
  page: GhostPostOrPage
  seoImage : any
}

interface PortfolioIndexProps {
  cmsData: CmsData
}

export default function PortfolioIndex({ cmsData }: PortfolioIndexProps) {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>

  const { settings, seoImage } = cmsData
  const title = `Selected Works - ${settings.title}`
  const page = cmsData.page

  const htmlAst = page.htmlAst
  if (htmlAst === undefined) throw Error(`Projects page index: htmlAst must be defined.`)

  return (
    <Layout isHome={true} settings={settings} bodyClass="">
      <SEO {...{ settings, seoImage, title }} />
      <div className="gh-canvas mb-48">
        <article className="stacked-sm mb-11">
          <PageHeader title={page.title} />
          <section className="post-content load-external-scripts gh-content text-lg">
            <RenderContent htmlAst={htmlAst} />
          </section>
        </article>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let settings
  let page: GhostPostOrPage | null = null
  
  console.time(`Projects Index - getStaticProps`)
  try {
    page = await getPageBySlug(`projects`)
    settings = await getAllSettings()
  } catch (error) {
    throw new Error(`Projects Index creation failed.`)
  }
  const cmsData = {
    settings,
    page,
    seoImage: await seoImage({ siteUrl: settings.processEnv.siteUrl }),
  }
  console.timeEnd(`Projects Index - getStaticProps`)

  return {
    props: {
      cmsData,
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }), // re-generate at most once every revalidate second
  }
}