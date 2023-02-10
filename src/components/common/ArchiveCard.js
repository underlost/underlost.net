import React from 'react'
import PropTypes from 'prop-types'
import ArchiveCardLink from './ArchiveCardLink'
import ArchiveCardArticle from './ArchiveCardArticle'

const ArchiveCard = ({ post }) => {
  // Check if post is a link list item
  const isLinked = post.tags.some(tag => (tag.name === `#linked`))
  //console.log(isLinked)
  //console.log(post.tags)
  return (
    <>
      {isLinked ? (
        <ArchiveCardLink key={post.id} post={post} />
      ) : (
        <ArchiveCardArticle key={post.id} post={post} />
      )}
    </>
  )
}

ArchiveCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
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

export default ArchiveCard
