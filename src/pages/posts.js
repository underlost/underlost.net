import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import MetaData from '../components/meta/MetaData'
import Layout from '../components/Layout'
import PostsList from '../components/PostsList'

const PostsPage = ({ location }) => (
  <>
    <MetaData
      location={location}
      type="website"
      title={`Posts`}
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
      description={`Previous writings from Tyler Rilling / underlost.`}
      isHome={false}
    />
    <Layout>
      <div className="fadeRight layout-single-column site-main index py-3 mt-3 pr-lg-5">
        <h3 className="subtitle mb-3 text-blue text-uppercase">Writing</h3>
        <PostsList />
      </div>
    </Layout>
  </>
)

PostsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default PostsPage
