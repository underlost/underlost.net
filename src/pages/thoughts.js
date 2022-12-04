import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, AsideCard } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
 * Thoughts Page
 *
 * A somewhat stream of conciousness. WIP
 *
 */
const ThoughtsPage = ({ data, location }) => {
  const posts = data.allGhostPost.edges
  const page = data.ghostPage

  return (
    <Layout>
      <MetaData data={data} location={location} type="website" />
      <div className="gh-content gh-canvas md:pt-5">
        {page ? (
          <article>
            <h1 className="hidden">{page.title}</h1>
            <div className="content-body load-external-scripts" dangerouslySetInnerHTML={{ __html: page.html }} />
          </article>
        ) : null}
        <section className="micro-stream">
          {posts.map(({ node }) => (
            <AsideCard key={node.id} post={node} />
          ))}
        </section>
      </div>
    </Layout>
  )
}

ThoughtsPage.propTypes = {
  data: PropTypes.shape({
    allGhostPost: PropTypes.object.isRequired,
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

export default ThoughtsPage

// This page query loads all posts sorted descending by published date
export const thoughtsPageQuery = graphql`
  query GhostThoughtsQuery {
    ghostPage(slug: { eq: "thoughts" }) {
      ...GhostPageFields
    }
    allGhostPost(sort: { published_at: DESC }, filter: { tags: { elemMatch: { name: { eq: "#thoughts" } } } }, limit: 12) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`
