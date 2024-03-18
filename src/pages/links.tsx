import { Layout } from '@/components/Layout'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { SEO } from '../components/meta/seo'
import { seoImage } from '../components/meta/seoImage'
import { processEnv } from '../lib/processEnv'
import { getAllSettings, GhostSettings, getAllNoteworthyPosts, GhostPostsOrPages } from '../lib/ghost'
import { getAllLinks } from '../lib/markdown'
import { PageHeader } from '@/components/PageHeader'
import { readingTime as readingTimeHelper } from '@/lib/readingTime'
import { resolveUrl } from '@/utils/routing'
import dayjs from 'dayjs'
import { getLang, get } from '@/utils/use-lang'
import Link from 'next/link'
import UnderlostxyzBlock from '@/components/UnderlostxyzBlock'
import Image from 'next/image'

/**
 *
 * Renders the links page
 *
 */

interface CmsData {
  settings: GhostSettings
  posts: GhostPostsOrPages
  seoImage: any
  links: any
}

interface LinksPageProps {
  cmsData: CmsData
}

export default function LinksPage({ cmsData }: LinksPageProps) {
  const router = useRouter()

  if (router.isFallback) return <div>Loading...</div>
  const posts = cmsData.posts
  const { url: cmsUrl } = cmsData.settings
  const text = get(getLang(cmsData.settings.lang))

  const { settings, seoImage, links } = cmsData
  const title = `@underlost's Link In Bio - ${settings.title}`

  return (
    <Layout isHome={true} settings={settings} bodyClass="">
      <SEO {...{ settings, seoImage, title }} />
      <div className="mb-48">
        <article className="gh-canvas lg:mb-11">
          <PageHeader
            title="@underlost"
            excerpt="Former lead developer at a creative agency. AI prompt engineer, full-stack Web & marketing consultant. Occasional indie game dev and photographer. I've made a lot of stuff on the internet. I'm really sorry about that."
          />
        </article>
        <section className="gh-canvas mb-11 lg:mb-24">
          <div className="grid lg:grid-cols-12 gap-x-11">
            <div className="lg:col-span-4 lg:pt-11 pb-5 flex lg:block gap-11">
              <p className="font-script mb-5">
                This is a list of where you can find me on the internet, and other useful resources. If you&apos;re coming here from another website, make sure to check out the rest of my
                website, as well as some of the services I offer!
              </p>
              <div className="flex-none my-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 dark:fill-white" viewBox="0 0 55.19 42.73"><path d="M31.34 9.1C12.74-16.08-29.6 21.81 33 42.6a1.77 1.77 0 002.29-.93 2.29 2.29 0 00-.29-1.45c4.72-.09 17.11-19.13 19.16-23.8C59.88-3.24 39.68-4.69 31.34 9.1zm20.08 3.63c-3 9.78-11.05 17.12-16.91 25.29a1.53 1.53 0 00-.28 1.29c-1.62-1.21-4.69-1.57-6.14-2.67-9-3.58-18.06-8.45-23.14-17-7.33-15.52 20.3-20.25 24.5-7.09-3.06 5.94 2.52 7.94 2.28 4.21a4.3 4.3 0 001.45-4.28c4.57-8.81 19.64-14.76 18.24.25z" fill="currentColor"/></svg>
              </div>
            </div>
            <div className="lg:col-span-8">
              <ul>
                {links.map((externalLink: any, i: number) => (
                  <li key={i} className="mb-5">
                    <a className="btn btn-lg w-full" href={externalLink.website} target="_blank" rel="noreferrer">
                      {externalLink.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="gh-canvas mb-11 lg:mb-24">
          <div className="grid lg:grid-cols-12 gap-x-11">
            <div className="lg:col-span-8 order-2 lg:order-1">
              <div className="bg-aqua text-black p-8 rounded-lg">
                <h2 className="font-mono uppercase mb-4">Noteworthy Posts</h2>

                {posts && 0 < posts.length ? (
                  <article className="read-next-card">
                    <div className="read-next-card-content">
                      <ul className="divide-y divide-violet-blue">
                        {posts?.map((post, i) => {
                          const url = resolveUrl({ cmsUrl, collectionPath: `writing/`, slug: post.slug, url: post.url })
                          return (
                            <li className="py-3" key={i}>
                              <h4 className="text-lg font-black">
                                <Link href={url}>{post.title}</Link>
                              </h4>
                              <div className="read-next-card-meta">
                                <p>
                                  <time className="sr-only" dateTime={post.published_at || ``}>
                                    {dayjs(post.published_at || ``).format(`D MMMM, YYYY`)}
                                  </time>
                                  <span className="font-mono uppercase">{readingTimeHelper(post).replace(`min read`, text(`MIN_READ`))}</span>
                                </p>
                              </div>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </article>
                ) : null}
              </div>
            </div>

            <div className="lg:col-span-4 lg:pt-11 pb-5  order-1 lg:order-2">
              <p className="font-script mb-4">I Occasionally write about things, though not as often as I&apos;d like. These are some of the most interesting posts you should read though!</p>

              <p className="font-script mb-4">You can also check out other recent <Link href="/writing/" className="underline">writings</Link> too.</p>
            </div>

            
          </div>
        </section>

        <section className="gh-canvas">
          <p className="font-script mb-4 lg:text-center lg:px-8">I also help people build websites, web apps, and enhance their online presense.</p>
          <div className="mb-11">
            <UnderlostxyzBlock />
          </div>

          <Image src="/images/svg/catpaw.svg" alt="cat paw sketch" width={50} height={50} className="block ml-auto  -rotate-12 dark:invert filter-none" />

        </section>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let settings
  let links
  let posts
  console.time(`Writing Links Page - getStaticProps`)
  try {
    settings = await getAllSettings()
    posts = await getAllNoteworthyPosts({ limit: 8 })
  } catch (error) {
    throw new Error(`Links Index creation failed.`)
  }

  try {
    links = await getAllLinks()
  } catch (error) {
    throw new Error(`Links Index creation failed.`)
  }

  const cmsData = {
    settings,
    posts,
    links,
    seoImage: await seoImage({ siteUrl: settings.processEnv.siteUrl }),
  }
  console.timeEnd(`Writing Links Page - getStaticProps`)

  return {
    props: {
      cmsData,
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }), // re-generate at most once every revalidate second
  }
}
