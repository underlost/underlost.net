import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import { Remarkable } from 'remarkable'

const md = new Remarkable()

const PostText = ({ post }) => {
  const url = `/writing/${post.slug}/`
  const readingTime = readingTimeHelper(post)
  const postExcept = md.render(post.excerpt)

  return (
    <div className="post-text-wrapper container text-center py-5">
      <article className="post-text mb-2 mx-auto" style={{
        maxWidth: `720px`,
      }}>
        <header className="post-text-header">
          <Link to={url}>
            <h3 className="h4 text-uppercase d-inline mb-0">{post.title}</h3>
            <span className="post-text-excerpt d-inline ps-2 mb-0" dangerouslySetInnerHTML={{ __html: postExcept }} />
            <span className="h6 text-uppercase d-inline ps-2 mb-0">{readingTime}</span>
          </Link>
        </header>
      </article>
    </div>
  )
}

PostText.propTypes = {
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

export default PostText
