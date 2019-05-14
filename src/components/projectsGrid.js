import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

const ProjectLinks = () => {
  const data = useStaticQuery(query)

  return (
    <div>
        {data.allMdx.edges.map(edge => (
          <li>{edge.node.frontmatter.title}</li>
        ))}
    </div>
  );
};

const query = graphql`
query{
  allMdx(sort: {fields: [frontmatter___date], order: DESC}, filter: {fields: {sourceInstanceName: {eq: "projects"}}}) {
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

export default ProjectLinks
