import React from 'react'

import Layout from '../components/Layout'

const ContactPage = () => (
  <Layout>
    <article className={`section-article`}>
      <div className={`fadeRight layout-single-column`}>
        <h4 className={`xl text-lowercase headline text-transparent blue-stroke`}>Let&apos;s Chat!</h4>
        <span className={`h4 headline text-uppercase text-pink mb-5 d-block`}>Tyler @ underlost.net</span>
      </div>
      <div className={`layout-single-column fadeLeft mb-5`}>
        <p>I read every email that comes through my inbox, and I will try to reply to all enquiries within 48 hours.</p>
        <p>That said, Im a horrible correspondent. If I don&apos;t respond, or if I do so only after an excessive amount of time has passed, please don&apos;t take it personally.</p>
      </div>

      <div className={`fadeRight layout-single-column`}>
        <h4 className={`subtitle text-uppercase text-green`}>Want to work together?</h4>

        <p>
          I&apos;m always looking for oppertunities to work on narrative-based video game projects. I&apos;m primarily interested in freelance projects and consultant based oppertunities.
          I&apos;m not looking for any full-time positions at this time.
        </p>

        <p>
          Additionally, I currently work full time as a developer at{` `}
          <a href="https://www.hellowildern.com/">Wildern</a>. For any web development or design project enqueries, please send an email to{` `}
          <a href="mailto:tylerr@hellowildern.com?subject=Hello">tylerr@hellowildern.com</a>.
        </p>

        <p className={`lead`}>
          What are you waiting for? you should{` `}
          <a href="mailto:tyler@underlost.net?subject=Hello">Email me!</a>
        </p>
      </div>
    </article>
  </Layout>
)

export default ContactPage
