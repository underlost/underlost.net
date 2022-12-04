import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'
import Background from '../components/Background'
import NewsletterForm from '../components/NewsletterForm'

/**
 * Single for Portfolio (/:slug)
 *
 * This file renders a single page and loads all the content.
 *
 */
const Portfolio = ({ data, location }) => {
  const page = data.ghostPage
  const frontmatter = data.markdownRemark.frontmatter

  let portfolioTools
  let portfolioFrameworks

  if (frontmatter.tools_used !== null) {
    portfolioTools = (
      <div className="project-software project-details-block mb-5 px-8 lg:px-24 lg:py-8">
        <h4 className="subtitle">Software Used</h4>
        <ul className="list-inline project-details-list">
          {frontmatter.tools_used.map((tools, i) => (
            <li key={i} className="inline-block text-lg font-light">
              {tools}
            </li>
          ))}
        </ul>
      </div>
    )
  } else {
    portfolioTools = null
  }

  if (frontmatter.frameworks_used !== null) {
    portfolioFrameworks = (
      <div className="project-software project-details-block mb-5 px-8 lg:px-24 py-2 lg:py-8">
        <h4 className="subtitle">Frameworks and Languages</h4>
        <ul className="list-inline project-details-list">
          {frontmatter.frameworks_used.map((tools, i) => (
            <li key={i} className="inline-block text-lg font-light">
              {tools}
            </li>
          ))}
        </ul>
      </div>
    )
  } else {
    portfolioFrameworks = null
  }

  return (
    <div className="portfolio-page">
      <Layout>
        <Helmet>{page.codeinjection_styles && <style type="text/css">{`${page.codeinjection_styles}`}</style>}</Helmet>
        <MetaData data={data} location={location} type="website" />
        <article>
          <header
            className="portfolio-header mb-5 relative h-screen"
            style={{
              backgroundColor: frontmatter.color,
            }}>
            <div className="absolute inset-0 h-full">
              <Background filename={frontmatter.image} />
            </div>
            <div className="container mx-auto h-full z-30 relative flex lg:content-center content-end">
              <div className="max-w-xl mb-0 mt-auto lg:my-auto">
                <div className="bg-white px-8 py-8 lg:my-8">
                  <h1 className="font-serif text-xl">{page.title}</h1>
                  <p className="text-lg font-light">{frontmatter.description}</p>
                </div>
              </div>
            </div>
          </header>

          <div className="mx-auto container">
            <div className="grid grid-cols-2 gap-0 lg:gap-32">
              <div className="col-span-2 md:col-span-1">
                <div className="pb-4">{portfolioFrameworks}</div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="pb-4">{portfolioTools}</div>
              </div>
            </div>
          </div>

          <div className="gh-content gh-canvas py-5">
            <div className="content px-4 lg:px-0">
              <section className="content-body load-external-scripts" dangerouslySetInnerHTML={{ __html: page.html }} />
            </div>
          </div>
        </article>

        <div className="gh-canvas py-16">

          <div className="about-author pb-12">
            <h6 className="subtitle text-green mb-4">About the Author</h6>
            <div className="post-card-author">
              <h6 className="post-byline-item font-bold uppercase block mb-1">{page.primary_author.name}</h6>
              <p className="font-light">{page.primary_author.bio}</p>
            </div>
          </div>

          <div>
            <hr />
            <div className="pt-12">
              <NewsletterForm />
            </div>
          </div>
        </div>

      </Layout>
    </div>
  )
}

Portfolio.propTypes = {
  data: PropTypes.shape({
    ghostPage: PropTypes.shape({
      codeinjection_styles: PropTypes.object,
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      feature_image: PropTypes.string,
      custom_excerpt: PropTypes.string,
      primary_author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        profile_image: PropTypes.string,
        bio: PropTypes.string,
      }),
    }).isRequired,
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }).isRequired,
  }).isRequired,

  location: PropTypes.object.isRequired,
}

export default Portfolio

export const portfolioQuery = graphql`
  query ($slug: String!) {
    ghostPage(slug: { eq: $slug }) {
      ...GhostPageFields
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        guid
        slug
        description
        color
        image
        date
        permalink
        type
        layout
        alt
        website
        icon
        weight
        sticky
        tools_used
        frameworks_used
        timeline
      }
    }
  }
`
