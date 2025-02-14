import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { GoogleAnalytics } from "@next/third-parties/google"

export default function Document() {
  return (
    <Html lang="en">
      <link rel="shortcut icon" href="/images/favicon.png" />
      <Head>
        
      </Head>
      <GoogleAnalytics gaId="G-YZ280RLRRY" />
      <body className="min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
