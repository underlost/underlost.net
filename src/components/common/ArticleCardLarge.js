import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import LazyImage from '../LazyImage'

const ArticleCardLarge = ({ post }) => {
  const url = `/writing/${post.slug}/`
  const readingTime = readingTimeHelper(post)

  return (
    <article className="card max-w-4xl mx-auto">
      <div className="lg:grid lg:grid-cols-12 gap-8">
        <div className="col-span-5">
          {post.feature_image && (
            <Link className="card-image" to={url}>
              <LazyImage className="post-card-image" key={post.feature_image} src={post.feature_image} alt={post.title} />
            </Link>
          )}
        </div>
        <div className="col-span-7">
          <header className="post-card-header mb-5">
            <Link className="post-card-link block" to={url}>
              <div className="pt-6 lg:pt-0">
                {post.primary_tag && <p className="subtitle mb-1">{post.primary_tag.name}</p>}
                <h2 className="card-title h2">{post.title}</h2>
              </div>
            </Link>
          </header>
          <section className="card-body post-card-excerpt text-lg font-light">
            <p className="mb-4">{post.excerpt}</p>
          </section>
          <footer className="post-card-footer">
            {post.tags && (
              <div className="post-card-tags h6 text-uppercase mb-1 sr-only">
                Posted in: <Tags post={post} visibility="public" autolink={false} />
              </div>
            )}
            <div className="post-card-footer-author sr-only">
              <span>By: {post.primary_author.name}</span>
            </div>
            <div className="uppercase ps-2 font-semibold text-narrow whitespace-nowrap">
              <span>
                <span className="sr-only">Reading Time:</span> {readingTime}
              </span>
            </div>
          </footer>
        </div>
      </div>
    </article>
  )
}

ArticleCardLarge.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    feature_image: PropTypes.string,
    featured: PropTypes.bool,
    primary_tag: PropTypes.PropTypes.object,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    html: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    primary_author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      profile_image: PropTypes.string,
    }).isRequired,
  }).isRequired,
}

export default ArticleCardLarge
