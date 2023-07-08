import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { Layout } from '../components/common'
import FeaturedCardsBlock from '../components/FeaturedCardsBlock'
import { MetaData } from '../components/common/meta'
import ReadFirstBlock from '../components/ReadFirstBlock'
import PopularPostsBlock from '../components/PopularBlock'
import NewsletterForm from '../components/NewsletterForm'
import LinkArrow from '../components/LinkArrow'
import RecentBlock from '../components/RecentBlock'
import BoringAppBlock from '../components/BoringAppBlock'
import MetalostBlock from '../components/MetalostBlock'

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
      <div className="mx-auto pt-5 pb-5 px-8 container lg:px-24 overflow-hidden lg:overflow-visible relative">
        <h1 className="site-title">
          <span className="highlight primary">
            <span>Underlost</span>
          </span>
          {` `}
          is Tyler Rilling, a Python web developer, UX designer, and digital marketing consultant, living in Seattle, Washington. They are probably not an Undertale game. 👾
        </h1>

        <div className="grid grid-cols-12 lg:gap-x-16 xl:gap-x-24">
          <div className="col-span-12 lg:col-span-6 mb-4 lg:pt-12 order-2 lg:order-1">
            <div className="xl:pl-16 relative">
              <div className="grid-pattern h-[300px] w-[120px] absolute right-16 -top-40" />
              <FeaturedCardsBlock />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:mb-8 order-1 lg:order-2">
            <div className="py-12 lg:py-16">
              {page && <div className="load-external-scripts pb-5" dangerouslySetInnerHTML={{ __html: page.html }} />}

              <div className="pb-16 max-w-lg">
                <p className="text-lg leading-normal font-light">
                  As a full-stack developer, I specialize in Python, ReactJS, Building APIs and REST frameworks with content management systems like WordPress and Ghost, and various other
                  technology stacks. Currently the lead developer at an interactive design agency in Seattle, Washington. I also offer various{` `}
                  <LinkArrow text="consulting services" url="https://www.underlost.xyz" />
                </p>
              </div>
              <ReadFirstBlock />

              <div className="mt-5">
                <a className="font-bold btn-link has-arrow whitespace-nowrap hover:underline uppercase dark:text-pink" href="#recent">
                  Read More
                  <span className="inline-block px-1 arrow">
                    <svg width="23" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.087 5.464v3.072h-3.095v1.56h-3.073v1.536h-3.095v1.536H9.752V8.536H.487V5.464h9.265V.832h3.072v1.536h3.095v1.536h3.073v1.56h3.095Z" fill="#03080F" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-0">
        <PopularPostsBlock />
      </div>

      <div className="pb-20">
        <BoringAppBlock />
      </div>

      <div>
        <MetalostBlock />
      </div>

      <div id="recent">
        <div className="text-center pt-10 lg:pt-20">
          <div className="relative">
            <h3 className="text-wide text-center text-3xl lg:text-5xl font-black relative z-10 dark:text-pink">
              <span className="highlight">Recent Posts</span>
            </h3>
          </div>
        </div>
        <RecentBlock />
      </div>

      <div className="gh-content gh-canvas">
        <nav className="pagination pb-20 text-right" role="navigation">
          <Link to="/archive/" rel="next" className="btn-underline">
            <span>View Archives</span>
          </Link>
        </nav>
      </div>

      <div>
        <div className="bg-black h-[500px] lg:h-[600px] relative">
          <StaticImage
            src="../../static/images/background.jpg"
            alt="Underlost"
            className="absolute inset-0 w-full h-full object-cover"
            placeholder="blurred"
            layout="fullWidth"
            quality={100}
          />
        </div>
      </div>

      <div className="container mx-auto px-8 lg:px-0 py-5 lg:py-20">
        <div className="max-w-2xl mx-auto">
          <NewsletterForm />
        </div>
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
