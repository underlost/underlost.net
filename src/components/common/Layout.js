import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import { Navigation } from '.'
import SiteLogo from '../SiteLogo'
import Prism from 'prismjs'
import { ThemeContext } from '../../context/themeContext'
import SocialIcons from '../SocialIcons'

/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/
const DefaultLayout = ({ data, children, bodyClass, isHome, className = ``, headerClass = ``, hideLogo = false }) => {
  const site = data.allGhostSettings.edges[0].node
  const { theme, setTheme } = useContext(ThemeContext)
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
        <html lang={site.lang} className={`${theme === `dark` ? `dark` : `light`}`} />
        <link rel="preload" href="/fonts/Mona-Sans.woff2" as="font" crossOrigin="anonymous" type="font/woff2" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400&display=swap" rel="stylesheet" />
        <style type="text/css">{`${site.codeinjection_styles}`}</style>
        <body className={bodyClass} />
      </Helmet>

      <div className={`${menuState} ${className}`}>
        <div className="viewport">
          <div className="viewport-top">
            {/* The main header section on top of the screen */}
            {!hideLogo && (
              <header className={`site-head mx-auto ${headerClass}`}>
                <div className="toggle-wrapper container mx-auto text-right pt-5 pr-5 flex gap-8 justify-end">
                  <button onClick={handleThemeToggle}>
                    {theme === `dark` ? (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" data-slot="icon" className="w-6 h-6">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                          />
                        </svg>
                        <span className="sr-only">Light Mode</span>
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" data-slot="icon" className="w-6 h-6">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                          />
                        </svg>
                        <span className="sr-only">Dark Mode</span>
                      </>
                    )}
                  </button>

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

                <div className="site-menu fixed inset-0 ">
                  <div className="max-w-6xl mx-auto pt-8">
                    <Navigation data={site.navigation} navClass="site-nav-item py-2" />
                  </div>
                </div>
              </header>
            )}

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
              <SocialIcons />
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
  className: PropTypes.string,
  headerClass: PropTypes.string,
  hideLogo: PropTypes.bool,
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
