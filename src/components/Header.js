import React from 'react'
import UnderlostSVG from './svg/underlost'

const Header = () => (
  <div className={`row no-gutters`}>
    <div className={`pt-md-3 col-md-7 offset-md-4 col-lg-6 offset-lg-6 col-xl-5 offset-xl-7`}>
      <header className={`site-header site-header-sm fadeLeft d-inline-block mx-lg-5`}>
        <UnderlostSVG />
      </header>
    </div>
  </div>
)
export default Header
