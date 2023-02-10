import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import LazyImage from '../LazyImage'

const ArchiveCardArticle = ({ post }) => {
  const url = `/writing/${post.slug}/`
  const readingTime = readingTimeHelper(post)

  return (
    <article className="post-card post-card-article py-4 lg:py-8 mb-8">
      <header className="post-card-header">
        {post.primary_tag && <p className="subtitle">{post.primary_tag.name}</p>}
        <Link className="post-card-link block mb-4 hover:text-pink" to={url}>
          <h2 className="h2 mb-2">{post.title}</h2>
          {post.feature_image && (
            <div className="h-64 lg:h-96">
              <LazyImage className="h-full" key={post.feature_image} src={post.feature_image} alt={post.title} />
            </div>
          )}
        </Link>
      </header>

      <section className="excerpt text-lg font-light leading-normal">
        <p>{post.excerpt}</p>
      </section>

      <footer className="post-card-footer sr-only">
        {post.tags && (
          <div className="post-card-tags h6 text-uppercase mb-1">
            Posted in: <Tags post={post} visibility="public" autolink={false} />
          </div>
        )}

        <div className="sr-only">
          <span>By: {post.primary_author.name}</span>
        </div>
        <div className="post-card-footer-right">
          <div>{readingTime}</div>
        </div>
      </footer>
    </article>
  )
}

ArchiveCardArticle.propTypes = {
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

export default ArchiveCardArticle
