import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Button from '../components/Button'
import Image from '../components/Image'

const ProjectPage = ({ data }) => {
  const post = data.mdx
  const shortcodes = { Link, Button, Image }
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description} />
      <div className={`layout-single-column fadeLeft mr-lg-5`}>
        <Link className={`d-block h6 headline text-uppercase text-primary`} to="/portfolio/">
          <FontAwesomeIcon icon={faAngleDoubleLeft} fixedWidth size="sm" />
          Back to all Projects
        </Link>
        <article>
          <h1>{post.frontmatter.title}</h1>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
        </article>
      </div>
    </Layout>
  )
}
export default ProjectPage

ProjectPage.propTypes = {
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
