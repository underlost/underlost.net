import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

/**
* Navigation component
*
* The Navigation component takes an array of your Ghost
* navigation property that is fetched from the settings.
* It differentiates between absolute (external) and relative link (internal).
* You can pass it a custom class for your own styles, but it will always fallback
* to a `site-nav-item` class.
*
*/
const Navigation = ({ data, navClass }) => (
  <div className={`site-nav`}>
    <nav className={`site-nav-inner px-5 pt-5`}>
      <ul className={`nav px-0`}>
        {data.map((navItem, i) => {
          // check if our url contains underlost.net in it and if so, it's an internal link
          const isInternalLink = navItem.url.match(/underlost.net/g)
          // then strip out the domain and protocol for Gatsby
          const url = isInternalLink ? navItem.url.replace(/https?:\/\/(www\.)?underlost.net/, ``) : navItem.url
          const itemClass = navItem.class ? navItem.class : navClass

          return (
            <li key={i} className={`nav-item`}>
              {isInternalLink ? (
                <Link to={url} activeClassName={`active`} className={itemClass}>
                  {navItem.label}
                </Link>
              ) : (
                <a href={navItem.url} className="external-link" target="_blank" rel="noopener noreferrer">
                  {navItem.label}
                </a>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  </div>
)

Navigation.defaultProps = {
  navClass: `site-nav-item h2`,
}

Navigation.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  navClass: PropTypes.string,
}

export default Navigation
