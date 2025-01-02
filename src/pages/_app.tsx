import '@/styles/globals.scss'
import '@/styles/prism.css'

import type { AppProps } from 'next/app'
import ThemeContextProvider from '../context/ThemeContext'
import AccessibleContextProvider from '../context/AccessibleContext'
import { HelmetProvider } from 'react-helmet-async'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <AccessibleContextProvider>
        <HelmetProvider>
          <AnimatePresence mode="wait">
            <Component {...pageProps} />
          </AnimatePresence>
        </HelmetProvider>
      </AccessibleContextProvider>
    </ThemeContextProvider>
  )
}
