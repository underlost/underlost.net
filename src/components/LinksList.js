import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import LinkButton from './LinkButton'

const LinksList = () => {
  const data = useStaticQuery(query)

  return (
    <ul
      className="list-nav list-unstyled mb-0 px-0"
      style={{
        maxWidth: `500px`,
      }}
    >
      {data.allMarkdownRemark.edges.map(({ node }) => {
        const title = node.frontmatter.title || node.frontmatter.slug
        const website = node.frontmatter.website
        const alt = node.frontmatter.alt
        return <LinkButton layout="link" key={node.frontmatter.slug} title={title} website={website} alt={alt} icon={node.frontmatter.icon} />
      })}
    </ul>
  )
}

const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___weight], order: DESC }, filter: { frontmatter: { type: { eq: "link" } } }) {
      edges {
        node {
          frontmatter {
            title
            slug
            alt
            website
            icon
            weight
            type
          }
        }
      }
    }
  }
`

export default LinksList