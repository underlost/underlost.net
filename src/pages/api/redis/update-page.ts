import { NextApiRequest, NextApiResponse } from 'next'
import { Redis } from '@upstash/redis'
import { getPageBySlug } from '@/lib/ghost'
import crypto from 'crypto'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== `POST`) {
    return res.status(405).json({ error: `Method not allowed` })
  }

  try {
    const signatureHeader = req.headers[`x-ghost-signature`]
    if (!signatureHeader || typeof signatureHeader !== `string`) {
      return res.status(401).json({ error: `Missing or invalid signature` })
    }

    const [signature, timestamp] = signatureHeader.split(`, t=`)
    if (!signature || !timestamp) {
      return res.status(401).json({ error: `Invalid signature format` })
    }

    const secret = process.env.GHOST_WEBHOOK_SECRET
    if (!secret) {
      return res.status(500).json({ error: `Webhook secret is not configured` })
    }
    const payload = `${timestamp}|${JSON.stringify(req.body)}`
    const computedSignature = `sha256=${crypto.createHmac(`sha256`, secret).update(payload).digest(`hex`)}`

    if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(computedSignature))) {
      return res.status(401).json({ error: `Invalid signature` })
    }

    const { page } = req.body
    if (!page || !page.current || !page.current.slug) {
      return res.status(400).json({ error: `Invalid payload` })
    }

    const slug = page.current.slug
    const cacheKey = `page:${slug}`

    // Delete the page from Redis cache
    await redis.del(cacheKey)
    
    // Fetch the updated page (this will trigger re-caching in getPageBySlug)
    await getPageBySlug(slug)
    
    return res.status(200).json({ message: `200 Okay`, slug })
  } catch (error) {
    console.error(`Error handling webhook:`, error)
    return res.status(500).json({ error: `Internal Server Error` })
  }
}
