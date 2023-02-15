import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { Layout } from '../components/common'
import FeaturedCardsBlock from '../components/FeaturedCardsBlock'
import { MetaData } from '../components/common/meta'
import ReadFirstBlock from '../components/ReadFirstBlock'
import PopularPostsBlock from '../components/PopularBlock'
import NewsletterForm from '../components/NewsletterForm'
import LinkArrow from '../components/LinkArrow'
//import BoringApp from '../components/BoringApp'
import RecentBlock from '../components/RecentBlock'

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
      <div className="mx-auto pt-5 pb-5 px-8 container lg:px-24 overflow-hidden lg:overflow-visible">
        <h1 className="site-title">
          <span className="highlight primary">
            <span>Underlost</span>
          </span>
          {` `}
          is Tyler Rilling, a Python web developer, UX designer, and marketing consultant, living in Seattle, Washington. They are probably not an Undertale game. 👾
        </h1>

        <div className="grid grid-cols-12 lg:divide-x gap-0">
          <div className="col-span-12 lg:col-span-6 lg:mb-8">
            <div className="py-12 lg:py-16 lg:pr-16">
              {page && <div className="load-external-scripts pb-5" dangerouslySetInnerHTML={{ __html: page.html }} />}

              <div className="pb-16">
                <p className="text-lg leading-normal font-light">
                  As a full-stack developer, I specialize in Python, ReactJS, Building APIs and REST frameworks with content management systems like WordPress and Ghost, and various other
                  technology stacks. Currently the lead developer at an interactive design agency in Seattle, Washington. I also offer various{` `}
                  <LinkArrow text="consulting services" url="/consulting/" />
                </p>
              </div>
              <ReadFirstBlock />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 mb-4 lg:pt-12">
            <div className="lg:pl-16">
              <FeaturedCardsBlock />
            </div>
          </div>
        </div>
      </div>
      <div className="px-0">
        <PopularPostsBlock />
      </div>

      <div className="container mx-auto px-8 lg:px-0 py-5 lg:py-20">
        <div className="max-w-2xl mx-auto">
          <NewsletterForm />
        </div>
      </div>

      <div>
        <RecentBlock />
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
