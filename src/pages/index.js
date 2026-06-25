import Head from "next/head";
import FloatingIcosahedron from "../components/FloatingIcosahedron";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Underlost, By Tyler Rilling</title>
        <meta
          name="description"
          content="I'm Tyler Rilling, a growth & success engineer, and independent consultant, living in Seattle, Washington. I'm also building my own social media platform. Most people online simply know me as Underlost. 👾 "
        />
        <meta property="og:title" content="Underlost, By Tyler Rilling" />
        <meta
          property="og:description"
          content="I'm Tyler Rilling, a growth & success engineer, and independent consultant, living in Seattle, Washington. I'm also building my own social media platform. Most people online simply know me as Underlost. 👾 "
        />
        <meta property="og:image" content="/images/og_preview.jpg" />
        <link rel="icon" href="/favicon.png" sizes="any" />
      </Head>
      <Header />
      <div className="relative h-dvh max-h-dvh w-full overflow-hidden overscroll-none touch-none">
        <FloatingIcosahedron />
      </div>

      <footer className="site-footer text-white sr-only">
        <div className="container-wide px-8">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 font-bold text-wide text-xs"
            href="https://underlost.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            Copyright © Tyler Rilling {new Date().getFullYear()}
          </a>
        </div>
      </footer>
    </>
  );
}
