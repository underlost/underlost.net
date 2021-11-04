import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MetaData from '../components/meta/MetaData'
import Layout from '../components/Layout'
import PostsList from '../components/PostsList'

const IndexPage = ({ location }) => (
  <>
    <MetaData
      location={location}
      type="website"
      title={`Tyler Rilling`}
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
      description={`Underlost is Tyler Rilling, a Python developer and level designer specializing in AR/VR, living in Seattle, Washington. They are probably not an Undertale game.`}
      isHome={true}
    />
    <Layout>
      <article className="pb-4">
        <header className="fadeRight d-block">
          <h3 className="subtitle mb-2 text-pink text-uppercase">Introduction</h3>
          <h1 className="title h1 text-white">
            Underlost is <span className="bg-blue px-1">Tyler Rilling</span>, a Python developer and level designer specializing in AR/VR, living in Seattle, Washington. They are probably
            not an Undertale game. 👾
          </h1>
        </header>
        <div className="my-5 fadeLeft">
          <AniLink className="btn btn-default px-5 py-2" cover bg="cyan" direction="right" to="/about">
            Learn More <FontAwesomeIcon icon={faAngleDoubleRight} fixedWidth size="lg" />
          </AniLink>
        </div>
      </article>

      <div className="fadeRight layout-single-column site-main index py-3 mt-3 pr-lg-5">
        <h3 className="subtitle mb-3 text-blue text-uppercase">Writing</h3>
        <PostsList />
      </div>
    </Layout>
  </>
)

IndexPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default IndexPage
