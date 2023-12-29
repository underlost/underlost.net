export default async function twitterposts(req, res) {
  const start = parseInt(req.query.start || `0`, 10)
  const limit = parseInt(req.query.limit || `10`, 10)
  const order = req.query.order || `desc`
  const tag = req.query.tag || null
  const allPosts = require(`../json/allTwitterPosts.json`)

  // Order posts by ascending or descending
  if (order === `asc`) {
    allPosts.reverse()
  }

  // Filter posts by tag if tag is specified
  let filteredPosts = allPosts
  if (tag) {
    filteredPosts = allPosts.filter(post => post.tags.some(t => t.slug === tag))
  }

  let nextPosts = filteredPosts.slice(start, start + limit)

  res.status(200).json(nextPosts)
}
