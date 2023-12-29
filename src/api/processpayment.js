// Docs: https://stripe.com/docs/payments/accept-a-payment-synchronously#web-submit-payment
const stripe = require(`stripe`)(`${process.env.STRIPE_SECRET_KEY}`)

export default async function processpayment(req, res) {
  try {
    // Treat req.body as an object, not a string
    const { paymentMethodId, tipAmount, email, name } = req.body
    //console.log(`paymentMethodId:`, paymentMethodId)
    // Create a charge or payment intent using the paymentMethodId and tipAmount

    const price = await stripe.prices.create({
      product: `prod_O6c5JwpN77T29c`,
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
      amount: price.unit_amount,
      currency: `USD`,
      payment_method: paymentMethodId,
      confirm: true,
      receipt_email: email,
      description: `website tip from ${name}`,
      customer: customer.id,
    })

    //console.log(`paymentIntent:`, paymentIntent)
    if (paymentIntent.error) {
      return res.status(400).json({ error: paymentIntent.error })
    } else if (paymentIntent.errors) {
      return res.status(400).json({ error: paymentIntent.errors[0].message })
    }
    // Return a success response to the client
    return res.status(200).json({ message: `Payment successful! Thank you for your support!` })
  } catch (error) {
    //console.error(`Payment processing error:`, error)
    // Return an error response to the client with the specific error message
    return res.status(500).json({ error: error.message })
  }
}
