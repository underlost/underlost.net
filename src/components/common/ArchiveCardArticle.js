import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import LazyImage from '../LazyImage'

const ArchiveCardArticle = ({ post }) => {
  const url = `/writing/${post.slug}/`

  return (
    <article className="post-card post-card-article py-4 lg:py-8">
      {post.primary_tag && (
        <Link className="subtitle" to={`/tag/${post.primary_tag.slug}/`}>
          {post.primary_tag.name}
        </Link>
      )}
      <header className="post-card-header">
        <Link className="post-card-link block mb-4" to={url}>
          <h2 className="h2 card-title inline relative">{post.title}</h2>
          {post.feature_image && (
            <div className="h-64 lg:h-96 rounded-lg overflow-hidden mt-3">
              <LazyImage className="h-full" key={post.feature_image} src={post.feature_image} alt={post.title} />
            </div>
          )}
        </Link>
      </header>

      <section className="excerpt text-lg font-light leading-normal mb-4">
        <p>{post.excerpt}</p>
      </section>

      <footer className="post-card-footer ">
        {post.tags && (
          <div className="post-card-tags h6 text-uppercase mb-1">
            <span className="sr-only">Posted in:</span> <Tags post={post} permalink={`/tag/:slug`} visibility="public" autolink={true} classes="tag-item" separatorClasses="hidden" />
          </div>
        )}
        <div className="sr-only">
          <span>By: {post.primary_author.name}</span>
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
