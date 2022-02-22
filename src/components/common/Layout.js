import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import { Navigation } from '.'
// import config from '../../utils/siteConfig'

//CSS
import '../../scss/site.scss'

/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/
const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
  const site = data.allGhostSettings.edges[0].node
  //const twitterUrl = site.twitter ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}` : null
  //const facebookUrl = site.facebook ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}` : null

  const [menuState, setMenuState] = useState(`page nav-is-closed`)
  const toggleMenu = () => {
    setMenuState(state => (state === `page nav-is-closed`
      ? `page nav-is-active`
      : `page nav-is-closed`))
  }

  return (
    <>
      <Helmet>
        <html lang={site.lang} />
        <style type="text/css">{`${site.codeinjection_styles}`}</style>
        <body className={bodyClass} />
      </Helmet>

      <div className={menuState}>
        <div className="viewport">
          <div className="viewport-top py-lg-4">
            {/* The main header section on top of the screen */}
            <header className="site-head mx-auto mt-3">
              <div className="toggle-wrapper">
                <button type="button" className="btn navbar-toggler" onClick={toggleMenu}>
                  <span className={`icon-bar top-bar`} />
                  <span className={`icon-bar middle-bar`} />
                  <span className={`icon-bar bottom-bar`} />
                  <span className={`sr-only`}>Toggle navigation</span>
                </button>
              </div>

              {isHome ? (
                <div className="site-banner sr-only">
                  <h1 className="site-banner-title ">{site.title}</h1>
                  <p className="site-banner-desc">{site.description}</p>
                </div>
              ) : null}

              <Navigation data={site.navigation} navClass="site-nav-item py-2" />
            </header>

            <main className="site-main mx-auto py-5">
              {/* All the main content gets inserted here, index.js, post.js */}
              {children}
            </main>
          </div>

          <div className="viewport-bottom">
            {/* The footer at the very bottom of the screen */}
            <footer className="site-footer text-uppercase">
              <div className="site-footer-nav container px-0 pb-1">
                <Navigation data={site.navigation} navClass="site-footer-nav-item" />
              </div>
              <div
                className="site-copyright text-center"
                style={{
                  fontSize: `.9rem`,
                }}>
                <Link to="/">{site.title}</Link> Copyright © Tyler Rilling 2001 - 2022. <br /> Site last updated:{` `}
                <a href="https://github.com/underlost/underlost.net/">{data.site.buildTime}</a>. ❤️
              </div>
            </footer>
          </div>
        </div>
        <div className="page-bottom"></div>
      </div>
    </>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  bodyClass: PropTypes.string,
  isHome: PropTypes.bool,
  data: PropTypes.shape({
    file: PropTypes.object,
    site: PropTypes.object,
    allGhostSettings: PropTypes.object.isRequired,
  }).isRequired,
}

const DefaultLayoutSettingsQuery = (props) => (
  <StaticQuery
    query={graphql`
      query GhostSettings {
        allGhostSettings {
          edges {
            node {
              ...GhostSettingsFields
            }
          }
        }
        file(relativePath: { eq: "ghost-icon.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
        site {
          buildTime(formatString: "DD/MM/YYYY")
        }
      }
    `}
    render={(data) => <DefaultLayout data={data} {...props} />}
  />
)

export default DefaultLayoutSettingsQuery
