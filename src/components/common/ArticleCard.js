import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import { Remarkable } from 'remarkable'
import LazyloadImage from '../../components/LazyloadImage'

const md = new Remarkable()
const ArticleCard = ({ post }) => {
  const url = `/writing/${post.slug}/`
  const readingTime = readingTimeHelper(post)
  const postExcept = md.render(post.excerpt)

  return (
    <article className="card mb-4">
      <header className="post-card-header">
        <Link className="post-card-link d-block" to={url}>
          {post.feature_image && (
            <div className="post-card-image-wrapper">
              <LazyloadImage className="post-card-image" src={post.feature_image} widthPx={400} alt={post.title} />
            </div>
          )}
          <div className="pt-4 px-4">
            {post.primary_tag && <p className="post-card-tags h6 text-uppercase mb-1">{post.primary_tag.name}</p>}
            <h2 className="post-card-title h2">{post.title}</h2>
          </div>
        </Link>
      </header>

      <div className="card-body px-4 post-card-excerpt" dangerouslySetInnerHTML={{ __html: postExcept }} />

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

ArticleCard.propTypes = {
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

export default ArticleCard
