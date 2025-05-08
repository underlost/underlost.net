export const prerender = false;
import type { APIRoute } from 'astro';
import GhostAdminAPI from '@tryghost/admin-api'
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
      return_url: `https://underlost.net/thank-you/`,
    });

    if (subscribe) {
      const api = new GhostAdminAPI({
        url: import.meta.env.CMS_GHOST_API_URL,
        key: import.meta.env.CMS_GHOST_ADMIN_API_KEY,
        version: `v5.0`,
      })

      const memberData = {
        email,
        name: name || email,
        note: `Subscribed via tip jar`,
        labels: [`tip-jar`, `free`],
        newsletters: [],
      }

      const memberOptions = {
        send_email: true,
        email_type: `subscribe`,
      }

      const member = await api.members.add(memberData, memberOptions)
    }

    return new Response(JSON.stringify({ message: "success", intent }), {
      status: 200,
    });
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : "An unknown error occurred";
    return new Response(JSON.stringify({ e: errorMessage }), { status: 400 });
  }
}

export const GET: APIRoute = async ({ request }) => {
  return new Response(JSON.stringify({ message: "hmmm..", }), {
    status: 200,
  });
}