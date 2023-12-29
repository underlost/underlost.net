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
  //console.log(tag)
  const posts = data.allGhostPost.edges
  let accentColor = tag.accent_color === null ? `` : `[${tag.accent_color}]`

  return (
    <Layout headerClass={accentColor}>
      <style>
        {`.site-head {
          background-color: ${tag.accent_color};
        }`}
      </style>
      <MetaData data={data} location={location} type="series" />
      <div
        className="py-5 mb-11"
        style={{
          backgroundColor: tag.accent_color,
        }}>
        <header className="gh-canvas page-header tag-header">
          <h1 className="title-h1 mb-2">{tag.name}</h1>
          {tag.description ? <p className="lead mt-0">{tag.description}</p> : null}
        </header>
      </div>
      <section className="post-feed gh-content gh-canvas">
        {posts.map(({ node }) => (
          <ArchiveCard key={node.id} post={node} />
        ))}
      </section>
      <Pagination pageContext={pageContext} />
    </Layout>
  )
}

Tag.propTypes = {
  data: PropTypes.shape({
    ghostTag: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      accent_color: PropTypes.string,
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
