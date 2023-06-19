import GhostAdminAPI from '@tryghost/admin-api'

// gaysby API endpoint for newsletter subscriptions

export default async function newsletterSubscribe(req, res) {
  // 1. Get the email from the payload and
  // validate if it is empty.
  const { email } = req.body
  if (!email) {
    return res.status(400).json({ error: `Please provide an email id.` })
  }

  // 2. Use the Ghost API API Key and create a subscriber using
  // the email we pass to the API. Note we're using the GhostAdminAPI instead of the Content API
  try {
    const GHOST_ADMIN_API_KEY = process.env.GHOST_ADMIN_API_KEY
    const api = new GhostAdminAPI({
      url: process.env.GHOST_API_URL,
      key: GHOST_ADMIN_API_KEY,
      version: `v3.0`,
    })

    const member = await api.members.add({
      email,
      name: email,
      note: `Subscribed via Website API`,
    })

    if (member.error) {
      return res.status(400).json({ error: member.error })
    } else if (member.errors) {
      return res.status(400).json({ error: member.errors[0].message })
    }

    // 3. If the control goes inside the try block
    // let us consider it as a success(200)
    return res.status(200).json({ message: `You've just subsribed! Be on the look out for an email explaining more details soon.` })
  } catch (err) {
    // 4. If the control goes inside the catch block
    // let us consider it as a server error(500)
    return res.status(500).json({ error: err.message || err.toString() })
  }
}
