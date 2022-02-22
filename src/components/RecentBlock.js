import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { PostCard } from '../components/common'

const Recent = ({ data }) => {
  const posts = data.allGhostPost.edges

  return (
    <section className="section-recent-posts">
      <h6 className="h6 text-uppercase text-orange mb-3 sr-only">Recent Posts</h6>
      {posts.map(({ node }) => (
        // The tag below includes the markup for each post - components/common/PostCard.js
        <PostCard key={node.id} post={node} />
      ))}
    </section>
  )
}

Recent.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.object,
    allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
}

const RecentBlock = props => (
  <StaticQuery
    query={graphql`
      query GhostRecentBlockQuery {
        allGhostPost(sort: { order: DESC, fields: [published_at] }, filter: { tags: { elemMatch: { name: { eq: "#blog" } } } }, limit: 4) {
          edges {
            node {
              ...GhostPostFields
            }
          }
        }
      }
    `}
    render={data => <Recent data={data} {...props} />}
  />
)

export default RecentBlock
