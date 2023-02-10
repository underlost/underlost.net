import React from 'react'
import PropTypes from 'prop-types'

const LinkArrow = ({ text, url, light = false }) => (
  <a className="font-bold btn-link has-arrow whitespace-nowrap hover:underline hover:text-pink" href={url}>
    {text}
    <span className="inline-block px-1 arrow pb-[0.1em]">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="6" viewBox="0 0 22 6">
        <path stroke={light ? `#fff` : `#03080F`} fill="none" fillRule="evenodd" d="M0 3h21m-3-3 3 3-3 3" />
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
