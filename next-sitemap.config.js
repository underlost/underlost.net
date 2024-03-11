/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || `https://underlost.net`,
  generateRobotsTxt: true, // (optional)
  // ...other options
}
