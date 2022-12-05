const path = require(`path`)
const config = require(`./src/utils/siteConfig`)
const generateRSSFeed = require(`./src/utils/rss/generate-feed`)

require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
})

let ghostConfig

try {
  ghostConfig = require(`./.ghost`)
} catch (e) {
  ghostConfig = {
    production: {
      apiUrl: process.env.GHOST_API_URL,
      contentApiKey: process.env.GHOST_CONTENT_API_KEY,
    },
  }
} finally {
  const { apiUrl, contentApiKey } = process.env.NODE_ENV === `development` ? ghostConfig.development : ghostConfig.production

  if (!apiUrl || !contentApiKey || contentApiKey.match(/<key>/)) {
    throw new Error(`GHOST_API_URL and GHOST_CONTENT_API_KEY are required to build. Check the README.`) // eslint-disable-line
  }
}

/**
 * This is the place where you can tell Gatsby which plugins to use
 * and set them up the way you want.
 *
 * Further info 👉🏼 https://www.gatsbyjs.org/docs/gatsby-config/
 *
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://underlost.net`,
    title: `underlost.net`,
    shortTile: `underlost.net`,
    logo: `images/logo.png`,
    cover_image: `images/background.jpg`,
    siteIcon: `images/logo.png`,
    description: `Underlost is Tyler Rilling, a Python web developer and narrative designer, living in Seattle, Washington. They are probably not an Undertale game.`,
    social: {
      twitter: `@underlost`,
      instagram: `underlost`,
      github: `underlost`,
      keybase: `underlost`,
    },
    keywords: [
      `Tyler Rilling`,
      `underlost`,
      `undertale`,
      `Seattle Web Developer`,
      `Seattle Front-End Developer`,
      `Seattle python developer`,
      `PNW developer`,
      `Pacific Northwest developer`,
    ],
  },
  plugins: [
    /**
     *  Content Plugins
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `pages`),
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/links`,
        name: `links`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/portfolio`,
        name: `portfolio`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-plugin-zopfli`,
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-ghost`,
      options: process.env.NODE_ENV === `development` ? ghostConfig.development : ghostConfig.production,
    },
    /**
     *  Utility Plugins
     */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Underlost`,
        short_name: `Underlost`,
        start_url: `/`,
        background_color: `#F5F1EC`,
        theme_color: `#F5F1EC`,
        display: `minimal-ui`,
        icon: `static/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
                {
                    allGhostSettings {
                        edges {
                            node {
                                title
                                description
                            }
                        }
                    }
                }
              `,
        feeds: [generateRSSFeed(config)],
      },
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        query: `{
          allGhostPost(
            sort: {published_at: ASC}
            filter: {tags: {elemMatch: {name: {eq: "#blog"}}}}
          ) {
            edges {
              node {
                id
                slug
                updated_at
                created_at
                feature_image
              }
            }
          }
          allGhostPage(filter: {tags: {elemMatch: {name: {eq: "#page"}}}}) {
            edges {
              node {
                id
                slug
                updated_at
                created_at
                feature_image
              }
            }
          }
          allGhostTag(sort: {name: ASC}, filter: {visibility: {eq: "public"}}) {
            edges {
              node {
                id
                slug
                feature_image
              }
            }
          }
          allGhostAuthor {
            edges {
              node {
                id
                slug
                profile_image
              }
            }
          }
        }`,
        mapping: {
          allGhostPost: {
            sitemap: `posts`,
            prefix: `writing/`,
          },
          allGhostTag: {
            sitemap: `tags`,
            prefix: `tags/`,
          },
          allGhostAuthor: {
            sitemap: `authors`,
            prefix: `author/`,
          },
          allGhostPage: {
            sitemap: `pages`,
          },
        },
        exclude: [`/dev-404-page`, `/404`, `/404.html`, `/offline-plugin-app-shell-fallback`],
        createLinkInHead: true,
        addUncaughtPages: true,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // Configure SASS to process Tailwind
        postCssPlugins: [require(`tailwindcss`)],
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (e.g. <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (e.g. for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: `language-`,
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in gatsby-browser.js
              // right after importing the prism color scheme:
              //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
              // This adds a new language definition to Prism or extend an already
              // existing language definition. More details on this option can be
              // found under the header "Add new language definition or extend an
              // existing language" below.
              languageExtensions: [
                {
                  language: `superscript`,
                  extend: `javascript`,
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: `root`,
                host: `localhost`,
                global: false,
              },
              // By default the HTML entities <>&'" are escaped.
              // Add additional HTML escapes by providing a mapping
              // of HTML entities and their escape value IE: { '}': '&#123;' }
              escapeEntities: {},
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: `zei6qqd`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`G-YZ280RLRRY`],
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      },
    },
  ],
}
