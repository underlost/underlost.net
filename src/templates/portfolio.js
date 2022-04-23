import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'
import Background from '../components/Background'

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
      <div className="project-software project-details-block mb-5">
        <h4 className="text-uppercase h6">Software Used</h4>
        <ul className="list-inline project-details-list">
          {frontmatter.tools_used.map((tools, i) => (
            <li key={i} className="list-inline-item mr-0">
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
      <div className="project-software project-details-block mb-5">
        <h4 className="text-uppercase h6">Frameworks and Languages</h4>
        <ul className="list-inline project-details-list">
          {frontmatter.frameworks_used.map((tools, i) => (
            <li key={i} className="list-inline-item mr-0">
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
    <article className="portfolio-wrapper">
      <Helmet>{page.codeinjection_styles && <style type="text/css">{`${page.codeinjection_styles}`}</style>}</Helmet>
      <MetaData data={data} location={location} type="website" />
      <Layout>
        <header
          className="portfolio-header mb-5 position-relative"
          style={{
            backgroundColor: frontmatter.color,
          }}
        >
          <Background filename={frontmatter.image} />
          <div
            className="container"
            style={{
              height: `100%`,
              zIndex: 25,
              position: `relative`,
            }}
          >
            <div
              className="row"
              style={{
                height: `100%`,
              }}
            >
              <div className="col-md-5 col-lg-4 align-self-center">
                <div className="bg-light px-4 py-5 my-5">
                  <h1 className="h6">{page.title}</h1>
                  <p>{frontmatter.description}</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container">
          <div className="row justify-content-around">
            <div className="col-md-5">
              <div className="pb-4">{portfolioFrameworks}</div>
            </div>
            <div className="col-md-5">
              <div className="pb-4">{portfolioTools}</div>
            </div>
          </div>
        </div>

        <div className="gh-content gh-canvas py-5">
          <div className="content">
            <section className="content-body load-external-scripts" dangerouslySetInnerHTML={{ __html: page.html }} />
          </div>
        </div>
      </Layout>
    </article>
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
