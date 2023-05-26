import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import LazyImage from '../LazyImage'

const ArticleCardSquare = ({ post }) => {
  const url = `/writing/${post.slug}/`
  const readingTime = readingTimeHelper(post)

  return (
    <article className="card">
      <div className="">
        <header className="post-card-header mb-8 aspect-square bg-slate relative">
          <Link className="post-card-link block" to={url}>
            {post.feature_image && (
              <div className="card-image absolute inset-0">
                <LazyImage className="post-card-image absolute inset-0" key={post.feature_image} src={post.feature_image} alt={post.title} />
              </div>
            )}
          </Link>
          <div className="absolute -bottom-5 left-8 bg-green pl-10 pr-10 xl:pl-8 xl:pr-20 py-5 text-black">
            <Link className="bg-green" to={url}>
              {post.primary_tag && <p className="subtitle">{post.primary_tag.name}</p>}
              <h2 className="card-title h2">{post.title}</h2>
            </Link>
          </div>
        </header>

        <section className="card-body post-card-excerpt text-lg font-light px-8">
          <p className="mb-4">{post.excerpt}</p>
        </section>
      </div>

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

ArticleCardSquare.propTypes = {
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

export default ArticleCardSquare
