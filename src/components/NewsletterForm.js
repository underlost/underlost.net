import React, { useState } from 'react'
import FormData from 'form-data'
import qs from 'qs'

const NewsletterForm = () => {
  const [emailState, setEmail] = useState(``)
  const [errorState, setError] = useState(``)
  const [successState, setSuccess] = useState(``)
  const [loading, setLoading] = useState(false)

  let formData = new FormData()
  formData.append(`email`, emailState) // multiple upload

  const data = qs.stringify({
    email: emailState,
  })

  const changeEmail = event => {
    const email = event.target.value
    setEmail(email)
  }

  const subscribeMe = async event => {
    event.preventDefault()
    console.log(`submitting...`)
    setLoading(true)

    try {
      // eslint-disable-next-line ghost/ember/require-fetch-import
      const res = await fetch(`/api/subscribe`, {
        headers: {
          'Content-Type': `application/x-www-form-urlencoded`,
        },
        body: data,
        method: `POST`,
      })
      const { error, message } = await res.json()
      if (error) {
        setError(error)
        setLoading(false)
        console.log(error)
      } else {
        setSuccess(message)
        setLoading(false)
        console.log(res)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="newsletter-signup px-5 lg:px-0">
      <h3 className="font-serif text-3xl mb-5">Sign up for the latest updates</h3>
      <p className="text-lg font-light">
        I have a newsletter now! Want to stay up to date on the musings of a burnt-out developer that still wants to do way too much? Enter your email and you&apos;ll be added to the list,
        of which you can opt out any time.
      </p>
      <form className="my-4 grid grid-cols-12 mb-8" onSubmit={subscribeMe}>
        <div className="col-span-12 lg:col-span-8">
          <input
            aria-label="Email for newsletter"
            placeholder="tyler@underlost.net"
            type="email"
            autoComplete="email"
            required
            className="w-full px-4 py-2 text-lg border-2 border-pink focus:outline-none focus:border-orange"
            onChange={changeEmail}
          />
        </div>
        <div className="col-span-12 lg:col-span-4 mt-3 lg:mt-0">
          <button className="btn btn-secondary w-full bg-pink px-4 py-2 text-lg hover:bg-pink border-2 border-pink focus:outline-none focus:border-orange focus:bg-orange" type="submit">
            {loading ? <div className="spinner-border" /> : `Subscribe`}
          </button>
        </div>
      </form>

      <p className="text-end">
        <a className="btn-underline" href="/tag/newsletter">
          <span>View Past Issues</span>
        </a>
      </p>

      {successState ? <span className="text-secondary">{successState}</span> : <span className="text-secondary">{errorState}</span>}
    </div>
  )
}

export default NewsletterForm
