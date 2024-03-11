import { Layout } from '@/components/Layout'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { SEO } from '@/components/meta/seo'
import { seoImage } from '@/components/meta/seoImage'
import { processEnv } from '@/lib/processEnv'
import { getAllSettings, GhostSettings, GhostPostOrPage, GhostPostsOrPages, getAllThoughtsPosts, getPageBySlug } from '../../lib/ghost'
import { RenderContent } from '@/components/RenderContent'
import { AsideCard } from '@/components/AsideCard'
import { PageHeader } from '@/components/PageHeader'

/**
 *
 * Renders the Thoughts page
 *
 */

interface CmsData {
  settings: GhostSettings
  posts: GhostPostsOrPages
  seoImage: any
  page: GhostPostOrPage
}

interface ThoughtsPageIndexProps {
  cmsData: CmsData
}

export default function ThoughtsPageIndex({ cmsData }: ThoughtsPageIndexProps) {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>

  const { settings, seoImage } = cmsData
  const title = cmsData.page.title
  const posts = cmsData.posts
  const page = cmsData.page

  const htmlAst = page.htmlAst
  if (htmlAst === undefined) throw Error(`thoughts page index: htmlAst must be defined.`)

  return (
    <Layout isHome={true} settings={settings} bodyClass="">
      <SEO {...{ settings, seoImage, title }} />
      <article className="gh-canvas mt-11">
        <PageHeader title={page.title} />

        <section className="post-content load-external-scripts gh-content text-lg">
          <RenderContent htmlAst={htmlAst} />
        </section>
      </article>

      <section className="gh-canvas mb-48">
        {posts.map((post, i) => <AsideCard key={post.id} settings={settings} post={post} num={i} />)}
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let settings
  let posts
  let page
  console.time(`Thoughts Page - getStaticProps`)

  try {
    posts = await getAllThoughtsPosts({ limit: 25 })
    settings = await getAllSettings()
    page = await getPageBySlug(`thoughts`)
  } catch (error) {
    throw new Error(`Thoughts Page creation failed.`)
  }
  const cmsData = {
    settings,
    posts,
    page,
    seoImage: await seoImage({ siteUrl: settings.processEnv.siteUrl }),
  }
  console.timeEnd(`Thoughts Page - getStaticProps`)

  return {
    props: {
      cmsData,
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }), // re-generate at most once every revalidate second
  }
}
