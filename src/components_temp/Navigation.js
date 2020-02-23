import React from 'react'
import { Link } from 'gatsby'

const Navigation = () => (
  <div className={`site-menu`}>
    <nav className={`site-nav px-4 px-md-5`} role="navigation">
      <ul className={`list-unstyled text-left pt-3 pt-md-5 pb-md-5 text-uppercase`}>
        <li className={`home-url menu-item`}>
          <Link activeClassName={`active`} to="/">
            Home
          </Link>
        </li>
        <li className={`about-url menu-item`}>
          <Link activeClassName={`active`} to="/about/">
            About
          </Link>
        </li>
        <li className={`portfolio-url menu-item`}>
          <Link activeClassName={`active`} to="/portfolio/">
            Portfolio
          </Link>
        </li>
        <li className={`contact-url menu-item`}>
          <Link activeClassName={`active`} to="/contact/">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Navigation
