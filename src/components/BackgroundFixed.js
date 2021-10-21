import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const BackgroundFixed = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
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
        <div className="glitch d-none d-md-block">
          <div className="glitch__img"></div>
          <div className="glitch__img"></div>
          <div className="glitch__img"></div>
          <div className="glitch__img"></div>
          <div className="glitch__img"></div>
          <GatsbyImage
            alt={props.alt}
            className={`glitch`}
            image={image.node.childImageSharp.gatsbyImageData}
            placeholder="blurred"
            layout="fullWidth"
            objectFit="cover"
            objectPosition="50% 50%"
            style={{
              position: `fixed`,
              right: 0,
              left: 0,
              top: 0,
              bottom: 0,
              zIndex: 5,
            }}
            imgStyle={{
              objectFit: `cover`,
              objectPosition: `center left`,
            }}
          />
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
