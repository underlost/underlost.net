import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ArticleListItem } from '../components/common'

const ReadFirst = ({ data }) => {
  const posts = data.allGhostPost.edges

  return (
    <section className="read-first post-feed text-black">
      <h2 className="uppercase mb-4 font-mono">Noteworthy Posts</h2>
      <ul className="read-first-list">
        {posts.map(({ node }) => (
          <li key={node.id} className="read-first-list-item">
            <ArticleListItem post={node} />
          </li>
        ))}
      </ul>
    </section>
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
