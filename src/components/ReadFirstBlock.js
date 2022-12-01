import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { PostItem } from '../components/common'

const ReadFirst = ({ data }) => {
  const posts = data.allGhostPost.edges

  return (
    <div className="read-first-wrapper">
      <section className="read-first post-feed mb-5 pb-5">
        <h2 className="h6 text-uppercase text-orange mb-3">Noteworthy Posts</h2>
        {posts.map(({ node }) => (
          // The tag below includes the markup for each post - components/common/PostCard.js
          <PostItem key={node.id} post={node} />
        ))}
      </section>
    </div>
  )
}

ReadFirst.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.object,
    allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
}

const ReadFirstBlock = (props) => (
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
    render={(data) => <ReadFirst data={data} {...props} />}
  />
)

export default ReadFirstBlock
