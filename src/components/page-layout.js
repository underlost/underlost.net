import React from 'react'
import UnderlostSVG from '../components/svg/underlost'
import Footer from '../components/footer'

class PageLayout extends React.Component {
  render() {
    const { children, data } = this.props
    return (
      <div>
        <header className={`site-header site-header-sm mt-5`}>
          <UnderlostSVG />
        </header>
        <main className={`site-main`}>
          <div className={`mx-auto mt-3 mt-md-5`}>
            <article>
              <div className={`site-content`}>{this.props.children}</div>
            </article>
            <Footer />
          </div>
        </main>
      </div>
    )
  }
}

export default PageLayout
