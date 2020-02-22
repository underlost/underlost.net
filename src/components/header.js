import React from 'react'
import UnderlostSVG from './svg/underlost'

const Header = () => (
  <div className={`row no-gutters`}>
    <div className={`col-md-7 offset-md-4 col-lg-5 offset-lg-7 pt-md-3`}>
      <header className={`site-header site-header-sm fadeLeft`}>
        <UnderlostSVG />
      </header>
    </div>
  </div>
)
export default Header
