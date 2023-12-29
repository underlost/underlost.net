import React from 'react'
import PropTypes from 'prop-types'
import { MetaData } from '../components/common/meta'
import { Layout } from '../components/common'
import { graphql } from 'gatsby'
import NewsletterForm from '../components/NewsletterForm'
import TipButton from '../components/TipButton'

const SupportPage = ({ data, location }) => {
  const page = data.ghostPage
  return (
    <Layout>
      <MetaData data={data} location={location} title="Links" type="website" />
      <div className=" gh-canvas py-5">
        <article className="content gh-content">
          <h1 className="title-h1">{page.title}</h1>
          <section className="content-body load-external-scripts pt-4" dangerouslySetInnerHTML={{ __html: page.html }} />
        </article>
      </div>

      <div className="gh-canvas">
        <div className="about-author pb-12">
          <div className="py-8">
            <div className="pb-3">
              <TipButton text="Show your support" />
            </div>
          </div>
        </div>
        <div>
          <hr />
          <div className="pt-12">
            <NewsletterForm />
          </div>
        </div>
      </div>
    </Layout>
  )
}

SupportPage.propTypes = {
  data: PropTypes.object,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default SupportPage

// This page query loads page with the support slug
export const pageQuery = graphql`
  query GhostSupportSiteQuery {
    ghostPage(slug: { eq: "support-this-site" }) {
      ...GhostPageFields
    }
  }
`
