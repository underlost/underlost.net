import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== `POST`) {
    res.setHeader(`Allow`, `POST`)
    return res.status(405).end(`Method Not Allowed`)
  }

  const { tierName, selectedInterval, successUrl, cancelUrl } = req.body

  try {

    const {
      CMS_GHOST_API_URL,
      CMS_GHOST_ADMIN_API_KEY,
      SITE_SECRET_KEY,
      SITE_URL,
      MAILGUN_API_KEY,
      MAILGUN_DOMAIN,
      STRIPE_SECRET_KEY,
    } = process.env

    if (
      !CMS_GHOST_API_URL ||
      !CMS_GHOST_ADMIN_API_KEY ||
      !SITE_SECRET_KEY ||
      !SITE_URL ||
      !MAILGUN_API_KEY ||
      !MAILGUN_DOMAIN ||
      !STRIPE_SECRET_KEY
    ) {
      throw new Error(`Missing required environment variables`)
    }

    const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: `2024-12-18.acacia` })

    // Fetch all products from Stripe
    const products = await stripe.products.list()
    const product = products.data.find((prod) => prod.name === tierName)

    if (!product) {
      return res.status(404).json({ error: `Product with name "${tierName}" not found.` })
    }

    // Fetch prices associated with the product
    const prices = await stripe.prices.list({ product: product.id })

    // Determine the appropriate price based on the interval (monthly or yearly)
    const price = prices.data.find((p) => p.recurring?.interval === selectedInterval)

    if (!price) {
      return res.status(404).json({ error: `Price for interval "${selectedInterval}" not found.` })
    }

    // Create the Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: [`card`],
      mode: `subscription`,
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      metadata: {
        "newsletters": `[]`,
        "referrer_source": `Direct`,
        "attribution_url": `/membership`,
        "requestSrc": `Membership Page`,
        "attribution_type": `url`,
      },
      success_url: successUrl, // URL to redirect after successful payment
      cancel_url: cancelUrl,   // URL to redirect after a canceled payment
    })

    return res.status(200).json({ url: session.url })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: (error as Error).message })
  }
}
