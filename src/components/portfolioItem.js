import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'

import Image from './Image'


const PortfolioItem = props => (
  <div key={props.guid} className={`project-item portfolio-item col-6`}>
    <Fade big>
      <div className={`project-cover`}>
        <Image filename={props.cover} alt={props.title} />
      </div>
      <div className={`mt-3`}>
        <span className={`h6 title guid`}>{props.guid}</span>
        <h3 className={`h4 headline text-uppercase mb-0`}>
          <Link to={props.permalink}>{props.title}</Link>
        </h3>
      </div>
      <p className={`sr-only`}>{props.description}</p>
    </Fade>
  </div>
)

PortfolioItem.propTypes = {
  guid: PropTypes.node.isRequired,
  cover: PropTypes.string,
  title: PropTypes.string,
  permalink: PropTypes.string,
  description: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.string,
  col1Order: PropTypes.string,
  col2Order: PropTypes.string,
  col1Width: PropTypes.string,
  col2Width: PropTypes.string,
}

export default PortfolioItem
