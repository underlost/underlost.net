import '@/styles/globals.scss'
import '@/styles/prism.css'

import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Script from 'next/script'
import ThemeContextProvider from '../context/ThemeContext'
import AccessibleContextProvider from '../context/AccessibleContext'
import { HelmetProvider } from 'react-helmet-async'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window.gtag === `function`) {
        window.gtag(`config`, `G-YZ280RLRRY`, {
          page_path: url,
        })
        console.log(`Page view tracked: ${url}`) // Optional: for debugging
      }
    }

    // Listen to route changes and track page views
    router.events.on(`routeChangeComplete`, handleRouteChange)

    // Clean up the event listener when the component unmounts
    return () => {
      router.events.off(`routeChangeComplete`, handleRouteChange)
    }
  }, [router.events])


  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-YZ280RLRRY`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YZ280RLRRY', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <ThemeContextProvider>
        <AccessibleContextProvider>
          <HelmetProvider>
            <AnimatePresence mode="wait">
              <Component {...pageProps} />
            </AnimatePresence>
          </HelmetProvider>
        </AccessibleContextProvider>
      </ThemeContextProvider>
    </>
  )
}
