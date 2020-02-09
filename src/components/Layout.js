import React from 'react'
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
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
        this.state.active
          ? this.setState({ navBarActiveClass: `nav-is-active` })
          : this.setState({ navBarActiveClass: `` })
      }
    )
  }

  render() {
    return (
      <>
        <div id="page-wrap" className={` ${this.state.navBarActiveClass}`}>
          <div className="toggle-wrapper">
            <button className={`button navbar-toggler ${this.state.navBarActiveClass}`} data-target="page-wrap" onClick={() => this.toggleHamburger()}>
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
              <Header />
              <main className={`site-main row no-gutters`}>
                <div className={`col-md-5 offset-md-7`}>{this.props.children}</div>
              </main>
              <Footer />
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
