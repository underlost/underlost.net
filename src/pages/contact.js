import React from 'react'

import Layout from '../components/Layout'

export default () => (
  <Layout>
    <article className={`section-article`}>
      <div className={`fadeRight layout-single-column`}>
        <h4 className={`xl text-lowercase headline text-transparent blue-stroke`}>Let's Chat!</h4>
        <span className={`h4 headline text-uppercase text-pink mb-5 d-block`}>Tyler @ underlost.net</span>
      </div>
      <div className={`layout-single-column fadeLeft mb-5`}>
        <p>
          I will read every email that comes through my inbox, and I will try to reply to all enquiries within 48 hours.
        </p>
        <p>
          That said, Im a horrible correspondent. If I don't respond, or if I do so only after an excessive amount of
          time has passed, please don't take it personally.
        </p>
      </div>

      <div className={`fadeRight layout-single-column`}>
        <h4 className={`subtitle text-uppercase text-green`}>Want to work together?</h4>

        <p>
          I'm always looking for oppertunities to work on narrative-based video game projects. I'm primarily interested
          in freelance projects and consultant based oppertunities. Im not looking to be hired for any full time
          positions at this time.
        </p>
        <ul>
          <li>Unity</li>
          <li>Unreal</li>
          <li>Godot game engine</li>
          <li>HTML5</li>
          <li>LESS / SCSS / SASS, as well as various CSS frameworks including Bootstrap and Bulma.</li>
          <li>Javascript / jQuery</li>
          <li>ReactJS</li>
          <li>Django Web framework</li>
          <li>Python 2/3</li>
          <li>PHP</li>
          <li>WordPress & WooCommerce</li>
          <li>Heroku / AWS cloud hosting</li>
          <li>Amazon Lambda</li>
        </ul>

        <p>
          Additionally, I currently work full time as a developer at{` `}
          <a href="https://www.hellowildern.com/">Wildern</a>. For any larger web development or design project
          enqueries, please send an email to{` `}
          <a href="mailto:tylerr@hellowildern.com?subject=Hello">tylerr@hellowildern.com</a>.
        </p>

        <p className={`lead`}>
          <a href="mailto:tyler@underlost.net?subject=Hello">
            <span className="hidden-xs">What are you waiting for?</span> Email me!
          </a>
        </p>
      </div>
    </article>
  </Layout>
)
