/* eslint react/display-name: 0 */
import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import { useTrail } from 'react-spring'
import Page from "../templates/page"
import BasicLayout from "../templates/basic"
import ProjectLinks from "../components/projectsGrid"

const Portfolio = ({
  data: {
    allMdx: { edges: portfolioEdges },
  },
  location,
  }) => {

  return (
    <Page>
      <BasicLayout>
      <p>these are some Selected Works</p>

      <hr />

        {portfolioEdges.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div key={node.fields.slug}>
                  <h3>
                    <Link style={{ boxShadow: `none` }} to={node.fields.path}>
                      {title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                </div>
              )
        })}

        <hr />

        <ProjectLinks/>

      </BasicLayout>
    </Page>
  )
}

export default Portfolio

Portfolio.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query PortfolioQuery {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { sourceInstanceName: { eq: "portfolio" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            color
            guid
            title
            size
            description
          }
        }
      }
    }
  }
`
