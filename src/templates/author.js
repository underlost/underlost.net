import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, PostCard, Pagination } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
 * Author page (/author/:slug)
 *
 * Loads all posts for the requested author incl. pagination.
 *
 */
const Author = ({ data, location, pageContext }) => {
  const author = data.ghostAuthor
  const posts = data.allGhostPost.edges
  const twitterUrl = author.twitter ? `https://twitter.com/${author.twitter.replace(/^@/, ``)}` : null
  const facebookUrl = author.facebook ? `https://www.facebook.com/${author.facebook.replace(/^\//, ``)}` : null

  return (
    <Layout>
      <MetaData data={data} location={location} type="profile" />
      <div className="gh-content gh-canvas">
        <header className="page-header author-header mb-5 pb-5 px-4 py-5 px-md-5">
          <div className="row">
            <div className="author-header-content col-md-8">
              <h1 className="h3 text-uppercase">{author.name}</h1>
              {author.bio && <p>{author.bio}</p>}
              <div className="author-header-meta">
                {author.website && (
                  <a className="author-header-item" href={author.website} target="_blank" rel="noopener noreferrer">
                    Website
                  </a>
                )}
                {twitterUrl && (
                  <a className="author-header-item" href={twitterUrl} target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                )}
                {facebookUrl && (
                  <a className="author-header-item" href={facebookUrl} target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="author-header-image mx-auto">{author.profile_image && <img className="w-100" src={author.profile_image} alt={author.name} />}</div>
            </div>
          </div>
        </header>
        <section className="post-feed">
          {posts.map(({ node }) => (
            // The tag below includes the markup for each post - components/common/PostCard.js
            <PostCard key={node.id} post={node} />
          ))}
        </section>
        <Pagination pageContext={pageContext} />
      </div>
    </Layout>
  )
}

Author.propTypes = {
  data: PropTypes.shape({
    ghostAuthor: PropTypes.shape({
      name: PropTypes.string.isRequired,
      cover_image: PropTypes.string,
      profile_image: PropTypes.string,
      website: PropTypes.string,
      bio: PropTypes.string,
      location: PropTypes.string,
      facebook: PropTypes.string,
      twitter: PropTypes.string,
    }),
    allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.object,
}

export default Author

export const pageQuery = graphql`
  query GhostAuthorQuery($slug: String!, $limit: Int!, $skip: Int!) {
    ghostAuthor(slug: { eq: $slug }) {
      ...GhostAuthorFields
    }
    allGhostPost(sort: { published_at: DESC }, filter: { authors: { elemMatch: { slug: { eq: $slug } } }, tags: { elemMatch: { name: { eq: "#blog" } } } }, limit: $limit, skip: $skip) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`
