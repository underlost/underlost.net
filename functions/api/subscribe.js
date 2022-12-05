// Cloudflare API endpoint for newsletter subscription

export async function onRequestPost(context) {
  try {
    // Get the email and env from the payload
    const { env, request } = context
    const bodyData = await request.formData()
    const email = bodyData.get(`email`)

    // validate if it is empty.
    if (!email) {
      return new Response(JSON.stringify(`Email is missing.`), {
        headers: {
          'Content-Type': `application/json;charset=utf-8`,
        },
        status: 400,
      })
    }
    // Use the Revue API Key and create a subscriber using
    // the email we pass to the API. Please note, we pass the
    // API Key in the 'Authorization' header.
    const API_KEY = env.REVUE_API_KEY

    // eslint-disable-next-line ghost/ember/require-fetch-import
    const response = await fetch(`https://www.getrevue.co/api/v2/subscribers`, {
      method: `POST`,
      body: JSON.stringify({ email: email, double_opt_in: false }),
      headers: {
        Authorization: `Token ${API_KEY}`,
        'Content-Type': `application/json`,
      },
    })
    // 3. We check in the response if the status is 400
    // If so, consider it as error and return. Otherwise a 201
    // for create
    if (response.status >= 400) {
      const message = await response.json()
      console.log(message.error.email[0])
      return new Response(JSON.stringify({ error: message.error.email[0] }), {
        headers: {
          'Content-Type': `application/json;charset=utf-8`,
        },
        status: 400,
      })
    }
    return new Response(JSON.stringify({ message: `Hey, ${email}, Thanks for signing up! Please check your email and verify it.` }), {
      headers: {
        'Content-Type': `application/json;charset=utf-8`,
      },
      status: 200,
    })
  } catch (err) {
    // 4. If the control goes inside the catch block
    // let us consider it as a server error(500)
    return new Response(JSON.stringify({ error: err }), {
      headers: {
        'Content-Type': `application/json;charset=utf-8`,
      },
      status: 500,
    })
  }
}
