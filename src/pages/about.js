import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout>
    <SEO
      title="About Tyler Rilling"
      description="I'm a hybrid writer, UX designer and developer, with an interest in photography and video games mixed in on the side. I'm basically the bard of the group."
      keywords={[`Tyler Rilling`, `underlost`, `Seattle web developer`]}
    />
    <article className={`section-article pr-lg-5`}>
      <div className={`fadeRight layout-single-column`}>
        <h1 className={`sr-only`}>
          I&apos;m a hybrid writer, UX designer and developer, with an interest in photography and video games mixed in on the side. I&apos;m basically the bard of the group.
        </h1>
        <h2 className={`headline h1 text-lowercase text-transparent blue-stroke px-0 mb-3 mr-lg-5 pr-lg-5`}>A few things about me...</h2>
        <p className={`title h1 text-white`}>
          I&apos;m a hybrid writer, UX designer and developer, with an interest in{` `}
          <a href="https://tyler.camera/" target="_blank" rel="noopener noreferrer">
            photography
          </a>
          {` `}
          and{` `}
          <a href="https://alifewellplayed.com/" target="_blank" rel="noopener noreferrer">
            video games
          </a>
          {` `}
          mixed in on the side. I&apos;m basically the bard of the group.
        </p>
      </div>
      <div className={`layout-single-column fadeLeft`}>
        <p>
          In a past life, I had a background in information computer security and built a successful web hosting business. Since then, I&apos;ve worked as a UX designer and consultant for
          a few video games and virtual reality experiences.
        </p>
        <p>
          I&apos;m influenced by point and click adventure games, trashy 90&apos;s movies, Star Wars, Cardcaptor Sakura, Sailor Moon, Ghost in the Shell, Dungeons & Dragons, technomancy,
          and cyberpunk architecture.
        </p>
        <p>
          I&apos;ve been creating things digitally for roughly two decades. If you&apos;ve ever <em>liked</em> something on the internet, interacted with an <em>eye</em> catching VR
          experience, played a terrific MMO, or visited the
          {` `}
          <em>Wine Country</em>, you’ve probably seen some of my work.{` `}
          <em>I&apos;m sorry about that</em>.
        </p>
        <p>My work has also been featured on CNN, ABC (Australia), and various local news outlets in the Seattle area.</p>

        <h3 className={`subtitle text-uppercase mt-md-4 text-blue`}>Currently</h3>
        <p>
          Currently, I&apos;m working as a developer at <a href="https://www.hellowildern.com/">Wildern</a> in Seattle. For any web development or design project enqueries, please send me
          an{` `}
          <a href="mailto:tylerr@hellowildern.com?subject=Hello">email</a>.
        </p>

        <h3 className={`subtitle text-uppercase mt-md-4 text-blue`}>skillset</h3>
        <ul className={`list-unstyled`}>
          <li>Unity</li>
          <li>Unreal Engine</li>
          <li>Godot game engine</li>
          <li>React Native</li>
          <li>HTML5</li>
          <li>LESS / SCSS / SASS</li>
          <li>Vanilla Javascript and jQuery</li>
          <li>ReactJS, VueJS, GatsbyJS</li>
          <li>Django Web framework</li>
          <li>Python</li>
          <li>PHP</li>
          <li>Ghost CMS</li>
          <li>WordPress & WooCommerce</li>
          <li>Heroku / AWS cloud hosting</li>
          <li>Amazon Lambda</li>
        </ul>
      </div>
    </article>
  </Layout>
)

export default AboutPage
