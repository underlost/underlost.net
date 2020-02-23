import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = props => {
  const btnType = props.btnType
  if (btnType == `link`) {
    var ButtonRendered = (
      <a className={`btn btn-secondary text-uppercase`} title={props.alt} href={props.website} rel="noopener noreferrer" target="_blank">
        <span className={`pr-md-3`}>{props.title}</span>
        <FontAwesomeIcon icon={faAngleDoubleRight} fixedWidth />
      </a>
    )
  } else {
    var ButtonRendered = (
      <Link className={`btn btn-secondary text-uppercase`} title={props.alt} to={props.website}>
        <span className={`pr-md-3`}>{props.title}</span>
        <FontAwesomeIcon icon={faAngleDoubleRight} fixedWidth />
      </Link>
    )
  }
  return ButtonRendered
}

Button.propTypes = {
  website: PropTypes.node.isRequired,
  btnType: PropTypes.string,
  website: PropTypes.string,
  title: PropTypes.string,
  alt: PropTypes.string,
}

export default Button
