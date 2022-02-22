import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { AsideCard } from './common'

const TagAside = ({ data }) => {
  const posts = data.allGhostPost.edges

  return (
    <div className="read-first-wrapper">
      <section className="read-first post-feed mb-5 pb-5 px-4 py-5 px-md-5">
        {posts.map(({ node }) => (
          <AsideCard key={node.id} post={node} />
        ))}
      </section>
    </div>
  )
}

TagAside.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.object,
    allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
}

const TagAsideBlock = props => (
  <StaticQuery
    query={graphql`
      query GhostTagAsideQuery {
        allGhostPost(sort: { order: DESC, fields: [published_at] }, filter: { tags: { elemMatch: { name: { eq: "#aside" } } } }, limit: 12) {
          edges {
            node {
              ...GhostPostFields
            }
          }
        }
      }
    `}
    render={data => <TagAside data={data} {...props} />}
  />
)

export default TagAsideBlock
