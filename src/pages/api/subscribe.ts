import type { NextApiRequest, NextApiResponse } from 'next'
import GhostAdminAPI from '@tryghost/admin-api'

// Crate nextjs api endpoint to get twitter data
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { email } = req.body

  // Check if email is provided
  if (!email) {
    return res.status(400).json({ message: `Email is required` })
  }

  try {
    const GHOST_ADMIN_API_KEY = process.env.GHOST_ADMIN_API_KEY
    const api = new GhostAdminAPI({
      url: process.env.GHOST_API_URL || ``, // Add a default value of an empty string if GHOST_API_URL is undefined
      key: GHOST_ADMIN_API_KEY || ``,
      version: `v3.0`,
    })

    const member = await api.members.add({
      email,
      name: email,
      note: `Subscribed via Website API`,
    })

    if (member.error) {
      return res.status(400).json({ message: member.error })
    } else if (member.errors) {
      return res.status(400).json({ error: member.errors[0].message })
    }

    // 3. If the control goes inside the try block
    // let us consider it as a success(200)
    return res.status(200).json({
      message: `You've just subscribed! Be on the look out for an email explaining more details soon.`,
    })
  } catch (err) {
    // 4. If the control goes inside the catch block
    // let us consider it as a server error(500)
    return res.status(500).json({ message: `Internal Server Error` })
  }
}