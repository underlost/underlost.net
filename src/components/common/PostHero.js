import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import LazyImage from '../LazyImage'

const PostHero = ({ post }) => {
  const url = `/writing/${post.slug}/`
  const readingTime = readingTimeHelper(post)
  const isCoverStory = post.tags.some(tag => tag.name === `#coverstory`)

  return (
    <>
      {isCoverStory ? (
        <Link to={url} className="py-8 md:py-12 px-8 md:px-0 relative">
          <article className="relative">
            <div className="relative">
              <div className="bg-gradient-to-t from-black absolute inset-0 z-20 transition duration-300 ease-in"></div>
              <LazyImage className="object-cover relative" key={post.feature_image} src={post.feature_image} alt={post.title} />
            </div>
            <div className="md:absolute bottom-10 z-30 left-0 right-0">
              <div className="container mx-auto">
                <header className="bg-black md:bg-transparent z-20 px-8 lg:px-0 pb-8 lg:pb-0">
                  <div className="block w-100 text-white">
                    <h3 className="text-2xl lg:text-4xl font-serif uppercase lg:py-5">{post.title}</h3>
                    {post.custom_excerpt && <p className="lead">{post.custom_excerpt}</p>}
                    <span className="h6 uppercase mb-0">{readingTime}</span>
                  </div>
                </header>
              </div>
            </div>
          </article>
        </Link>
      ) : (
        <div className="max-w-6xl mx-auto postHero py-8 md:py-12 px-8 md:px-0 relative">
          <article className="relative h-96 lg:h-[32rem] bg-latte overflow-hidden">
            <Link to={url} className="flex relative z-40 px-4 lg:px-8 content-end h-full">
              <header className="post-hero-header mb-0 mt-auto py-8 w-full">
                <div className="block w-100 text-white" style={{ borderTop: `1px solid #fff` }}>
                  <h3 className="h2 uppercase pt-5">{post.title}</h3>
                  <span className="h6 uppercase mb-0">{readingTime}</span>
                </div>
              </header>
            </Link>
            <div className="postHero-img-wrapper">
              <div className="gradient-overlay"></div>
              <LazyImage className="postHero-img object-cover absolute inset-0" key={post.feature_image} src={post.feature_image} alt={post.title} />
            </div>
          </article>
        </div>
      )}
    </>
  )
}

PostHero.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    custom_excerpt: PropTypes.string,
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

export default PostHero
