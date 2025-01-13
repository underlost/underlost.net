import { useEffect, useState } from 'react'

const getAuthToken = () => {
  const cookies = document.cookie.split(`; `)
  const authCookie = cookies.find((cookie) => cookie.startsWith(`authToken=`))
  return authCookie ? authCookie.split(`=`)[1] : null
}

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true) // For handling async loading state

  useEffect(() => {
    const validateToken = async () => {
      const token = getAuthToken()
      if (!token) {
        setIsLoggedIn(false)
        setUser(null)
        setLoading(false)
        return
      }

      try {
        const response = await fetch(`/api/validate-token`, {
          method: `POST`,
          headers: {
            'Content-Type': `application/json`,
          },
          body: JSON.stringify({ token }),
        })

        if (response.ok) {
          const data = await response.json()
          setIsLoggedIn(true)
          setUser(data.data) // Backend sends decoded user data
        } else {
          setIsLoggedIn(false)
          setUser(null)
          console.error(`Token validation failed:`, await response.json())
        }
      } catch (error) {
        console.error(`Error validating token:`, error)
        setIsLoggedIn(false)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    validateToken()
  }, []) // Run on component mount

  return { isLoggedIn, user, loading }
}
