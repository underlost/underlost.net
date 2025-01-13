import type { NextApiRequest, NextApiResponse } from 'next'
import GhostAdminAPI from '@tryghost/admin-api'
import crypto from 'crypto'
import mailgun from 'mailgun-js'
import { getAllSettings } from '@/lib/ghost'

function generateToken(email: string, expiry: number, secretKey: string): string {
  const payload = `${email}:${expiry}`
  const hash = crypto
    .createHmac(`sha256`, secretKey)
    .update(payload)
    .digest(`hex`)

  return `${hash}.${Buffer.from(payload).toString(`base64`)}`
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, name } = req.body

  if (!email) {
    return res.status(400).json({ message: `Email is required.` })
  }

  try {
    const {
      CMS_GHOST_API_URL,
      CMS_GHOST_ADMIN_API_KEY,
      SITE_SECRET_KEY,
      SITE_URL,
      MAILGUN_API_KEY,
      MAILGUN_DOMAIN,
    } = process.env

    if (
      !CMS_GHOST_API_URL ||
      !CMS_GHOST_ADMIN_API_KEY ||
      !SITE_SECRET_KEY ||
      !SITE_URL ||
      !MAILGUN_API_KEY ||
      !MAILGUN_DOMAIN
    ) {
      throw new Error(`Missing required environment variables`)
    }

    // Initialize Ghost Admin API
    const api = new GhostAdminAPI({
      url: CMS_GHOST_API_URL,
      key: CMS_GHOST_ADMIN_API_KEY,
      version: `v5.0`,
    })

    const memberData = {
      email,
      name: name || email,
      note: `Subscribed via website`,
      labels: [`unverified`, `free`],
      newsletters: [],
      tiers: [],
    }

    const memberOptions = {
      send_email: false,
      email_type: `subscribe`,
    }

    const member = await api.members.add(memberData, memberOptions)

    if (member.errors) {
      return res.status(400).json({ message: member.errors[0].message })
    }

    const expiry = Date.now() + 24 * 60 * 60 * 1000 // 24 hours
    const token = generateToken(email, expiry, SITE_SECRET_KEY)

    const confirmationLink = `${SITE_URL}/members/verify?token=${encodeURIComponent(token)}&action=signup`

    const mailgunClient = mailgun({ apiKey: MAILGUN_API_KEY, domain: MAILGUN_DOMAIN })

    const settings = await getAllSettings()
    const emailData = {
      from: `${settings.title} <no-reply@${MAILGUN_DOMAIN}>`,
      to: email,
      subject: `Complete your sign up`,
      text: `Signup here: ${confirmationLink}`,
    }

    await mailgunClient.messages().send(emailData)

    return res.status(200).json({
      message: `To complete signup, click the confirmation link in your inbox.`,
    })
  } catch (err) {
    console.error(`Subscription error:`, err)
    return res.status(500).json({ message: `Something went wrong while processing your subscription.` })
  }
}
