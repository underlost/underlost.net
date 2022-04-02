import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import LazyImage from '../LazyImage'

const PortfolioCard = ({ post }) => {
  const url = `/portfolio/${post.slug}/`
  const readingTime = readingTimeHelper(post)

  return (
    <article className="card mb-4">
      <header className="post-card-header">
        <Link className="post-card-link d-block" to={url}>
          {post.feature_image && (
            <div className="post-card-image-wrapper">
              <LazyImage className="post-card-image" key={post.feature_image} src={post.feature_image} alt={post.title} />
            </div>
          )}
          <div className="pt-4 px-4">
            {post.primary_tag && <p className="post-card-tags h6 text-uppercase mb-1">{post.primary_tag.name}</p>}
            <h2 className="post-card-title h2 mb-1">{post.title}</h2>
          </div>
        </Link>
      </header>

      <section className="card-body px-4 post-card-excerpt">
        <Link className="d-block pb-2" to={url}>
          <p className="d-inline pe-2">{post.excerpt}</p>
          <span className="d-inline-block px-1 arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="6" viewBox="0 0 22 6">
              <path stroke="#03080F" fill="none" fillRule="evenodd" d="M0 3h21m-3-3 3 3-3 3" />
            </svg>
          </span>
        </Link>
      </section>

      <footer className="post-card-footer sr-only">
        {post.tags && (
          <div className="post-card-tags h6 text-uppercase mb-1">
            Posted in: <Tags post={post} visibility="public" autolink={false} />
          </div>
        )}
        <div className="post-card-footer-author">
          <span>By: {post.primary_author.name}</span>
        </div>
        <div className="post-card-footer-time">
          <span>Reading Time: {readingTime}</span>
        </div>
      </footer>
    </article>
  )
}

PortfolioCard.propTypes = {
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

export default PortfolioCard