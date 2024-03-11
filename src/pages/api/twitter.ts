import type { NextApiRequest, NextApiResponse } from 'next'
import twitterData from '../../../twitter.json'

// Crate nextjs api endpoint to get twitter data
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const start = parseInt(req.query.start?.toString() || `0`, 10)
  const limit = parseInt(req.query.limit?.toString() || `10`, 10)
  const order = req.query.order?.toString() || `desc`
  const tag = req.query.tag?.toString() || null

  if (order !== `desc` && order !== `asc`) {
    return res.status(400).json({ error: `Invalid order parameter` })
  }

  if (start < 0) {
    return res.status(400).json({ error: `Invalid start parameter` })
  }

  if (limit < 1 || limit > 50) {
    return res.status(400).json({ error: `Invalid limit parameter` })
  }

  if (order === `asc`) {
    twitterData.reverse()
  }

  let filteredPosts = twitterData
  if (tag) {
    filteredPosts = twitterData.filter((post) => post.tags.some((t) => t.slug === tag))
  }

  let nextPosts = filteredPosts.slice(start, start + limit)
  let results = {
    posts: nextPosts,
    meta: {
      start: start,
      limit: limit,
      total: filteredPosts.length,
    },
  }

  return res.status(200).json(results)

}
