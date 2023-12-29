import React from 'react'
import PropTypes from 'prop-types'
import { MetaData } from '../components/common/meta'
import { Layout } from '../components/common'
import LinksList from '../components/LinksList'
import ReadFirstBlock from '../components/ReadFirstBlock'
import { Link, graphql } from 'gatsby'
import UnderlostxyzBlock from '../components/underlostxyzBlock'

const LinksPage = ({ data, location }) => (
  <Layout>
    <MetaData data={data} location={location} title="Links" type="website" />
    <div className=" gh-canvas py-5">
      <article className="content gh-content">
        <h1 className="title-h1">underlost.</h1>
        <section className="content-body load-external-scripts pt-4">
          <p className="lead mb-8">
            Former lead developer at a creative agency. AI prompt engineer, Web & marketing consultant. Indie game dev. I&apos;ve made a lot of stuff on the internet. I&apos;m sorry about
            that.{` `}
          </p>
          <p>
            This is a list of where you can find me on the internet, and other useful resources. If you&apos;re coming here from another website, make sure to check out the rest of my{` `}
            <Link to="/">website</Link>, as well as some of the{` `}
            <a href="https://www.underlost.xyz/" target="_blank" rel="noreferrer noopener">
              services
            </a>
            {` `}I offer!
          </p>
        </section>
      </article>

      <aside className="pb-4 pt-4">
        <LinksList />
      </aside>

      <aside className="mb-8">
        <div className="read-first-wrapper bg-green text-black rounded-xl p-8 dark:shadow-md">
          <ReadFirstBlock />
        </div>
      </aside>

      <aside>
        <UnderlostxyzBlock />
      </aside>
    </div>
  </Layout>
)

LinksPage.propTypes = {
  data: PropTypes.object,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default LinksPage

// This page query loads page with the links slug
export const pageQuery = graphql`
  query GhostLinksQuery {
    ghostPage(slug: { eq: "links" }) {
      ...GhostPageFields
    }
  }
`
