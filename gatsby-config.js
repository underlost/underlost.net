module.exports = {
  siteMetadata: {
    title: 'underlost',
    siteUrl: 'https://underlost.net',
    description: 'This is a description',
    googleSiteVerification: '#',
    image: '#',
    author: 'Tyler Rilling',
    social: {
      twitter: `underlost`,
      instagram: `underlost`,
      Github: `underlost`,
    },
  },
  plugins: [
    'gatsby-v2-plugin-page-transitions',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `underlost.net`,
        short_name: `underlost`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
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
        path: `${__dirname}/static/images`,
        name: `images`,
      },
    },

    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 820,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {},
          },
        ],
      },
},

  ]
}
