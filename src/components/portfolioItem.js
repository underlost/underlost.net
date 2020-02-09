import React from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'
import Img from 'gatsby-image'
import dayjs from 'dayjs'
import MDXRenderer from 'gatsby-plugin-mdx'
import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce'
import PropTypes from 'prop-types'

const PortfolioItem = props => (
  <Fade big cascade>
    <div key={props.guid} className={`project-item portfolio-item`}>
      <div className={classnames(``, props.col1Order)}>
        <div className={`image-wrapper`}>
          <Img fluid={props.cover.childImageSharp.fluid} />
        </div>
        <div className={`mt-3`}>
          <span className={`h6 title guid`}>{props.guid}</span>
          <h3 className={`h4 headline text-uppercase`}>
            <Link to={props.permalink}>{props.title}</Link>
          </h3>
        </div>
      </div>
      <div className={classnames(``, props.col2Order)}>
        <div className={`lead pt-lg-5`}></div>
      </div>
    </div>
  </Fade>
)

PortfolioItem.propTypes = {
  guid: PropTypes.node.isRequired,
  cover: PropTypes.array,
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
