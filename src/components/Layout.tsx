import React, { ReactNode, useState, useEffect, useContext } from 'react'
import getConfig from 'next/config'
import Link from 'next/link'
import { Helmet } from 'react-helmet-async'
import { ThemeContext } from '../context/ThemeContext'
import { GhostSettings } from '../lib/ghost'
import { Navigation } from './Navigation'
import SocialLinks from './SocialLinks'

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */

interface SiteNavProps {
  settings: GhostSettings
  postTitle?: string
  children: ReactNode
  bodyClass: string
  isHome: boolean
  className?: string
  headerClass?: string
  hideLogo?: boolean
}

export const Layout = ({ children, settings, bodyClass = ``, isHome = false, className = ``, headerClass = ``, hideLogo = false }: SiteNavProps) => {
  const { publicRuntimeConfig } = getConfig()
  const modifiedDate = new Date(publicRuntimeConfig.modifiedDate).toLocaleDateString(`en-US`, { month: `long`, day: `numeric`, year: `numeric` })
  const site = settings
  const navigation = site.navigation
  const secondaryNav = site.secondary_navigation && 0 < site.secondary_navigation.length
  const { theme, setTheme } = useContext(ThemeContext)
  const [menuState, setMenuState] = useState(`page nav-is-closed`)

  const toggleMenu = () => {
    setMenuState((state) => (state === `page nav-is-closed` ? `page nav-is-active` : `page nav-is-closed`))
  }

  const handleThemeToggle = () => {
    if (theme === `dark`) {
      setTheme(`light`)
      localStorage.setItem(`theme`, `light`)
    } else {
      setTheme(`dark`)
      localStorage.setItem(`theme`, `dark`)
    }
  }

  return (
    <>
      <Helmet>
        <html lang="en" className={`${theme === `dark` ? `dark` : `light`} ${menuState}`} />
        <link rel="preload" href="/fonts/MonaSans[slnt,wdth,wght].woff2" as="font" crossOrigin="anonymous" type="font/woff2" />
        <link rel="preload" href="/fonts/Space-Mono.woff2" as="font" crossOrigin="anonymous" type="font/woff2" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Helmet>

      <main className={`bg-splatter mb-11 ${className}`}>
        <header className="container mx-auto pt-11 lg:pt-11 px-8 mb-16">
          <div className="flex lg:grid lg:grid-cols-3 justify-between lg:justify-end">
            <Link href="/" className="site-brand d-block lg:col-start-2">
              <svg width="99" height="85" fill="none" xmlns="http://www.w3.org/2000/svg" className="pixelHeart-logo mx-auto">
                <title>{`Underlost, By Tyler Rilling`}</title>
                <g className="pixelHeart-container dark:fill-white transition-all duration-150 ease-in-out" fill="#000">
                  <path d="M88.392 18.444h5.9v5.847h-5.9v-5.847ZM76.747 13.6h5.814v5.847h-5.814V13.6Zm0 17.375H70.9v-5.78h-5.814v5.78h-5.714v-5.78h-5.83v5.813h-5.765v5.695l-.169.05h-5.78v-5.745h-5.815v-5.814h-5.83v5.781h-5.76v5.694h-5.715v11.542h5.764v5.85h5.83v5.814h5.764v5.747h5.798v5.814h5.83v-5.834h5.814v-5.744h5.797v-5.797h5.798v-5.85h5.814v5.85h5.863v-5.85H70.9V36.786h5.863v5.78h5.814V36.67h-5.83v-5.61h5.814v-5.864h-5.814v5.78ZM53.438 59.669v.137Zm-17.289.137v-.137ZM70.9 36.669h-5.78v-5.611h5.78v5.611Z" />
                  <path d="M59.203 59.942h5.884v5.863h-5.884v-5.863Z" />
                </g>
              </svg>
            </Link>

            <div className="my-auto">
              <div className="toggle-wrapper pt-5 flex gap-8 justify-end">
                <button className="btn" onClick={handleThemeToggle}>
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

                <button type="button" className="btn navbar-toggler focus:outline-none relative" onClick={toggleMenu}>
                  <span className={`icon-bar block top-bar`} />
                  <span className={`icon-bar block middle-bar`} />
                  <span className={`icon-bar block bottom-bar ml-auto`} />
                  <span className={`sr-only`}>Toggle navigation</span>
                </button>
              </div>
            </div>
          </div>
          <nav className="site-header-nav">
            <div className="absolute right-10 top-10">
              <button className="text-xs uppercase font-bold" onClick={toggleMenu}>
                Close
              </button>
            </div>
            <div className="nav-wrapper">
              <Navigation className="lg:flex font-bold" data={navigation} navClass="nav-link" />
              <SocialLinks />
            </div>
          </nav>
        </header>
        {children}
      </main>

      <div
        style={{
          backgroundImage: `url(/images/svg/footer_blob.svg)`,
          height: `160px`,
          backgroundPosition: `center`,
          marginTop: `-160px`,
          paddingTop: `160px`,
        }}
      />

      <footer className="site-footer text-center pt-11 bg-violet-blue text-white">
        <div className="gh-canvas">
          <nav className="mb-4">
            <Navigation className="lg:flex justify-center gap-11 font-bold mx-auto" data={navigation} />
          </nav>

          <SocialLinks />

          <div className="site-copyright text-xs pb-8">
            <Link href="/">{site.title}</Link> Copyright © Tyler Rilling 2001 - 2024. Published with Ghost.
            <br /> Site last updated:{` `}
            <a href="https://github.com/underlost/underlost.net/">{modifiedDate}</a>. ❤️
          </div>
        </div>
      </footer>
    </>
  )
}
