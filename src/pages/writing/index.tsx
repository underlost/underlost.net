
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { Layout } from "@/components/Layout"
import { SEO } from '@/components/meta/seo'
import { seoImage } from '@/components/meta/seoImage'
import { processEnv } from '@/lib/processEnv'
import { getAllSettings, GhostSettings, getAllPosts, GhostPostsOrPages, getPageBySlug, GhostPostOrPage, getAllFeatredPosts } from '@/lib/ghost'
import { FeaturedPostCard } from '@/components/FeaturedPostCard'
import { PageHeader } from "@/components/PageHeader"
import { RenderContent } from '@/components/RenderContent'
import { PostView } from '@/components/PostView'


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
    <Layout isHome={true} settings={settings} bodyClass="tag-color-scheme-c" image="/images/background_duotone.jpg">
      <SEO {...{ settings, title, meta_title, meta_description, seoImage }} />

      <div className="container">
        <div className="tag-color-scheme-c container-inner">
          <div className="border-color container-border">
            <article className="container-content">
              <PageHeader title={page.title} />
              <section className="post-content load-external-scripts gh-content text-2xl mx-auto max-w-4xl">
                <RenderContent htmlAst={htmlAst} />
              </section>
              <div className="squiggle-static s1 my-8 lg:my-16 max-w-md mx-auto" />
            </article>
          </div>
        </div>
        <section className="relative z-0">
          {cmsData.featuredPosts.slice(0, 1).map((post, i) => (
            <FeaturedPostCard key={i} settings={settings} post={post} num={i} />
          ))}
        </section>

        <PostView title="Recent Posts" className="tag-color-scheme-d" posts={posts} settings={settings} />

        <section className="tag-color-scheme-d pb-11">
          <div className="mb-16 text-center max-w-5xl mx-auto">
            <Image src="/images/svg/catpaw.svg" alt="cat paw sketch" width={50} height={50} className="block ml-auto  -rotate-12 dark:invert filter-none" />
            <p className="subtitle mb-3">Looking for more posts?</p>
            <Link className="btn btn-lg" href="/tag/">Browse posts by tag</Link>
          </div>
        </section>
      </div>
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
    posts = await getAllPosts({ limit: 9, page: 1 })
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