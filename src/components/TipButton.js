import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Dialog, Transition } from '@headlessui/react'

const stripePromise = loadStripe(`${process.env.STRIPE_PUBLIC_KEY}`)

const TipForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(``)
  const [successMessage, setSuccessMessage] = useState(``)
  const [tipAmountValue, setTipAmountValue] = useState(``) // tip amount
  const [name, setName] = useState(``)
  const [email, setEmail] = useState(``)

  const changeTip = (event) => {
    const amount = event.target.value
    setTipAmountValue(amount)
  }

  const changeName = (event) => {
    const newName = event.target.value
    setName(newName)
  }

  const changeEmail = (event) => {
    const newEmail = event.target.value
    setEmail(newEmail)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    //console.log(`submitting...`)
    setLoading(true)

    if (!stripe || !elements || !tipAmountValue || !name || !email) {
      return
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: `card`,
        card: elements.getElement(CardElement),
      })
      if (error) {
        console.log(`Payment error:`, error)
        setErrorMessage(error.message)
      } else {
        const tipAmount = tipAmountValue * 100 //convert to cents
        // eslint-disable-next-line ghost/ember/require-fetch-import
        const res = await fetch(`/api/processpayment`, {
          method: `POST`,
          headers: {
            'Content-Type': `application/json`,
          },
          body: JSON.stringify({
            paymentMethodId: paymentMethod.id,
            tipAmount: tipAmount,
            email: email,
            name: name,
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
      setErrorMessage(error.message)
    }
  }

  return (
    <>
      {successMessage ? (
        <p className="bg-blue mt-2 px-4 py-2 font-bold text-wide uppercase">{successMessage}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            aria-label="Name"
            placeholder="Name"
            type="text"
            required
            value={name}
            onChange={changeName}
            className="w-full px-2 py-1.5 text-sm border border-black dark:border-purple focus:outline-none dark:bg-purple-dark dark:text-white mb-2"
          />
          <input
            aria-label="Email"
            placeholder="Email"
            type="email"
            required
            value={email}
            onChange={changeEmail}
            className="w-full px-2 py-1.5 text-sm border border-black dark:border-purple focus:outline-none dark:bg-purple-dark dark:text-white mb-2"
          />
          <input
            aria-label="Tip amount"
            placeholder="$5.00"
            type="number"
            required
            className="w-full px-2 py-1.5 text-sm border border-black dark:border-purple focus:outline-none dark:bg-purple-dark dark:text-white mb-2"
            value={tipAmountValue}
            onChange={changeTip}
          />
          <div className="mb-3 border dark:border-purple px-2 py-1.5">
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
          <button type="submit" disabled={!stripe} className="btn btn-primary">
            Leave a tip
          </button>
        </form>
      )}
      {loading && <p className="text-gray-500 mt-2">Processing payment...</p>}
      {errorMessage && <p className="mt-2 text-red">{errorMessage}</p>}
    </>
  )
}

const TipButton = ({ text = `Add a tip` }) => {
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <button type="button" onClick={openModal} className="btn btn-primary text-base text-wide uppercase">
        {text}
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-purple-dark dark:text-purple-light p-6 text-left align-middle shadow-xl transition-all relative">
                  <div className="absolute right-8 top-6">
                    <button
                      type="button"
                      className="text-xs"
                      onClick={closeModal}>
                      Close
                    </button>
                  </div>
                  <Dialog.Title as="h3" className="text-sm font-bold leading-6 text-gray-900">
                    Show Your Support!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="mb-5">
                      Blog posts published on this site will always remain free. If you come across something that has helped or inspired you though, consider showing your support!
                    </p>
                    <Elements stripe={stripePromise}>
                      <TipForm />
                    </Elements>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default TipButton

TipButton.propTypes = {
  text: PropTypes.string,
}
