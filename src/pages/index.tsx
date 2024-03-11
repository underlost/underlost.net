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
        <section className="mb-11 relative z-20">
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
                <video width="1280" height="1020" muted autoPlay loop playsInline preload="none" className=" object-cover object-center h-full absolute inset-0">
                  <source src="/video/web_reel_1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1 mb-5  relative z-10">
              <div className="bg-gray-100 aspect-square z-10 relative overflow-hidden border border-black dark:border-white">
                <video width="1280" height="1020" muted autoPlay loop playsInline preload="none" className=" object-cover object-center h-full absolute inset-0">
                  <source src="/video/web_reel_2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <div className="absolute -top-[475px] -right-[350px] -z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="809" height="1503">
              <path
                fill="#FD2D78"
                fillRule="evenodd"
                d="M734 470h8l13-1c2 2 0 5 0 6-8 1-15 4-21 2v1-8Zm0-67 28-12v2c-10 4-19 9-28 11v-1Zm74 62c-2 0-5 4-9 2-3 0-7 3-9 1l-1 2c-2-2-3 1-5 1-5-3-9 1-13 0-5 1-9 2-13 1 5 0 9-2 14-1 4-1 8-3 11-2 6-2 13-2 19-2 2-2 4-2 6-2Zm0-36-7 1c-2 1-4 4-6 1 5-4 9-4 13-5v3Zm-11 84 1 1v1h-2l1-2Zm-5-125-2 1v-1h2Zm-8 2c-2 1-5 1-7 3-6 3-10 2-16 4 7-4 16-5 23-7Zm-9-166c-1-1 1-3 2-5l1 1c-2 6-6 11-10 16l-2-1c1-6 5-8 9-11Zm-31 210v-1h2v1h-2Zm-15-29 6-2v1l-6 1ZM215 512c2 0 3-2 4-4h5c2 0 4 1 7-2 1 2 3 2 5 2 2 1 4 1 6 4l12 3h2l6 1c4-3 10 3 14 2h3l1-1h5c11-1 23-3 31-17 5-2 5-6 5-11 0-3 0-6 2-7 3-2 10-2 13-9 1-5-1-14 5-16 3 0 5-3 6-6-1-6 3-12 4-18l1-4v-6a108 108 0 0 1 5-16l-4-21c1-2 0-6 2-7 3 1 4 2 4 6-1 5 0 10 1 14v15l2 2c4-2 4-7 4-11v-8c1-6-1-13 1-18l2-1c0-9 1-18-1-25 1-4 0-7 3-9 4 6-3 15-1 23v7c0 3 0 7 2 10-4 6-3 15-2 22l4 5v-3l1-2c-2-4 1-9 0-12 1 3 2 7 1 11-2 1-2 3-1 4v2l1-4v11l3-4c2 0 4 1 6-2-1-4 5-9 4-15 2-2 2-5 2-8v-1l1-7c2-1 2 2 2 3v10c-1 5-2 9 1 13 3-2 1-8 3-11v-2c-1-2 1-2 1-4l3-21c3-1 0-4 2-6h1c-1 13-4 22-6 32v5l-1 8c-2 3-1 8-2 11l2 1c1-1 2-1 2-3s3-4 2-8l2-3v-1c0-2-1-4 2-3l2 2c7-4 8-15 9-24l5-22v-5c0-7 0-11 2-19-2-2-1-3-1-5h1l1-4c3 2-2 5 1 7-1 3-3 6-2 10l-1 13v7l-4 20-1 1c1 1-1 3-1 4v8c1 1 2 0 3-1l2-6v-3l5-23c4-8 3-17 9-23 2-5 4-8 4-15l5-24v-14l1-3 1-1v-1l2-3c5-1 3 3 6 5 0 8-6 14-9 21v8l-1 12-2 5c0 2 0 3-2 4l1 1-2 2 1 1c-3 4-4 10-5 15l-1 1v3l-1 10c0 4 1 8 4 9l4-10 1-1 2-8v-5l8-19c2-3 1-10 4-14 0-7 3-13 5-19l1-1c3-7 5-13 4-20l2-4h1v-1 1h1c1 3 0 6-1 9v2l-3 7-5 23v2l-3 12c-1 3-1 9-4 13 3 6-7 12 0 17v4c0 2 0 3 2 5l1 2-1 1 1 1v10c0 2 0 3 2 3 2-3 5-8 4-12 1-4 0-8 2-12 3-11 0-20 3-29v-2h1l-1-2v-8l2-5c1 0 3 1 3 3l-4 25v8l-3 21c-1 5 1 13-2 18 1 5-4 9 0 15l1-3c0-1 0-3 2-2l-1 3c-1 1-2 2 0 4l2-1v-1l2-6v-10l1 8h1c2-4-1-8 0-11 1 0 2 1 2 3l1 3c3-11-3-20 3-31v-3c2-2 2-8 4-10-1-1-2-2-1-3l1-2v-2l1-2 3-31v-10l1-12c0-10 5-19 7-28l4-26v-3l2-9v-5l1-5c2-3 0-4-1-7v-10l3-3c2-2 4-4 6-2 3 3 2 9 1 12-3 6-8 12-8 20l-1 8v6c-2 11-3 23-6 34l-2 11v2a630 630 0 0 0-5 64c2 7-2 15 1 23l-1 1v-4l-1 1v4c-2 5-1 10 0 16v4l1 3a104 104 0 0 1 2 8v-3l1-1-1-2v-11l-1-9v-4c2 7 1 17 3 24v10c1 4 1 11 5 14 1 1 2 0 2-1v-20h1v-31h1v54c0 1 1 2 3 2l7-27c2-6 1-13 3-18l1-2v1l-5 30c-1 4-3 6-1 10l4 2c1 6-4 13 0 15l1-2v-4l1-4-1-1 5-14c0-6 3-11 4-16l2-9c1 5-2 8-2 12l-5 26-2 12 4 3h2c2 0 4 0 5-3 0 4 1 6 3 8v1c2 3 4 5 2 10 1 6 4 9 6 15h1v1l4 2h1c4 2 7 3 11 0 2 1 3 4 3 7l3 1h4c6 1 13 2 17 11l2 1v1l2-2-1-2c3-2 6-1 10 0s8 1 11-3c4 2 2-6 6-3l5-2v-1c7-4 13-7 19-6 6-6 13-1 19-2 2 0 2 2 2 4v1c0 2 0 4 2 3h8c7-7 17-4 24-5 7-5 15 3 22 1 8 1 14-3 21-5v8l-1 1c-2-2-3 1-5 0-14-4-27 8-41 4l-1 1-1 1c1 5 7-2 6 3l-4 1h-1c-2 1-4 2-7 0 1-2-1-5-3-4l-2 1h-1l-4-1-1-2c-1-2-2-4-5-3h-4l-4 2-1 1h-1c-3 2-6 4-10 1-2 2-4 1-6 1h-1l-6 1c-5 0-8 3-12 7l-7 5c-4 3-5 6-7 9l7 2c-4 1-10 0-15 2h-8c-6-1-11-1-17 2 0 2-3 2-2 5s4 0 5 1c2-2 4 0 7 0 1-2 2-2 2-1h1c0 1 1 1 2-1h10c2 3 4-3 6 1h-7l-2 1h-1l-5 1h-16l-2 1-2 2c2 3 4 2 6 1 3-2 4-3 6 0l-3 1-7 1h-4l-3 2v1l-3 3v3c-2 1-6 2-8 6-1 2-3 0-5 1-2 3 2 8 3 10 4 1 10 4 13 7-4 0-8-6-11-4-2-3-4 1-6 2-1 5 3 9 5 12 4 4 8 4 12 6v1c3 1 4 3 6 7l-1 1c-1-2-4-2-6-3l-1-3-14-9-7-3-1-1v-1c-4-1-7 1-10-1-2 1-5 4-3 7 1 4 2 6 5 9 4 5 7 13 9 19v15c1 5 4 9 1 13l-2-2v-3l-3-9-4-8-1-1-4-8-5-8-2 1c-1 1-3 2-2 4 3 5 6 11 7 17h-1l-1-2h-1l-1-4v-1c-1-2-2-5-4-6-2 1 0 3 0 5 4 5-1 8-1 14v3c-3 1-8-1-4 5l4 9v4l-1-1v-3c-4-8-5-16-11-22h-2v2l11 37c-5-11-8-23-12-34v-4l-1-1h1v-1l-2-1 1-2c-3 1-3-4-6-3-4 1-3 5-2 8v1l1 5 1 2c0 2 0 7 2 10v2c-2 2-2-2-4-2 0-6-2-8-4-14v7l1 3c-1 8 2 17 5 24-1 4 1 8 2 11h1v1l2 5c0 3 1 5 3 7v3l1 1c3 3 5 6 5 11 2 2 2 5 2 6l3 5-1 1 4 11 4 10 4 5v5l-1 1-8-20v-1l-1-1-6-11c0-3-2-5-3-7h-1c-2-3-4-6-2-10l-1-2v-3l-11-19-2-6h-1c-4 6-13 6-17 11v2l-1 4c-2 2-3 5-4 9v1l-3 7c-5 9-10 18-12 27l-1 1v3l-1 2-2 15v7c-3 3-1 10-3 13-2 24-11 40-18 60l-2 8v2c-7 21-15 42-19 65l-5 13v4c-4 11-10 22-16 32l-7 15v6l-5 13c1 4-3 9-1 13-6 5-1 15-8 20-1 9-5 17-8 25l-1 2v6l-1 1c1 2-2 2-2 5-2 4-3 9-6 13 1 3-3 6-4 9-5 13-3 35-8 49-4 11-6 21-7 34 2 7 4 18-1 25l1 58c2 6 2 12 5 18l-1 1c2 5 0 13 0 19 9 12 12 28 22 37l2 6v1c2 4 4 9 3 14l1 3 5 11v1c2 6 4 12 9 16l5 7v2c5 4 10 6 14 6 2 6 5 10 9 13v2c4 4 9 7 12 13 3-1 3 3 4 4 3 0 5 2 8 4v1c4 6 8 14 13 16l10 14v1c6 7 11 15 14 25 4 7 11 17 8 28l-5 6h-3c-2 1-3 2-4-1-2 1-4 0-5-3v1l-6-11v-2l-5-10 1-1c-5-12-12-23-19-33v-1l-1-1-6-9c-4 0-4-8-8-7l-9-8v-2l-7-6c-5-3-8-7-13-8l-4-5v-3l-15-17-6-3v1l-6-6c-4-4-8-11-10-17 0-6-2-10 0-16 3-4-1-8 0-12l-2-5-1-1c-2-6-5-12-10-15l-6-9-2-2-1-1c-6-7-11-15-4-25 0-12-1-25-8-36l1-1c-3-7 1-15 3-24l-1-8v-1c0-4 0-8-2-11 0-21 6-41 8-61a732 732 0 0 0 6-29l1-2 1-3v-2c3-17 7-34 16-48-1-6 5-9 6-15 1-4 4-9 4-14l6-17v-5l1-3v-3l12-35c2-7 6-13 9-19v-4l4-10c2-3 4-7 4-11 5-8 7-20 12-28l4-18v-2l1-3c3-18 10-36 16-51 0-5 4-9 5-13l2-9v-2l4-15 5-22c-1-7 4-16 3-24 4-5 2-14 5-20l4-11 1-2 1-5v-5c2-9 1-20 3-28l-2-10-1-2v-3l-1-7-2-7v-1c-1-5-2-11-8-13 0 3-4 3-6 7 0 6 3 12 5 17l1 1v1l1 2-1 1c5 8 4 16 8 25-1 2-2 0-3 0-1-2 0-4-2-6h1l-5-13c-3 3-1 7 0 11l1 5c-3 2-3 0-2-3v-1l-1-3-2-17-1-2-3-8c1-1 0-2-1-3v-1l-1-1-1 1v4l-1-3v-1c0-1 0-3-2-3-2 9-2 18 2 26l2 1v5c2 7-2 14 3 18 0 2-1 2-2 3 2 3 2 7 3 11v1l3 11v7c-3 1-3-1-3-3l-1-3c2-3-1-6 0-10-1-5-4-11-4-16v-6c-2-8-2-17-5-24-2-1-3-4-5-8-1-5-3-9-7-7 0 5-4 8-6 11v2c-1 2-2 5 0 8v4l4 16-4-13v9c-3 6-1 15-3 22l-2 2-1-1c-2 4 3 5 2 10l-1 7c-1 1-3-3-3-5 0-10-2-20-6-31 2-7-3-13-2-22v-9c-1-2-1-7-4-6-2 1 2 6-1 8-4-3-1-9-4-11v-1l-1 1c-2 2-4 4-6 1 0-1 1-4-1-4l-1-1-4 26c-2 1-3-1-2-3l3-29-4-5 1-11c-1-3-3-3-5-3h-1v3l-1 1c0-4-1-5-3-7l-4-4-1-1h-1c-2 0-4 0-5-3 3-2 1-5 1-8-4 1-7 3-10-1l-4 1-1 1c-2 1-5 2-6-1 0-5 3-7 5-8l1-1 3-2c4 3 9 2 12-1 0-5-2-9-5-13-3 1-5-5-8-6-3 0-6-3-9-5-10-4-19 1-27-5-7 0-14-2-20-4h-2c-7-3-15-5-23-4h-9c-5-1-10-1-15 2-1-2-2-1-2-1h-1l-1 1c-2-2-4-7-2-10Zm473-81c0-4 3-4 4-5 2-1 3 2 4 1v-2c2 1 6 1 5 5l-1 4c-1-1-3 0-5 1h-1c-3 2-7 4-6-4Zm-38 1 10-4h13l27-8-2 2c-5-1-12 5-17 6l-1-1-9 3h-2c-2 0-3 0-4 2v-1h-8l-7 1Zm27-12 2-2c0 2-1 2-2 2Zm1-36c0 2-2 2-2 3-3-1 0-5 2-3Zm-34 57 11-2 5-1h1l8-1c1-2 3-1 3-1-1 2-4 1-6 2l-6 1-3 1h-1c-4 1-7 2-12 1Zm20-285 1-5 2 3c0 2-2 1-3 2Zm-4 269v-1l5-2-2 2h-1l-2 1Zm-11 82v-1c3 0 6-2 7 1-2 2-5 0-7 0Zm-3 0h3-3Zm-19 0 16-1 1 1h2l-1 1-1-1c-3 2-8 1-12 1-1 0-4 1-5-1Zm6 21c4 1 7 5 8 10h-4l-1-2-1 1-1-2c-1 1-3-2-4-3-1-4 2-4 3-4Zm-21-90c1-2 5-3 7-4l8-3c3-3 6-5 9-5-7 6-15 10-24 12Zm18 20c2 2 3-2 4 1-2 2-5 6-8 5-1-3 3-5 4-6Zm-26 492h1l14 43h-1a7152 7152 0 0 1-14-41h1l-1-2Zm12-441c3-2 7-1 10-2-1 2-4 1-7 2h-3Zm7-66h1-1Zm-11 2c4-2 6-2 10-2h1-3l-8 2Zm5 18 2-2 1 2h-3Zm-5-2c1-3 4-4 6-4 0 3-2 4-4 5l-2-1Zm-18-30c3-1 3-5 5-6 3 0 5 1 4 4l-2 7 3 1c2-2 1-8 4-6 1-1 4-2 3-5l5 1c0 7-7 6-7 13l-2 4h3v1c-1 3-6-3-6 2-2-2-4-4-6-4-2 3-4 4-7 4-4-5 3-10 3-16Zm18 78 3-1-3 1Zm-12-40h2-2Zm-4 459c2 1 1 2 1 2l-1-2Zm-4-54 1 1v1l-1-2Zm-4-397 2-1-2 1Zm-34 66c1-4 4 1 6 0h3l15 3-2 1-1-1-12-2-9-1Zm2 456c1 2 2 4 1 6l1 3 2 11c2 6 1 10 1 17-2-1-1-4-2-6 1-4 0-8-1-12v-1l-1-10-1-7v-1Zm-1-7 1 4c-1-1-2-3-1-4Zm-5 0c1 2 1 5 3 6l-1 2-2-8Zm-35-828v-3c5-15 12-30 16-44l2-5h-1c2-4 6-10 6-15l1-1v-3h1v3l-6 16c-1 3-1 6-3 8v1c-2 1 1 3-2 4-3 2-1 8-5 10 0 4-3 10-4 15-1 3-4 7-4 12l-1 2Zm23 941 2 9v4l-1-5c-1-2-3-6-1-8Zm1 10v5-5Zm-8-454c1 4 1 8 4 11h-1l1 2 1 2v1c-3-4-5-11-5-16Zm-24 276c1 4 3 8 2 13 3 12 4 25 6 37l1 1 1 8 2 4c0 3 0 8 2 11l7 39 1 7 4 25 2 9 1 5v3c-2-11-6-23-7-36l-11-51c0-7-2-14-3-20v-3c-3-8-2-14-4-23 1-4-2-8-2-12-1-6-3-12-2-17Zm15-298c1-1 1 0 1 2l1 2 6 16-4-7v-1l-2-5h1l-2-2 1-1-2-4Zm3 51c1 1 3 3 2 6l-2-6Zm-1-4v-2l1 2h-1Zm-4-16 1 5v1c0-2-3-3-1-6Zm-1 220c2 3 2 8 1 12 1-4-1-7-1-12Zm-4-516 2-16-2 17v-1Zm1 285 1 2v1l-1-3Zm-2-489 2-7v3l-2 4Zm0 482 1 3c0-1-2-2-1-3Zm-7 341v-2c2 7 4 14 3 22 2 4 1 10 1 15l-2-27c-2-2-1-6-2-8Zm-6-959c1-8 4-11 3-19 0-6 3-8 3-14 1 2 0 3-1 5 1 10-4 19-5 30v-2Zm3 626 2 1-1 1-1-2Zm-7-595 1-10 4-21v1l-1 8c-3 6-1 16-4 22Zm1 100 1-3v-1c2 1-1 2 1 3l-2 1Zm-1 21 2-19-2 19Zm-2 788c3 5 0 10 3 16h-1c-2-5 0-9-2-16Zm-3-736c1-17 0-33 5-51 2 18-3 34-4 51h-1Zm1 712 1 10v7c2 1 1 2 1 3h-1c-1-7-2-13-1-20Zm2 22-1-2 1 1v1Zm-4-793v-1l1-8v-1l-2 21 1-11Zm-2 446 1 3-1-3Zm-6-389c3-25 2-52 4-71l-2 1 2-7v-7c1-8-1-16 1-24l-1-2 1-2 1 1c1 7 0 14-1 21v2l-1 9 1-4v21c-2 7 1 17-2 24l1 1v-1l1 1 1-4h1l-2 25v14l-1 6c0 4 2 12-2 16-3-6 0-12-2-20Zm5 373v2l1 3-1-7v2Zm-5-343 1-2v2h-1Zm-3 36v-7h1c1 3-1 5-1 7Zm-3 530 2 9c0 5 0 10 2 14l-1 3c-2-3 0-7-1-10 0-5-3-11-2-16Zm-4-644v-2l2 1-2 1Zm1 2v5c-1-1-2-4 0-5Zm-5 490v-1c2 9 4 15 4 25-3-3 1-6-2-9l-2-15Zm1-296 2 2-1 1c-1 0-2-2-1-3Zm-1-275 1-3 1 1-2 2Zm1 260v9-9Zm-1 304v-2l1 3-1-1Zm-6-478-1 3 1-3Zm-20-1 1-7c1 2 0 6-1 7Zm-7 1196 1-1h1l1 4h-1c-1 0-2 0-2-3Zm-4-783 1-3 1 2-1 3-1-2Zm-1 74 2 6-1-1v-1l-1-4Zm-3-10c1 2 3 5 3 8-2-2-2-5-3-8Zm-4-42 1 3h-1v-3Zm-2-6v-4h1v3l1 4h-2v-3Zm-7-483c2-10 4-27 4-38l1-1-1 22-1 2-2 17-1-2ZM408 9V7l1 1-1 1Zm-7 386c2 0 1-4 3-3l3 1c1 5-2 7-5 7l-1-5Zm-7 310v-3c3 2 1 4 2 7 2 5 2 11 3 17v15l2 10-1 1c2 5 1 10 2 15l-1 1c-2-5 0-9-2-15l-1-10v-5l-2-19v-6l-1-3c-3-2 2-3-1-5Zm-39 0 1-2h1v2h-2Zm-1-33 1-6v-1l-1 7Zm-7 95 5-35v-9l3-15-2 24v9l-4 27-2-1Zm-24-187c1-2 4-3 6-4 2 1 0 2 0 3l-6 1Zm-38-91c2-2 3-2 5-1h1l4-1 2 1-3 2-2 1h-3v1c-2 1-4 2-4-3Zm-178-41c0-3 2-1 3-3l2 2h1c1 0 2-1 2 2l42 4 1 1h1l1 2c-7 1-14 0-21-2h-2c-5-2-11-3-17-3l-13-3ZM0 478l1-9c4 1 11 0 13 3l4 1h1c3 0 6 0 8 6-7 5-20 1-27-1Zm18-193 4-1 1 8-2 1h-1l-7 2c0-5 2-8 5-10Z"
              />
            </svg>
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
          <h3 className="text-2xl lg:text-4xl font-black mb-5">
            Some of the clients <br /> I&apos;ve worked with:
          </h3>
          <ClientSlider />
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
