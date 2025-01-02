import type { NextApiRequest, NextApiResponse } from 'next'
import GhostAdminAPI from '@tryghost/admin-api'

// Crate nextjs api endpoint to subscribe a user
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body
  if (!email) {
    return res.status(400).json({ message: `Email is required` })
  }
  try {
    console.log(`GHOST_API_URL:`, process.env.CMS_GHOST_API_URL)
    const GHOST_ADMIN_API_KEY = process.env.CMS_GHOST_ADMIN_API_KEY
    const api = new GhostAdminAPI({
      url: process.env.CMS_GHOST_API_URL || ``, // Add a default value of an empty string if GHOST_API_URL is undefined
      key: GHOST_ADMIN_API_KEY || ``,
      version: `v3.0`,
    })
    const data = { email: email,name: email, note: `Subscribed via Website API` }
    const options = { send_email: true, email_type: `subscribe` }
    const member = await api.members.add(data, options)

    if (member.error) {
      return res.status(400).json({ message: member.error })
    } else if (member.errors) {
      return res.status(400).json({ error: member.errors[0].message })
    }
    return res.status(200).json({
      message: `You've just subscribed! Be on the look out for an email explaining more details soon.`,
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: `Something went wrong` })
  }
}