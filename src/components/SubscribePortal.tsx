import React, { useState } from 'react'
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import useSWR from 'swr'
import { useStripe, useElements, Elements, CardElement } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { MemberLoginForm } from './portal/MemberLoginForm'
import { FreeSignupForm } from './portal/FreeSignupForm'

interface Tier {
  id: string
  name: string
  description: string | null
  slug: string
  active: boolean
  type: string
  visibility: string
  benefits: string[]
  monthly_price: number | null
  yearly_price: number | null
  currency: string | null
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const SubscribePortal = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false)
  const { data: tiers, error, isLoading } = useSWR<Tier[]>(`/api/tiers`, fetcher)
  const [selectedInterval, setSelectedInterval] = useState(`year`) // `month` or `year`
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null)

  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(``)
  const [successMessage, setSuccessMessage] = useState(``)

  const toggleLogin = () => {
    setIsLoginOpen((state) => !state)
  }

  const toggleSubscribe = () => {
    setIsSubscribeOpen((state) => !state)
    console.log(`Subscribe open:`, isSubscribeOpen)
  }

  const togglePrices = () => {
    setSelectedInterval((state) => (state === `month` ? `year` : `month`))
  }

  const handleCheckout = async (event: React.FormEvent, tier: Tier) => {
    event.preventDefault()
    setLoading(true)
    if (!tier) {
      setErrorMessage(`Missing required information`)
      setLoading(false)
      return
    }
    try {
      console.log(`Creating Stripe Checkout session for ${tier.name}`)
      const res = await fetch(`/api/create-checkout-session`, {
        method: `POST`,
        headers: {
          'Content-Type': `application/json`,
        },
        body: JSON.stringify({
          tierName: tier.name, // Send tier name to the backend
          selectedInterval,
          successUrl: `${window.location.origin}/success`,
          cancelUrl: `${window.location.origin}/cancel`,
        }),
      })

      const { url } = await res.json()
      if (url) {
        window.location.href = url // Redirect to Stripe Checkout
      } else {
        //console.error('Failed to create Stripe Checkout session');
        setErrorMessage(`Failed to create Stripe Checkout session`)
      }
    } catch (error) {
      //console.error('Error redirecting to Stripe Checkout:', error);
      setErrorMessage(`Error redirecting to Stripe Checkout`)
    }
  }

  return (
    <>
      <div className="max-w-md w-full mb-8 mx-auto rounded">
        <div className="grid grid-cols-2">
          <button className={`col-span-2 lg:col-span-1 border border-white p-4 ${selectedInterval === `month` ? `bg-white text-black` : ``}`} onClick={togglePrices}>
            <span className="flex gap-x-4 justify-center">
              <span>Monthly</span>
            </span>
          </button>
          <button className={`col-span-2 lg:col-span-1 border border-white p-4 ${selectedInterval === `year` ? `bg-white text-black` : ``}`} onClick={togglePrices}>
            <span className="flex gap-x-4 justify-center">
              <span>Yearly</span>
            </span>
          </button>
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 md:gap-x-8 mx-auto max-w-2xl mb-8">
        {tiers?.map((tier) => (
          <div key={tier.id} className="p-4 border border-white rounded-lg flex flex-col gap-y-4 justify-between mb-8 md:mb-0">
            <div>
              <div className="mb-4">
                <h3 className="h7 mb-1">{tier.name}</h3>
                {tier.description && <p>{tier.description}</p>}
                {tier.type === `paid` ? (
                  <p className="mb-2 flex gap-x-2">
                    {selectedInterval === `month` ? (
                      <span className="h8">${tier.monthly_price ? (tier.monthly_price / 100).toFixed(2) : `N/A`}</span>
                    ) : (
                      <span className="h8">${tier.yearly_price ? (tier.yearly_price / 100).toFixed(2) : `N/A`}</span>
                    )}
                    {selectedInterval === `month` ? <span>/month</span> : <span>/year</span>}
                  </p>
                ) : (
                  <p className="mb-2">
                    <span className="h8">$0</span>
                  </p>
                )}
              </div>
              <ul className="mb-3">
                {tier.benefits.map((benefit, index) => (
                  <li className="mb-2" key={index}>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              {tier.type === `free` ? (
                <button className="btn w-full" onClick={() => toggleSubscribe()}>
                  Choose
                </button>
              ) : (
                <button className="btn w-full" onClick={(event) => {
                  setSelectedTier(tier)
                  handleCheckout(event, tier)
                }}>
                  {loading ? `Loading...` : `Subscribe`}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="text-center">
        Already have an account?{` `}
        <button onClick={toggleLogin} className="underline">
          Sign in
        </button>
      </p>

      {/* Error message */}
      {errorMessage && <p className="text-center font-bold">{errorMessage}</p>}

      {/* Modals */}
      <Dialog transition open={isSubscribeOpen} onClose={() => setIsSubscribeOpen(false)} className="relative z-50 focus:outline-none">
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/40 ">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-3xl rounded-xl bg-black text-white p-6 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 shadow-lg"
            >
              <DialogTitle className="h6 text-center">Sign up</DialogTitle>

              <div className="max-w-lg mx-auto my-8">
                <FreeSignupForm title="" description="" />
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <Dialog transition open={isLoginOpen} onClose={() => setIsLoginOpen(false)} className="relative z-50 focus:outline-none">
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/40 ">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-lg rounded-xl bg-black text-white p-6 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 shadow-lg"
            >
              <DialogTitle className="h6 text-center">Sign In</DialogTitle>

              <MemberLoginForm />
              
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
