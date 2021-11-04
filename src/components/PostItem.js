import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const PostItem = (props) => {
  return (
    <li className="d-block mb-3">
      <a className="btn btn-primary btn-block text-start w-100" title={props.alt} href={props.website} rel="noopener noreferrer" target="_blank">
        {props.title}
      </a>
      <small className="sr-only">({props.alt})</small>
    </li>
  )
}

PostItem.propTypes = {
  website: PropTypes.node.isRequired,
  layout: PropTypes.string,
  website: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string,
  alt: PropTypes.string,
  icon: PropTypes.string,
}

export default LinkButton
