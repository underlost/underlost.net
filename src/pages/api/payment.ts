import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import GhostAdminAPI from '@tryghost/admin-api'
import mailgun from 'mailgun-js'

import { getAllSettings } from '@/lib/ghost'
import { generateToken } from '@/utils/token'

export default async function handler( req: NextApiRequest, res: NextApiResponse) {
  try {
    const { paymentMethodId, tipAmount, email, name, subscribe } = req.body

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

    if (!email) {
      return res.status(400).json({ message: `Email is required` })
    }

    const { STRIPE_SECRET_KEY } = process.env
    if (!STRIPE_SECRET_KEY) {
      throw new Error(`Stripe key is not defined`)
    }
    const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: `2025-01-27.acacia` })

    const price = await stripe.prices.create({
      product: `prod_RXFLoZ20kX5Uy7`, // product id
      unit_amount: tipAmount,
      currency: `usd`,
    })

    // create a customer
    const customer = await stripe.customers.create({
      email: email,
      name: name,
      payment_method: paymentMethodId,
      invoice_settings: {
        default_payment_method: paymentMethodId,
      },
    })

    const paymentIntent = await stripe.paymentIntents.create({
      amount: price.unit_amount ?? 0,
      currency: `USD`,
      payment_method: paymentMethodId,
      confirm: true,
      receipt_email: email,
      description: `website tip from ${name}`,
      customer: customer.id,
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: `never`, // Disable redirect-based methods
      },
      
    })

    const mailgunClient = mailgun({ apiKey: MAILGUN_API_KEY, domain: MAILGUN_DOMAIN })
    const settings = await getAllSettings()

    if (subscribe) {
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
      }

      const memberOptions = {
        send_email: false,
        email_type: `subscribe`,
      }

      const member = await api.members.add(memberData, memberOptions)

      const expiry = Date.now() + 24 * 60 * 60 * 1000 // 24 hours
      const token = generateToken(email, expiry, SITE_SECRET_KEY)
      const confirmationLink = `${SITE_URL}/members/verify?token=${encodeURIComponent(token)}&action=signup`

      const emailSubscribeData = {
        from: `${settings.title} <no-reply@${MAILGUN_DOMAIN}>`,
        to: email,
        subject: `Complete your sign up`,
        text: `Signup here: ${confirmationLink}`,
      }

      await mailgunClient.messages().send(emailSubscribeData)

    }

    const emailData = {
      from: `${settings.title} <no-reply@${MAILGUN_DOMAIN}>`,
      to: email,
      subject: `Thank you for supporting underlost.net!`,
      text: `Thank you for your support! Your tip of $${tipAmount / 100} has been received. If you also subscribed, please check your email to confirm your subscription.`,
    }

    await mailgunClient.messages().send(emailData)

    //console.log(`paymentIntent:`, paymentIntent)
    if (paymentIntent.status !== `succeeded`) {
      return res.status(400).json({ error: `Payment failed with status: ${paymentIntent.status}` })
    }
  } catch (error) {
    console.error(`Error creating payment:`, error)
    res.status(500).json({ message: `Payment failed.` })
  }
  return res.status(200).json({ message: `Payment successful! Thank you for your support!` })
}