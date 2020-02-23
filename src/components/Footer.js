import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Fade from 'react-reveal/Fade'
import SocialLinks from './Social'

const Footer = () => {
  const data = useStaticQuery(query)

  return (
    <div className={`row no-gutters`}>
      <div className={`col-md-7 offset-md-4 col-lg-5 offset-lg-7 pt-3`}>
        <Fade bottom>
          <footer className={`site-footer my-4 mt-md-5`}>
            <SocialLinks />
            <small className={`copyright d-block text-uppercase`}>
              Copyright &copy; Tyler Rilling 2002–2020. <br />
              Site last updated: <a href="https://github.com/underlost/underlost.net/">{data.site.buildTime}</a>. ❤️
            </small>
          </footer>
        </Fade>
      </div>
    </div>
  )
}
export default Footer

const query = graphql`
  query Info {
    site {
      buildTime(formatString: "DD/MM/YYYY")
    }
  }
`
