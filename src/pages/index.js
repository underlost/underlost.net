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
      <div className={`col-md-5 offset-md-7`}>
      
        <SEO
          title="Tyler Rilling"
          keywords={[`Tyler Rilling`, `underlost`, `Seattle Web Developer`, `Seattle Front-End Developer`]}
        />
        <main className={`site-main index d-flex h-100 py-3 mx-auto flex-column mt-5`}>
          <h3 className={`subtitle mb-0 text-pink text-uppercase`}>Introduction</h3>
          <div className={`row no-gutters fadeRight`}>
            <h1 className={`title lead col-md-8 col-lg-11 text-white`}>
              Underlost is <span className={`bg-blue px-1`}>Tyler Rilling</span>, a Python devloper and UX designer
              specializing in AR/VR, living in Seattle, Washington. They are probably not an Undertale game.
            </h1>
          </div>
          <div className={`row no-gutters mt-4 mb-5 fadeLeft`}>
            <Link className={`btn btn-default px-5 py-2`} to="/about/">
              Learn More <FontAwesomeIcon icon={faAngleDoubleRight} fixedWidth size="lg" />
            </Link>
          </div>
        </main>
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
