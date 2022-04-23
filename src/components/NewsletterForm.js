import React, { useState } from 'react'

const NewsletterForm = () => {
  const [emailState, setEmail] = useState(``)
  const [errorState, setError] = useState(``)
  const [successState, setSuccess] = useState(``)

  const subscribeMe = async (event) => {
    event.preventDefault()

    const res = await fetch(`/api/subscribe`, {
      body: JSON.stringify({ email: emailState }),
      headers: { 'Content-Type': `application/json` },
      method: `POST`,
    })

    const { error, message } = await res.json()
    if (error) {
      setError(error)
    } else {
      setSuccess(message)
    }
  }

  const changeEmail = (event) => {
    const email = event.target.value
    setEmail(email)
  }

  return (
    <div className="newsletter-signup">
      <h3 className="h5 text-uppercase mb-4">Sign up for the latest updates</h3>
      <p>
        I have a newsletter now! Want to stay up to date on the musings of a burnt-out developer that still wants to do way too much? Enter your email and you&apos;ll be added to the list,
        of which you can opt out any time.
      </p>
      <form className="my-4 row g-0" onSubmit={subscribeMe}>
        <div className="col-md-8">
          <input aria-label="Email for newsletter" placeholder="tyler@underlost.net" type="email" autoComplete="email" required className="form-control w-100" onChange={changeEmail} />
        </div>
        <div className="col-md-4">
          <button className="btn btn-secondary w-100" type="submit">
            Subscribe
          </button>
        </div>
      </form>

      <p className="text-end">
        <a className="btn btn-link py-0" href="https://underlost.net/tag/newsletter">
          View Past Issues
        </a>
      </p>

      {successState ? <span className="text-success">{successState}</span> : <span className="text-secondary">{errorState}</span>}
    </div>
  )
}

export default NewsletterForm
