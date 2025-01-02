/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { Layout } from '../Layout'
import { SEO } from '../meta/seo'
import { GhostPostOrPage, GhostPostsOrPages, GhostSettings } from '../../lib/ghost'
import { ISeoImage } from '../meta/seoImage'
import { PreviewPosts } from '../PreviewPosts'
import { AsideCard } from '../AsideCard'
import { getLang, get } from '@/utils/use-lang'

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

export const AsideLayout = ({ cmsData }: PostProps) => {
  const { post, settings, seoImage, bodyClass, previewPosts } = cmsData
  const { meta_title, meta_description } = post
  const title = meta_title || `${post.title} - ${settings.title}`
  const htmlAst = post.htmlAst
  if (htmlAst === undefined) throw Error(`AsideLayout.tsx: htmlAst must be defined.`)

  return (
    <>
      <SEO {...{ settings, title, meta_title, meta_description, seoImage }} />
      <Layout isHome={false} settings={settings} bodyClass={`tag-color-scheme-c ${bodyClass}`}  image="/images/background_duotone.jpg">
        <div className="container">
          <div className="grid grid-cols-12 py-8 tag-color-scheme-c">
            <div className="col-span-12 lg:col-span-7">
              <section className="gh-canvas">
                <AsideCard settings={settings} post={post} num={0} />
              </section>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="lg:py-16">
                <PreviewPosts {...{ settings, primaryTag: post.primary_tag, posts: previewPosts }} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
