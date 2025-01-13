import type { NextApiRequest, NextApiResponse } from 'next'
import GhostAdminAPI from '@tryghost/admin-api'
import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'

function verifyToken(token: string, secretKey: string): { email: string; expiry: number } | null {
  try {
    const [hash, encodedPayload] = token.split(`.`)
    if (!hash || !encodedPayload) return null

    const payload = Buffer.from(encodedPayload, `base64`).toString(`utf8`)
    const [email, expiry] = payload.split(`:`)

    const expectedHash = crypto
      .createHmac(`sha256`, secretKey)
      .update(payload)
      .digest(`hex`)

    if (hash !== expectedHash) return null
    if (Date.now() > parseInt(expiry, 10)) return null

    return { email, expiry: parseInt(expiry, 10) }
  } catch {
    return null
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token, action } = req.query

  if (!token || action !== `signup`) {
    return res.status(400).json({ message: `Invalid or missing token.` })
  }

  try {
    const { SITE_SECRET_KEY, CMS_GHOST_API_URL, CMS_GHOST_ADMIN_API_KEY, JWT_SECRET } = process.env

    if (!SITE_SECRET_KEY || !CMS_GHOST_API_URL || !CMS_GHOST_ADMIN_API_KEY || !JWT_SECRET) {
      throw new Error(`Missing required environment variables`)
    }

    const verifiedData = verifyToken(token as string, SITE_SECRET_KEY)
    if (!verifiedData) {
      return res.status(400).json({ message: `Invalid or expired token.` })
    }

    const { email } = verifiedData

    // Initialize Ghost Admin API
    const api = new GhostAdminAPI({
      url: CMS_GHOST_API_URL,
      key: CMS_GHOST_ADMIN_API_KEY,
      version: `v5.0`,
    })

    const members = await api.members.browse({
      search: `${email}`,
      limit: 1,
      filter: `label:unverified`,
    })
    if (members.length === 0) {
      return res.status(404).json({ message: `Member not found.` })
    }

    const member = members[0]
    await api.members.edit({
      id: member.id,
      labels: [`verified`],
    })

    // Generate a session token (JWT)
    const sessionToken = jwt.sign(
      { id: member.id, email: member.email },
      JWT_SECRET,
      { expiresIn: `7d` } // Token valid for 7 days
    )

    // Set session token in a cookie
    const cookie = serialize(`auth_token`, sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === `production`,
      sameSite: `strict`,
      path: `/`,
      maxAge: 180 * 24 * 60 * 60, // 7 days in seconds
    })

    res.setHeader(`Set-Cookie`, cookie)

    return res.status(200).json({ message: `Your email has been successfully verified and you are now authenticated!` })
  } catch (err) {
    console.error(`Verification error:`, err)
    return res.status(500).json({ message: `Something went wrong during verification.` })
  }
}
