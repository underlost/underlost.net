import React from 'react'
import PropTypes from 'prop-types'
import { MetaData } from '../components/common/meta'
import { Layout } from '../components/common'
import { Link, graphql } from 'gatsby'
import PortfolioList from '../components/PortfolioList'

const PortfolioPage = ({ data, location }) => (
  <Layout>
    <MetaData data={data} location={location} title="Selected Works (Portfolio)" type="website" />
    <div className="gh-content gh-canvas py-5">
      <article className="content">
        <h1 className="content-title h1">Selected Works</h1>
        <section className="content-body load-external-scripts pt-4">
          <p className="lead">Below are a few of the selected client works I&apos;ve had the oppertunity to build.</p>
          <p>
            For non-client work and fun projects I&apos;m making, check out my <Link to="/projects/">projects</Link> section!
          </p>
        </section>
      </article>
    </div>
    <PortfolioList />
  </Layout>
)

PortfolioPage.propTypes = {
  data: PropTypes.object,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default PortfolioPage

// This page query loads page with the portfolio slug
export const pageQuery = graphql`
  query GhostPortfolioQuery {
    ghostPage(slug: { eq: "portfolio" }) {
      ...GhostPageFields
    }
  }
`