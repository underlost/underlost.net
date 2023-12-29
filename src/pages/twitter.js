import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'
import TwitterTimelineBlock from '../components/TwitterTimeline'

/**
 * twitter Page
 *
 * A timeline of dumb things Elon has done to twitter
 *
 */
const TwitterPage = ({ data, location }) => {
  const page = data.ghostPage

  return (
    <Layout>
      <MetaData data={data} location={location} type="website" />
      <div className="gh-content gh-canvas md:pt-5">
        {page ? (
          <article className="mb-8">
            <h1 className="text-xl font-black">{page.title}</h1>
            <div className="content-body load-external-scripts" dangerouslySetInnerHTML={{ __html: page.html }} />
          </article>
        ) : null}
      </div>

      <section className="twitter-stream mb-24">
        <TwitterTimelineBlock />
      </section>
    </Layout>
  )
}

TwitterPage.propTypes = {
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

export default TwitterPage

// This page query loads all posts sorted descending by published date
export const twitterPageQuery = graphql`
  query GhostTwitterPageQuery {
    ghostPage(slug: { eq: "twitter" }) {
      ...GhostPageFields
    }
  }
`
