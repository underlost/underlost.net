import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const ProjectPage = () => (
  <Layout>
    <div>
      <h1>Project template</h1>
    </div>
  </Layout>
)
export default ProjectPage

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt
      fields {
        slug
      }

      frontmatter {
        guid
        title
        date(formatString: "DD.MM.YYYY")
        description
        color
        image {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 800) {
              src
            }
          }
        }
      }
    }
  }
`
