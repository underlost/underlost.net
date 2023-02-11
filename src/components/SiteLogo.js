import React from 'react'
import { Link } from 'gatsby'

export default function SiteLogo() {
  return (
    <Link className="site-brand d-block mb-5" to="/">
      <svg width="99" height="85" fill="none" xmlns="http://www.w3.org/2000/svg" className="pixelHeart-logo">
        <title>{`Underlost, By Tyler Rilling`}</title>
        <circle className="pixelHeart-circle" cx="25" cy="40" r="25" fill="#0FE" />
        <g className="pixelHeart-container">
          <path
            d="M88.392 18.444h5.9v5.847h-5.9v-5.847ZM76.747 13.6h5.814v5.847h-5.814V13.6Zm0 17.375H70.9v-5.78h-5.814v5.78h-5.714v-5.78h-5.83v5.813h-5.765v5.695l-.169.05h-5.78v-5.745h-5.815v-5.814h-5.83v5.781h-5.76v5.694h-5.715v11.542h5.764v5.85h5.83v5.814h5.764v5.747h5.798v5.814h5.83v-5.834h5.814v-5.744h5.797v-5.797h5.798v-5.85h5.814v5.85h5.863v-5.85H70.9V36.786h5.863v5.78h5.814V36.67h-5.83v-5.61h5.814v-5.864h-5.814v5.78ZM53.438 59.669v.137Zm-17.289.137v-.137ZM70.9 36.669h-5.78v-5.611h5.78v5.611Z"
            fill="#000"
          />
          <path d="M59.203 59.942h5.884v5.863h-5.884v-5.863Z" fill="#000" />
        </g>
      </svg>
    </Link>
  )
}
