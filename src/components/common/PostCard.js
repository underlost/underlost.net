import React from 'react'
import PropTypes from 'prop-types'
import PostCardLink from './PostCardLink'
import PostCardArticle from './PostCardArticle'
const PostCard = ({ post }) => {
  // Check if post is a link list item
  const isLinked = post.tags.some(tag => (tag.name === `#linked`))
  //console.log(isLinked)
  //console.log(post.tags)
  return (
    <>
      {isLinked ? (
        <PostCardLink key={post.id} post={post} />
      ) : (
        <PostCardArticle key={post.id} post={post} />
      )}
    </>
  )
}

PostCard.propTypes = {
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

export default PostCard
