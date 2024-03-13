import '@/styles/globals.scss'
import '@/styles/prism.css'

import type { AppProps } from 'next/app'
import ThemeContextProvider from '../context/ThemeContext'
import { HelmetProvider } from 'react-helmet-async'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <HelmetProvider>
        <Component {...pageProps} />
      </HelmetProvider>
    </ThemeContextProvider>
  )
}
