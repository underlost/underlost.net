import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import dayjs from 'dayjs'
import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
 * Single Photo view (photos/:slug)
 *
 * This file renders a single post and loads all the content.
 *
 */
const Photo = ({ data, location }) => {
  const post = data.ghostPost
  const publishedAt = dayjs(post.published_at).format(`MMM D, YYYY`)

  return (
    <Layout>
      <MetaData data={data} location={location} type="article" />
      <Helmet>
        <style type="text/css">{`${post.codeinjection_styles}`}</style>
      </Helmet>
      <div className="pb-5">
        <article className="content">
          <header className="gh-header gh-canvas text-center">
            <h1 className="text-3xl text-wide font-black mb-2">{post.title}</h1>
            <div className="mb-8">
              <time className="post-byline-item block text-muted" dateTime={post.published_at}>
                {publishedAt}
              </time>
            </div>
            {post.feature_image ? <img className="gh-feature-photo mb-8" src={post.feature_image} alt={post.title} /> : null}
          </header>
          <section className="gh-content gh-canvas load-external-scripts content-body pb-12" dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </div>
    </Layout>
  )
}

Photo.propTypes = {
  data: PropTypes.shape({
    ghostPost: PropTypes.shape({
      codeinjection_styles: PropTypes.object,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      primary_tag: PropTypes.PropTypes.object,
      html: PropTypes.string.isRequired,
      feature_image: PropTypes.string,
      custom_excerpt: PropTypes.string,
      published_at: PropTypes.string,
      updated_at: PropTypes.string,
      primary_author: PropTypes.object,
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
        })
      ),
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export default Photo

export const PhotoQuery = graphql`
  query ($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      ...GhostPostFields
    }
  }
`
