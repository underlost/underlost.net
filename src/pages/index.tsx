import { Layout } from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { SEO } from '../components/meta/seo'
import { seoImage } from '../components/meta/seoImage'
import { processEnv } from '../lib/processEnv'
import { getAllSettings, GhostSettings, getPageBySlug, GhostPostOrPage } from '../lib/ghost'
import ClientSlider from '@/components/ClientSlider'

/**
 *
 * Renders the Homepage.
 *
 */

interface CmsData {
  settings: GhostSettings
  page: GhostPostOrPage
  seoImage: any
}

interface IndexProps {
  cmsData: CmsData
}

export default function Home({ cmsData }: IndexProps) {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>

  const { settings, seoImage } = cmsData
  const page = cmsData.page
  const { meta_title, meta_description } = page
  const title = meta_title || `${page.title} - ${settings.title}`
  const description =  meta_description || settings.description

  return (
    <Layout isHome={true} settings={settings} bodyClass="" className="homepage overflow-x-hidden">
      <SEO {...{ settings, seoImage, title, description }} />
      <div className="container mx-auto mt-11 px-8">
        <section className="mb-11 relative z-20 stacked-sm">
          <div className="flex">
            <span className="block rounded-full w-28 h-28 mb-5 border p-2">
              <Image src="/images/profile_400x400.jpg" alt="Tyler Rilling" width={400} height={400} className="rounded-full w-full h-full" />
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="174" height="107" className="mt-auto">
              <g fill="#020202" className="dark:fill-white">
                <path d="m124 95-.7-.2-.8-.3-1.2-.6-1.9-.7-3.7-1.2-5.2-1.8h-.4l-.2-.1-7.2-2.5-5-1.9A75 75 0 0 1 94 84l-2.6-1.2c.3-.8.8-1.3 1-2 3.5 1.5 6.9 3 10.3 4.2l12.9 4.6 5.6 1.9c1.1.3 2.4.4 3.5.8l.7.4.3.4v.7c-.3.6-1 1.5-1.6 1.2zM75.7 72.7l-.3-.3-.8-.7-1.7-1.8-.4-.4-1.8-2a41.2 41.2 0 0 1-8-14.5c-.7-2.7-1.2-5.6-1.3-8.4a28.2 28.2 0 0 1 7-19 20.7 20.7 0 0 1 6.6-4.8l1.2-.4a14.5 14.5 0 0 1 12.9 1.5l1 .7.8.7.9.7a23 23 0 0 1 3.4 4.3l.9 1.6.8 1.9.7 2 .3 1.7a20 20 0 0 1-.2 9.2 24 24 0 0 1-2.2 5.6L93.9 53a30 30 0 0 1-11.2 9.5c-1.9 1-3.7 1.7-5.7 2.4-3 1-6 1.5-9 1.5A69 69 0 0 1 44.8 62 163.4 163.4 0 0 1 29 55.3l-2.6-1.2-.6-.3-1.5-.7-3.6-1.7c-.5-.3-1.5-1.2-1.5-1.7l.3-.6c.1-.6 1.3-1 2-.6l2 1.2L26 51l.8.6.4.3.2.1.6.3c2.6 1.3 5.2 2.7 8.2 3.9 4.3 1.7 8.7 3.7 13.3 5A58 58 0 0 0 64.9 64a33.8 33.8 0 0 0 23.7-8.3 24 24 0 0 0 5.8-8c4-8.4.7-19.3-6.7-24a12.7 12.7 0 0 0-12.4-.4c-4 2-7.3 5.5-9.1 9.7a25.5 25.5 0 0 0-2.4 13.5A32.5 32.5 0 0 0 69.5 62l.6.7v.2c1.1 1.4 2.3 3 3.6 4.4a44 44 0 0 0 8.3 7.2c0 .9.2 2.2-.3 2.7a32.7 32.7 0 0 1-4.2-3.1l-1.8-1.5z" />
                <path d="M121.2 93.6a7 7 0 0 0-1-.3l-1.5-.4-6.7-2.4c-7-2.5-14-4.9-20.7-8.1L86 79.7a46 46 0 0 1-13.7-10.9 40.5 40.5 0 0 1-8.4-13l-1-3.2c-.4-1-.6-2-.8-3a27.2 27.2 0 0 1 2.1-17c0 .9.4 1.8.9 2.5-1 2.5-1.4 5.2-1.4 7.9v2a36.2 36.2 0 0 0 13.8 25.8c4 3.5 8.5 6.4 13.2 8.6 6 3 12.3 5.5 18.6 7.7l12.5 4.3c-.4.6-.7 1.4-.6 2.2zm20 6c.3-.3.5-.7.4-1 0-.7-.5-1.3-1-1.6-.8-.4-1.8-.2-2.7-.4l-3.4-1.3-2.2-.8a15 15 0 0 0-3-1l-.8-.3c-.8 0-1.5 1.4-1.2 2 .3.5 1.2.6 1.7.8l2 .6 5.1 1.5c.7.2 1.4.6 2 .9l2 .7c.4 0 .7 0 1-.2zm11 2.8.2-.7-.1-.7c-.3-.5-1-.8-1.5-.8a8 8 0 0 1-2.2-.6c-.8-.4-1.6-.6-2.4-.7-.4 0-.7 0-1 .3-.5.3-.8.8-.3 1.3.6.6 1.3.9 2.1 1 1 .2 2 1 3 1.5.3.1.7.2 1 .1a2 2 0 0 0 1.2-.7zm4.8 2.4-.1-.6c-.1-.5-.4-1-1-1.1-.4-.2-1-.1-1.3.2-.5.4-1 1.5-.5 2l.9.6c.8.3 1.5.3 2-1zM18.4 42.4c1 0 2 .2 3 .4 1 0 .3.9 0 1.9a97.4 97.4 0 0 1-5.2 8.8l-.3.4-.2.3-.2.1c-.1.1-.2 0-.3-.1l-.3-.3-.6-.9a56.6 56.6 0 0 1-4.2-7.1l-.3-1.2-.6-1.5h-.1a1 1 0 0 1-.7-.4c-.1-.1-.2-.2-.4 0a2 2 0 0 0-.3 1c0 1 .4 2 .9 3a43.6 43.6 0 0 0 5.2 8l.1.1.2.3.5.4c.3.2.7.3 1 .3l.9-.5.3-.4.2-.2.3-.5.7-.8 1.2-1.8a65 65 0 0 0 3.8-7.5l.2-.8c.1-.3.1-.6 0-.8 0-.3-.2-.5-.4-.7l-.8-.3-.7-.2h-.5l-1-.2a38.3 38.3 0 0 0-9.9.2c-.4 0-.8.3-1.2.6-.3.2-.4.6-.2.7h1.2l1.4.2c.6 0 1.2 0 1.7-.2a20.6 20.6 0 0 1 5.5-.4Z" />
              </g>
            </svg>
          </div>

          <h1 className="text-xl lg:text-3xl text-wide mb-5 lg:pr-11">
            Hey there, I&apos;m <span className="font-black">Tyler Rilling</span>, a Python and React web developer, UX designer, and{` `}
            <Link className="underline" href="/consulting/">
              independent consultant
            </Link>
            , living in Seattle, Washington. I&apos;m also{` `}
            <Link className="underline" href="/boredable/">
              building
            </Link>{` `}
            my own social media platform. Most people online simply know me as <span className="font-black">Underlost</span>, but I&apos;m probably not an{` `}
            <Link className="underline" href="/writing/a-reminder-that-underlost-is-not-just-an-undertale-thing">
              Undertale game
            </Link>
            {` `}
            though. 👾
          </h1>
        </section>

        <section className="mb-11 relative z-0">
          <div className="grid grid-cols-2 gap-x-8">
            <div className="col-span-2 lg:col-span-1 mb-5 relative z-10">
              <div className="bg-gray-100 aspect-square z-10 relative overflow-hidden border border-black dark:border-white">
                <video width="1280" height="1020" muted autoPlay loop playsInline preload="none" className=" object-cover object-center h-full absolute inset-0" poster="/images/video-placeholder.jpg">
                  <source src="/video/web_reel_1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1 mb-5  relative z-10">
              <div className="bg-gray-100 aspect-square z-10 relative overflow-hidden border border-black dark:border-white">
                <video width="1280" height="1020" muted autoPlay loop playsInline preload="none" className=" object-cover object-center h-full absolute inset-0" poster="/images/video-placeholder.jpg">
                  <source src="/video/web_reel_2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <div className="absolute -top-[475px] -right-[350px] -z-10">
            <Image src="/images/svg/splatter.svg" alt="Paint splatter effect" width={809} height={1503} />
          </div>
        </section>

        <section className="mb-20 relative z-10">
          <p className="text-3xl lg:text-8xl font-black mb-11">
            I build websites using PHP, CSS, HTML, WordPress, Ghost, Shopify, Webflow, Squarespace, and Markdown, web apps written in React, Next.js, Gatsby, Astro, Python, and
            Node.js, sometimes with a splash of PostgreSQL, MySQL, and Redis.{` `}
            <Link href="/contact/" className="text-wide font-black italic text-violet-blue dark:text-aqua whitespace-nowrap">
              Let&apos;s talk!
            </Link>
          </p>

          <div className="flex max-w-md mr-auto lg:ml-24">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="80" className="flex-none mr-3">
              <g fill="#020202" className="dark:fill-white">
                <path d="M54.4 79.5c1.6-.4 2.2-1 .9-1.3-3.2-.7-6.4-1-9.7-1.2-5.2-.2-10.7 0-16.1-.6A131.6 131.6 0 0 1 15.6 74c-.7-.2-1.3-.7-1.6-1.4a8 8 0 0 1-.3-2.8l-.1-3.3-.5-17c0-5.1-.3-10.3-.4-15.3l-.2-7c0-2.3 0-4.4-.2-6.7-.3-6-1.8-7-2.2-3.3-.3 2.9 0 9.4.2 13.1l.5 15.8.6 19.1.2 4.8c0 .9 0 1.8.2 2.6.3 1 .8 2 1.6 2.6 1.5 1.1 3 1.3 4.4 1.5l4 .7A171.6 171.6 0 0 0 49 80c1.8 0 3.6-.1 5.4-.5Z" />
                <path d="m8.8 6.1 1.9-2.5c.5-.7.9.2 1.6 1a97.4 97.4 0 0 1 5.2 8.8l.2.5.2.3v.2c0 .2-.2.2-.3.2l-.4.1-1 .1a56.6 56.6 0 0 1-8.3.2l-1.2-.2c-.6 0-1-.2-1.6-.3l-.1.1a1 1 0 0 1-.7.5c-.1 0-.2 0-.2.3.2.4.5.6.8.8 1 .4 2 .6 3 .6a43.6 43.6 0 0 0 9.6-.6h.2l.3-.1.6-.2.7-.8v-1l-.2-.5-.1-.3-.3-.5a16.6 16.6 0 0 0-1.4-2.9 65 65 0 0 0-4.7-7l-.5-.5a2 2 0 0 0-.7-.5c-.3 0-.6 0-.8.2l-.7.5-.5.5-.3.4-.7.9A38.2 38.2 0 0 0 3.8 13v1.3c0 .4.3.7.5.6l.2-.3.4-.7.9-1.2c.2-.5.5-1 .6-1.6a20.6 20.6 0 0 1 2.4-5Z" />
              </g>
            </svg>
            <p className="font-script mt-11">
              I also help launch those websites to Heroku, AWS, Vercel, Netlify and just about anywhere else on the internet you can think of, including your own private cloud.
            </p>
          </div>
        </section>
      </div>

      <section className=" text-black dark:text-white pt-16 pb-16 lg:pb-32">
        <div className="container mx-auto px-8 pb-24">
          <div className="stacked-sm max-w-xl">
            <h3 className="text-2xl lg:text-4xl font-black mb-5">
              Some of the clients <br /> I&apos;ve worked with:
            </h3>
            <ClientSlider />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let settings
  let page
  console.time(`Index - getStaticProps`)
  try {
    page = await getPageBySlug(`homepage`)
    settings = await getAllSettings()
  } catch (error) {
    throw new Error(`Index creation failed.`)
  }
  const cmsData = {
    settings,
    page,
    seoImage: await seoImage({ siteUrl: settings.processEnv.siteUrl }),
  }
  console.timeEnd(`Index - getStaticProps`)

  return {
    props: {
      cmsData,
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }), // re-generate at most once every revalidate second
  }
}
