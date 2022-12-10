import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { PostItem } from '../components/common'

const ReadFirst = ({ data }) => {
  const posts = data.allGhostPost.edges

  return (
    <div className="read-first-wrapper">
      <section className="read-first post-feed">
        <h2 className="subtitle-pill pink-purple mb-4">Noteworthy Posts</h2>
        <ul className="divide-y">
          {posts.map(({ node }) => (
            // The tag below includes the markup for each post - components/common/PostCard.js
            <li key={node.id} className="py-4 border-caramel">
              <PostItem post={node} />
            </li>
          ))}
        </ul>
      </section>
      <div className="has-after-element translate-x-24" />
    </div>
  )
}

ReadFirst.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.object,
    allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
}

const ReadFirstBlock = props => (
  <StaticQuery
    query={graphql`
      query GhostReadFirstQuery {
        allGhostPost(sort: { published_at: DESC }, filter: { tags: { elemMatch: { name: { eq: "#noteworthy" } } } }, limit: 8) {
          edges {
            node {
              ...GhostPostFields
            }
          }
        }
      }
    `}
    render={data => <ReadFirst data={data} {...props} />}
  />
)

export default ReadFirstBlock
