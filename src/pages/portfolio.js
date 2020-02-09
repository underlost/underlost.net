/* eslint react/display-name: 0 */
import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'

import ProjectsGrid from '../components/projectsGrid'
import PortfolioGrid from '../components/portfolioGrid'

export default () => (
  <Layout>
    <h2 className={`xl headline text-uppercase text-transparent blue-stroke`}>Selected Works</h2>
    <PortfolioGrid />

    <h2 className={`xl headline text-uppercase text-transparent blue-stroke mb-1`}>Projects</h2>
    <p className={`subtitle text-uppercase`}>Personal projects I'm currently working on</p>
  </Layout>
)
