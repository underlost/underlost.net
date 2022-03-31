import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { PortfolioCard } from '../components/common'

const PortfolioList = () => {
  const data = useStaticQuery(query)
  const posts = data.allGhostPage.edges

  return (
    <section className="post-feed portfolio-feed">
      {posts.map(({ node }) => (
        // The tag below includes the markup for each post - components/common/PostCard.js
        <PortfolioCard key={node.id} post={node} />
      ))}
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
