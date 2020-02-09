import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SocialLinks from './Social'

const Footer = () => {
  const data = useStaticQuery(query)

  return (
    <div className={`row no-gutters`}>
      <div className={`col-md-5 offset-md-7 pt-3`}>
        <footer className={`site-footer my-4 mt-md-5`}>
          <SocialLinks />
          <small className={`copyright`}>
            Copyright &copy; Tyler Rilling 2002–2020. Site last updated:{` `}
            <a href="https://github.com/underlost/underlost.net/">{data.site.buildTime}</a>.
          </small>
        </footer>
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
