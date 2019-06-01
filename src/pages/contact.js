import React from 'react'
import PageTransition from 'gatsby-v2-plugin-page-transitions'

import PageWrap from '../components/page-wrap'
import PageLayout from '../components/page-layout'

export default () => (
  <PageTransition
    defaultStyle={{
      transition: 'right 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
      right: '100%',
      position: 'absolute',
      width: '100%',
    }}
    transitionStyles={{
      entering: { right: '0%' },
      entered: { right: '0%' },
      exiting: { right: '100%' },
    }}
    transitionTime={800}>
    <PageWrap>
      <PageLayout>
        <section id="about" className={'section content-section'}>
          <div className={'section-header sr-only'}>
            <h3 className={'h6 title text-green'}>About</h3>
          </div>
          <div className={'section-content row no-gutters px-5 py-5'}>
            <div className={'col-md-12'}>
              <article className={'section-article px-5 py-5'}>
                <div className={'fadeRight layout-single-column'}>
                  <h4 className={'xl text-lowercase headline text-transparent green-stroke'}>Let's Chat!</h4>
                  <span className={'h4 headline text-uppercase text-pink mb-5 d-block'}>Tyler @ underlost.net</span>
                </div>
                <div className={'layout-single-column fadeLeft mb-5'}>
                  <p>
                    I will read every email that comes through my inbox, and I will try to reply to all enquiries within
                    48 hours.
                  </p>
                  <p>
                    That said, Im a horrible correspondent. If I don't respond, or if I do so only after an excessive
                    amount of time has passed, please don't take it personally.
                  </p>
                </div>

                <div className={'fadeRight layout-single-column'}>
                  <h4 className={'h4 text-uppercase headline text-green'}>Want to work together?</h4>

                  <p>
                    I'm always looking for oppertunities to work on narrative-based video game projects. I'm primarily
                    interested in longterm freelance projects and consultant based oppertunities
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
                    Additionally, I currently work full time as a developer at{' '}
                    <a href="https://www.hellowildern.com/">Wildern</a>. For any larger web development or design
                    project enqueries, please send an email to{' '}
                    <a href="mailto:tylerr@hellowildern.com?subject=Hello">tylerr@hellowildern.com</a>.
                  </p>

                  <p className={'lead'}>
                    <a href="mailto:tyler@underlost.net?subject=Hello">
                      <span class="hidden-xs">What are you waiting for?</span> Email me!
                    </a>
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </PageLayout>
    </PageWrap>
  </PageTransition>
)
