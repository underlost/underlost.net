import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
//import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import dayjs from 'dayjs'
let relativeTime = require(`dayjs/plugin/relativeTime`)
dayjs.extend(relativeTime)

const PhotoCard = ({ post }) => {
  const url = `/photos/${post.slug}/`

  return (
    <aside className="photo-card py-lg-3 mb-5 lg:mb-8 relative rounded overflow-hidden block shadow-lg">
      <Link to={url} className="block">
        {post.feature_image ? (
          <>
            <img className="w-full h-auto block" src={post.feature_image} alt={post.title} />
            <div className="photo-card-overlay" />
          </>
        ) : null}
        <div className="hidden lg:block lg:absolute inset-0">
          <div className="lg:absolute bottom-0 left-0 right-0 photo-card-inner">
            <div className="mb-6 photo-card-title">
              <h2 className="text-white text-center font-black text-lg px-11">{post.title}</h2>
            </div>
          </div>
        </div>
      </Link>
    </aside>
  )
}

PhotoCard.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    published_at: PropTypes.string,
    updated_at: PropTypes.string,
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

export default PhotoCard
