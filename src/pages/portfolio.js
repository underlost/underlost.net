import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import ClientGrid from '../components/ClientGrid'
import ProjectsGrid from '../components/projectsGrid'
import PortfolioGrid from '../components/PortfolioGrid'

const PortfolioPage = () => (
  <Layout>
    <h2 className={`xl headline text-uppercase text-transparent blue-stroke`}>Case Studies</h2>
    <PortfolioGrid />

    <h2 className={`xl headline text-uppercase text-transparent blue-stroke mb-1`}>Personal Projects</h2>
    <PortfolioGrid />
  </Layout>
)

export default PortfolioPage
