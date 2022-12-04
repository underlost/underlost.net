import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const Background = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(props.filename))
      if (!image) {
        return null
      }
      return (
        <GatsbyImage
          alt={props.alt}
          className={`h-full w-full object-cover ${props.className}`}
          image={image.node.childImageSharp.gatsbyImageData}
          objectFit="cover"
          objectPosition="50% 50%"
        />
      )
    }}
  />
)

Background.propTypes = {
  filename: PropTypes.node.isRequired,
  alt: PropTypes.string,
}

export default Background
