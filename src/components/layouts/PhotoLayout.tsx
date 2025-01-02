/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { Layout } from '../Layout'
import { RenderContent } from '../RenderContent'
import { PostClass } from '../helpers/PostClass'
import { SEO } from '../meta/seo'

import { GhostPostOrPage, GhostPostsOrPages, GhostSettings } from '../../lib/ghost'
import { ISeoImage } from '../meta/seoImage'
import { PageHeader } from '../PageHeader'

/**
 * Single page (/:slug)
 *
 * This file renders a single page and loads all the content.
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

export const PhotoLayout = ({ cmsData }: PostProps) => {
  const { post, settings, seoImage, bodyClass } = cmsData
  const { meta_title, meta_description } = post
  const title = meta_title || `${post.title} - ${settings.title}`
  const { nextImages } = settings.processEnv
  const featImg = post.featureImage
  const postClass = PostClass({ tags: post.tags, isPage: post && true, isImage: !!featImg })
  const htmlAst = post.htmlAst
  if (htmlAst === undefined) throw Error(`Page.tsx: htmlAst must be defined.`)

  return (
    <>
      <SEO {...{ settings, title, meta_title, meta_description, seoImage }} />
      <Layout isHome={false} settings={settings} bodyClass={bodyClass}>
        <div className="container inner mx-auto">
          <div className="py-16 px-16">
            <article className={`post-full ${postClass}`}>
              <PageHeader title={post.title} size="small" />
              {featImg &&
                (nextImages.feature && featImg.dimensions ? (
                  <figure className="container mx-auto text-center mb-8" style={{ display: `inherit` }}>
                    <Image
                      className="mx-auto"
                      src={featImg.url}
                      alt={post.feature_image_alt || post.title || ``}
                      quality={nextImages.quality}
                      sizes={`(max-width: 350px) 350px, (max-width: 530px) 530px, (max-width: 710px) 710px, (max-width: 1170px) 1170px, (max-width: 2110px) 2110px, 2000px`}
                      {...featImg.dimensions}
                    />
                    {featImg && post.feature_image_caption && <figcaption className="max-w-lg mx-auto text-center pt-4" dangerouslySetInnerHTML={{ __html: post.feature_image_caption }} />}
                  </figure>
                ) : (
                  post.feature_image && (
                    <figure className="post-full-image mb-8">
                      <img src={post.feature_image} alt={post.feature_image_alt || post.title || ``} />
                      {featImg && post.feature_image_caption && <figcaption className="max-w-lg mx-auto text-center pt-4" dangerouslySetInnerHTML={{ __html: post.feature_image_caption }} />}
                    </figure>
                  )
                ))}

              <section className="post-full-content gh-canvas">
                <div className="post-content load-external-scripts gh-content text-lg">
                  <RenderContent htmlAst={htmlAst} />
                </div>
              </section>
            </article>
          </div>
        </div>
      </Layout>
    </>
  )
}
