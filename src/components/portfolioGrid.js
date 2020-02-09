import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import PortfolioItem from '../components/portfolioItem'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

const PortfolioGrid = () => {
  const data = useStaticQuery(query)

  return (
    <div className={`portfolio-list pr-lg-5`}>
      {data.allMdx.edges.map(edge => (
        <PortfolioItem
          key={edge.node.frontmatter.guid}
          title={edge.node.frontmatter.title}
          guid={edge.node.frontmatter.guid}
          color={edge.node.frontmatter.color}
          permalink={edge.node.fields.slug}
          size={edge.node.frontmatter.guid}
          description={edge.node.frontmatter.description}
          col1Width={edge.node.frontmatter.col1Width}
          col2Width={edge.node.frontmatter.col2Width}
          col1Order={edge.node.frontmatter.col1Order}
          col2Order={edge.node.frontmatter.col2Order}
          body={edge.node.body}
          cover={edge.node.frontmatter.image}
        />
      ))}
    </div>
  )
}

const query = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___guid], order: DESC }
      filter: { fields: { sourceInstanceName: { eq: "portfolio" } } }
    ) {
      edges {
        node {
          body
          fields {
            slug
          }
          frontmatter {
            color
            guid
            title
            slug
            permalink
            size
            description
            col1Width
            col2Width
            col1Order
            col2Order
            image {
              childImageSharp {
                fluid(maxWidth: 850, quality: 90, traceSVG: { color: "#f3f3f3" }) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`

export default PortfolioGrid
