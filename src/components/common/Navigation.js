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
          if (navItem.url.match(/^\s?http(s?)/gi)) {
            return <li key={i} className="mb-0 list-item"><a className={navClass} href={navItem.url} target="_blank" rel="noopener noreferrer">{navItem.label}</a></li>
          } else {
            return <li key={i} className="mb-0 list-item"><Link activeClassName={`active`} className={navClass} to={navItem.url}>{navItem.label}</Link></li>
          }
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
