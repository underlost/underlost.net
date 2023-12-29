import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import LazyImage from '../LazyImage'

const ArticleCardLarge = ({ post }) => {
  const url = `/writing/${post.slug}/`
  const readingTime = readingTimeHelper(post)

  return (
    <article className="card max-w-3xl mx-auto">
      <div className="lg:grid lg:grid-cols-12 gap-8">
        {post.feature_image && (
          <Link to={url} className="col-span-4">
            <div className="card-image-wrapper aspect-square rounded-xl overflow-hidden">
              <LazyImage className="post-card-image h-full w-full" key={post.feature_image} src={post.feature_image} alt={post.title} />
            </div>
          </Link>
        )}
        <div className="col-span-8 flex">
          <div className="my-auto">
            <header className="post-card-header mb-1">
              <Link className="post-card-link block" to={url}>
                <div className="pt-6 lg:pt-0">
                  {post.primary_tag && <p className="subtitle mb-1">{post.primary_tag.name}</p>}
                  <h2 className="card-title h2 inline">{post.title}</h2>
                </div>
              </Link>
            </header>
            <section className="card-body post-card-excerpt text-lg font-light">
              <p className="mb-4">{post.excerpt}</p>
            </section>
            <footer className="post-card-footer">
              <div className="post-card-footer-author sr-only">
                <span>By: {post.primary_author.name}</span>
              </div>
              <div className="uppercase font-semibold text-narrow whitespace-nowrap">
                <span className="sr-only">Reading Time:</span> {readingTime}
              </div>
            </footer>
          </div>
        </div>
      </div>
    </article>
  )
}

ArticleCardLarge.propTypes = {
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

export default ArticleCardLarge
