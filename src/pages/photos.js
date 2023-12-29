import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'
import { PhotoCard } from '../components/common'

/**
 *
 * Photography page. Pulls Content from photography Ghost page.
 *
 */
const PhotographyPage = ({ data, location }) => {
  const page = data.ghostPage
  const posts = data.allGhostPost.edges

  return (
    <Layout>
      <MetaData data={data} location={location} type="website" />
      <div className="gh-content gh-canvas py-5">
        {page ? (
          <article>
            <h1 className="title-h3 mb-5 text-center">{page.title}</h1>
            <div className="content-body load-external-scripts" dangerouslySetInnerHTML={{ __html: page.html }} />
          </article>
        ) : null}
      </div>

      <section className="photo-stream container mx-auto px-8">
        <div className="columns-2 md:columns-3 xl:columns-4 gap-4 lg:gap-8 transition duration-150 ease-in-out">
          {posts.map(({ node }) => (
            <PhotoCard key={node.id} post={node} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

PhotographyPage.propTypes = {
  data: PropTypes.shape({
    allGhostPost: PropTypes.object.isRequired,
    ghostPage: PropTypes.shape({
      codeinjection_styles: PropTypes.object,
      title: PropTypes.string.isRequired,
      html: PropTypes.string,
      feature_image: PropTypes.string,
    }).isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.object,
}

export default PhotographyPage

// This page query loads all posts sorted descending by published date
export const pageQuery = graphql`
  query GhostPhotographyQuery {
    ghostPage(slug: { eq: "photography" }) {
      ...GhostPageFields
    }
    allGhostPost(sort: { published_at: DESC }, filter: { tags: { elemMatch: { name: { eq: "#photos" } } } }, limit: 50) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`
