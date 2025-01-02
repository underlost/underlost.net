/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { Layout } from '../Layout'
import { SEO } from '../meta/seo'
import { GhostPostOrPage, GhostPostsOrPages, GhostSettings } from '../../lib/ghost'
import { ISeoImage } from '../meta/seoImage'
import { PreviewPosts } from '../PreviewPosts'
import { AsideCard } from '../AsideCard'

/**
 * Single aside (/notes/:slug)
 *
 * This file renders a single aside and loads all the content.
 *
 */

interface PostProps {
  cmsData: {
    post: GhostPostOrPage
    settings: GhostSettings
    seoImage: ISeoImage
    bodyClass: string
    previewPosts?: GhostPostsOrPages
  }
}

export const NoteLayout = ({ cmsData }: PostProps) => {
  const { post, settings, seoImage, bodyClass, previewPosts } = cmsData
  const { meta_title, meta_description } = post
  const title = meta_title || `${post.title} - ${settings.title}`
  const htmlAst = post.htmlAst
  if (htmlAst === undefined) throw Error(`AsideLayout.tsx: htmlAst must be defined.`)

  return (
    <>
      <SEO {...{ settings, title, meta_title, meta_description, seoImage }} />
      <Layout isHome={false} settings={settings} bodyClass={bodyClass}>
        <section className="gh-canvas mb-48">
          <div className="stack">
            <div className="mb-4 flex">
              <Link className="inline-flex justify-center items-center gap-1 bg-white/0 text-black dark:text-white ring-1 ring-slate-300 hover:bg-white/20 hover:ring-slate-400 hover:text-slate-700 whitespace-nowrap text-sm font-medium w-9 h-9 px-2 py-2 rounded-full transition-all ease-in-out" href="/notes/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"></path>
                </svg>
              </Link>
            </div>
            <AsideCard settings={settings} post={post} num={0} />
          </div>
        </section>

        <PreviewPosts {...{ settings, primaryTag: post.primary_tag, posts: previewPosts }} />
      </Layout>
    </>
  )
}
