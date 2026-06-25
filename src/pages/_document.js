import { Html, Head, Main, NextScript } from "next/document";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function Document() {
  return (
    <Html lang="en" className="h-dvh max-h-dvh overflow-hidden overscroll-none">
      <Head>
        <GoogleAnalytics gaId="G-L8HH1QQNH6" />
      </Head>
      <body className="h-dvh max-h-dvh overflow-hidden overscroll-none touch-none antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
