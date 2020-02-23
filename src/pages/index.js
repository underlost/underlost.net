import React from 'react'
import { graphql, Link } from 'gatsby'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SEO from '../components/SEO'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Tyler Rilling"
      description="Underlost is Tyler Rilling, a Python developer and UX designer specializing in AR/VR, living in Seattle, Washington. They are probably not an Undertale game."
      keywords={[
        `Tyler Rilling`,
        `underlost`,
        `undertale`,
        `Seattle Web Developer`,
        `Seattle Front-End Developer`,
        `Seattle python developer`,
        `PNW developer`,
        `Pacific Northwest developer`,
      ]}
    />
    <article className={`layout-single-column site-main index py-3 mx-auto mt-3 pr-lg-5`}>
      <header className={`fadeRight d-block`}>
        <h3 className={`subtitle mb-0 text-pink text-uppercase`}>Introduction</h3>
        <h1 className={`title h1 text-white`}>
          Underlost is <span className={`bg-blue px-1`}>Tyler Rilling</span>, a Python developer and UX designer specializing in AR/VR, living in Seattle, Washington. They are probably not
          an Undertale game. 👾
        </h1>
      </header>
      <div className={`my-5 fadeLeft`}>
        <Link className={`btn btn-default px-5 py-2`} to="/about/">
          Learn More <FontAwesomeIcon icon={faAngleDoubleRight} fixedWidth size="lg" />
        </Link>
      </div>
    </article>
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
