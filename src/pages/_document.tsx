import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="en">
      <link rel="shortcut icon" href="/images/favicon.png" />
      <Head />
      <body className="min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
