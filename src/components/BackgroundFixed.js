import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const BackgroundFixed = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => n.node.relativePath.includes(props.filename))
      if (!image) {
        return null
      }
      return (
        <div className="glitch d-none d-md-block">
          <div className="glitch__img"></div>
          <div className="glitch__img"></div>
          <div className="glitch__img"></div>
          <div className="glitch__img"></div>
          <div className="glitch__img"></div>
        </div>
      )
    }}
  />
)

BackgroundFixed.propTypes = {
  filename: PropTypes.node.isRequired,
  alt: PropTypes.string,
}

export default BackgroundFixed
