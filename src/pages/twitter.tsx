import { Layout } from '@/components/Layout'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { SEO } from '../components/meta/seo'
import { seoImage } from '../components/meta/seoImage'
import { processEnv } from '../lib/processEnv'
import { getAllSettings, GhostSettings, GhostPostOrPage, GhostPostsOrPages, getAllTwitterPosts, getPageBySlug } from '../lib/ghost'
import { RenderContent } from '../components/RenderContent'
import * as fs from 'node:fs'
import TwitterTimeline from '@/components/TwitterTimeline'
import { PageHeader } from '@/components/PageHeader'

/**
 *
 * Renders the Twitter timeline page
 *
 */

interface CmsData {
  settings: GhostSettings
  posts: GhostPostsOrPages
  seoImage: any
  page: GhostPostOrPage
}

interface TwitterPageProps {
  cmsData: CmsData
}

export default function TwitterPage({ cmsData }: TwitterPageProps) {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>

  const { settings, seoImage } = cmsData
  const title = cmsData.page.title
  const posts = cmsData.posts
  const page = cmsData.page

  const htmlAst = page.htmlAst
  if (htmlAst === undefined) throw Error(`twitter.tsx: htmlAst must be defined.`)

  return (
    <Layout isHome={true} settings={settings} bodyClass="twitter ">
      <SEO {...{ settings, seoImage, title }} />

      <article className="lg:pt-24">
        <div className="max-w-4xl mx-auto">
          <PageHeader title={title} />
        </div>
        <div className="gh-canvas inner">
          <section className="post-content load-external-scripts gh-content py-16 text-lg">
            <RenderContent htmlAst={htmlAst} />
          </section>
        </div>
      </article>

      <div className="inner">
        <div className="container mb-16">
          <TwitterTimeline InitialData={posts} />
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let settings
  let posts
  let page
  console.time(`Twitter Page - getStaticProps`)

  const AllPostForSerach = await getAllTwitterPosts()
  try {
    const jsonString = JSON.stringify(AllPostForSerach)
    fs.writeFile(`twitter.json`, jsonString, `utf8`, (err) => {
      if (err) {
        console.log(`Error writing file`, err)
      } else {
        console.log(`Successfully wrote file`)
      }
    })
  } catch (error) {
    console.log(`error : `, error)
  }

  try {
    posts = await getAllTwitterPosts({ limit: 10 })
    settings = await getAllSettings()
    page = await getPageBySlug(`twitter`)
  } catch (error) {
    throw new Error(`Twitter Page creation failed.`)
  }
  const cmsData = {
    settings,
    posts,
    page,
    seoImage: await seoImage({ siteUrl: settings.processEnv.siteUrl }),
  }
  console.timeEnd(`Twitter Page - getStaticProps`)

  return {
    props: {
      cmsData,
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }), // re-generate at most once every revalidate second
  }
}
