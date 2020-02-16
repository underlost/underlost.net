import React from 'react'
import UnderlostSVG from './svg/underlost'

const Header = () => (
  <div className={`row no-gutters`}>
    <div className={`col-md-5 offset-md-7 pt-3`}>
      <header className={`site-header site-header-sm fadeLeft`}>
        <UnderlostSVG />
      </header>
    </div>
  </div>
)
export default Header
