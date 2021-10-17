import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faMediumM, faTwitter } from '@fortawesome/free-brands-svg-icons'

const SocialLinks = () => (
  <ul className="list-social list-inline mb-1">
    <li className={`list-inline-item`}>
      <a href="http://twitter.com/underlost">
        <FontAwesomeIcon icon={faTwitter} fixedWidth size="lg" />
        <span className={`sr-only visually-hidden`}>Twitter</span>
      </a>
    </li>
    <li className={`list-inline-item`}>
      <a href="http://github.com/underlost">
        <FontAwesomeIcon icon={faGithub} fixedWidth size="lg" />
        <span className={`sr-only visually-hidden`}>Github</span>
      </a>
    </li>
    <li className={`list-inline-item`}>
      <a href="http://instagram.com/underlost/">
        <FontAwesomeIcon icon={faInstagram} fixedWidth size="lg" />
        <span className={`sr-only visually-hidden`}>Instagram</span>
      </a>
    </li>
  </ul>
)
export default SocialLinks
