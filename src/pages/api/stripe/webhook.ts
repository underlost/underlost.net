import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import crypto from 'crypto'
import mailgun from 'mailgun-js'
import GhostAdminAPI from '@tryghost/admin-api'
import { getAllSettings } from '@/lib/ghost'

const {
  CMS_GHOST_API_URL,
  CMS_GHOST_ADMIN_API_KEY,
  SITE_SECRET_KEY,
  SITE_URL,
  MAILGUN_API_KEY,
  MAILGUN_DOMAIN,
  STRIPE_SECRET_KEY,
  STRIPE_WEBHOOK_SECRET
} = process.env

if (
  !CMS_GHOST_API_URL ||
  !CMS_GHOST_ADMIN_API_KEY ||
  !SITE_SECRET_KEY ||
  !SITE_URL ||
  !MAILGUN_API_KEY ||
  !MAILGUN_DOMAIN ||
  !STRIPE_SECRET_KEY ||
  !STRIPE_WEBHOOK_SECRET
) {
  throw new Error(`Missing required environment variables`)
}

// Initialize Stripe with your secret key
const stripe = new Stripe(STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-12-18.acacia', // Ensure the API version matches your dashboard settings
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const sig = req.headers['stripe-signature'] as string;
    let event;
    try {
      if (
        !STRIPE_SECRET_KEY ||
        !STRIPE_WEBHOOK_SECRET
      ) {
        throw new Error(`Missing required environment variables`)
      }
      // Verify the event by constructing it using Stripe's library
      event = stripe.webhooks.constructEvent(req.body, sig, STRIPE_WEBHOOK_SECRET);
    } catch (err: any) {
      console.error(`⚠️ Webhook signature verification failed.`, err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event based on its type
    switch (event.type) {
      case 'customer.subscription.created':
        handleSubscriptionCreated(event.data.object as Stripe.Subscription);
        break;
      case 'customer.subscription.updated':
        handleSubscriptionUpdated(event.data.object as Stripe.Subscription);
        break;
      case 'checkout.session.completed':
        handleCheckoutSessionCompleted(event.data.object as Stripe.Checkout.Session);
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    // Respond with 200 to acknowledge receipt of the event
    res.status(200).send('Received Stripe webhook');
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

// Define handlers for each event type
const handleSubscriptionCreated = (subscription: Stripe.Subscription) => {
  console.log('Subscription created:', subscription);
  // Add your custom logic here
};

const handleSubscriptionUpdated = (subscription: Stripe.Subscription) => {
  console.log('Subscription updated:', subscription);
  // Add your custom logic here
};

const handleCheckoutSessionCompleted = (session: Stripe.Checkout.Session) => {
  console.log('Checkout session completed:', session);
  // Add your custom logic here

  const api = new GhostAdminAPI({
    url: CMS_GHOST_API_URL,
    key: CMS_GHOST_ADMIN_API_KEY,
    version: `v5.0`,
  })

  // Create a new member in Ghost
  const memberData = {
    email: session.customer_email as string,
    name: session.metadata?.name || session.customer_email || undefined, // Ensure `name` is string or undefined
    note: `Subscribed via Stripe Checkout`,
    labels: [],
    newsletters: [],
    subscriptions: [
      {
        id: session.subscription as string, // Ensure `id` is string
        customer: {
          id: typeof session.customer === 'string' ? session.customer : '', // Ensure `id` is always a string
          name: session.customer_details?.name || session.customer_email || undefined, // Ensure `name` is string or undefined
          email: session.customer_details?.email || session.customer_email || undefined, // Ensure `email` is string or undefined
        },
        trial_end_at: null, // Add the required `trial_end_at` property
      },
    ],
  };

  const memberOptions = {
    send_email: false,
    email_type: `subscribe`,
  };


};

// Disable body parser to properly receive raw body data
export const config = {
  api: {
    bodyParser: false,
  },
};
