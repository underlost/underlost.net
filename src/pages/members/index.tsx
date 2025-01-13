import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const MembersIndex = () => {
  const router = useRouter()
  const { token, action } = router.query

  const [message, setMessage] = useState<string>(`Verifying...`)
  const [loading, setLoading] = useState<boolean>(true)


  return (
    <div style={{ textAlign: `center`, marginTop: `50px` }}>
      Members only page.
    </div>
  )
}

export default MembersIndex
