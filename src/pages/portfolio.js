import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import ProjectsGrid from '../components/ProjectsGrid'
import PortfolioGrid from '../components/PortfolioGrid'

const PortfolioPage = () => (
  <Layout>
    <SEO
      title="Tyler Rilling's Selected Works"
      description="Clients I've worked with, and case studies on selected works."
      keywords={[
        `Tyler Rilling`,
        `underlost`,
        `Seattle web developer`,
        `Seattle Python developer`,
        `Tyler Rilling Portfolio`,
        `Tyler Rilling Selected Works`,
      ]}
    />

    <h1 className={`sr-only`}>Cases Studies and Projects</h1>

    <h2 className={`h2 headline text-uppercase text-transparent blue-stroke mb-1 mr-lg-5`}>Personal Projects</h2>
    <div className={`layout-single-column fadeLeft mr-lg-5`}>
      <p>I make things online. My day job is normally ReactJS and WordPress based. I originally thought of sharing case studies and client work I've done, but seeing as this is my <strong>personal</strong> website, I thought I'd keep with the tone, and share personal projects Im working on.</p>
      <p>For case studies and more professional work, check out my other sites, <a target="_blank" rel="noopener noreferrer" href="https://tyler.codes/">tyler.codes</a> and <a target="_blank" rel="noopener noreferrer" href="https://alifewellplayed.com">A Life Well Played</a>.</p>
    </div>
    <ProjectsGrid />
  </Layout>
)

export default PortfolioPage
