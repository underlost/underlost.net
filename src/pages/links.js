import React from 'react'
import PropTypes from 'prop-types'
import { MetaData } from '../components/common/meta'
import { Layout } from '../components/common'
import LinksList from '../components/LinksList'
import { Link, graphql } from 'gatsby'

const LinksPage = ({ data, location }) => (
  <Layout>
    <MetaData data={data} location={location} title="Links" type="website" />
    <div className="gh-content gh-canvas py-5">
      <article className="content">
        <h1 className="title-h1">Links</h1>
        <section className="content-body load-external-scripts pt-4">
          <p className="lead mb-8">Where you can find me on the internet, and other useful resources.</p>
          <p>
            If you&apos;re coming here from another website, make sure to check out the rest of my <Link to="/">website</Link>, as well as some of the{` `}
            <Link to="/consulting/">services</Link> I offer!
          </p>
          <div className="pt-4">
            <LinksList />
          </div>
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

// This page query loads page with the links slug
export const pageQuery = graphql`
  query GhostLinksQuery {
    ghostPage(slug: { eq: "links" }) {
      ...GhostPageFields
    }
  }
`
