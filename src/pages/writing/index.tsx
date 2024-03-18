import { Layout } from "@/components/Layout"
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { SEO } from '../../components/meta/seo'
import { seoImage } from '../../components/meta/seoImage'
import { processEnv } from '../../lib/processEnv'
import { getAllSettings, GhostSettings, getAllNoteworthyPosts, getAllPosts, GhostPostsOrPages, getPageBySlug, GhostPostOrPage, getAllFeatredPosts } from '../../lib/ghost'
import { PostCard } from '../../components/PostCard'
import { FeaturedPostCard } from '../../components/FeaturedPostCard'
import { PageHeader } from "@/components/PageHeader"
import { RenderContent } from '@/components/RenderContent'
import Image from 'next/image'

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
  featuredPosts: GhostPostsOrPages
}

interface WritingIndexProps {
  cmsData: CmsData
}

export default function WritingIndex({ cmsData }: WritingIndexProps) {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>

  const { settings, seoImage } = cmsData
  const posts = cmsData.posts
  const page = cmsData.page
  const { meta_title, meta_description } = page
  const title = `${meta_title || page.title} - ${settings.title}`

  const htmlAst = page.htmlAst
  if (htmlAst === undefined) throw Error(`Writing page index: htmlAst must be defined.`)

  return (
    <Layout isHome={true} settings={settings} bodyClass="">
      <SEO {...{ settings, title, meta_title, meta_description, seoImage }} />
      
      <section className="gh-canvas mt-28 my-11">
        <div className="kg-width-wide">
          <div className="max-w-6xl mx-auto stacked-sm mb-16">
            {cmsData.featuredPosts.map((post, i) => (
              <FeaturedPostCard key={i} settings={settings} post={post} num={i} />
            ))}
          </div>
        </div>
      </section>

      <div className="promo-unit">
        <article className="mb-11 gh-canvas relative">
          <PageHeader title={page.title} />
          <section className="post-content load-external-scripts gh-content text-lg lg:px-24">
            <RenderContent htmlAst={htmlAst} />
          </section>
        </article>
      </div>

      <section className="gh-canvas mb-48">
        <h2 className="font-mono uppercase mb-8 text-lg"><span className="strikethrough">Recent Posts</span></h2>

        <div className="gap-11 lg:columns-2 mb-11">
          {posts.map((post, i) => (
            <div key={i} className="stacked-sm mb-11 break-inside-avoid">
              <PostCard  settings={settings} post={post} num={i} />
            </div>
          ))}
          <>
            <Image src="/images/svg/catpaw.svg" alt="cat paw sketch" width={50} height={50} className="block ml-auto  -rotate-12 dark:invert filter-none" />
          </>
        </div>
        <div className="mb-16 text-center">
          <p className="text-lg mb-3">
           Looking for more posts?
          </p>
          <Link className="btn" href="/archive/">Check out the archive</Link>
        </div>

      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let settings
  let posts
  let page
  let featuredPosts

  console.time(`Writing Index - getStaticProps`)
  try {
    posts = await getAllPosts({ limit: 8, page: 1 })
    settings = await getAllSettings()
    page = await getPageBySlug(`writing`)
    featuredPosts = await getAllFeatredPosts({ limit: 1 })
  } catch (error) {
    throw new Error(`Writing Index creation failed.`)
  }
  const cmsData = {
    settings,
    posts,
    page,
    featuredPosts,
    seoImage: await seoImage({ siteUrl: settings.processEnv.siteUrl }),
  }
  console.timeEnd(`Writing Index - getStaticProps`)

  return {
    props: {
      cmsData,
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }), // re-generate at most once every revalidate second
  }
}