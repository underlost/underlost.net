import { Layout } from '@/components/Layout'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { SEO } from '@/components/meta/seo'
import { seoImage } from '@/components/meta/seoImage'
import { processEnv } from '@/lib/processEnv'
import { getAllSettings, GhostSettings } from '@/lib/ghost'
import { FreeSignupForm } from '@/components/membership/FreeSignupForm'
import { MemberLoginForm } from '@/components/membership/MemberLoginForm'
import { useEffect, useState } from 'react'

/**
 *
 * Renders the Login page
 *
 */

interface CmsData {
  settings: GhostSettings
  seoImage: any
}

interface ErrorPageProps {
  cmsData: CmsData
}

export default function MembersLoginPage({ cmsData }: ErrorPageProps) {
  const router = useRouter()
  const { token, email, action } = router.query
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState(``)
  const [error, setError] = useState(false)

  useEffect(() => {
    const verifyToken = async () => {
      if (token && email && action === `verify`) {
        setLoading(true) // Set loading state
        try {
          const response = await fetch(`/api/login`, {
            method: `POST`,
            headers: {
              'Content-Type': `application/json`,
            },
            body: JSON.stringify({
              otp: token,
              action: action,
              email: email,
            }),
          })
          const result = await response.json()
          if (response.ok) {
            setMessage(result.message || `Verified successfully.`)
          } else {
            setError(true)
            setMessage(result.message || `Something went wrong.`)
          }
        } catch (err) {
          setError(true)
          setMessage(`Failed to verify. Please try again later.`)
        } finally {
          setLoading(false)
        }
      }
    }
    // Wait for `router.query` to be populated
    if (token && action && email) {
      verifyToken()
    }
    if (!token && !action && !email) {
      setLoading(false)
    }
  }, [token, action, email])

  const { settings, seoImage } = cmsData
  const title = `Member Login - ${settings.title}`
  const meta_title = `Member Login - ${settings.title}`
  const meta_description = `underlost.net member login page`

  if (router.isFallback) return <div>Loading...</div>

  return (
    <Layout isHome={false} settings={settings} bodyClass="tag-color-scheme-g login-page" image="/images/background_duotone.jpg">
      <SEO {...{ settings, title, meta_title, meta_description, seoImage }} />

      <div className="container">
        <div className="tag-color-scheme-g container-inner">
          <div className="border-color container-border">
            <article className="container-content text-center">
              <h1 className="h1-xl text-outline ">Login</h1>
              <p className="mb-8 max-w-lg mx-auto text-lg">This site does not use traditional passwords. If you&apos;re already a member, enter your email below to be sent a login link.</p>
              <div className="max-w-lg mx-auto">
                {loading ? <p>Loading...</p> : (
                  !token && !action && !email && <MemberLoginForm />
                )}
                {message && <p className={`text-base ${error ? `text-red-500` : `text-green-500`}`}>{message}</p>}
              </div>
            </article>
          </div>
        </div>
        <section className="relative tag-color-scheme-i p-11">
          <div className="max-w-xl py-16 mx-auto">
            <FreeSignupForm title="Not yet a member?" description="Subscribe to underlost.net to recieve updates straight to your inbox." />
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let settings

  console.time(`Writing Login Page - getStaticProps`)
  try {
    settings = await getAllSettings()
  } catch (error) {
    throw new Error(`Writing Error Page creation failed.`)
  }
  const cmsData = {
    settings,
    seoImage: await seoImage({ siteUrl: settings.processEnv.siteUrl }),
  }
  console.timeEnd(`Writing Login Page - getStaticProps`)

  return {
    props: {
      cmsData,
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }), // re-generate at most once every revalidate second
  }
}
