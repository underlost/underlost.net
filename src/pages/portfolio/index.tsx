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
  posts: GhostPostsOrPages
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
  const posts = cmsData.posts
  const page = cmsData.page

  const htmlAst = page.htmlAst
  if (htmlAst === undefined) throw Error(`Portfolio page index: htmlAst must be defined.`)

  return (
    <Layout isHome={true} settings={settings} bodyClass="">
      <SEO {...{ settings, seoImage, title }} />
      <div className="gh-canvas mb-48">
        <article className="mb-11">
          <PageHeader title={page.title} />
          <section className="post-content load-external-scripts gh-content text-lg">
            <RenderContent htmlAst={htmlAst} />
          </section>
        </article>

        <section>
          <div className="lg:columns-2 gap-8 mb-11">
            {posts.map((post, i) => (
              <PortfolioCard key={i} settings={settings} post={post} num={i} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let settings
  let posts
  let page: GhostPostOrPage | null = null
  
  console.time(`Portfolio Index - getStaticProps`)
  try {
    page = await getPageBySlug(`portfolio`)
    posts = await getAllPortfolioPages()
    settings = await getAllSettings()
  } catch (error) {
    throw new Error(`Portfolio Index creation failed.`)
  }
  const cmsData = {
    settings,
    page,
    posts,
    seoImage: await seoImage({ siteUrl: settings.processEnv.siteUrl }),
  }
  console.timeEnd(`Portfolio Index - getStaticProps`)

  return {
    props: {
      cmsData,
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }), // re-generate at most once every revalidate second
  }
}