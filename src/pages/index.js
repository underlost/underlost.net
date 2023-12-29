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
import RecentBlock from '../components/RecentBlock'
import BoringAppBlock from '../components/BoringAppBlock'
import MetalostBlock from '../components/MetalostBlock'
import UnderlostxyzBlock from '../components/UnderlostxyzBlock'
import TwitterBlock from '../components/TwitterBlock'

/**
 * Homepage Page
 *
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
          <span className="highlight primary dark:text-blue">
            <span>Underlost</span>
          </span>
          {` `}
          is Tyler Rilling, a Python web developer, UX designer, and digital marketing consultant, living in Seattle, Washington. They are probably not an{` `}
          <Link to="/writing/a-reminder-that-underlost-is-not-just-an-undertale-thing/" className="underline">
            Undertale game
          </Link>
          . 👾
        </h1>

        <div className="grid grid-cols-12 lg:gap-x-16 xl:gap-x-24">
          <div className="col-span-12 lg:col-span-6 mb-4 lg:pt-12 order-2 lg:order-1">
            <div className="xl:pl-16 relative">
              <FeaturedCardsBlock />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:mb-8 order-1 lg:order-2">
            <div className="py-12 lg:py-16">
              {page && <div className="load-external-scripts pb-5" dangerouslySetInnerHTML={{ __html: page.html }} />}

              <div className="pb-16 max-w-lg">
                <p className="text-lg leading-normal font-light">
                  As a full-stack developer, I specialize in Python, ReactJS, Building APIs and REST frameworks with content management systems like WordPress and Ghost, and various other
                  technology stacks. Formerly a lead developer at an interactive design agency in Seattle, Washington, I now run my own small {` `}
                  <Link to="/consulting/" className="underline font-black">
                    digital marketing agency
                  </Link>
                </p>
              </div>

              <div className="read-first-wrapper bg-green text-black rounded-xl p-8 max-w-md dark:shadow-md">
                <ReadFirstBlock />

                <div className="mt-5">
                  <a className="font-bold btn-link has-arrow whitespace-nowrap hover:underline uppercase" href="#recent">
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
      </div>

      <UnderlostxyzBlock />

      <PopularPostsBlock />

      <BoringAppBlock />

      <MetalostBlock />

      <div id="recent">
        <div className="text-center pt-10 lg:pt-20">
          <div className="relative">
            <h2 className="text-wide text-center text-3xl lg:text-5xl font-black relative z-10 dark:text-blue-light">
              <span className="highlight">Recent Posts</span>
            </h2>
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

      <div className="text-center pt-10 lg:pt-20">
        <div className="relative">
          <h2 className="text-wide text-center text-3xl lg:text-5xl font-black relative z-10 dark:text-blue-light">
            <span className="highlight">Other Projects</span>
          </h2>
        </div>
      </div>
      <TwitterBlock />

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
