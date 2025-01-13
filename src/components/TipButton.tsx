import React, { useState, Fragment } from 'react'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Link from 'next/link'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || ``)

const TipForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(``)
  const [successMessage, setSuccessMessage] = useState(``)
  const [tipAmountValue, setTipAmountValue] = useState(``) // tip amount
  const [name, setName] = useState(``)
  const [email, setEmail] = useState(``)
  
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setLoading(true)

    if (!stripe || !elements || !tipAmountValue || !name || !email) {
      return
    }

    try {
      const cardElement = elements.getElement(CardElement)
      if (!cardElement) {
        setErrorMessage(`Card information is missing`)
        setLoading(false)
        return
      }
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: `card`,
        card: cardElement,
      })
      if (error) {
        setErrorMessage(error.message || `An unknown error occurred`)
      } else {
        const tipAmount = parseFloat(tipAmountValue) * 100 //convert to cents
        const res = await fetch(`/api/payment`, {
          method: `POST`,
          headers: {
            'Content-Type': `application/json`,
          },
          body: JSON.stringify({
            paymentMethodId: paymentMethod.id,
            tipAmount: tipAmount,
            email: email,
            name: name,
            subscribe: false,
          }),
        })
        const { e, message } = await res.json()
        if (e) {
          setErrorMessage(e)
          setLoading(false)
          //console.log(error)
        } else {
          setSuccessMessage(message)
          setErrorMessage(``)
          setLoading(false)
          //console.log(res)
        }
      }
      setLoading(false)
    } catch (error) {
      console.error(`Payment error:`, error)
      setLoading(false)
      if (error instanceof Error) {
        setErrorMessage(error.message)
      } else {
        setErrorMessage(`An unknown error occurred`)
      }
    }
  }

  return (
    <>
      {successMessage ? (
        <p className="bg-blue mt-2 px-4 py-2 font-bold text-wide uppercase">{successMessage}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input aria-label="Name" placeholder="Name" type="text" required value={name} onChange={(e) => setName(e.target.value)} className="text-field w-full mb-3" />
          <input aria-label="Email" placeholder="Email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="text-field w-full mb-3" />
          <input aria-label="Tip amount" placeholder="$5.00" type="number" required className="text-field w-full mb-3" value={tipAmountValue} onChange={(e) => setTipAmountValue(e.target.value)} />
          <div className="text-field w-full mb-3">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: `16px`,
                    color: `#424770`,
                    '::placeholder': {
                      color: `#aab7c4`,
                    },
                  },
                  invalid: {
                    color: `#9e2146`,
                  },
                },
              }}
            />
          </div>
          <button type="submit" disabled={!stripe} className="btn btn-lg w-full mb-5">
            Leave a tip
          </button>
          <p className="text-sm">
            Payments are submitted through Stripe. No credit card information is stored on underlost.net. For full transparency all code is freely available to view on{` `}
            <a className="underline" target="_blank" rel="noreferrer" href="https://github.com/underlost/underlost.net">
              Github
            </a>
            .
          </p>
        </form>
      )}
      {loading && <p className="font-bold text-lg mt-2">Processing payment...</p>}
      {errorMessage && <p className="mt-2 text-red">{errorMessage}</p>}
    </>
  )
}

const TipButton = () => (
  <>
    <div className="mt-2 max-w-lg mx-auto">
      <p className="mb-5 text-lg">
          Most content published on this site will always remain free. If you come across something that has helped or inspired you though, consider showing your support! Or{` `}
        <Link href="/membership/" className="underline">
            learn more about the membership program
        </Link>
          .
      </p>
      <Elements stripe={stripePromise}>
        <TipForm />
      </Elements>
    </div>
  </>
)

export default TipButton
