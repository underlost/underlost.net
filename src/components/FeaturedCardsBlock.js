import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ArticleCard } from '../components/common'

const FeaturedCards = ({ data }) => {
  const posts = data.allGhostPost.edges

  return (
    <section className="featured-cards-wrapper mb-5 pb-0">
      <span className="sr-only">Featured Articles</span>
      {posts.map(({ node }) => (
        // The tag below includes the markup for each post - components/common/PostCard.js
        <ArticleCard key={node.id} post={node} />
        // {pageContext.humanPageNumber === 1 && <ReadFirstBlock />}
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
        allGhostPost(sort: { order: DESC, fields: [published_at] }, filter: { featured: { eq: true } }, limit: 2) {
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
