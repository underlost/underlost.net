import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

export default async function handler( req: NextApiRequest, res: NextApiResponse) {
  try {
    const { paymentMethodId, tipAmount, email, name } = req.body

    if (!email) {
      return res.status(400).json({ message: `Email is required` })
    }

    const { STRIPE_SECRET_KEY } = process.env
    if (!STRIPE_SECRET_KEY) {
      throw new Error(`Stripe key is not defined`)
    }
    const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: `2024-12-18.acacia` })

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