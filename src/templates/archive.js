import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, PostCard, Pagination } from '../components/common'
import { MetaData } from '../components/common/meta'
import SiteLogoTiny from '../components/SiteLogoTiny'

/**
 * Template for blog pages. (/page/)
 *
 * Loads all posts from Ghost and uses pagination to navigate through them.
 * The number of posts that should appear per page can be setup
 * in /utils/siteConfig.js under `postsPerPage`.
 *
 */
const Archive = ({ data, location, pageContext }) => {
  const posts = data.allGhostPost.edges

  return (
    <Layout>
      <MetaData data={data} location={location} type="website" title="Archive" isHome={false} />
      <div className="gh-header gh-canvas pb-5">
        <SiteLogoTiny />
      </div>
      <div className="gh-content gh-canvas py-5">
        <div className="content">
          <h1 className="content-title h1">Archive</h1>
          <p className="lead">Previously, on Underlost...</p>
          {/* The main page content */}
          <section className="post-feed">
            {posts.map(({ node }) => (
              // The tag below includes the markup for each post - components/common/PostCard.js
              <PostCard key={node.id} post={node} />
            ))}
          </section>

          <Pagination pageContext={pageContext} />
        </div>
      </div>
    </Layout>
  )
}

Archive.propTypes = {
  data: PropTypes.shape({
    allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.object,
}

export default Archive

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(sort: { order: DESC, fields: [published_at] }, filter: { tags: { elemMatch: { name: { eq: "#blog" } } } }, limit: $limit, skip: $skip) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`
