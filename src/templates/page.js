import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
 * Single page (/:slug)
 *
 * This file renders a single page and loads all the content.
 *
 */
const Page = ({ data, location }) => {
  const page = data.ghostPage

  return (
    <>
      <Helmet>{page.codeinjection_styles && <style type="text/css">{`${page.codeinjection_styles}`}</style>}</Helmet>
      <Layout>
        <MetaData data={data} location={location} type="website" />
        <div className="gh-content gh-canvas py-5">
          <article className="content">
            <h1 className="title-h1 mb-11">{page.title}</h1>
            {page.custom_excerpt && <p className="lead mb-8">{page.custom_excerpt}</p>}
            {/* The main page content */}
            <section className="content-body load-external-scripts" dangerouslySetInnerHTML={{ __html: page.html }} />
          </article>
        </div>
      </Layout>
    </>
  )
}

Page.propTypes = {
  data: PropTypes.shape({
    ghostPage: PropTypes.shape({
      codeinjection_styles: PropTypes.object,
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      feature_image: PropTypes.string,
      custom_excerpt: PropTypes.string,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export default Page

export const postQuery = graphql`
  query ($slug: String!) {
    ghostPage(slug: { eq: $slug }) {
      ...GhostPageFields
    }
  }
`
