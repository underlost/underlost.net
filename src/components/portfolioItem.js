import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'

import Image from './Image'


const PortfolioItem = props => (
  <Fade big cascade>
    <div key={props.guid} className={`project-item portfolio-item`}>
      <div className={`project-cover`}>
        <Image filename={props.cover} alt={props.title} />
      </div>
      <div className={`mt-3`}>
        <span className={`h6 title guid`}>{props.guid}</span>
        <h3 className={`h4 headline text-uppercase`}>
          <Link to={props.permalink}>{props.title}</Link>
        </h3>
      </div>
      <div className={`lead`}>{props.description}</div>
    </div>
  </Fade>
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
