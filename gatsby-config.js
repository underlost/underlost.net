module.exports = {
  siteMetadata: {
    title: `underlost.net`,
    shortTile: `underlost.net`,
    logo: `images/logo.png`,
    cover_image: `images/background.jpg`,
    siteIcon: `images/logo.png`,
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
    author: {
      name: `Tyler Rilling`,
      image: ``,
      sameAsArray: {},
    },
    googleSiteVerification: `#`,
    image: ``,
    social: {
      twitter: `@underlost`,
      instagram: `underlost`,
      github: `underlost`,
      keybase: `underlost`,
    },
    shareImageWidth: 1000,
    shareImageHeight: 523,
    backgroundColor: `#e9e9e9`,
    themeColor: `#15171A`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-zopfli`,
    },
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: ` UA-1247925-1`,
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
}
