import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import MetaData from '../components/meta/MetaData'
import Layout from '../components/Layout'
import Button from '../components/Button'
import Image from '../components/Image'
import InnerLink from '../components/InnerLink'
import LinkButton from '../components/LinkButton'

const ProjectPage = ({ data, location }) => {
  const post = data.mdx
  const shortcodes = { Link, Button, LinkButton, Image, InnerLink }
  let breabcrumbs

  if (post.frontmatter.type == `project`) {
    breabcrumbs = (
      <AniLink cover bg="cyan" direction="right" className="d-block h6 headline text-uppercase text-primary mb-3" to="/portfolio/">
        <FontAwesomeIcon icon={faAngleDoubleLeft} fixedWidth size="sm" />
        Back to all Projects
      </AniLink>
    )
  } else {
    breabcrumbs = null
  }
  return (
    <>
      <MetaData location={location} type="website" title={post.frontmatter.title} keywords={post.frontmatter.keywords} description={post.frontmatter.description} />
      <Layout>
        {breabcrumbs}
        <article>
          <header className="fadeRight d-block">
            <h1 className="headline h1 text-lowercase text-transparent blue-stroke mb-4">{post.frontmatter.title}</h1>
          </header>
          <div className="layout-single-column page-content fadeLeft mr-lg-4">
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{post.body}</MDXRenderer>
            </MDXProvider>
          </div>
        </article>
      </Layout>
    </>
  )
}
export default ProjectPage

ProjectPage.propTypes = {
  data: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
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
        keywords
        color
        image
        type
      }
    }
  }
`
