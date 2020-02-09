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
      //const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
      return (
        <Img
          alt={props.alt}
          className={`image-wrapper`}
          fluid={image.node.childImageSharp.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
          style={{ position: `fixed`, right: 0, left: 0, top: 0, bottom: 0 }}
        />
      )
    }}
  />
)

BackgroundFixed.propTypes = {
  filename: PropTypes.node.isRequired,
  alt: PropTypes.string,
}

export default BackgroundFixed
