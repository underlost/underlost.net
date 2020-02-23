module.exports = {
  siteMetadata: {
    title: `underlost.net`,
    siteUrl: `https://underlost.net`,
    description: `I make dumb, sometimes cool things on the internet.`,
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
    googleSiteVerification: `#`,
    image: ``,
    author: `Tyler Rilling`,
    social: {
      twitter: `underlost`,
      instagram: `underlost`,
      Github: `underlost`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `underlost.net`,
        short_name: `underlost`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require(`node-sass`),
        precision: 8,
        includePaths: [`${__dirname}/src/sass/site.scss`],
        sourceComments: true,
        sourceMap: true,
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
        path: `${__dirname}/content/projects`,
        name: `projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `single`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images`,
        name: `images`,
      },
    },
    `gatsby-plugin-mdx`,
  ],
}
