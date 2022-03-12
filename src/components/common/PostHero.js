import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import LazyloadImage from '../../components/LazyloadImage'

const PostHero = ({ post }) => {
  const url = `/writing/${post.slug}/`
  const readingTime = readingTimeHelper(post)

  return (
    <div className="container post-hero-wrapper pb-5">
      <article className="post-hero py-4 position-relative">
        <Link to={url} className="d-block position-relative px-4 px-lg-5" style={{ zIndex: 1 }}>
          <header className="post-hero-header d-flex align-items-end" style={{ minHeight: `500px` }}>
            <div className="d-block w-100" style={{ borderTop: `1px solid #fff` }}>
              <h3 className="h2 text-uppercase pt-4 mb-0">{post.title}</h3>
              <span className="h6 text-uppercase mb-0">{readingTime}</span>
            </div>
          </header>
        </Link>
        <div className="postHero-img-wrapper">
          <LazyloadImage className="postHero-img image-cover" key={post.feature_image} src={post.feature_image} alt={post.title} />
        </div>
      </article>
    </div>
  )
}

PostHero.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    feature_image: PropTypes.string,
    featured: PropTypes.bool,
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

export default PostHero
