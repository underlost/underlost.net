import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

const ArticleText = ({ post }) => {
  const url = `/writing/${post.slug}/`
  const readingTime = readingTimeHelper(post)

  return (
    <div className="post-text-wrapper text-center py-16 md:px-8">
      <article className="post-text mx-auto max-w-2xl">
        <header className="post-text-header">
          <Link to={url} className="block hover:underline dark:hover:text-green">
            <h3 className="inline pr-2 text-2xl text-wide">{post.title}</h3>
            <p className="post-text-excerpt inline font-light text-lg pr-3 leading-normal">{post.excerpt}</p>
            <span className="uppercase inline ps-2 font-semibold text-narrow whitespace-nowrap">{readingTime}</span>
          </Link>
        </header>
      </article>
    </div>
  )
}

ArticleText.propTypes = {
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

export default ArticleText
