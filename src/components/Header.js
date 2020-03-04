import React from 'react'
import UnderlostSVG from './svg/underlost'

const Header = () => (
  <div className={`row no-gutters`}>
    <div className={`col-md-7 offset-md-4 col-lg-6 offset-lg-6 pt-md-3`}>
      <header className={`site-header site-header-sm fadeLeft d-inline-block mx-lg-5`}>
        <UnderlostSVG />
      </header>
    </div>
  </div>
)
export default Header
