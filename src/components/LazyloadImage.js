import PropTypes from 'prop-types'
import React, { Component } from 'react'
import VisibilitySensor from '../components/VisibilitySensor'

class LazyloadImage extends Component {
  render() {
    let srcSetAttributeValue = ``
    let sanitiseImageSrc = this.props.src.replace(` `, `%20`)

    // Iterate through the array of values from the "srcsetSizes" array property.
    if (this.props.srcsetSizes !== undefined && this.props.srcsetSizes.length > 0) {
      for (let i = 0; i < this.props.srcsetSizes.length; i++) {
        srcSetAttributeValue += `${sanitiseImageSrc}?tr=w-${this.props.srcsetSizes[i].imageWidth} ${this.props.srcsetSizes[i].viewPortWidth}w`

        if (this.props.srcsetSizes.length - 1 !== i) {
          srcSetAttributeValue += `, `
        }
      }
    }

    return (
      <VisibilitySensor key={sanitiseImageSrc} delayedCall={true} partialVisibility={true} once>
        {({ isVisible }) => (
          <>
            {isVisible ? (
              <img className={this.props.className} src={`${sanitiseImageSrc}?tr=w-${this.props.widthPx}`} alt={this.props.alt} srcSet={srcSetAttributeValue} />
            ) : (
              <img className={this.props.className} src={`${sanitiseImageSrc}?tr=w-${this.props.defaultWidthPx}`} alt={this.props.alt} />
            )}
          </>
        )}
      </VisibilitySensor>
    )
  }
}

LazyloadImage.propTypes = {
  alt: PropTypes.string,
  defaultWidthPx: PropTypes.number,
  sizes: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string,
  srcsetSizes: PropTypes.arrayOf(
    PropTypes.shape({
      imageWidth: PropTypes.number,
      viewPortWidth: PropTypes.number,
    })
  ),
  widthPx: PropTypes.number,
}

LazyloadImage.defaultProps = {
  alt: ``,
  defaultWidthPx: 50,
  sizes: ``,
  src: ``,
  className: ``,
  widthPx: 50,
}

export default LazyloadImage