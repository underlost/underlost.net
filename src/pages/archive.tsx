import Link from 'next/link'
import { Layout } from '@/components/Layout'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { SEO } from '../components/meta/seo'
import { seoImage } from '../components/meta/seoImage'
import { processEnv } from '../lib/processEnv'
import { resolveUrl } from '../utils/routing'
import { getAllSettings, GhostSettings, getAllPosts, GhostPostsOrPages, GhostPostOrPage } from '../lib/ghost'
import dayjs from 'dayjs'
import { PageHeader } from '@/components/PageHeader'

/**
 *
 * Renders the writing index page
 *
 */

interface CmsData {
  settings: GhostSettings
  posts: GhostPostsOrPages
  seoImage: any
}

interface ArchiveIndexProps {
  cmsData: CmsData
}

// Helper function to format date as "Month YYYY"
const formatDate = (date: string) => {
  const d = new Date(date)
  const month = d.toLocaleString(`default`, { month: `long` })
  const year = d.getFullYear()
  return `${month} ${year}`
}

export default function ArchiveIndex({ cmsData }: ArchiveIndexProps) {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>

  const { settings, seoImage } = cmsData
  const title = `Previously, on underlost.net`
  const posts = cmsData.posts
  const cmsUrl = settings.url

  // Group posts by "Month YYYY"
  const groupedPosts = posts.reduce(
    (acc, post) => {
      const dateKey = post.published_at ? formatDate(post.published_at) : ``
      if (!acc[dateKey]) {
        acc[dateKey] = []
      }
      acc[dateKey].push(post)
      return acc
    },
    {} as Record<string, GhostPostOrPage[]>
  )

  return (
    <Layout isHome={true} settings={settings} bodyClass="">
      <SEO {...{ settings, seoImage, title }} />
      <article className="gh-canvas mt-11">
        <PageHeader title={title} />

        {Object.entries(groupedPosts).map(([date, posts], index) => (
          <div className="text-left" key={index}>
            <p className="text-lg my-4 text-wide">{date}</p>
            <ul className="mb-8">
              {posts.map((post, i) => {
                const url = resolveUrl({ cmsUrl, collectionPath: `writing/`, slug: post.slug, url: post.url })
                return (
                  <li key={i}>
                    <Link href={url}>
                      <h2 className="inline-block font-black mr-1.5 text-base">{post.title}</h2>
                      <time className="font-mono uppercase" dateTime={post.published_at || ``}>
                        {dayjs(post.published_at || ``).format(`D MMM YYYY`)}&nbsp;
                      </time>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let settings
  let posts
  console.time(`Writing Archive Index - getStaticProps`)
  try {
    posts = await getAllPosts()
    settings = await getAllSettings()
  } catch (error) {
    throw new Error(`Writing Index creation failed.`)
  }
  const cmsData = {
    settings,
    posts,
    seoImage: await seoImage({ siteUrl: settings.processEnv.siteUrl }),
  }
  console.timeEnd(`Writing Archive Index - getStaticProps`)

  return {
    props: {
      cmsData,
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }), // re-generate at most once every revalidate second
  }
}
