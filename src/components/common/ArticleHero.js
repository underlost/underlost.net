import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import LazyImage from '../LazyImage'

const ArticleHero = ({ post }) => {
  const url = `/writing/${post.slug}/`
  const readingTime = readingTimeHelper(post)
  //const isCoverStory = post.tags.some(tag => tag.name === `#coverstory`)

  return (
    <>
      <Link to={url} className="py-8 md:py-12 relative block lg:h-[90vh]">
        <article className="relative h-full">
          <div className="bg-gradient-to-t from-black absolute inset-0 z-20 transition duration-300 ease-in hidden lg:block"></div>
          <LazyImage className="object-cover relative h-full" key={post.feature_image} src={post.feature_image} alt={post.title} />
          <div className="lg:absolute bottom-10 z-30 left-0 right-0">
            <div className="container mx-auto">
              <header className="bg-transparent z-20 px-0">
                <div className="block w-100 lg:text-white lg:text-center pt-5">
                  {post.primary_tag && <p className="subtitle mb-1">{post.primary_tag.name}</p>}
                  <h3 className="text-2xl lg:text-4xl uppercase font-black text-wide">{post.title}</h3>
                  {post.custom_excerpt && <p className="lead">{post.custom_excerpt}</p>}
                  <span className="h6 uppercase mb-0 text-narrow">{readingTime}</span>
                </div>
              </header>
            </div>
          </div>
        </article>
      </Link>
    </>
  )
}

ArticleHero.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    primary_tag: PropTypes.PropTypes.object,
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

export default ArticleHero
