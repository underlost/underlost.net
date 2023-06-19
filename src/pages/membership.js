import React from 'react'
import PropTypes from 'prop-types'
import { MetaData } from '../components/common/meta'
import { Layout } from '../components/common'
import { graphql } from 'gatsby'

const MembershipPage = ({ data, location }) => {
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
    </Layout>
  )
}

MembershipPage.propTypes = {
  data: PropTypes.object,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default MembershipPage

// This page query loads page with the links slug
export const pageQuery = graphql`
  query GhostLinksQuery {
    ghostPage(slug: { eq: "membership" }) {
      ...GhostPageFields
    }
  }
`
