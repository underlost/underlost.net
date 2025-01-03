/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { Layout } from '../Layout'
import { RenderContent } from '../RenderContent'
import { PostClass } from '../helpers/PostClass'
import { SEO } from '../meta/seo'

import { GhostPostOrPage, GhostSettings } from '../../lib/ghost'
import { ISeoImage } from '../meta/seoImage'

import { Portfolio } from '../../lib/interfaces'
import { PostHeader } from '../PostHeader'

/**
 * Single page (/:slug)
 *
 * This file renders a single page and loads all the content.
 *
 */

interface PortfolioPageProps {
  cmsData: {
    page: GhostPostOrPage
    settings: GhostSettings
    seoImage: ISeoImage
    bodyClass: string
    extraPortfolioData: Portfolio
  }
}

export const PortfolioLayout = ({ cmsData }: PortfolioPageProps) => {
  const { page, settings, seoImage, bodyClass, extraPortfolioData } = cmsData
  const { meta_title, meta_description } = page
  const title = meta_title || `${page.title} - ${settings.title}`
  const { nextImages } = settings.processEnv
  const featImg = page.featureImage
  const postClass = PostClass({ tags: page.tags, isPage: page && true, isImage: !!featImg })
  const htmlAst = page.htmlAst
  if (htmlAst === undefined) throw Error(`Page.tsx: htmlAst must be defined.`)

  return (
    <>
      <SEO {...{ settings, title, meta_title, meta_description, seoImage }} />
      <Layout isHome={false} settings={settings} bodyClass={bodyClass}>
        <div className="container">
          <article className={`post-full ${postClass}`}>
            
            <PostHeader title={page.title} excerpt={page.excerpt} primary_tag={page.primary_tag} />

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

            {/* The main page content */}
            <section className="post-full-content post-content load-external-scripts text-lg mt-11 grid grid-cols-12 lg:gap-x-11 relative">
              <div className="col-span-12 lg:col-span-8 order-2 lg:order-1">
                <div className="stack">
                  <div className="gh-content gh-canvas">
                    <RenderContent htmlAst={htmlAst} />
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4 order-1 lg:order-2 relative">
                <div className="lg:p-8 pb-0 text-sm lg:sticky lg:top-11">

                  {extraPortfolioData && extraPortfolioData.role && (
                    <div className="pb-8">
                      <h2 className="subtitle">Project Role:</h2>
                      <p>{extraPortfolioData.role}</p>
                    </div>
                  )}

                  {extraPortfolioData && extraPortfolioData.timeline && (
                    <div className="pb-8">
                      <h2 className="subtitle">Timeline</h2>
                      <p>{extraPortfolioData.timeline}</p>
                    </div>
                  )}

                  {extraPortfolioData && extraPortfolioData.tools_used && (
                    <div className="pb-8">
                      <h2 className="subtitle">Software & Services Used</h2>
                      <ul className="divide-y">
                        {extraPortfolioData.tools_used.map((tool, i) => (
                          <li className="py-1" key={i}>{tool}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {extraPortfolioData && extraPortfolioData.frameworks_used && (
                    <div className="pb-8">
                      <h2 className="subtitle">Frameworks & Languages Used</h2>
                      <ul className="divide-y">
                        {extraPortfolioData.frameworks_used.map((framework, i) => (
                          <li className="py-1" key={i}>{framework}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </article>
        </div>
      </Layout>
    </>
  )
}
