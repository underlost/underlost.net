import React from "react"
import { graphql, Link } from "gatsby"
import PageTransition from 'gatsby-v2-plugin-page-transitions';


//CSS
import '../sass/site.scss';

// components
import Page from "../templates/page"
import UnderlostSVG from "../components/svg/underlost"


export default ({ data }) => (
  <PageTransition
    defaultStyle={{
      transition: 'right 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
      right: '100%',
      position: 'absolute',
      width: '100%',
    }}
    transitionStyles={{
      entering: { right: '0%' },
      entered: { right: '0%' },
      exiting: { right: '100%' },
    }}
    transitionTime={900}
    >
  <Page>
    <main className={"site-main index d-flex h-100 p-3 mx-auto flex-column mt-5"}>
      <header className={"site-header"}>
        <div className={"svg-container"}>
          <UnderlostSVG />
        </div>
        <div className={"row no-gutters mt-4 fadeRight"}>
          <p className={"lead col-md-8"}>Underlost is Tyler Rilling, a Python devloper and UX designer living in Seattle. They not an Undertale game.</p>
        </div>
        <div className={"row no-gutters mt-2 mb-5 fadeLeft"}>
          <Link className={"btn btn-default px-5 py-2"} to="/about/">Learn More <i className={"fas fa-angle-double-right"}></i></Link>
        </div>
      </header>
    </main>
  </Page>
  </PageTransition>
)

export const query = graphql`
  query {
    site {
      siteMetadata { title }
    }
  }
`
