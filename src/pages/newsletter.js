import React from 'react'
import PropTypes from 'prop-types'
import { MetaData } from '../components/common/meta'
import { Layout } from '../components/common'
import { Link, graphql } from 'gatsby'
import NewsletterForm from '../components/NewsletterForm'

const NewsletterPage = ({ data, location }) => (
  <Layout>
    <MetaData data={data} location={location} title="Links" type="website" />
    <div className="gh-content gh-canvas py-5">
      <article className="content">
        <h1 className="content-title h1">Newsletter</h1>
        <section className="content-body load-external-scripts pt-4">
          <div className="pt-4">
            <NewsletterForm />
          </div>
        </section>
      </article>
    </div>
  </Layout>
)

NewsletterPage.propTypes = {
  data: PropTypes.object,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default NewsletterPage

