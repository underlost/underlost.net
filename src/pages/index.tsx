import { Layout } from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { SEO } from '@/components/meta/seo'
import { seoImage } from '@/components/meta/seoImage'
import { FeaturedPostCard } from '@/components/FeaturedPostCard'
import { processEnv } from '@/lib/processEnv'
import { getAllSettings, GhostSettings, getPageBySlug, getAllPosts, GhostPostsOrPages, GhostPostOrPage, getAllFeatredPosts } from '@/lib/ghost'
import { PostView } from '@/components/PostView'
import { BodyClass } from '@/components/helpers/BodyClass'
import StatsSection from '@/components/StatsSection'
import { NewsletterForm } from '@/components/NewsletterForm'



/**
 *
 * Renders the Homepage.
 *
 */

interface CmsData {
  settings: GhostSettings
  page: GhostPostOrPage
  seoImage: any
  posts: GhostPostsOrPages
  featuredPosts: GhostPostsOrPages
  bodyClass: string
}

interface IndexProps {
  cmsData: CmsData
}

export default function Home({ cmsData }: IndexProps) {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>

  const { settings, seoImage, bodyClass } = cmsData
  const page = cmsData.page
  const { meta_title, meta_description } = page
  const title = meta_title || `${page.title} - ${settings.title}`
  const description = meta_description || settings.description
  const featImg = page.featureImage || settings.cover_image || undefined

  return (
    <Layout isHome={true} settings={settings} bodyClass={bodyClass} className="homepage" image="/images/background_duotone.jpg">
      <SEO {...{ settings, seoImage, title, description }} />

      <div className="container">
        <section className="tag-color-scheme-a container-inner">
          <div className="border-color container-border">
            <div className="container-intro">
              <div className="my-16">
                <div className="flex">
                  <span className="block w-36 h-36 mb-5 ">
                    <Image src="/images/profile.png" alt="Tyler Rilling" width={400} height={400} className="rounded-full w-full h-full" />
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="174" height="107" className="mt-auto">
                    <g fill="currentColor">
                      <path d="m124 95-.7-.2-.8-.3-1.2-.6-1.9-.7-3.7-1.2-5.2-1.8h-.4l-.2-.1-7.2-2.5-5-1.9A75 75 0 0 1 94 84l-2.6-1.2c.3-.8.8-1.3 1-2 3.5 1.5 6.9 3 10.3 4.2l12.9 4.6 5.6 1.9c1.1.3 2.4.4 3.5.8l.7.4.3.4v.7c-.3.6-1 1.5-1.6 1.2zM75.7 72.7l-.3-.3-.8-.7-1.7-1.8-.4-.4-1.8-2a41.2 41.2 0 0 1-8-14.5c-.7-2.7-1.2-5.6-1.3-8.4a28.2 28.2 0 0 1 7-19 20.7 20.7 0 0 1 6.6-4.8l1.2-.4a14.5 14.5 0 0 1 12.9 1.5l1 .7.8.7.9.7a23 23 0 0 1 3.4 4.3l.9 1.6.8 1.9.7 2 .3 1.7a20 20 0 0 1-.2 9.2 24 24 0 0 1-2.2 5.6L93.9 53a30 30 0 0 1-11.2 9.5c-1.9 1-3.7 1.7-5.7 2.4-3 1-6 1.5-9 1.5A69 69 0 0 1 44.8 62 163.4 163.4 0 0 1 29 55.3l-2.6-1.2-.6-.3-1.5-.7-3.6-1.7c-.5-.3-1.5-1.2-1.5-1.7l.3-.6c.1-.6 1.3-1 2-.6l2 1.2L26 51l.8.6.4.3.2.1.6.3c2.6 1.3 5.2 2.7 8.2 3.9 4.3 1.7 8.7 3.7 13.3 5A58 58 0 0 0 64.9 64a33.8 33.8 0 0 0 23.7-8.3 24 24 0 0 0 5.8-8c4-8.4.7-19.3-6.7-24a12.7 12.7 0 0 0-12.4-.4c-4 2-7.3 5.5-9.1 9.7a25.5 25.5 0 0 0-2.4 13.5A32.5 32.5 0 0 0 69.5 62l.6.7v.2c1.1 1.4 2.3 3 3.6 4.4a44 44 0 0 0 8.3 7.2c0 .9.2 2.2-.3 2.7a32.7 32.7 0 0 1-4.2-3.1l-1.8-1.5z" />
                      <path d="M121.2 93.6a7 7 0 0 0-1-.3l-1.5-.4-6.7-2.4c-7-2.5-14-4.9-20.7-8.1L86 79.7a46 46 0 0 1-13.7-10.9 40.5 40.5 0 0 1-8.4-13l-1-3.2c-.4-1-.6-2-.8-3a27.2 27.2 0 0 1 2.1-17c0 .9.4 1.8.9 2.5-1 2.5-1.4 5.2-1.4 7.9v2a36.2 36.2 0 0 0 13.8 25.8c4 3.5 8.5 6.4 13.2 8.6 6 3 12.3 5.5 18.6 7.7l12.5 4.3c-.4.6-.7 1.4-.6 2.2zm20 6c.3-.3.5-.7.4-1 0-.7-.5-1.3-1-1.6-.8-.4-1.8-.2-2.7-.4l-3.4-1.3-2.2-.8a15 15 0 0 0-3-1l-.8-.3c-.8 0-1.5 1.4-1.2 2 .3.5 1.2.6 1.7.8l2 .6 5.1 1.5c.7.2 1.4.6 2 .9l2 .7c.4 0 .7 0 1-.2zm11 2.8.2-.7-.1-.7c-.3-.5-1-.8-1.5-.8a8 8 0 0 1-2.2-.6c-.8-.4-1.6-.6-2.4-.7-.4 0-.7 0-1 .3-.5.3-.8.8-.3 1.3.6.6 1.3.9 2.1 1 1 .2 2 1 3 1.5.3.1.7.2 1 .1a2 2 0 0 0 1.2-.7zm4.8 2.4-.1-.6c-.1-.5-.4-1-1-1.1-.4-.2-1-.1-1.3.2-.5.4-1 1.5-.5 2l.9.6c.8.3 1.5.3 2-1zM18.4 42.4c1 0 2 .2 3 .4 1 0 .3.9 0 1.9a97.4 97.4 0 0 1-5.2 8.8l-.3.4-.2.3-.2.1c-.1.1-.2 0-.3-.1l-.3-.3-.6-.9a56.6 56.6 0 0 1-4.2-7.1l-.3-1.2-.6-1.5h-.1a1 1 0 0 1-.7-.4c-.1-.1-.2-.2-.4 0a2 2 0 0 0-.3 1c0 1 .4 2 .9 3a43.6 43.6 0 0 0 5.2 8l.1.1.2.3.5.4c.3.2.7.3 1 .3l.9-.5.3-.4.2-.2.3-.5.7-.8 1.2-1.8a65 65 0 0 0 3.8-7.5l.2-.8c.1-.3.1-.6 0-.8 0-.3-.2-.5-.4-.7l-.8-.3-.7-.2h-.5l-1-.2a38.3 38.3 0 0 0-9.9.2c-.4 0-.8.3-1.2.6-.3.2-.4.6-.2.7h1.2l1.4.2c.6 0 1.2 0 1.7-.2a20.6 20.6 0 0 1 5.5-.4Z" />
                    </g>
                  </svg>
                </div>
                <h1 className="text-xl lg:text-4xl font-stretch-extra-expanded mb-5 lg:pr-11 ">
                  Hey there, I&apos;m <span className="font-black">Tyler Rilling</span>, a Python and React web developer, UX designer, and{` `}
                  <Link className="underline hover-shadow" href="/consulting/">
                    independent consultant
                  </Link>
                  , living in Seattle, Washington. I&apos;m also{` `}
                  <Link className="underline hover-shadow" href="/boredable/">
                    building
                  </Link>
                  {` `}
                  my own social media platform. Most people online simply know me as <span className="font-black">Underlost</span>, but I&apos;m probably not an{` `}
                  <Link className="underline hover-shadow" href="/writing/a-reminder-that-underlost-is-not-just-an-undertale-thing">
                    Undertale game
                  </Link>
                  {` `}
                  though. 👾
                </h1>
              </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 lx:px-0">
              <div className="grid grid-cols-12 md:gap-x-11">
                <div className="col-span-12 md:col-span-6 mb-5">
                  <div className="aspect-square z-10 relative overflow-hidden border border-DeepWoodBlue">
                    <video
                      width="1280"
                      height="1020"
                      muted
                      autoPlay
                      loop
                      playsInline
                      preload="none"
                      className=" object-cover object-center h-full absolute inset-0"
                      poster="/images/video-placeholder.jpg"
                    >
                      <source src="/video/web_reel_1.mp4" type="video/mp4" />
                      <source src="/video/web_reel_2.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6 mb-5">
                  <div className="squiggle-static s1 my-8" />
                  <p className="text-secondary font-stretch-extra-expanded text-2xl mb-11">
                    Need help building your website? Or maybe you&apos;re looking how to build the next great web app. Wheather it&apos;s just planning or you need help fixing bugs, I&apos;m here to
                    help!
                  </p>
                  <Link className="btn btn-lg" href="/consulting/">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <StatsSection />

        <section className="relative z-0">
          {cmsData.featuredPosts.slice(0, 1).map((post, i) => (
            <FeaturedPostCard key={i} settings={settings} post={post} num={i} />
          ))}
        </section>

        <PostView title="Recent Posts" className="tag-color-scheme-c" posts={cmsData.posts} settings={settings} />

        <section className="relative tag-color-scheme-i p-11">
          <div className="max-w-xl py-16 mx-auto">
            <NewsletterForm />

            <div className="mt-8 ">
              <Image src="/images/svg/catpaw.svg" alt="cat paw sketch" width={50} height={50} className=" block lg:ml-auto ml-auto -rotate-12 invert filter-none" />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let settings
  let page
  let posts
  let featuredPosts

  console.time(`Index - getStaticProps`)
  try {
    page = await getPageBySlug(`homepage`)
    settings = await getAllSettings()
    posts = await getAllPosts({ limit: 6, page: 1 })
    featuredPosts = await getAllFeatredPosts({ limit: 1 })
  } catch (error) {
    throw new Error(`Index creation failed.`)
  }

  const tags = (page && page.tags) || undefined
  const cmsData = {
    settings,
    page,
    featuredPosts,
    posts,
    bodyClass: BodyClass({ page: page || undefined, tags }),
    seoImage: await seoImage({ siteUrl: settings.processEnv.siteUrl }),
  }
  console.timeEnd(`Index - getStaticProps`)

  return {
    props: {
      cmsData,
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }),
  }
}
