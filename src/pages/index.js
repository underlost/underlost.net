import React from 'react'
import { graphql, Link } from 'gatsby'
import PageTransition from 'gatsby-v2-plugin-page-transitions'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Background from '../components/Background'
import SEO from '../components/seo'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Tyler Rilling"
      keywords={[`Tyler Rilling`, `underlost`, `Seattle Web Developer`, `Seattle Front-End Developer`]}
    />
    <div className={`site-main index h-100 py-3 mx-auto mt-5`}>
      <div className={`pr-lg-5 fadeRight`}>
        <h3 className={`subtitle mb-0 text-pink text-uppercase`}>Introduction</h3>
        <h1 className={`title h1 text-white`}>
          Underlost is <span className={`bg-blue px-1`}>Tyler Rilling</span>, a Python developer and UX designer
          specializing in AR/VR, living in Seattle, Washington. They are probably not an Undertale game.
        </h1>
      </div>
      <div className={`my-5 fadeLeft`}>
        <Link className={`btn btn-default px-5 py-2`} to="/about/">
          Learn More <FontAwesomeIcon icon={faAngleDoubleRight} fixedWidth size="lg" />
        </Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
