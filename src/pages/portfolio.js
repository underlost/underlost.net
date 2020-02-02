/* eslint react/display-name: 0 */
import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import { useTrail } from 'react-spring'
import PageTransition from 'gatsby-v2-plugin-page-transitions'

import PageWrap from '../components/page-wrap'
import PageLayout from '../components/page-layout'

import ProjectsGrid from '../components/projectsGrid'
import PortfolioGrid from '../components/portfolioGrid'
import PortfolioItem from '../components/portfolioItem'

export default () => (
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
    transitionTime={900}>
    <PageWrap>
      <PageLayout>
        <div className={`row no-gutters mb-5`}>
          <div className={`col-md-6 col-lg-4 text-md-left`}>
            <h1 className={`xl headline text-uppercase text-transparent green-stroke`}>Selected Works</h1>
          </div>
        </div>

        <PortfolioGrid />

        <div className={`text-center mb-5`}>
          <h2 className={`xl headline text-uppercase text-transparent green-stroke text-center mb-1`}>Projects</h2>
          <p className={`lead`}>Personal projects I'm currently working on</p>
        </div>

        <ProjectsGrid />
      </PageLayout>
    </PageWrap>
  </PageTransition>
)
