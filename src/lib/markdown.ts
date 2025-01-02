import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { Link } from './interfaces'

// Links

const linkssDirectory = join(process.cwd(), `content/links`)

export function getLinkSlugs() {
  return fs.readdirSync(linkssDirectory)
}

export function getLinkBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, ``)
  const fullPath = join(linkssDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, `utf8`)
  const { data, content } = matter(fileContents)
  return { ...data, slug: realSlug, content } as Link
}

export function getAllLinks(): Link[] {
  const slugs = getLinkSlugs()
  const posts = slugs
    .map((slug) => getLinkBySlug(slug))
    // sort links by weight in descending order
    .sort((post1, post2) => (post1.weight > post2.weight ? -1 : 1))
  return posts
}

// Portfolio

const portfoliosDirectory = join(process.cwd(), `content/portfolio`)

export function getPortfolioSlugs() {
  return fs.readdirSync(portfoliosDirectory)
}

export function getPortfolioBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, ``)
  const fullPath = join(portfoliosDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, `utf8`)
  const { data, content } = matter(fileContents)
  return { ...data, slug: realSlug, content }
}

export function getAllPortfolios() {
  const slugs = getPortfolioSlugs()
  const posts = slugs.map((slug) => getPortfolioBySlug(slug))
  return posts
}
