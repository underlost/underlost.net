import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/Layout'

const ProjectPage = () => (
  <Layout>
    <SEO />
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
        image
      }
    }
  }
`
