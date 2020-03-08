import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import PropTypes from 'prop-types'

const InnerLink = ({ text, to }) => (
  <AniLink cover bg="cyan" direction="right" to={to}>
    {text}
  </AniLink>
)

export default InnerLink

InnerLink.propTypes = {
  to: PropTypes.node.isRequired,
  to: PropTypes.string,
  text: PropTypes.node.isRequired,
  text: PropTypes.string,
}
