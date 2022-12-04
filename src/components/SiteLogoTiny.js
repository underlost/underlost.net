import React from 'react'
import { Link } from 'gatsby'

function SiteLogoTiny(props) {
  return (
    <Link className="site-brand block text-center mx-auto mb-8" to="/">
      <svg xmlns="http://www.w3.org/2000/svg" className="site-logo" fillRule="evenodd" strokeMiterlimit={10} clipRule="evenodd" viewBox="0 0 82 82" width="82" height="82" {...props}>
        <title>{`Underlost, By Tyler Rilling`}</title>
        <g className="pixelHeart-container">
          <circle id="Oval" cx="41" cy="41" r="41" fill="#9ae2e7" />
          <path
            className="pixelHeart"
            fill="#35c5cf"
            fillRule="nonzero"
            d="M30.432 61.877v-4.2h-4.186v-4.149h-4.16v-4.2h-4.209v-4.225h-4.163v-8.332h4.126v-4.109h4.158v-4.174h4.211v4.2h4.2v4.146h4.172l.122-.035v-4.112h4.163v-4.2h4.209v4.174H47.2v-4.174h4.2v4.174h4.223v-4.174h4.2v4.234h-4.2v4.05h4.209v4.257h-4.2v-4.172h-4.234v8.247h-4.186v4.225h-4.186v4.186h-4.184v4.146h-4.2v4.211l-4.21.006zm8.357-8.4v-.1.1zm-12.483 0v-.1.1zm20.915-16.7h4.174v-4.052h-4.174v4.052zM42.95 57.814V53.58h4.248v4.234H42.95zm8.457-8.48v-4.225h4.234v4.225h-4.234zm-.012-4.225h.012-.012zM64.024 27.84v-4.22h4.26v4.22h-4.26zm-8.406-3.5v-4.223h4.2v4.223h-4.2z"
          />
        </g>
      </svg>
    </Link>
  )
}

export default SiteLogoTiny
