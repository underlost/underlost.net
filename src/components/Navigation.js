import React from 'react'
import { Link } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Navigation = () => (
  <div className={`site-menu`}>
    <nav className={`site-nav px-4 px-md-5`} role="navigation">
      <ul className={`list-unstyled text-left pt-3 pt-md-5 pb-md-5 text-uppercase`}>
        <li className={`home-url menu-item`}>
          <AniLink cover bg="black" direction="up" activeClassName={`active`} to="/">
            Home
          </AniLink>
        </li>
        <li className={`about-url menu-item`}>
          <AniLink cover bg="black" direction="up" activeClassName={`active`} to="/about/">
            About
          </AniLink>
        </li>
        <li className={`portfolio-url menu-item`}>
          <AniLink cover bg="black" direction="up" activeClassName={`active`} to="/portfolio/">
            Portfolio
          </AniLink>
        </li>
        <li className={`contact-url menu-item`}>
          <AniLink cover bg="black" direction="up" activeClassName={`active`} to="/contact/">
            Contact
          </AniLink>
        </li>
      </ul>
    </nav>
  </div>
)

export default Navigation
