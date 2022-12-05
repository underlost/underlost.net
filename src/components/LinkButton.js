import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const LinkButton = props => {
  const buttonType = props.layout
  if (buttonType === `link`) {
    return (
      <li className="d-block mb-4">
        <a className="btn btn-primary btn-block text-start w-100 py-3" title={props.alt} href={props.website} rel="noopener noreferrer" target="_blank">
          <span className="h6 d-block mb-0 text-uppercase">{props.title}</span>
          <small className="fw-normal d-block mb-0">{props.alt}</small>
        </a>
      </li>
    )
  } else {
    return (
      <li className="d-block mb-4">
        <Link className="btn btn-primary btn-block text-center w-100 py-3" title={props.alt} to={props.slug}>
          <span className="h6 d-block">{props.title}</span>
          <small className="fw-normal d-block mb-0">{props.alt}</small>
        </Link>
      </li>
    )
  }
}

LinkButton.propTypes = {
  website: PropTypes.node.isRequired,
  layout: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string,
  alt: PropTypes.string,
  icon: PropTypes.string,
}

export default LinkButton
