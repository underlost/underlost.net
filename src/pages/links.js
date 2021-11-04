import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import PropTypes from 'prop-types'
import MetaData from '../components/meta/MetaData'
import Layout from '../components/Layout'
import InnerLink from '../components/InnerLink'
import LinksList from '../components/LinksList'

const AboutPage = ({ location }) => (
  <>
    <MetaData
      location={location}
      type="website"
      title={`Links`}
      keywords={[
        `Tyler Rilling`,
        `underlost`,
        `undertale`,
        `Seattle Web Developer`,
        `Seattle Front-End Developer`,
        `Seattle python developer`,
        `PNW developer`,
        `Pacific Northwest developer`,
        `Seattle Photography`,
        `Seattle Game Developer`,
      ]}
      description={`Tyler Rilling is a hybrid writer, UX designer and developer, with an interest in photography and video games mixed in on the side. I'm basically the bard of the group.`}
    />
    <Layout>
      <article className="layout-single-column pr-lg-5">
        <header className="fadeRight d-block">
          <h2 className="headline h1 text-lowercase text-transparent blue-stroke px-0 mb-3 mr-lg-5 pr-lg-5">links</h2>
          <p className="title h1 text-white pb-5">Where you'll find me on the internet, and other useful links.</p>
        </header>

        <LinksList />
      </article>
    </Layout>
  </>
)

AboutPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default AboutPage
