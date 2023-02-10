import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import ArticleText from './common/ArticleText'
import ArticleHero from './common/ArticleHero'
import ArticleCardLarge from './common/ArticleCardLarge'

// Check if post has a featured Image or not
const ContinueReadingCards = ({ post }) => {
  const isCoverStory = post.tags.some(tag => tag.name === `#coverstory`)

  return (
    <>
      {post.feature_image ? (
        <>
          {isCoverStory ? (
            <ArticleHero key={post.slug} post={post} />
          ) : (
            <div className="py-16">
              <ArticleCardLarge key={post.slug} post={post} />
            </div>
          )}
        </>
      ) : (
        <ArticleText key={post.slug} post={post} />
      )}
    </>
  )
}

ContinueReadingCards.propTypes = {
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

const RecentSection = ({ data }) => {
  const posts = data.allGhostPost.edges

  return (
    <section className="section-recent-posts pt-5 px-8 lg:px-0 container mx-auto">
      {posts.map(({ node }) => (
        <ContinueReadingCards key={node.id} post={node} />
      ))}
    </section>
  )
}

RecentSection.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.object,
    allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
}

const RecentBlock = props => (
  <StaticQuery
    query={graphql`
      query GhostRecentContinuedBlockQuery {
        allGhostPost(sort: { published_at: DESC }, filter: { tags: { elemMatch: { name: { eq: "#blog" } } } }, limit: 10, skip: 0) {
          edges {
            node {
              ...GhostPostFields
            }
          }
        }
      }
    `}
    render={data => <RecentSection data={data} {...props} />}
  />
)

export default RecentBlock
