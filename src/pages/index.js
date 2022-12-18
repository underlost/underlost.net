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
import NewsletterForm from '../components/NewsletterForm'

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
    <Layout isHome={true}>
      <MetaData data={data} location={location} title="Underlost, By Tyler Rilling" type="website" isHome={true} />
      <div className="mx-auto pt-5 pb-5 container lg:px-32 overflow-hidden lg:overflow-visible">
        <div className="grid grid-cols-12 pt-5 gap-8 lg:gap-12">
          <div className="col-span-12 md:col-span-6 lg:col-span-5 mb-4 relative order-2 md:order-1 lg:pt-12">
            <div className="site-loogo-wrapper mb-5 hidden md:block -translate-x-10 relative z-40">
              <SiteLogo />
            </div>
            <div className="lg:-translate-y-28">
              <FeaturedCardsBlock />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-7 lg:mb-8 order-1 md:order-2">
            <div className="bg-latte py-12 lg:py-16 px-8 md:px-12">
              {page && <div className="load-external-scripts pb-5" dangerouslySetInnerHTML={{ __html: page.html }} />}

              <div className="pb-16">
                <p className="subtitle-pill purple-yellow mb-4">Introduction</p>
                <h1 className="h1 mb-4">
                  Underlost is Tyler Rilling, a Python web developer, UX designer, and marketing consultant, living in Seattle, Washington. They are probably not an Undertale game. 👾
                </h1>
                <p className="text-lg font-light">
                  As a full-stack developer, I specialize in ReactJS, REST frameworks and content management systems like WordPress and Ghost, and various technology stacks. Currently a
                  senior developer at an interactive design agency in Seattle. I also offer various{` `}
                  <a className="font-bold btn-link has-arrow" href="/consulting/">
                    consulting services{` `}
                    <span
                      className="inline-block px-1 arrow"
                      style={{
                        paddingBottom: `0.1em`,
                      }}>
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
      <div className="px-0">
        <PopularPostsBlock />
      </div>

      <div className="gh-content gh-canvas py-5 lg:py-11">
        <NewsletterForm />
        <hr />
      </div>

      <div>
        <RecentBlockContinued />
      </div>

      <div className="gh-content gh-canvas">
        <nav className="pagination pb-5 text-right" role="navigation">
          <Link to="/archive/" rel="next" className="btn-underline">
            <span>View Archives</span>
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
