import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Navigation from './Navigation'
import Header from './Header'
import Footer from './Footer'
import BackgroundFixed from './BackgroundFixed'
import FixedOverlay from './FixedOverlay'

const Layout = ({ children }) => {
  const [menuState, setMenuState] = useState(`nav-is-closed`)
  const toggleMenu = () => {
    setMenuState(state => (state === `nav-is-closed` ? `nav-is-active` : `nav-is-closed`))
  }
  return (
    <>
      <div id="page" className={`viewport ${menuState}`}>
        <div className="toggle-wrapper">
          <button className={`button navbar-toggler`} data-target="page-wrap" onClick={() => toggleMenu()}>
            <span className={`icon-bar top-bar`} />
            <span className={`icon-bar middle-bar`} />
            <span className={`icon-bar middle-bar`} />
            <span className={`icon-bar bottom-bar`} />
            <span className={`sr-only`}>Toggle navigation</span>
          </button>
        </div>
        <Navigation />
        <div className={`container-fluid site-content px-4 px-md-2 pt-5`}>
          <Header />
          <main className={`site-main row no-gutters`}>
            <div className={`col-md-7 offset-md-4 col-lg-5 offset-lg-7`}>{children}</div>
          </main>
          <Footer />
        </div>
      </div>
      <BackgroundFixed filename={`background.jpg`} alt={`Video Background`} />
      <FixedOverlay filename={`overlay.png`} alt={`Video Background Overlay`} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
