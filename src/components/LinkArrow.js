import React from 'react'
import PropTypes from 'prop-types'

const LinkArrow = ({ text, url, light = false }) => (
  <a className="font-bold btn-link has-arrow whitespace-nowrap hover:underline hover:text-pink" href={url}>
    {text}
    <span className="inline-block px-1 arrow">
      <svg width="23" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.087 5.464v3.072h-3.095v1.56h-3.073v1.536h-3.095v1.536H9.752V8.536H.487V5.464h9.265V.832h3.072v1.536h3.095v1.536h3.073v1.56h3.095Z" fill={light ? `#fff` : `#03080F`} />
      </svg>
    </span>
  </a>
)

export default LinkArrow

LinkArrow.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  light: PropTypes.bool,
}
