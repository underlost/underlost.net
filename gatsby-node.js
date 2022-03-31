const path = require(`path`)
const { postsPerPage } = require(`./src/utils/siteConfig`)
const { paginate } = require(`gatsby-awesome-pagination`)

/**
 * Here is the place where Gatsby creates the URLs for all the
 * posts, tags, pages and authors that we fetched from the Ghost site.
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      blog: allGhostPost(sort: { order: ASC, fields: published_at }, filter: { tags: { elemMatch: { name: { eq: "#blog" } } } }) {
        edges {
          node {
            slug
          }
        }
      }
      thoughts: allGhostPost(sort: { order: ASC, fields: published_at }, filter: { tags: { elemMatch: { name: { eq: "#thoughts" } } } }) {
        edges {
          node {
            slug
          }
        }
      }
      caseStudies: allGhostPost(sort: { order: ASC, fields: published_at }, filter: { tags: { elemMatch: { name: { eq: "#casestudies" } } } }) {
        edges {
          node {
            slug
          }
        }
      }
      projects: allGhostPost(sort: { order: ASC, fields: published_at }, filter: { tags: { elemMatch: { name: { eq: "#projects" } } } }) {
        edges {
          node {
            slug
          }
        }
      }
      portfolio: allGhostPage(sort: { order: ASC, fields: published_at }, filter: { tags: { elemMatch: { name: { eq: "#portfolio" } } } }) {
        edges {
          node {
            slug
          }
        }
      }
      allGhostTag(sort: { order: ASC, fields: name }, filter: { visibility: { eq: "public" } }) {
        edges {
          node {
            slug
            url
            postCount
          }
        }
      }
      allGhostAuthor(sort: { order: ASC, fields: name }) {
        edges {
          node {
            slug
            url
            postCount
          }
        }
      }
      allGhostPage(sort: { order: ASC, fields: published_at }, filter: { tags: { elemMatch: { name: { eq: "#page" } } } }) {
        edges {
          node {
            slug
            url
          }
        }
      }
    }
  `)

  //TODO: Filter out private pages

  // Check for any errors
  if (result.errors) {
    // eslint-disable-next-line no-restricted-syntax
    throw new Error(result.errors)
  }

  // Extract query results
  const tags = result.data.allGhostTag.edges
  const authors = result.data.allGhostAuthor.edges
  const pages = result.data.allGhostPage.edges
  const posts = result.data.blog.edges
  const thoughts = result.data.thoughts.edges
  const projects = result.data.projects.edges
  const caseStudies = result.data.caseStudies.edges
  const portfolio = result.data.portfolio.edges

  // Load templates
  const indexTemplate = path.resolve(`./src/templates/archive.js`)
  const tagsTemplate = path.resolve(`./src/templates/tag.js`)
  const authorTemplate = path.resolve(`./src/templates/author.js`)
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const postTemplate = path.resolve(`./src/templates/post.js`)
  const portfolioTemplate = path.resolve(`./src/templates/portfolio.js`)

  // Create tag pages
  tags.forEach(({ node }) => {
    const totalPosts = node.postCount !== null ? node.postCount : 0
    const numberOfPages = Math.ceil(totalPosts / postsPerPage)

    // This part here defines, that our tag pages will use
    // a `/tag/:slug/` permalink.
    node.url = `/tag/${node.slug}/`

    Array.from({ length: numberOfPages }).forEach((_, i) => {
      const currentPage = i + 1
      const prevPageNumber = currentPage <= 1 ? null : currentPage - 1
      const nextPageNumber = currentPage + 1 > numberOfPages ? null : currentPage + 1
      const previousPagePath = prevPageNumber ? (prevPageNumber === 1 ? node.url : `${node.url}page/${prevPageNumber}/`) : null
      const nextPagePath = nextPageNumber ? `${node.url}page/${nextPageNumber}/` : null

      createPage({
        path: i === 0 ? node.url : `${node.url}page/${i + 1}/`,
        component: tagsTemplate,
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.slug,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numberOfPages: numberOfPages,
          humanPageNumber: currentPage,
          prevPageNumber: prevPageNumber,
          nextPageNumber: nextPageNumber,
          previousPagePath: previousPagePath,
          nextPagePath: nextPagePath,
        },
      })
    })
  })

  // Create author pages
  authors.forEach(({ node }) => {
    const totalPosts = node.postCount !== null ? node.postCount : 0
    const numberOfPages = Math.ceil(totalPosts / postsPerPage)

    // This part here defines, that our author pages will use
    // a `/author/:slug/` permalink.
    node.url = `/author/${node.slug}/`

    Array.from({ length: numberOfPages }).forEach((_, i) => {
      const currentPage = i + 1
      const prevPageNumber = currentPage <= 1 ? null : currentPage - 1
      const nextPageNumber = currentPage + 1 > numberOfPages ? null : currentPage + 1
      const previousPagePath = prevPageNumber ? (prevPageNumber === 1 ? node.url : `${node.url}page/${prevPageNumber}/`) : null
      const nextPagePath = nextPageNumber ? `${node.url}page/${nextPageNumber}/` : null

      createPage({
        path: i === 0 ? node.url : `${node.url}page/${i + 1}/`,
        component: authorTemplate,
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.slug,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numberOfPages: numberOfPages,
          humanPageNumber: currentPage,
          prevPageNumber: prevPageNumber,
          nextPageNumber: nextPageNumber,
          previousPagePath: previousPagePath,
          nextPagePath: nextPagePath,
        },
      })
    })
  })

  // Create pages
  pages.forEach(({ node }) => {
    // This part here defines, that our pages will use
    // a `/:slug/` permalink.
    node.url = `/${node.slug}/`

    createPage({
      path: node.url,
      component: pageTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })

  // Create projects
  projects.forEach(({ node }) => {
    // This part here defines, that our pages will use
    // a `/projects/:slug/` permalink.
    node.url = `/projects/${node.slug}/`

    createPage({
      path: node.url,
      component: postTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })

  // Create Portfolio items
  portfolio.forEach(({ node }) => {
    // This part here defines, that our pages will use
    // a `/projects/:slug/` permalink.
    node.url = `/portfolio/${node.slug}/`

    createPage({
      path: node.url,
      component: portfolioTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })

  // Create post pages
  posts.forEach(({ node }) => {
    // This part here defines, that our posts will use
    // a `/:slug/` permalink.
    node.url = `/writing/${node.slug}/`

    createPage({
      path: node.url,
      component: postTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })

  // Create post case studies
  caseStudies.forEach(({ node }) => {
    // This part here defines, that our posts will use
    // a `/:slug/` permalink.
    node.url = `/case-studies/${node.slug}/`

    createPage({
      path: node.url,
      component: postTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })

  thoughts.forEach(({ node }) => {
    // This part here defines, that our posts will use
    // a `/:slug/` permalink.
    node.url = `/thoughts/${node.slug}/`

    createPage({
      path: node.url,
      component: postTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })

  // Create pagination
  paginate({
    createPage,
    items: posts,
    itemsPerPage: postsPerPage,
    component: indexTemplate,
    pathPrefix: ({ pageNumber }) => {
      if (pageNumber === 0) {
        return `/archive/`
      } else {
        return `/archive/page`
      }
    },
  })
}

// eslint-disable-next-line no-unused-vars
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: { url: require.resolve(`url/`) },
    },
  })
}
