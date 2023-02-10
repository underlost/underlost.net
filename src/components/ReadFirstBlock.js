import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ArticleListItem } from '../components/common'

const ReadFirst = ({ data }) => {
  const posts = data.allGhostPost.edges

  return (
    <div className="read-first-wrapper">
      <section className="read-first post-feed">
        <h2 className="font-black uppercase mb-4">
          <span className="highlight">Noteworthy</span> Posts
        </h2>
        <ul className="read-first-list">
          {posts.map(({ node }) => (
            <li key={node.id} className="read-first-list-item">
              <ArticleListItem post={node} />
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
