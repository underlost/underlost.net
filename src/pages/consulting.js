import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
 * Consulting Page
 *
 * Consulting page. Pulls Content from consulting Ghost page.
 *
 */
const ConsultingPage = ({ data, location }) => {
  const page = data.ghostPage

  return (
    <Layout>
      <MetaData data={data} location={location} type="website" />
      <div className="gh-content gh-canvas py-5">
        {page ? (
          <article>
            <h1 className="title-h1 mb-5">{page.title}</h1>
            <div className="content-body load-external-scripts" dangerouslySetInnerHTML={{ __html: page.html }} />
          </article>
        ) : null}
      </div>
    </Layout>
  )
}

ConsultingPage.propTypes = {
  data: PropTypes.shape({
    ghostPage: PropTypes.shape({
      codeinjection_styles: PropTypes.object,
      title: PropTypes.string.isRequired,
      html: PropTypes.string,
      feature_image: PropTypes.string,
    }).isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.object,
}

export default ConsultingPage

// This page query loads all posts sorted descending by published date
export const pageQuery = graphql`
  query GhostConsultingQuery {
    ghostPage(slug: { eq: "consulting" }) {
      ...GhostPageFields
    }
  }
`
