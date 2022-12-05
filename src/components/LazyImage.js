import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { handleViewport } from 'react-in-viewport'

const INIT = 0
const LOADING = 1
const LOADED = 2

const ImageObject = props => {
  const { src: originalSrc, forwardedRef, inViewport, alt, className } = props
  const [src, setSrc] = useState(null)
  const [status, setStatus] = useState(INIT)

  const loadImage = imageSrc => {
    const img = new Image() // eslint-disable-line
    setStatus(LOADING)
    img.onload = () => {
      setSrc(imageSrc)
      setStatus(LOADED)
    }
    img.alt = alt
    img.src = imageSrc
  }

  useEffect(() => {
    if (inViewport && status === INIT) {
      loadImage(originalSrc)
    }
  }, [inViewport, status])

  const getBackgroundColor = () => {
    switch (status) {
      case LOADING:
        return `rgba(0,0,0,.32)`
      case LOADED:
        return `rgba(0,0,0,.50)`
      case INIT:
      default:
        return `rgba(0,0,0,.12)`
    }
  }

  return (
    <div
      className={className}
      style={{
        transitionDuration: `300ms`,
        maxWidth: `100%`,
        backgroundColor: getBackgroundColor(),
      }}
      ref={forwardedRef}
    >
      <img className="w-full h-full object-cover" width="100%" height="100%" src={src} alt={alt} />
    </div>
  )
}

const LazyImage = handleViewport(ImageObject, {}, { disconnectOnLeave: true })
export default LazyImage

ImageObject.propTypes = {
  src: PropTypes.string.isRequired,
  forwardedRef: PropTypes.string,
  inViewport: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
}

ImageObject.defaultProps = {
  alt: `Image`,
  className: ``,
}
