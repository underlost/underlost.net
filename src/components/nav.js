import React from 'react'
import { Link } from 'gatsby'

const Nav = () => (
      <div id="site-menu" role="navigation">
        <div className={`px-3 px-md-5`}>
          <nav className={`site-nav`}>
            <ul className={`sections-nav list-unstyled text-left pt-3 pt-md-5 pb-md-5`}>
              <li className={`home-url menu-item active`}>
                <Link className={`site-nav-home`} to="/">
                  Home
                </Link>
              </li>
              <li className={`about-url menu-item`}>
                <Link className={`site-nav-about`} to="/about/">
                  About
                </Link>
              </li>
              <li className={`portfolio-url menu-item`}>
                <Link className={`site-nav-portfolio`} to="/portfolio/">
                  Portfolio
                </Link>
              </li>
              <li className={`contact-url menu-item`}>
                <Link className={`site-nav-contact`} to="/contact/">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
)

export default Nav
