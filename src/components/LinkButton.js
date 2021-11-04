import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { faLink, faInfoCircle, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LinkButton = props => {
  const buttonType = props.layout
  if (buttonType == `link`) {
    var LinkButtonRendered = (
      <li className="d-block mb-4">
        <a className="btn btn-primary btn-block text-start w-100" title={props.alt} href={props.website} rel="noopener noreferrer" target="_blank">
          <span className="h5 d-block">{props.title}</span>
          <small className="h6 fw-normal d-block mb-0">{props.alt}</small>
        </a>
      </li>
    )
  } else {
    var LinkButtonRendered = (
      <li className="d-block mb-4">
        <Link className="btn btn-primary btn-block text-center w-100" title={props.alt} to={props.slug}>
          <span className="h5 d-block">{props.title}</span>
          <small className="h6 fw-normal d-block mb-0">{props.alt}</small>
        </Link>
      </li>
    )
  }
  return LinkButtonRendered
}

LinkButton.propTypes = {
  website: PropTypes.node.isRequired,
  layout: PropTypes.string,
  website: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string,
  alt: PropTypes.string,
  icon: PropTypes.string,
}

export default LinkButton
