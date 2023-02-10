import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ArticleCard } from '../components/common'

const FeaturedCards = ({ data }) => {
  const posts = data.allGhostPost.edges

  return (
    <section className="featured-cards-wrapper pb-0">
      <span className="sr-only">Featured Articles</span>
      {posts.map(({ node }) => (
        <ArticleCard key={node.id} post={node} />
      ))}
    </section>
  )
}

FeaturedCards.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.object,
    allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
}

const FeaturedCardsBlock = props => (
  <StaticQuery
    query={graphql`
      query GhostFeaturedCardsQuery {
        allGhostPost(sort: { published_at: DESC }, filter: { featured: { eq: true } }, limit: 1) {
          edges {
            node {
              ...GhostPostFields
            }
          }
        }
      }
    `}
    render={data => <FeaturedCards data={data} {...props} />}
  />
)

export default FeaturedCardsBlock
