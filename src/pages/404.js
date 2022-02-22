import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/common'
import SiteLogo from '../components/SiteLogo'

const NotFoundPage = () => (
  <Layout>
    <div className="gh-header gh-canvas pb-5">
      <SiteLogo />
    </div>
    <div className="gh-content gh-canvas">
      <article className="content" style={{ textAlign: `center` }}>
        <h1 className="content-title">Error 404</h1>
        <section className="content-body">
          Page not found, <Link to="/">return home</Link> to start over
        </section>
      </article>
    </div>
  </Layout>
)

export default NotFoundPage
