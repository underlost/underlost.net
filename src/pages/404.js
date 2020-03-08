import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MetaData from '../components/meta/MetaData'
import Layout from '../components/Layout'
import InnerLink from '../components/InnerLink'

const ErrorPage = ({ location }) => (
  <>
    <MetaData
      location={location}
      type="website"
      title={`404 Error`}
      keywords={[
        `404 error`,
      ]}
      description={`Alas, 404. Nothing Found. Sorry about that.`}
      isHome={true}
    />
    <Layout>
      <article className={`layout-single-column site-main index py-3 mt-3 pr-lg-5`}>
        <header className={`fadeRight d-block`}>
          <h3 className={`subtitle mb-0 text-pink text-uppercase`}>Error 404</h3>
          <h1 className={`headline xl text-lowercase text-transparent blue-stroke mb-4`}>
            Nothing Found.
          </h1>
        </header>
        <p className={`lead`}>Sorry about that. You can always learn <InnerLink text="about me" to="/about" />, or maybe you want to <InnerLink text="work together" to="/contact" />? 🤷</p>
      </article>
    </Layout>
  </>
)

ErrorPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default ErrorPage
