import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'
import LazyImage from './LazyImage'

const PopularCard = ({ post, index }) => {
  const url = `/writing/${post.slug}/`
  return (
    <article className={`mb-4 popular-card relative ${index === 1 ? `` : `lg:px-11`}`}>
      <header className="card post-card-header px-lg-4 bg-transparent">
        {post.feature_image && (
          <Link className="post-card-link d-block" to={url}>
            <div className="card-image-wrapper aspect-square">
              <LazyImage className="card-image h-full w-full" key={post.feature_image} src={post.feature_image} alt={post.title} />
            </div>
          </Link>
        )}
        <div className="pt-4 pb-4 lg:px-8 lg:text-center lg:min-h-32">
          {post.primary_tag && (
            <Link to={`/tag/${post.primary_tag.slug}/`} className="subtitle block">
              {post.primary_tag.name}
            </Link>
          )}
          <Link to={url}>
            <h2 className="h3 card-title inline">{post.title}</h2>
          </Link>
        </div>
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
  index: PropTypes.number.isRequired,
}

const PopularPostsBlock = () => {
  const data = useStaticQuery(query)
  const posts = data.allGhostPost.edges

  return (
    <div className="container mx-auto lg:py-16">
      <section className="post-feed-vertical">
        <div className="post-feed-header relative mb-16">
          <h3 className="text-wide text-center text-5xl font-black relative z-10 dark:text-blue-light">
            <span className="highlight highlight-right">Popular</span>
          </h3>
        </div>

        <div className="lg:grid lg:grid-cols-3 gap-11 items-end px-8 lg:px-0">
          {posts.map(({ node }, index) => (
            <PopularCard key={node.id} post={node} index={index} />
          ))}
        </div>
      </section>
    </div>
  )
}

const query = graphql`
  query GhostPopularPostsQuery {
    allGhostPost(sort: { published_at: DESC }, filter: { tags: { elemMatch: { name: { eq: "#popular" } } } }, limit: 3) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`

export default PopularPostsBlock
