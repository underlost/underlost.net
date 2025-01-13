import type { NextApiRequest, NextApiResponse } from 'next'
import GhostAdminAPI from '@tryghost/admin-api'
import mailgun from 'mailgun-js'
import crypto from 'crypto'
import { getAllSettings } from '@/lib/ghost'
import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'

// Generate a 6-digit OTP
function generateOTP(email: string, secretKey: string): string {
  const timestamp = Math.floor(Date.now() / (24 * 60 * 60 * 1000)) // One-day interval
  const hmac = crypto.createHmac(`sha256`, secretKey)
  hmac.update(`${email}:${timestamp}`)
  const hash = hmac.digest(`hex`)
  const otp = parseInt(hash.slice(0, 6), 16) % 1000000 // Get a 6-digit OTP
  return otp.toString().padStart(6, `0`) // Ensure it’s 6 digits
}

// Verify OTP
function verifyOTP(email: string, secretKey: string, otp: string): boolean {
  const expectedOTP = generateOTP(email, secretKey)
  return expectedOTP === otp
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, action, otp } = req.body
  const { SITE_SECRET_KEY, CMS_GHOST_API_URL, CMS_GHOST_ADMIN_API_KEY, MAILGUN_DOMAIN, MAILGUN_API_KEY, SITE_URL } = process.env

  if (!SITE_SECRET_KEY || !CMS_GHOST_API_URL || !CMS_GHOST_ADMIN_API_KEY || !MAILGUN_API_KEY || !MAILGUN_DOMAIN || !SITE_URL) {
    throw new Error(`Missing required environment variables`)
  }

  if (!email) {
    return res.status(400).json({ message: `Email is required.` })
  }

  try {
    // Action: Generate OTP and send it
    if (action === `login`) {
      let member
      const api = new GhostAdminAPI({
        url: CMS_GHOST_API_URL,
        key: CMS_GHOST_ADMIN_API_KEY,
        version: `v5.0`,
      })

      const members = await api.members.browse({
        search: `${email}`,
        limit: 1,
      })

      // Check if member exists
      if (members.length === 0) {
        return res.status(404).json({ message: `Member not found.` })
      } else {
        member = members[0]
      }

      // Check if member has verified label
      if (!member.labels || !member.labels.some((label) => typeof label !== `string` && label.name === `verified`)) {
        return res.status(401).json({ message: `Email is not yet verified.` })
      }

      const otp = generateOTP(email, SITE_SECRET_KEY)
      const mailgunClient = mailgun({ apiKey: MAILGUN_API_KEY, domain: MAILGUN_DOMAIN })
      const settings = await getAllSettings()
      const MagicLink = `${SITE_URL}/members/login?email=${email}&action=verify&otp=${otp}`

      const emailData = {
        from: `${settings.title} <no-reply@${MAILGUN_DOMAIN}>`,
        to: member.email || email,
        subject: `🔑 Your Login Link`,
        text: `Your login code is: ${otp}. It is valid for the next 24 hours. Click on this link to login: ${MagicLink}`,
      }

      await mailgunClient.messages().send(emailData)

      return res.status(200).json({
        message: `A one-time password (OTP) has been sent to your inbox. If it doesn't arrive in 3 minutes, check your spam folder.`,
      })
    } else if (action === `verify`) {
      if (!otp) {
        return res.status(400).json({ message: `OTP is required.` })
      }
      if (verifyOTP(email, SITE_SECRET_KEY, otp)) {

        // Set local storage or session storage with JWT token
        const token = jwt.sign({ email, exp: Math.floor(Date.now() / 1000) + 180 * 24 * 60 * 60 }, SITE_SECRET_KEY)
        res.setHeader(
          `Set-Cookie`,
          serialize(`authToken`, token, {
            httpOnly: false, // Accessible by JavaScript
            secure: process.env.NODE_ENV === `production`,
            sameSite: `lax`,
            path: `/`,
            maxAge: 180 * 24 * 60 * 60, // Persist for 180 days
          })
        )
        
        return res.status(200).json({ message: `You are now logged in!` })
      } else {
        return res.status(400).json({ message: `Invalid OTP.` })
      }
    } else {
      return res.status(400).json({ message: `Invalid action.` })
    }
  } catch (err) {
    console.error(`Verification error:`, err)
    return res.status(500).json({ message: `Something went wrong.` })
  }
}
