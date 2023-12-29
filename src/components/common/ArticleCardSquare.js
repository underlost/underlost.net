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
        <header className="post-card-header mb-8 aspect-square relative">
          <Link className="post-card-link block" to={url}>
            {post.feature_image && (
              <div className="card-image-wrapper absolute inset-0 aspect-square">
                <LazyImage className="card-image absolute inset-0 h-full w-full" key={post.feature_image} src={post.feature_image} alt={post.title} />
              </div>
            )}
          </Link>
          <div className="relative lg:absolute z-20 lg:-bottom-5 lg:left:8 lg:left-0 pl-0 pr-10 xl:pl-0 xl:pr-20 pt-5 bg-light dark:bg-almost-black lg:-translate-x-16 rounded-xl">
            <Link className="" to={url}>
              {post.primary_tag && <p className="subtitle">{post.primary_tag.name}</p>}
              <h2 className="card-title text-2xl font-black">{post.title}</h2>
            </Link>
          </div>
        </header>
        <section className="card-body post-card-excerpt text-lg font-light pl-0 pr-8 xl:pr-20 lg:-translate-x-16">
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
