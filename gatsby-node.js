const _ = require(`lodash`)

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  let slug
  // Only use MDX nodes
  if (node.internal.type === `Mdx`) {
    const fileNode = getNode(node.parent)
    // If the frontmatter contains a "permalink", use it
    if (
      Object.prototype.hasOwnProperty.call(node, `frontmatter`) &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, `permalink`)
    ) {
      slug = `/${node.frontmatter.permalink}`
      createNodeField({ node, name: `slug`, value: slug })
      // Adds the name of "gatsby-source-filesystem" as field (in this case "projects" or "pages")
      createNodeField({ node, name: `sourceInstanceName`, value: fileNode.sourceInstanceName })
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Our templates for projects and files inside /pages/*.mdx
  const projectPage = require.resolve(`./src/templates/project.js`)
  const singlePage = require.resolve(`./src/templates/page.js`)

  const result = await wrapper(
    graphql(`
      {
        projects: allMdx(filter: { fields: { sourceInstanceName: { eq: "projects" } } }) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
        portfolio: allMdx(filter: { fields: { sourceInstanceName: { eq: "portfolio" } } }) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
        single: allMdx(filter: { fields: { sourceInstanceName: { eq: "pages" } } }) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
  )

  result.data.projects.edges.forEach(edge => {
    createPage({
      path: edge.node.fields.slug,
      component: projectPage,
      context: {
        // Pass "slug" through context so we can reference it in our query like "$slug: String!"
        slug: edge.node.fields.slug,
      },
    })
  })
  result.data.portfolio.edges.forEach(edge => {
    createPage({
      path: edge.node.fields.slug,
      component: projectPage,
      context: {
        // Pass "slug" through context so we can reference it in our query like "$slug: String!"
        slug: edge.node.fields.slug,
      },
    })
  })
  result.data.single.edges.forEach(edge => {
    createPage({
      path: edge.node.fields.slug,
      component: singlePage,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}

// Necessary changes to get gatsby-mdx and Cypress working
exports.onCreateWebpackConfig = ({ stage, actions, loaders, getConfig }) => {
  const config = getConfig()

  config.module.rules = [
    ...config.module.rules.filter(rule => String(rule.test) !== String(/\.jsx?$/)),
    {
      ...loaders.js(),
      test: /\.jsx?$/,
      exclude: modulePath => /node_modules/.test(modulePath) && !/node_modules\/gatsby-mdx/.test(modulePath),
    },
  ]

  actions.replaceWebpackConfig(config)
}

// Fix for gsap plugin breaking in build mode.
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === `build-html`) {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /DrawSVGPlugin/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
