import React from 'react'
//import AniLink from 'gatsby-plugin-transition-link/AniLink'
import PropTypes from 'prop-types'
import { MetaData } from '../components/common/meta'
import { Layout } from '../components/common'
//import InnerLink from '../components/InnerLink'
import LinksList from '../components/LinksList'
import SiteLogoTiny from '../components/SiteLogoTiny'

const LinksPage = ({ data, location }) => (
  <Layout>
    <MetaData data={data} location={location} title="Links" type="website" />
    <div className="gh-header gh-canvas pb-5">
      <SiteLogoTiny />
    </div>
    <div className="gh-content gh-canvas py-5">
      <article className="content">
        <h1 className="content-title h1">Links</h1>
        <p className="lead">Where you can find me on the internet, and other useful resources.</p>
        {/* The main page content */}
        <section className="content-body load-external-scripts">
          <LinksList />
        </section>
      </article>
    </div>
  </Layout>
)

LinksPage.propTypes = {
  data: PropTypes.object,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default LinksPage
