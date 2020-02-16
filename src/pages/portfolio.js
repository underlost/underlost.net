import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import ProjectsGrid from '../components/ProjectsGrid'
import PortfolioGrid from '../components/PortfolioGrid'

const PortfolioPage = () => (
  <Layout>
    <SEO
      title="Selected Works"
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
    <article className={`layout-single-column pr-lg-5`}>
      <header className={`fadeRight`}>
        <h1 className={`sr-only`}>Cases Studies and Projects</h1>
        <h2 className={`h1 headline text-lowercase text-transparent blue-stroke mb-2 col-md-8 px-md-0`}>Personal Projects</h2>
      </header>
      <div className={`fadeLeft`}>
        <p>I make things online. My day job is normally ReactJS and WordPress based. I originally thought of sharing case studies and client work I&apos;ve done, but seeing as this is my <strong>personal</strong> website, I thought I&apos;d keep with the tone, and share personal projects Im working on.</p>
        <p>For case studies and more professional work, check out my other sites, <a target="_blank" rel="noopener noreferrer" href="https://tyler.codes/">tyler.codes</a> and <a target="_blank" rel="noopener noreferrer" href="https://alifewellplayed.com">A Life Well Played</a>.</p>

        <ProjectsGrid />
      </div>
    </article>

  </Layout>
)

export default PortfolioPage
