import type { NextApiRequest, NextApiResponse } from 'next'
import GhostAdminAPI from '@tryghost/admin-api'
import crypto from 'crypto'
import mailgun from 'mailgun-js'
import { getAllSettings } from '@/lib/ghost'
import { filter } from 'lodash'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {


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

    const member = await api.members.browse(
      {
        filter: `customer_id:'cus_RbbDEZDmAj56OV'`
      }
    )

    //filter: `email:'underlost+jan17@gmail.com'`
    //filter: `subscriptions.id:'sub_1QiO0mAg5XFGmJd39OuVn1gA'`,
    //filter: `status:paid+subscriptions.status:active`,


    return res.status(200).json({
      message: member,
    })
  } catch (err) {
    console.error(`Subscription error:`, err)
    return res.status(500).json({ message: err })
  }
}
