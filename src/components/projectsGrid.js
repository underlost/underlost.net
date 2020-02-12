import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import ProjectItem from './ProjectItem'

const ProjectsGrid = () => {
  const data = useStaticQuery(query)

  return (
    <div className={`mb-5 layout-single-column`}>
      {data.allMdx.edges.map(edge => (
        <div key={edge.node.frontmatter.guid}>
          <ProjectItem
            key={edge.node.frontmatter.guid}
            title={edge.node.frontmatter.title}
            guid={edge.node.frontmatter.guid}
            permalink={edge.node.fields.slug}
            size={edge.node.frontmatter.guid}
            description={edge.node.frontmatter.description}
            cover={edge.node.frontmatter.image}
          />
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
            guid
            title
            description
            permalink
          }
        }
      }
    }
  }
`

export default ProjectsGrid
