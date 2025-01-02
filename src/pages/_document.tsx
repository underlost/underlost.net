import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <link rel="shortcut icon" href="/images/favicon.png" />
      <Head />
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-YZ280RLRRY`} />
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
      <body className="min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
