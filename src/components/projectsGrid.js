import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'

const ProjectsGrid = () => {
  const data = useStaticQuery(query)

  return (
    <div className={`row mb-5`}>
      {data.allMdx.edges.map(edge => (
        <div key={edge.node.frontmatter.guid} className={`col-md-6`}>
          {edge.node.frontmatter.title}
        </div>
      ))}
    </div>
  )
}

const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, filter: { fields: { sourceInstanceName: { eq: "projects" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            color
            guid
            title
            size
            description
          }
        }
      }
    }
  }
`

export default ProjectsGrid
