import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, ArchiveCard, Pagination } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
 * Tag page (/tag/:slug)
 *
 * Loads all posts for the requested tag incl. pagination.
 *
 */
const Tag = ({ data, location, pageContext }) => {
  const tag = data.ghostTag
  const posts = data.allGhostPost.edges

  return (
    <Layout>
      <MetaData data={data} location={location} type="series" />
      <div className="gh-content gh-canvas py-5">
        <header className="page-header tag-header">
          <h1 className="title-h1">{tag.name}</h1>
          {tag.description ? <p className="lead mb-0">{tag.description}</p> : null}
        </header>
        <section className="post-feed">
          {posts.map(({ node }) => (
            <ArchiveCard key={node.id} post={node} />
          ))}
        </section>
        <Pagination pageContext={pageContext} />
      </div>
    </Layout>
  )
}

Tag.propTypes = {
  data: PropTypes.shape({
    ghostTag: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
    }),
    allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.object,
}

export default Tag

export const pageQuery = graphql`
  query GhostTagQuery($slug: String!, $limit: Int!, $skip: Int!) {
    ghostTag(slug: { eq: $slug }) {
      ...GhostTagFields
    }
    allGhostPost(sort: { published_at: DESC }, filter: { tags: { elemMatch: { slug: { eq: $slug } } } }, limit: $limit, skip: $skip) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`
