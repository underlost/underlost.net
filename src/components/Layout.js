import React from 'react'
import Nav from './nav'
import Header from './Header'
import BackgroundFixed from './BackgroundFixed'
import FixedOverlay from './FixedOverlay'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: ``,
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: `nav-is-active`,
          })
          : this.setState({
            navBarActiveClass: ``,
          })
      }
    )
  }

  render() {
    return (
      <>
        
        
        <div id="page-wrap" className={` ${this.state.navBarActiveClass}`}>
          <div className="toggle-wrapper">
            <button
              className={`button navbar-toggler ${this.state.navBarActiveClass}`}
              data-target="page-wrap"
              onClick={() => this.toggleHamburger()}>
              <span className={`icon-bar top-bar`} />
              <span className={`icon-bar middle-bar`} />
              <span className={`icon-bar middle-bar`} />
              <span className={`icon-bar bottom-bar`} />
              <span className={`sr-only`}>Toggle navigation</span>
            </button>
          </div>
          <Nav />
          <div id="page">
            <div className={`container-fluid site-content pt-5`}>
              <div className={`col-md-5 offset-md-7 pt-3`}>
                <Header />
              </div>
              <main className={`site-main`}>{this.props.children}</main>
            </div>
          </div>
        </div>
        <BackgroundFixed filename={`background.jpg`} />
        <FixedOverlay filename={`overlay.png`} />
      </>
    )
  }
}

export default Layout
