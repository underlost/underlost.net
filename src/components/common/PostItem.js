import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

const PostItem = ({ post }) => {
  const url = `/writing/${post.slug}/`
  const readingTime = readingTimeHelper(post)

  return (
    <article className="post-item">
      <header className="post-item-header font-semibold">
        <Link to={url} className="block md:flex uppercase tracking-wider transition duration-150 ease-out hover:text-pink hover:translate-x-1">
          <h3 className="pr-3">{post.title}</h3>
          <span className="opacity-50">{readingTime}</span>
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
