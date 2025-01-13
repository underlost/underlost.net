import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.body
  const { JWT_SECRET_KEY } = process.env
  if (!JWT_SECRET_KEY) {
    return res.status(500).json({ message: `JWT secret key is not configured.` })
  }
  if (!token) {
    return res.status(400).json({ message: `Token is required.` })
  }
  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, JWT_SECRET_KEY)
    // If valid, return the decoded token data (e.g., email, exp, etc.)
    return res.status(200).json({
      message: `Token is valid.`,
      data: decoded,
    })
  } catch (err) {
    // If verification fails, return an error response
    console.error(`Token validation error:`, err)
    // And delete the cookie
    res.setHeader(`Set-Cookie`, `authToken=; Max-Age=0; Path=/; HttpOnly`)
    return res.status(401).json({ message: `Invalid or expired token.` })
  }
}
