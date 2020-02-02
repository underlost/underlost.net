import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SocialLinks from '../components/social'

const Footer = () => {
  const data = useStaticQuery(query)

  return (
    <footer className={`site-footer my-4 mt-md-5`}>
      <SocialLinks />
      <small className={`copyright`}>
        Copyright &copy; Tyler Rilling 2002–2019. Site last updated:{` `}
        <a href="https://github.com/underlost/underlost.net/">{data.site.buildTime}</a>.
      </small>
    </footer>
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
