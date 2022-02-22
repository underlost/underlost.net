import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

const PostItem = ({ post }) => {
  const url = `/writing/${post.slug}/`
  const readingTime = readingTimeHelper(post)

  return (
    <article className="post-item mb-2">
      <header className="post-item-header">
        <Link to={url}>
          <h3 className="h6 text-uppercase d-inline mb-0">{post.title}</h3>
          <span className="h6 text-uppercase d-inline ps-2 mb-0 text-muted">{readingTime}</span>
        </Link>
      </header>
    </article>
  )
}

PostItem.propTypes = {
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
  }).isRequired,
}

export default PostItem
