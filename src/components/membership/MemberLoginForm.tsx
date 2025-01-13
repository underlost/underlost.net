import React, { ReactNode, useState, useEffect, useContext } from 'react'
import jwt from 'jsonwebtoken'


export const MemberLoginForm = () => {

  const [email, setEmail] = useState(``)
  const [token, setToken] = useState(``)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(``)
  const [error, setError] = useState(false)
  const [showTokenLogin, setShowTokenLogin] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  const getAuthToken = () => {
    const cookies = document.cookie.split(`; `)
    const authCookie = cookies.find((cookie) => cookie.startsWith(`authToken=`))
    return authCookie ? authCookie.split(`=`)[1] : null
  }

  useEffect(() => {
    const token = getAuthToken()
    if (token) {
      try {
        const decodedToken = jwt.decode(token) // Only decode; validation happens on the server
        if (decodedToken && typeof decodedToken !== `string` && decodedToken.exp && decodedToken.exp > Date.now() / 1000) {
          setIsLoggedIn(true)
        } else {
          setIsLoggedIn(false) // Token expired
        }
      } catch (error) {
        console.error(`Error decoding token:`, error)
        setIsLoggedIn(false) // Invalid token
      }
    } else {
      setIsLoggedIn(false) // No token found
    }
  }, []) // Run only once on component mount
  
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setMessage(``)
    setLoading(true)
    if (!email) {
      setError(true)
      setLoading(false)
      setMessage(`Please enter an email address.`)
      return
    }
    try {
      const action = `login`
      const response = await fetch(`/api/login`, {
        method: `POST`,
        headers: {
          'Content-Type': `application/json`,
        },
        body: JSON.stringify({ email, action }),
      })
      const result = await response.json()

      if (response.ok) {
        setMessage(result.message || `One time password sent to your email.`)
        setEmail(``) // Clear the input
      } else {
        setError(true)
        setMessage(result.message || `Something went wrong.`)
      }
    } catch (err) {
      setError(true)
      setMessage(`Failed to login. Please try again later.`)
    } finally {
      setLoading(false)
    }
  }
  
  const handleVerify = async (event: React.FormEvent) => {
    event.preventDefault()
    setMessage(``)
    setLoading(true)
    if (!email || !token) {
      setError(true)
      setLoading(false)
      setMessage(`Please enter an email address and code.`)
      return
    }
    try {
      const response = await fetch(`/api/login`, {
        method: `POST`,
        headers: {
          'Content-Type': `application/json`,
        },
        body: JSON.stringify({ 
          email: email, 
          otp: token, 
          action: `verify`,
        }),
      })
      const result = await response.json()

      if (response.ok) {
        setMessage(result.message || `One time password sent to your email.`)
        setEmail(``) // Clear the input
        setToken(``) // Clear the input
      } else {
        setError(true)
        setMessage(result.message || `Something went wrong.`)
      }
    } catch (err) {
      setError(true)
      setMessage(`Failed to login. Please try again later.`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="py-12">
      {!isLoggedIn ? (
        <>
          {!showTokenLogin ? (
            <>
              <form className="mb-5" onSubmit={handleSubmit}>
                <input type="email" className="text-field w-full mb-3" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button className="btn-white w-full">
                  {loading ? `Loading...` : `Continue`}
                </button>
              </form>
              <p className="mb-5">Already have a <button className="underline" onClick={() => setShowTokenLogin(!showTokenLogin)}>token?</button></p>
            </>
          ) : (
            <>
              <form className="mb-5" onSubmit={handleVerify}>
                <input type="email" className="text-field w-full mb-3" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" className="text-field w-full mb-3" placeholder="Login Code" value={token} onChange={(e) => setToken(e.target.value)} />
                <button className="btn-white w-full">
                  {loading ? `Loading...` : `Continue`}
                </button>
              </form>
              <p className="mb-5"><button className="underline" onClick={() => setShowTokenLogin(!showTokenLogin)}>Request</button> login code.</p>
            </>
          )}
        </>
      ) : (<p className="mb-5">You are already logged in.</p>)}

      {message && <p className={`font-black`}>{message}</p>}
    </div>
  )
}


