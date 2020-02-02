import React from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'
import Img from 'gatsby-image'
import dayjs from 'dayjs'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce'

class PortfolioItem extends React.Component {
  constructor(props) {
    super(props)
    this.guid = props.guid
    this.title = props.title
    this.permalink = props.permalink
    this.date = dayjs(props.date).format(`DD MMMM YYYY`)
    this.description = props.description
    this.col1Width = props.col1Width
    this.col2Width = props.col2Width
    this.col1Order = props.col1Order
    this.col2Order = props.col2Order
    this.cover = props.cover
    this.body = props.body
  }

  render() {
    return (
      <Fade big cascade>
        <div key={this.guid} className={`row no-gutters project-item portfolio-item`}>
          <div className={classnames(``, this.col1Width, this.col1Order)}>
            <div className={`image-wrapper`}>
              <Img fluid={this.cover.childImageSharp.fluid} />
            </div>
            <div className={`mt-3`}>
              <span className={`h6 title guid`}>{this.guid}</span>
              <h3 className={`h4 headline text-uppercase`}>
                <Link to={this.permalink}>{this.title}</Link>
              </h3>
            </div>
          </div>
          <div className={classnames(``, this.col2Width, this.col2Order)}>
            <div className={`lead pt-lg-5`}>
              <MDXRenderer>{this.body}</MDXRenderer>
            </div>
          </div>
        </div>
      </Fade>
    )
  }
}

export default PortfolioItem
