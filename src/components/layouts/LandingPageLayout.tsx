import React, { ReactNode, useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import { Layout } from '../Layout'
import { RenderContent } from '../RenderContent'
import { PostClass } from '../helpers/PostClass'
import { SEO } from '../meta/seo'
import { FreeSignupForm } from '@/components/membership/FreeSignupForm'

import { GhostPostOrPage, GhostSettings } from '../../lib/ghost'
import { ISeoImage } from '../meta/seoImage'

import { PageHeader } from '../PageHeader'

/**
 * Single page (/:slug)
 *
 * This file renders a single page and loads all the content.
 *
 */

interface CmsData {
  settings: GhostSettings
  seoImage: any
}

interface LandingPageProps {
  children: ReactNode,
  cmsData: CmsData,
  page_title: string
}

export const LandingPageLayout = ({ children, cmsData, page_title }: LandingPageProps) => {
  const { settings, seoImage } = cmsData
  const title = page_title || `${settings.title}`
  return (
    <>
      <SEO {...{ settings, title, seoImage }} />
      <Layout isHome={false} settings={settings} bodyClass="tag-color-scheme-g landing-page" image="/images/background_duotone.jpg">
        <div className="container">
          <div className="tag-color-scheme-g container-inner">
            <div className="border-color container-border">
              <div className="py-11 lg:py-24" />
              <article className="container-content">
                <h1 className="h1-xl text-outline ">{title}</h1>
                {children}
              </article>
            </div>
          </div>

          <section className="relative tag-color-scheme-i p-11">
            <div className="max-w-xl py-16 mx-auto">
              <FreeSignupForm />
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}
