import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { Layout } from '../components/common'
import FeaturedCardsBlock from '../components/FeaturedCardsBlock'
import { MetaData } from '../components/common/meta'
import ReadFirstBlock from '../components/ReadFirstBlock'
import SiteLogo from '../components/SiteLogo'
import PopularPostsBlock from '../components/PopularBlock'
import RecentBlockContinued from '../components/RecentBlockContinued'

/**
 * Homepage Page
 *
 * Loads all posts from Ghost and displays them as an archibe.
 * Optional Text and title are displayed from the homepage page in Ghost.
 *
 */
const HomePage = ({ data, location }) => {
  const page = data.ghostPage

  return (
    <Layout>
      <MetaData data={data} location={location} title="Underlost" type="website" isHome={true} />
      <div className="container-lg pb-5">
        <div className="row">
          <div className="col-md-6 col-lg-5 mb-4 position-relative">
            <div
              className="mb-5"
              style={{
                position: `absolute`,
                zIndex: `10`,
                top: `-25px`,
                left: `1.5rem`,
              }}
            >
              <SiteLogo />
            </div>
            <div className="ms-md-5">
              <FeaturedCardsBlock />
            </div>
          </div>
          <div className="col-md-6 col-lg-7 mb-5">
            <div className="card py-5 me-md-5">
              <div className="card-body px-5">
                {page && <div className="load-external-scripts pb-5" dangerouslySetInnerHTML={{ __html: page.html }} />}

                <div className="pb-5">
                  <p className="h6 text-green text-uppercase">Introduction</p>
                  <h2>Underlost is Tyler Rilling, a Python web developer and narrative designer, living in Seattle, Washington. They are probably not an Undertale game. 👾</h2>
                  <p>
                    I also specialize in React, content management systems like WordPress and Ghost, and various other technologies. Currently a senior developer at an interactive design
                    agency in Seattle. I also offer various consulting services.{` `}
                    <a className="fw-bold btn-link has-arrow" href="/about/">
                      Learn more{` `}
                      <span className="d-inline-block px-1 arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="6" viewBox="0 0 22 6">
                          <path stroke="#03080F" fill="none" fillRule="evenodd" d="M0 3h21m-3-3 3 3-3 3" />
                        </svg>
                      </span>
                    </a>
                  </p>
                </div>

                <ReadFirstBlock />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0">
        <PopularPostsBlock />
      </div>
      <div>
        <RecentBlockContinued />
      </div>

      <div className="gh-content gh-canvas">
        <nav className="pagination" role="navigation">
          <Link to="/archive/" rel="next" className="btn btn-link me-0 ms-auto">
            View Archives
          </Link>
        </nav>
      </div>
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    ghostPage: PropTypes.shape({
      codeinjection_styles: PropTypes.object,
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      feature_image: PropTypes.string,
    }),
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default HomePage

// This page query loads Homepage content if there is any
export const pageQuery = graphql`
  query GhostHomepageQuery {
    ghostPage(slug: { eq: "homepage" }) {
      ...GhostPageFields
    }
  }
`
