import React, { ReactNode, useState, useEffect, useContext } from 'react'
import getConfig from 'next/config'
import Link from 'next/link'
import Image from 'next/image'
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
        <link rel="preload" href="/fonts/Shantell-Sans.woff2" as="font" crossOrigin="anonymous" type="font/woff2" />
      </Helmet>

      <main className={`bg-splatter mb-11 ${className}`}>
        <header className="container mx-auto pt-11 lg:pt-11 px-8 mb-16">
          <div className="flex lg:grid lg:grid-cols-3 justify-between lg:justify-end">
            <Link href="/" className="site-brand d-block lg:col-start-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="90" height="68" viewBox="0 0 90 68" className="pixelHeart-logo mx-auto">
                <title>{`Underlost, By Tyler Rilling`}</title>
                <g className="pixelHeart-container dark:fill-white transition-all duration-150 ease-in-out" fill="#000">
                  <path className="pixel-block b-0" d="M83 7h7v7h-7z"/>
                  <path className="pixel-block b-1" d="M70.001 0h7v7h-7z"/>
                  <path className="pixel-block b-2" d="M70.001 14h7v7h-7z"/>
                  <path className="pixel-block b-0" d="M49 55h7v7h-7"/>
                  <path className="pixel-block b-1" d="M63 41h7v7h-7"/>
                  <path className="pixel-block b-2" d="M70.006 28h7v7h-7"/>
                  <path className="pixel-block b-0" d="M63.006 21h7v7h-7"/>
                  <path className="pixel-block b-1" d="M56 14h7v7h-7"/>
                  <path d="m55.995 28.003.003-7.002h-7.002V14h-7v7.001h-6.999v7.002h-7.003v-7.002h-6.996V14h-7.001v7.001H7v7.002H0V41h7v7h6.997v7h7.001v7h6.996v6h7.003v-6h6.999v-7h7l.005-7.006 6.994.006v-7H63h-.006L63 28.003z"/>
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
            <div className="absolute left-10 top-10">
              <button className="text-xs uppercase font-bold text-white bg-black px-1 py-1" onClick={toggleMenu}>
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

      <div className="relative h-[160px] -mt-[165px]">
        <Image
          alt="Another paint splatter effect"
          src="/images/svg/footer_blob.svg"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: `cover`,
            objectPosition: `top`,
          }}
        />
      </div>
      <footer className="site-footer text-center lg:pt-11 bg-violet-blue text-white">
        <div className="gh-canvas">
          <nav className="mb-4">
            <Navigation className="lg:flex justify-center gap-11 font-bold mx-auto" data={navigation} navClass="py-3 block" />
          </nav>

          <SocialLinks />

          <div className="site-copyright text-xs pb-8 px-10">
            <Link href="/">{site.title}</Link> Copyright © Tyler Rilling 2001 - 2024. Published with Ghost.
            <br /> Site last updated:{` `}
            <a href="https://github.com/underlost/underlost.net/">{modifiedDate}</a>. ❤️
          </div>
        </div>
      </footer>
    </>
  )
}
