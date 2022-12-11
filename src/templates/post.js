import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'
import RelatedPostsBlock from '../components/RelatedPostsBlock'
import dayjs from 'dayjs'
import NewsletterForm from '../components/NewsletterForm'

/**
 * Single post view (/:slug)
 *
 * This file renders a single post and loads all the content.
 *
 */
const Post = ({ data, location }) => {
  const post = data.ghostPost
  const readingTime = readingTimeHelper(post)
  const publishedAt = dayjs(post.published_at).format(`MMM D, YYYY`)
  const updatedAt = dayjs(post.updated_at).format(`MMM D, YYYY`)

  return (
    <Layout>
      <MetaData data={data} location={location} type="article" />
      <Helmet>
        <style type="text/css">{`${post.codeinjection_styles}`}</style>
      </Helmet>
      <div className="pb-5">
        <article className="content">
          <header className="gh-header gh-canvas mb-8">
            {post.feature_image ? <img className="gh-feature-image" src={post.feature_image} alt={post.title} /> : null}

            {post.primary_tag && <span className="post-card-tags subtitle">{post.primary_tag.name}</span>}
            <h1 className="text-6xl font-serif mb-2">{post.title}</h1>
            <div className="grid grid-cols-2 mb-8">
              <div className="col-span-2 md:col-span-1 md:text-right lg:order-2">
                <time className="post-byline-item block text-muted" dateTime={post.published_at}>
                  <span className="sr-only">Published on </span>
                  Written {publishedAt}
                </time>
                <time className="post-byline-item block text-muted" dateTime={post.updated_at}>
                  Last Updated {updatedAt}
                </time>
              </div>
              <div className="col-span-2 md:col-span-1 lg:order-1">
                <span className="uppercase inline-block mb-1 pe-4 font-bold">{readingTime}</span>
              </div>
            </div>
            {post.custom_excerpt && <p className="lead">{post.custom_excerpt}</p>}
          </header>
          {/* The main post content */}
          <section className="gh-content gh-canvas load-external-scripts content-body mb-4" dangerouslySetInnerHTML={{ __html: post.html }} />
          <footer className="post-footer gh-canvas">
            {post.tags && (
              <div className="related-tags py-6">
                <p className="font-serif font-semibold text-lg uppercase mb-2">Related Tags</p>
                <div>
                  <Tags post={post} permalink={`/tag/:slug`} visibility="public" autolink={true} classes="tag-item" separatorClasses="hidden" />
                </div>
              </div>
            )}
          </footer>
        </article>

        <div className="gh-canvas">
          <RelatedPostsBlock tags={post.tags} currentArticleSlug={post.slug} />

          <div className="about-author pb-12">
            <h6 className="subtitle text-green mb-4">About the Author</h6>
            <div className="post-card-author">
              <h6 className="post-byline-item font-bold uppercase block mb-1">{post.primary_author.name}</h6>
              <p className="font-light">{post.primary_author.bio}</p>
            </div>
          </div>

          <div>
            <hr />
            <div className="pt-12">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

Post.propTypes = {
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

export default Post

export const postQuery = graphql`
  query ($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      ...GhostPostFields
    }
  }
`
