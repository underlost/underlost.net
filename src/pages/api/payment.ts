export const prerender = false;
import type { APIRoute } from 'astro';
import Stripe from 'stripe';
const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY, { apiVersion: '2025-04-30.basil' });

export const POST: APIRoute = async ({ request }) => {

  const { paymentMethodId, tipAmount, email, name, subscribe } =
    await request.json();
  try {
    // create a PaymentIntent or confirm with paymentMethodId
    const intent = await stripe.paymentIntents.create({
      amount: tipAmount,
      currency: "usd",
      payment_method: paymentMethodId,
      receipt_email: email,
      metadata: { name, subscribe },
      confirm: true,
    });
    return new Response(JSON.stringify({ message: "Thank you!", intent }), {
      status: 200,
    });
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : "An unknown error occurred";
    return new Response(JSON.stringify({ e: errorMessage }), { status: 400 });
  }
}

export const GET: APIRoute = async ({ request }) => {
  return new Response(JSON.stringify({ message: "Okay.", }), {
    status: 200,
  });
}