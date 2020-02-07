import React from 'react'
import PageTransition from 'gatsby-v2-plugin-page-transitions'

import SEO from '../components/seo'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout>
    <PageTransition
      defaultStyle={{
        transition: `right 500ms cubic-bezier(0.47, 0, 0.75, 0.72)`,
        right: `100%`,
        position: `absolute`,
        width: `100%`,
      }}
      transitionStyles={{
        entering: { right: `0%` },
        entered: { right: `0%` },
        exiting: { right: `100%` },
      }}
      transitionTime={800}>
    <SEO title="About" keywords={[`Tyler Rilling`, `underlost`, `Seattle web developer`]} />

    
      <section id="about" className={`section content-section`}>
        <div className={`section-header sr-only`}>
          <h3 className={`h6 title text-green`}>About</h3>
        </div>
        <div className={`section-content row no-gutters px-5 py-5`}>
          <div className={`col-md-12`}>
            <article className={`section-article px-5 py-5`}>
              <div className={`fadeRight layout-single-column`}>
                <h4 className={`xl text-lowercase headline text-transparent green-stroke col-md-11 px-0 mb-5`}>
                  A few things about me...
                </h4>
                <p className={`lead`}>
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
                  business. Since then, I've worked as a UX designer and consultant for a few video games and virtual
                  reality experiences.
                </p>
                <p>
                  I'm influenced by point and click adventure games, bad 90's movies, Star Wars, Cardcaptor Sakura,
                  Sailor Moon, Ghost in the Shell, Dungeons & Dragons, technomancy, and cyberpunk architecture.
                </p>
                <p>
                  If you've ever <em>liked</em> something on the internet, interacted with an <em>eye</em> catching VR
                  experience, played a terrific MMO, or visited the <em>WineCountry</em>, you’ve probably seen some of
                  my work. <em>I'm sorry about that</em>.
                </p>
                <p>
                  My work has been featured on CNN, ABC (Australia), and various local news outlets in the Seattle area.
                </p>
                <h5 className={`headline h4 text-lowercase mt-md-4 text-green`}>Currently...</h5>
                <p>
                  I've been creating things digitally for roughly two decades, since I was 10 years old. Currently, I'm
                  working as a developer at <a href="https://www.hellowildern.com/">Wildern</a> in Seattle. For work
                  enquires, please see my availability!
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    
    </PageTransition>
  </Layout>
)

export default AboutPage
