import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'

import Image from './Image'

const ProjectItem = props => (
  <div key={props.guid} className={`project-item`}>
    <Fade bottom>
      <div className={`project-cover`}>
        <Image filename={props.cover} alt={props.title} />
      </div>
      <div className={`mt-3`}>
        <span className={`h6 title guid`}>{props.guid}</span>
        <h3 className={`h4 headline text-uppercase mb-0`}>
          <Link to={props.permalink}>{props.title}</Link>
        </h3>
      </div>
      <p>{props.description}</p>
    </Fade>
  </div>
)

ProjectItem.propTypes = {
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

export default ProjectItem
