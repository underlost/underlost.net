import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const DefaultPage = () => (
  <Layout>
    <div>
      <h1>Page template</h1>
    </div>
  </Layout>
)
export default DefaultPage

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
      }
    }
  }
`
