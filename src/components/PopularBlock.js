import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'
import LazyImage from './LazyImage'

const PopularCard = ({ post }) => {
  const url = `/writing/${post.slug}/`
  return (
    <article className="mb-4 px-8 lg:px-0 popular-card relative">
      <header
        className="card post-card-header px-lg-4"
        style={{
          backgroundColor: `transparent`,
        }}
      >
        <Link className="post-card-link d-block" to={url}>
          {post.feature_image && (
            <div className="card-image aspect-square">
              <LazyImage className="post-card-image h-full" key={post.feature_image} src={post.feature_image} alt={post.title} />
            </div>
          )}
          <div className="pt-4 pb-4 lg:px-8 popular-dash-block">
            {post.primary_tag && <p className="subtitle">{post.primary_tag.name}</p>}
            <h2 className="h3 card-title">{post.title}</h2>
          </div>
        </Link>
      </header>
    </article>
  )
}

PopularCard.propTypes = {
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
    excerpt: PropTypes.string.isRequired,
    primary_author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      profile_image: PropTypes.string,
    }).isRequired,
  }).isRequired,
}

const PopularPostsBlock = () => {
  const data = useStaticQuery(query)
  const posts = data.allGhostPost.edges

  return (
    <div className="popular-cards-wrapper w-100 lg:py-16">
      <section className="post-feed-vertical">
        <div className="post-feed-header relative mb-16">
          <h3 className="text-wide text-center text-5xl font-black relative z-10 dark:text-pink">
            <span className="highlight highlight-right">Popular</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0 justify-content-center popular-cards">
          {posts.map(({ node }) => (
            <PopularCard key={node.id} post={node} />
          ))}
        </div>
      </section>
    </div>
  )
}

const query = graphql`
  query GhostPopularPostsQuery {
    allGhostPost(sort: { published_at: DESC }, filter: { tags: { elemMatch: { name: { eq: "#popular" } } } }, limit: 4) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`

export default PopularPostsBlock
