import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

const ArticleListItem = ({ post }) => {
  const url = `/writing/${post.slug}/`
  const readingTime = readingTimeHelper(post)

  return (
    <article className="article-item">
      <header className="post-item-header font-semibold">
        <Link to={url} className="article-item-link">
          <h3 className="article-item-title">{post.title}</h3>
          <span className="reading-time inline-block">{readingTime}</span>
        </Link>
      </header>
    </article>
  )
}

ArticleListItem.propTypes = {
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

export default ArticleListItem
