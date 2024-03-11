/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { Layout } from '../Layout'
import { RenderContent } from '../RenderContent'
import { PostClass } from '../helpers/PostClass'
import { SEO } from '../meta/seo'

import { GhostPostOrPage, GhostSettings } from '../../lib/ghost'
import { ISeoImage } from '../meta/seoImage'

import { PageHeader } from '../PageHeader'

/**
 * Single page (/:slug)
 *
 * This file renders a single page and loads all the content.
 *
 */

interface PageProps {
  cmsData: {
    page: GhostPostOrPage
    settings: GhostSettings
    seoImage: ISeoImage
    bodyClass: string
  }
}

export const PageLayout = ({ cmsData }: PageProps) => {
  const { page, settings, seoImage, bodyClass } = cmsData
  const { meta_title, meta_description } = page
  const { nextImages } = settings.processEnv
  const title = meta_title || `${page.title} - ${settings.title}`
  const featImg = page.featureImage
  const postClass = PostClass({ tags: page.tags, isPage: page && true, isImage: !!featImg })
  const htmlAst = page.htmlAst
  if (htmlAst === undefined) throw Error(`Page.tsx: htmlAst must be defined.`)

  return (
    <>
      <SEO {...{ settings, title, meta_title, meta_description, seoImage }} />
      <Layout isHome={false} settings={settings} bodyClass={bodyClass}>
        <div className="inner gh-canvas mb-48">
          <article className={`post-full ${postClass}`}>
            <PageHeader title={page.title} />

            {featImg &&
              (nextImages.feature && featImg.dimensions ? (
                <figure className="post-full-image" style={{ display: `inherit` }}>
                  <Image
                    src={featImg.url}
                    alt={page.title || ``}
                    quality={nextImages.quality}
                    sizes={`
                              (max-width: 350px) 350px,
                              (max-width: 530px) 530px,
                              (max-width: 710px) 710px,
                              (max-width: 1170px) 1170px,
                              (max-width: 2110px) 2110px, 2000px
                            `}
                    {...featImg.dimensions}
                  />
                </figure>
              ) : (
                page.feature_image && (
                  <figure className="post-full-image">
                    <img src={page.feature_image} alt={page.title} />
                  </figure>
                )
              ))}

            <section className="post-full-content post-content load-external-scripts gh-content text-lg">
              <RenderContent htmlAst={htmlAst} />
            </section>
          </article>
        </div>
      </Layout>
    </>
  )
}
