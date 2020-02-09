import React from 'react'
import PageTransition from 'gatsby-v2-plugin-page-transitions'

import SEO from '../components/seo'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout>
    <SEO title="About Tyler Rilling" keywords={[`Tyler Rilling`, `underlost`, `Seattle web developer`]} />
    <article className={`section-article pr-lg-5`}>
      <div className={`fadeRight layout-single-column`}>
        <h4 className={`headline h1 text-lowercase text-transparent blue-stroke px-0 mb-3 mr-lg-5 pr-lg-5`}>
          A few things about me...
        </h4>
        <p className={`title h1 text-white`}>
          I’m a hybrid writer, UX designer and developer, with an interest in{` `}
          <a href="https://tyler.camera/" target="_blank" rel="noopener noreferrer">
            photography
          </a>
          {` `}
          and{` `}
          <a href="https://alifewellplayed.com/" target="_blank" rel="noopener noreferrer">
            video games
          </a>
          {` `}
          mixed in on the side. I'm basically the bard of the group.
        </p>
      </div>
      <div className={`layout-single-column fadeLeft`}>
        <p>
          In a past life, I had a background in information computer security and built a successful web hosting
          business. Since then, I've worked as a UX designer and consultant for a few video games and virtual reality
          experiences.
        </p>
        <p>
          I'm influenced by point and click adventure games, trashy 90's movies, Star Wars, Cardcaptor Sakura, Sailor
          Moon, Ghost in the Shell, Dungeons & Dragons, technomancy, and cyberpunk architecture.
        </p>
        <p>
          If you've ever <em>liked</em> something on the internet, interacted with an <em>eye</em> catching VR
          experience, played a terrific MMO, or visited the <em>Wine Country</em>, you’ve probably seen some of my work.{' '}
          <em>I'm sorry about that</em>.
        </p>
        <p>
          My work has also been featured on CNN, ABC (Australia), and various local news outlets in the Seattle area.
        </p>
        <h5 className={`subtitle text-uppercase mt-md-4 text-blue`}>Currently...</h5>
        <p>
          I've been creating things digitally for roughly two decades, since I was 10 years old. Currently, I'm working
          as a developer at <a href="https://www.hellowildern.com/">Wildern</a> in Seattle. For work enquires, please
          see my availability!
        </p>
      </div>
    </article>
  </Layout>
)

export default AboutPage
