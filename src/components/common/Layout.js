import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import { Navigation } from '.'
import SiteLogo from '../SiteLogo'
// import config from '../../utils/siteConfig'
import Prism from 'prismjs'
import { ThemeContext } from '../../context/themeContext'

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
  const {theme, setTheme} = useContext(ThemeContext)
  const [menuState, setMenuState] = useState(`page nav-is-closed`)

  const toggleMenu = () => {
    setMenuState(state => (state === `page nav-is-closed`
      ? `page nav-is-active`
      : `page nav-is-closed`))
  }

  const handleThemeToggle = () => {
    if (theme === `light`) {
      setTheme(`dark`)
    } else {
      setTheme(`light`)
    }
  }

  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })

  return (
    <>
      <Helmet>
        <html lang={site.lang} className={`${theme === `light` ? `light` : `dark`}`} />
        <link rel="preload" href="/fonts/Mona-Sans.woff2" as="font" crossOrigin="anonymous" type="font/woff2" />
        <style type="text/css">{`${site.codeinjection_styles}`}</style>
        <body className={bodyClass} />
      </Helmet>

      <div className={`${menuState}`}>
        <div className="viewport">
          <div className="viewport-top">
            {/* The main header section on top of the screen */}
            <header className="site-head mx-auto">
              <div className="toggle-wrapper container mx-auto text-right pt-5 pr-5 flex gap-8 justify-end">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked={theme === `light` ? true : false} onChange={handleThemeToggle} />
                  <div className="w-11 h-6 bg-slate peer-focus:outline-none peer-focus:ring-0 rounded-full peer dark:bg-purple-slate peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[6px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate peer-checked:bg-blue"></div>
                  <span className="ml-3 text-lg font-medium">
                    {theme === `light` ? (
                      <>
                        ☀️ <span className="sr-only">Light Mode</span>
                      </>
                    ) : (
                      <>
                        🌙 <span className="sr-only">Dark Mode</span>
                      </>
                    )}
                  </span>
                </label>

                <button type="button" className="btn navbar-toggler focus:outline-none relative z-50" onClick={toggleMenu}>
                  <span className={`icon-bar block top-bar`} />
                  <span className={`icon-bar block middle-bar`} />
                  <span className={`icon-bar block bottom-bar ml-auto`} />
                  <span className={`sr-only`}>Toggle navigation</span>
                </button>
              </div>

              {isHome && (
                <div className="site-banner sr-only">
                  <h1 className="site-banner-title">{site.title}</h1>
                  <p className="site-banner-desc">{site.description}</p>
                </div>
              )}

              <div className="gh-header gh-canvas lg:pb-5 pt-5">
                <SiteLogo />
              </div>

              <div className="site-menu fixed inset-0">
                <div className="max-w-6xl mx-auto pt-8">
                  <Navigation data={site.navigation} navClass="site-nav-item py-2" />
                </div>
              </div>
            </header>

            <main className="site-main mx-auto pb-5">
              {/* All the main content gets inserted here, index.js, post.js */}
              {children}
            </main>
          </div>

          <div className="viewport-bottom">
            {/* The footer at the very bottom of the screen */}
            <footer className="site-footer uppercase">
              <div className="site-footer-nav container px-0 pb-1 mx-auto">
                <Navigation data={site.navigation} navClass="site-footer-nav-item" />
              </div>
              <div className="site-copyright text-center text-xs pb-8">
                <Link to="/">{site.title}</Link> Copyright © Tyler Rilling 2001 - 2023. <br /> Site last updated:{` `}
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

const DefaultLayoutSettingsQuery = props => (
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
    render={data => <DefaultLayout data={data} {...props} />}
  />
)

export default DefaultLayoutSettingsQuery
