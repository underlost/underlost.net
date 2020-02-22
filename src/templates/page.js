import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import SEO from '../components/seo'
import Layout from '../components/Layout'

const PageTemplate = ({ data }) => {
  const post = data.mdx
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description} />
      <div className={`layout-single-column fadeLeft mr-lg-5`}>
        <article>
          <h1>{post.frontmatter.title}</h1>
          <MDXRenderer>{post.body}</MDXRenderer>
        </article>
      </div>
    </Layout>
  )
}
export default PageTemplate

PageTemplate.propTypes = {
  data: PropTypes.node.isRequired,
}

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
