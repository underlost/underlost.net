import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { PortfolioCard } from '../components/common'

const PortfolioList = () => {
  const data = useStaticQuery(query)
  const posts = data.allGhostPage.edges

  return (
    <section className="post-feed portfolio-feed container">
      <div className="row">
        {posts.map(({ node }) => (
          // The tag below includes the markup for each post - components/common/PostCard.js
          <div key={node.id} className="col-lg-6">
            <PortfolioCard post={node} />
          </div>
        ))}
      </div>
    </section>
  )
}

const query = graphql`
  query {
    allGhostPage(sort: { order: ASC, fields: published_at }, filter: { tags: { elemMatch: { name: { eq: "#portfolio" } } } }) {
      edges {
        node {
          ...GhostPageFields
        }
      }
    }
  }
`

export default PortfolioList
