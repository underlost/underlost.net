import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import ReactMarkdown from 'react-markdown'

const ArchiveCardLink = ({ post }) => {
  const isTwitter = post.tags.some(tag => tag.name === `#twitter`)
  const url = `/writing/${post.slug}/`

  return (
    <article className="post-card post-card-linked lg:py-3 mb-8">
      <header className="post-card-header">
        {post.featured && <span className="h6 text-uppercase mb-1 bg-orange  text-purple sr-only">Featured</span>}
        {post.primary_tag && <p className="subtitle">{post.primary_tag.name}</p>}
        <h2 className="post-card-title h6 uppercase font-bold mb-5">
          {isTwitter ? (
            <Link className="post-card-link inline border-b pb-1 hover:text-secondary" to="/twitter/">
              {post.title}
            </Link>
          ) : (
            <Link className="post-card-link inline border-b pb-1 hover:text-secondary" to={url}>
              {post.title}
            </Link>
          )}
        </h2>
      </header>

      <section className="excerpt font-light">
        <ReactMarkdown>{post.excerpt}</ReactMarkdown>
      </section>

      <footer className="post-card-footer sr-only">
        {post.tags && (
          <div className="post-card-tags h6 text-uppercase mb-1">
            <span className="sr-only">Posted in:</span> <Tags post={post} visibility="public" autolink={false} />
          </div>
        )}
        <div className="sr-only">
          <span>By: {post.primary_author.name}</span>
        </div>
      </footer>
    </article>
  )
}

ArchiveCardLink.propTypes = {
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

export default ArchiveCardLink
