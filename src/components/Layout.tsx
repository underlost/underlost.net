import React, { ReactNode, useState, useEffect, useContext } from 'react'
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import getConfig from 'next/config'
import Link from 'next/link'
import Image from 'next/image'
import { Helmet } from 'react-helmet-async'
import { AnimatePresence } from 'framer-motion'
import { ThemeContext } from '../context/ThemeContext'
import { AccessibleContext } from '../context/AccessibleContext'
import { GhostSettings } from '../lib/ghost'
import { Navigation } from './Navigation'
import SocialLinks from './SocialLinks'
import { motion } from 'framer-motion'

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
  image?: string
}

export const Layout = ({ children, settings, bodyClass = ``, isHome = false, className = ``, headerClass = ``, hideLogo = false, image = `` }: SiteNavProps) => {
  const { publicRuntimeConfig } = getConfig()
  const modifiedDate = new Date(publicRuntimeConfig.modifiedDate).toLocaleDateString(`en-US`, { month: `long`, day: `numeric`, year: `numeric` })
  const site = settings
  const navigation = site.navigation
  const secondaryNav = site.secondary_navigation && 0 < site.secondary_navigation.length
  const { theme, setTheme } = useContext(ThemeContext)
  const { accessible, setAccessible } = useContext(AccessibleContext)
  const [menuState, setMenuState] = useState(`page nav-is-closed`)

  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  const toggleMenu = () => {
    setMenuState((state) => (state === `page nav-is-closed` ? `page nav-is-active` : `page nav-is-closed`))
  }

  const toggleSettings = () => {
    setIsSettingsOpen((state) => !state)
  }

  const handleAccessibleToggle = () => {
    setAccessible(!accessible) // This will trigger the effect in the context provider
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

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
  }

  return (
    <div id="page" className={`${bodyClass} ${className} ${theme === `dark` ? `dark` : `light`} ${accessible === true ? `accessible-mode` : ``} ${menuState}`}>
      <Helmet>
        <link rel="preload" href="/fonts/MonaSans[slnt,wdth,wght].woff2" as="font" crossOrigin="anonymous" type="font/woff2" />
        <link rel="preload" href="/fonts/Space-Mono.woff2" as="font" crossOrigin="anonymous" type="font/woff2" />
        <link rel="preload" href="/fonts/Shantell-Sans.woff2" as="font" crossOrigin="anonymous" type="font/woff2" />
      </Helmet>

      <header className="site-header container px-8 py-5">
        <div className="flex lg:grid lg:grid-cols-3 justify-between lg:justify-end">
          <Link href="/" className="site-brand d-block lg:col-start-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="68" viewBox="0 0 90 68" className="pixelHeart-logo mx-auto">
              <title>{`Underlost, By Tyler Rilling`}</title>
              <g className="pixelHeart-container dark:fill-white transition-all duration-150 ease-in-out" fill="#000">
                <path className="pixel-block b-0" d="M83 7h7v7h-7z" />
                <path className="pixel-block b-1" d="M70.001 0h7v7h-7z" />
                <path className="pixel-block b-2" d="M70.001 14h7v7h-7z" />
                <path className="pixel-block b-0" d="M49 55h7v7h-7" />
                <path className="pixel-block b-1" d="M63 41h7v7h-7" />
                <path className="pixel-block b-2" d="M70.006 28h7v7h-7" />
                <path className="pixel-block b-0" d="M63.006 21h7v7h-7" />
                <path className="pixel-block b-1" d="M56 14h7v7h-7" />
                <path d="m55.995 28.003.003-7.002h-7.002V14h-7v7.001h-6.999v7.002h-7.003v-7.002h-6.996V14h-7.001v7.001H7v7.002H0V41h7v7h6.997v7h7.001v7h6.996v6h7.003v-6h6.999v-7h7l.005-7.006 6.994.006v-7H63h-.006L63 28.003z" />
              </g>
            </svg>
          </Link>

          <div className="my-auto">
            <div className="toggle-wrapper pt-5 flex gap-8 justify-end">
              <button className="btn-transparent" onClick={toggleSettings}>
                <span className={`sr-only`}>Toggle Accessibility Settings</span>
                <svg data-slot="icon" className="w-6 h-6" fill="currentColor" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.7266 33.359c-.22266 1.8047.9375 3.4922 2.6992 3.9336l25.758 6.4414-5.0664 47.285c-.19141 1.7969.97656 3.457 2.7305 3.8828 1.7578.42578 3.5547-.51562 4.207-2.1992l11.945-30.914 11.941 30.91c.54688 1.4102 1.8984 2.3008 3.3555 2.3008.28125 0 .56641-.03125.84766-.10156 1.7578-.42578 2.9219-2.0859 2.7305-3.8828l-5.0664-47.285 25.758-6.4414c1.7656-.44141 2.9219-2.1289 2.6992-3.9336-.22266-1.8047-1.7539-3.1602-3.5742-3.1602l-77.391.003907c-1.8203 0-3.3516 1.3555-3.5742 3.1602z" />
                  <path d="M60.801 15.801c0 5.9648-4.8359 10.801-10.801 10.801s-10.801-4.8359-10.801-10.801C39.199 9.8362 44.0349 5 50 5s10.801 4.8359 10.801 10.801" />
                </svg>
              </button>
              <button type="button" className="btn-transparent navbar-toggler focus:outline-none relative" onClick={toggleMenu}>
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
        <div className="menu-overlay" onClick={toggleMenu} />
      </header>

      <motion.main variants={variants} initial="hidden" animate="enter" transition={{ type: `linear` }}>
        {children}
      </motion.main>

      <footer className="site-footer text-center">
        <SocialLinks />
        <nav className="mb-4">
          <Navigation className="lg:flex justify-center gap-11 font-bold mx-auto" data={navigation} navClass="py-1.5 lg:py-3 block hover:underline" />
        </nav>

        <div className="site-copyright text-xs py-5 px-10 relative">
          <div className="relative z-10">
            <p className="text-balance"><Link href="/">{site.title}</Link> Copyright © Tyler Rilling 2001 - 2024. Published with Ghost. View <Link className="underline" href="/terms/">Term of Use</Link> and <Link className="underline" href="/privacy/">Privacy Policy</Link>.</p>
            <br /> Site last updated:{` `}
            <a href="https://github.com/underlost/underlost.net/">{modifiedDate}</a>. ❤️
          </div>
        </div>
      </footer>

      {image && (
        <div className="background-image">
          <Image src={image} alt="Background Image" fill={true} />
        </div>
      )}

      <Dialog transition open={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} className="relative z-50 focus:outline-none">
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/40 ">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-lg rounded-xl bg-black text-white p-6 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 shadow-lg"
            >
              <DialogTitle className="font-bold text-2xl">Accessibility Settings</DialogTitle>
              <Description className="mb-11">Use the controls below to customize your web experience.</Description>
              <div>
                <label className="flex w-full justify-between">
                  <div>
                    <span className="text-xl">Reduce colors</span>
                    <span className="text-sm block mb-2">Simplifies the UI, reducing colors.</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={accessible} // Bind to the current state
                    onChange={handleAccessibleToggle} // Trigger the toggle function
                    aria-label="Reduce colors for better accessibility"
                    className="form-checkbox h-4 w-4 transition duration-150 ease-in-out my-auto"
                  />
                </label>
              </div>

              <hr className="my-4" />

              <div className="mb-8">
                <span className="text-xl block">Toggle Light/Dark Mode</span>
                <span className="text-sm block mb-5">Select the theme that works best for you. Light/dark modes generally only apply when Reduced colors is enabled, and on blog posts.</span>

                <div className="grid grid-cols-2">

                  <button className={`col-span-2 lg:col-span-1 border border-white p-4 ${theme === `light` ? `bg-white text-black` : ``}`} onClick={handleThemeToggle}>
                    <span className="flex gap-x-4 justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" data-slot="icon" className="w-6 h-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                        />
                      </svg>
                      <span>Light Mode</span>
                    </span>
                  </button>

                  <button className={`col-span-2 lg:col-span-1 border border-white p-4 ${theme === `dark` ? `bg-white text-black` : ``}`} onClick={handleThemeToggle}>
                    <span className="flex gap-x-4 justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" data-slot="icon" className="w-6 h-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                        />
                      </svg>
                      <span>Dark Mode</span>
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="btn-white" onClick={() => setIsSettingsOpen(false)}>
                  Close
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
