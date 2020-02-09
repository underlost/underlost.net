import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import ClientGrid from '../components/ClientGrid'
import ProjectsGrid from '../components/ProjectsGrid'
import PortfolioGrid from '../components/PortfolioGrid'

const PortfolioPage = () => (
  <Layout>
    <SEO
      title="Tyler Rilling's Selected Works"
      description="Clients Ive worked with, and case studies on selected works."
      keywords={[`Tyler Rilling`, `underlost`, `Seattle web developer`, `Tyler Rilling Portfolio`, `Tyler Rilling Selected Works`]}
    />

    <h1></h1>

    <h2 className={`h2 headline text-uppercase text-transparent blue-stroke`}>Clients I&apos;ve worked with...</h2>
    <ClientGrid />

    <h2 className={`h2 headline text-uppercase text-transparent blue-stroke`}>Case Studies</h2>
    <PortfolioGrid />

    <h2 className={`h2 headline text-uppercase text-transparent blue-stroke mb-1`}>Personal Projects</h2>
    <ProjectsGrid />
  </Layout>
)

export default PortfolioPage
