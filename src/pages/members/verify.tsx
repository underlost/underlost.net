import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Members = () => {
  const router = useRouter()
  const { token, action } = router.query

  const [message, setMessage] = useState<string>(`Verifying...`)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const verifyMember = async () => {
      if (!token || action !== `signup`) {
        setMessage(`Invalid or expired confirmation link.`)
        setLoading(false)
        return
      }
      try {
        const response = await fetch(
          `/api/verify-email?token=${token}&action=${action}`
        )
        const contentType = response.headers.get(`content-type`)
        let result
        // Check if response is JSON
        if (contentType && contentType.includes(`application/json`)) {
          result = await response.json()
        } else {
          result = { message: await response.text() }
        }
        if (response.ok) {
          setMessage(result.message || `Verification successful.`)
        } else {
          setMessage(result.message || `Verification failed.`)
        }
      } catch (error) {
        console.error(`Verification error:`, error)
        setMessage(`An error occurred while verifying your email.`)
      } finally {
        setLoading(false)
      }
    }

    if (token && action) {
      verifyMember()
    }
  }, [token, action])

  return (
    <div style={{ textAlign: `center`, marginTop: `50px` }}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <h1>{message}</h1>
      )}
    </div>
  )
}

export default Members
