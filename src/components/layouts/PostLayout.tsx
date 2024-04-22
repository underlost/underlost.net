/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import { Layout } from '@/components/Layout'
import { RenderContent } from '@/components/RenderContent'
import { PostClass } from '@/components/helpers/PostClass'
import { SEO } from '@/components/meta/seo'
import { GhostPostOrPage, GhostPostsOrPages, GhostSettings } from '@/lib/ghost'
import { ISeoImage } from '@/components/meta/seoImage'
import { PreviewPosts } from '@/components/PreviewPosts'
import { PostHeader } from '@/components/PostHeader'

/**
 * Meant for single post (/writing/:slug)
 *
 * This file renders a single post layout and loads all the content.
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

export const PostLayout = ({ cmsData }: PostProps) => {
  const { post, settings, seoImage, bodyClass, previewPosts } = cmsData
  const { meta_title, meta_description } = post
  const title = meta_title || `${post.title} - ${settings.title}`
  const { nextImages } = settings.processEnv
  const featImg = post.featureImage
  const postClass = PostClass({ tags: post.tags, isPage: post && true, isImage: !!featImg })
  const htmlAst = post.htmlAst
  if (htmlAst === undefined) throw Error(`PostLayout.tsx: htmlAst must be defined.`)
  const isLinked = post.tags?.some((tag) => (tag.name === `#linked` || tag.name === `#twitter`))

  return (
    <>
      <SEO {...{ settings, title, meta_title, meta_description, seoImage }} />
      <Layout isHome={false} settings={settings} bodyClass={bodyClass}>
        <div className="inner">
          <article className={`post-full ${postClass}`}>

            {isLinked ? (
              <div className="gh-canvas">
                <h1 className="text-wide text-2xl mb-5">{post.title}</h1>
              </div>
            ) : (
              <PostHeader title={post.title} excerpt={post.excerpt} primary_tag={post.primary_tag} published_at={post.published_at} updated_at={post.updated_at} />
            )}
            

            {featImg &&
              (nextImages.feature && featImg.dimensions ? (
                <figure className="post-full-image container mx-auto mb-11" style={{ display: `inherit` }}>
                  <Image
                    src={featImg.url}
                    alt={post.feature_image_alt || post.title || ``}
                    quality={nextImages.quality}
                    className="max-h-[600px] object-contain"
                    sizes={`
                              (max-width: 350px) 350px,
                              (max-width: 530px) 530px,
                              (max-width: 710px) 710px,
                              (max-width: 1170px) 1170px,
                              (max-width: 2110px) 2110px, 2000px
                            `}
                    {...featImg.dimensions}
                  />
                  {featImg && post.feature_image_caption && <figcaption className="max-w-lg mx-auto text-center pt-4 text-sm italic" dangerouslySetInnerHTML={{ __html: post.feature_image_caption }} />}
                </figure>
              ) : (
                post.feature_image && (
                  <figure className="post-full-image">
                    <img src={post.feature_image} alt={post.feature_image_alt || post.title || ``} />
                    {featImg && post.feature_image_caption && <figcaption className="max-w-lg mx-auto text-center pt-4 text-sm italic" dangerouslySetInnerHTML={{ __html: post.feature_image_caption }} />}
                  </figure>
                )
              ))}

            <section className="post-full-content mb-11">
              <div className="post-content load-external-scripts gh-content text-lg gh-canvas">
                <RenderContent htmlAst={htmlAst} />
              </div>
            </section>

            <section className="gh-canvas">
              <h3 className="uppercase font-mono mb-3">Tags</h3>
              <ul className="flex">
                {post.tags?.filter((tag) => tag.visibility === `public`).map((tag, i) => (
                  <li key={i} className="mr-1.5 mb-1.5">
                    <Link className="border uppercase px-2.5 py-1.5 text-sm text-wide" href={`/tag/${tag.slug}/`}>{tag.name}</Link>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>

        <PreviewPosts {...{ settings, primaryTag: post.primary_tag, posts: previewPosts }} />

      </Layout>
    </>
  )
}
