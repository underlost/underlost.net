import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import { auto } from '@popperjs/core'
import LazyImage from './LazyImage'

const PopularCard = ({ post }) => {
  const url = `/writing/${post.slug}/`
  return (
    <article className="col-12 col-md-6 col-xl-3 mb-4">
      <header
        className="card post-card-header px-lg-4"
        style={{
          backgroundColor: `transparent`,
        }}
      >
        <Link className="post-card-link d-block" to={url}>
          {post.feature_image && (
            <div className="post-card-image-wrapper">
              <LazyImage className="post-card-image" key={post.feature_image} src={post.feature_image} alt={post.title} />
            </div>
          )}
          <div className="pt-4 px-0">
            {post.primary_tag && <p className="post-card-tags h6 text-uppercase mb-1 text-dark">{post.primary_tag.name}</p>}
            <h2 className="post-card-title h4 text-uppercase">{post.title}</h2>
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

const PopularPosts = ({ data }) => {
  const posts = data.allGhostPost.edges
  return (
    <div className="popular-cards-wrapper mb-5 w-100" style={{ overflow: `hidden` }}>
      <section className="post-feed-vertical bg-blue px-4 py-5 bg-blue">
        <div className="post-feed-header position-relative pb-4">
          <h3
            className="h1 text-uppercase text-center position-relative text-sans"
            style={{
              zIndex: 10,
            }}
          >
            Popular
          </h3>
          <div
            style={{
              position: `absolute`,
              left: 0,
              right: 0,
              top: `30px`,
              margin: auto,
            }}
          >
            <svg
              className="post-feed-vertical-line d-block mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="248"
              height="10"
              viewBox="0 0 248 10"
              style={{
                transform: `translateX(70px)`,
              }}
            >
              <defs>
                <linearGradient id="PopularLinearGradient" x1="1" x2="0" y1=".5" y2=".5" gradientUnits="objectBoundingBox">
                  <stop offset="0" stopColor="#e1bed8" />
                  <stop offset="1" stopColor="#fd6707" />
                </linearGradient>
              </defs>
              <path id="Rectangle" fill="url(#PopularLinearGradient)" d="M0 0h248v10H0z" />
            </svg>
          </div>
        </div>

        <div className="row justify-content-center">
          {posts.map(({ node }) => (
            // The tag below includes the markup for each post - components/common/PostCard.js
            <PopularCard key={node.id} post={node} />
          ))}
        </div>
      </section>
    </div>
  )
}

PopularPosts.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.object,
    allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
}

const PopularPostsBlock = (props) => (
  <StaticQuery
    query={graphql`
      query GhostPopularPostsQuery {
        allGhostPost(sort: { published_at: DESC }, filter: { tags: { elemMatch: { name: { eq: "#popular" } } } }, limit: 5) {
          edges {
            node {
              ...GhostPostFields
            }
          }
        }
      }
    `}
    render={(data) => <PopularPosts data={data} {...props} />}
  />
)

export default PopularPostsBlock
