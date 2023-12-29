import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { PortfolioCard } from '../components/common'

const PortfolioList = () => {
  const data = useStaticQuery(query)
  const posts = data.allGhostPage.edges

  return (
    <section className="post-feed portfolio-feed max-w-6xl mx-auto">
      <div className="md:columns-2 gap-8 lg:gap-12 lg:px-0">
        {posts.map(({ node }) => (
          <div key={node.id} className="col-span-2 md:col-span-1">
            <PortfolioCard post={node} />
          </div>
        ))}
      </div>
    </section>
  )
}

const query = graphql`
  query {
    allGhostPage(sort: { published_at: DESC }, filter: { tags: { elemMatch: { name: { eq: "#portfolio" } } } }) {
      edges {
        node {
          ...GhostPageFields
        }
      }
    }
  }
`

export default PortfolioList
