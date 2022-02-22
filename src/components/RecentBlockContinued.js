import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import PostText from './common/PostText'
import PostHero from './common/PostHero'

// Check if post has a featured Image or not
const ContinueReadingCard = ({ post }) => <>{post.feature_image ? <PostHero key={post.slug} post={post} /> : <PostText key={post.slug} post={post} />}</>

ContinueReadingCard.propTypes = {
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

const RecentContinued = ({ data }) => {
  const posts = data.allGhostPost.edges

  return (
    <section className="section-recent-posts pt-5">
      {posts.map(({ node }) => (
        <ContinueReadingCard key={node.id} post={node} />
      ))}
    </section>
  )
}

RecentContinued.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.object,
    allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
}

const RecentBlockContinued = props => (
  <StaticQuery
    query={graphql`
      query GhostRecentContinuedBlockQuery {
        allGhostPost(sort: { order: DESC, fields: [published_at] }, filter: { tags: { elemMatch: { name: { eq: "#blog" } } } }, limit: 10, skip: 0) {
          edges {
            node {
              ...GhostPostFields
            }
          }
        }
      }
    `}
    render={data => <RecentContinued data={data} {...props} />}
  />
)

export default RecentBlockContinued
