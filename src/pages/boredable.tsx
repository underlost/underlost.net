import { Layout } from '@/components/Layout'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { SEO } from '../components/meta/seo'
import { seoImage } from '../components/meta/seoImage'
import { processEnv } from '../lib/processEnv'
import { getAllSettings, GhostSettings } from '../lib/ghost'
import Image from 'next/image'

/**
 *
 * Renders the writing index page
 *
 */

interface CmsData {
  settings: GhostSettings
  seoImage: any
}

interface BoredablePageProps {
  cmsData: CmsData
}

export default function BoredablePage({ cmsData }: BoredablePageProps) {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>

  const { settings, seoImage } = cmsData
  const title = `Boredable`

  return (
    <Layout isHome={true} settings={settings} bodyClass="">
      <SEO {...{ settings, seoImage, title }} />
      <article>
        <div className="pt-11">
          <div className="text-center px-8 lg:px-0">
            <h1 className="font-extrabold text-5xl lg:text-7xl tracking-tight mb-4">Say hello to Boredable.</h1>
            <p className="text-3xl font-light mb-12">A new, boring social network for adults.</p>
          </div>

          <div className="text-base max-w-6xl mx-auto mb-8 lg:mb-20 px-8 lg:px-0">
            <div className="lg:columns-3 text-left lg:gap-12 lg:text-sm leading-relaxed mb-16">
              <p className="mb-5 break-before-all">
                I&apos;ve been on social media platforms since the days of Myspace and even Friendster. Yes, Im that old now. I&apos;ve also watched some of my favorite services rise and
                fall, from Delicious, Flickr, the 9 Rules Network, and countless blogging platforms. Even today I&apos;m still no stranger to current trends. I tried out Hive, Mastodon,
                Threads, and everything thats popped up in between, and I&apos;ll continue to always explore new platforms. I still help a lot of clients with content, work on their social
                media strategy, and help them analyze relevant trending topics
              </p>

              <p className="mb-5 break-before-all">
                But I don&apos;t really engage directly with others on any of these platforms like I used to. It&apos;s not that I don&apos;t want to, but because, well, they just
                aren&apos;t fun for me anymore. I keep jumping from one to another to find a better experience, but the longer keep using these platforms, the more I hate what social media
                has become. I hate how we&apos;re so focused on the like and influencers and the clout, and how it&apos;s also become weaponized as a political tool that divides us.
              </p>

              <p className="mb-5 break-before-all">
                I was a tumblr and LiveJournal kid, meaning I&apos;ve always liked weird content. So it&apos;s also no surprise I really liked twitter once upon a time. It had a cute fail
                whale illustration when something broke spectacularly. You could also easily post from your phone with out even using the app. Remember when it didn&apos;t even have an
                official app? Who cared, because there were so many amazing user-created flavors to choose from. Some people would argue those apps were even better than the main site. You
                could use it however you wanted to. But that changed over time as it became more corporate. Twitter lost it&apos;s soul, in the same way Instagram, MySpace, LiveJournal and
                others have before it.
              </p>

              <p className="mb-5 break-before-all break-inside-avoid-column">
                But, thats kind of the issue with startup culture and building something that turns into something big, isn&apos;t it? It becomes so large it needs to do everything in
                order to grow its user base to continue to meet investors&apos; expectations. It&apos;s only successful if the profits continue to grow. It&apos;s frustrating how after
                reaching that level of success, so many websites and services will turn their back on their users. While growth is natural, a website shouldn&apos;t be beholden to
                it&apos;s stakeholders. And a change in rules or policies shouldn&apos;t alienate the users that helped build your community.
              </p>

              <p className="mb-5 break-before-all">
                I&apos;ve also come to realize there&apos;s a major difference between a social networking platform and a social media platform. Social networking is what we used to have.
                Social media now is little more than chaotic open forums. They&apos;re designed for users to churn out and consume content. Not actually to connect with one another.
              </p>
            </div>

            <div className="max-w-lg mx-auto my-16 squiggle s1 px-8" />
          </div>

          <div className="bg-aqua text-black py-16 lg:py-28">
            <blockquote className="text-xl lg:text-3xl max-w-3xl mx-auto italic text-center border-none mb-0 px-4 lg:px-0">
              <p className="italic font-wide font-black">
                X is the future state of unlimited interactivity - centered in audio, video, messaging, payments/banking - creating a global marketplace for ideas, goods, services, and
                opportunities. Powered by AI, X will connect us all in ways we&apos;re just beginning to imagine
              </p>
              <cite className="text-lg font-narrow">- Linda Yaccarino, CEO of X</cite>
            </blockquote>
          </div>

          <div className="py-16 lg:py-28">
            <div className="mx-auto max-w-lg text-left px-8 lg:px-0">
              <div className="mx-auto text-base">
                <h2 className="text-3xl font-black mb-2 lg:pr-24">Building Something I Actually Want to Use</h2>
                <p className="mb-4">
                  Boredable is my ideal concept for a sustainable social networking platform. It&apos;s sort of the opposite of what X (formery Twitter) is trying to be. Boredable has one
                  main purpose- to allow you to share whats on your mind at the moment, or what you&apos;re up to in fun and creative ways. Boredable would be a platform to post whatever
                  you want, in whatever way you want. Just with out the nazis and crypto bros.
                </p>

                <p>
                  It has the people you follow front and center, with the ability to discover content based on what you like, or where you are. A social media platform shouldn&apos;t be
                  used for banking. It also doesn&apos;t need to be powered by AI. It simply doesn&apos;t need to be an everything app. I know how I want to connect with others already.
                  Algorithms and AI that try to guess what you want to see should be optional third party at best. There also should be minimal data collection, and no selling of user
                  information. And most importantly, it should be developer friendly. Use the official web app, or create your own. It shouldn&apos;t matter how you consume the content.
                </p>
              </div>
            </div>

            <div className="px-8 lg:px-0">
              <div className="max-w-lg mx-auto py-16 lg:py-28 squiggle s1" />
            </div>

            <div className="max-w-5xl mx-auto text-left px-8 lg:px-0 mb-24">
              <div className="grid grid-cols-12 lg:gap-24">
                <div className="col-span-12 lg:col-span-5 order-1 lg:order-2">
                  <div className="aspect-square mb-4 relative shadow-lg border border-black rounded overflow-hidden">
                    <Image
                      src="/images/boredable/screenshots/feature_profile.jpg"
                      alt="Image of a map with locations"
                      className="w-full h-full absolute inset-0 object-cover rounded"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-7 flex order-2 lg:order-1">
                  <div className="lg:my-auto lg:pl-16">
                    <h2 className="text-3xl font-black mb-4 lg:pr-16">Your status page on the internet</h2>
                    <p className="text-md">
                      Boredable solves the simple question of “What are you doing?” Kind of what Facebook and twitter were supposed to do. But then these platforms turned into a content
                      making machine. Boredable presents a list of everyone you follow, and only their latest post and their mood, so you can easily see what people are up to. Thats it.
                      Feeds and content streams are not the focus. Think of it as that AIM status you had when you were a teen and posted angsty emo music back in the day.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-5xl mx-auto text-left px-8 lg:px-0 mb-24">
              <div className="grid grid-cols-12 lg:gap-24">
                <div className="col-span-12 lg:col-span-5 order-1 lg:order-1">
                  <div className="bg-zinc-900 aspect-square mb-4 relative shadow-lg border border-black rounded overflow-hidden">
                    <Image
                      src="/images/boredable/screenshots/feature_posts.jpg"
                      alt="Image of a map with locations"
                      className="w-full h-full absolute inset-0 object-cover rounded"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-7 flex order-2 lg:order-2">
                  <div className="lg:my-auto lg:pr-16">
                    <h2 className="text-3xl font-black mb-4 lg:pr-11">A post editor thats simple to use, yet packed with features</h2>
                    <p className="text-md">
                      Remember the days of LiveJournal or Myspace where you could share how you were feeling and what you were doing? While images and short text are the focus of a post,
                      you can include a number of optional pieces of metadata, like location, what you’re listening to and how you’re feeling, with styling powered by markdown. Want to add
                      more flare to the post? Set a custom theme (and even css) for each post to make it stand out. Don’t feel like seeing a chaotic rainbow of a timeline? Don’t worry,
                      users can also turn off styling.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-5xl mx-auto mb-16 text-left px-8 lg:px-0">
              <div className="grid grid-cols-12 lg:gap-24">
                <div className="col-span-12 lg:col-span-5 order-1 lg:order-2">
                  <div className="bg-zinc-900 aspect-square mb-4 relative shadow-lg border border-black rounded overflow-hidden">
                    <Image
                      src="/images/boredable/screenshots/map_places.jpg"
                      alt="Image of a map with locations"
                      className="w-full h-full absolute inset-0 object-cover rounded"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-7 flex order-2 lg:order-1">
                  <div className="lg:my-auto lg:pl-16">
                    <h2 className="text-3xl font-black mb-4">Location-centric, not location-required</h2>
                    <p className="text-md">
                      Want to see what people are posting near you? Or maybe you’re interested in seeing content happening in an area you’re planning to travel to? Set your location
                      anywhere in the world, and see what’s happening in that area. Not only that, with custom maps, you can also keep track of places you might want to go, where you’ve
                      been, or any other type of dataset you want!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-16 max-w-6xl mx-auto px-8 lg:px-0">
              <div>
                <h2 className="text-4xl font-black mb-8 lg:text-center">What else?</h2>
              </div>

              <div className="text-left">
                <div className="grid grid-cols-3 lg:gap-12">
                  <div className="col-span-3 lg:col-span-1 mb-8">
                    <h3 className="font-bold text-lg mb-4">Custom profiles to show off your personality</h3>
                    <p>
                      Myspace was ahead of its time. It’s also where a lot of us learned to code, We wanted to show off our cool profiles. Why can’t we keep that trend? Nowadays, every
                      profile looks the same, with a boring header image and circle for a photo. Allow your page to stand out with custom styles, and even add your own CSS.
                    </p>
                  </div>
                  <div className="col-span-3 lg:col-span-1 mb-8">
                    <h3 className="font-bold text-lg mb-4">Adult and creative content is allowed, but not a primary focus</h3>
                    <p>
                      Boredable isn’t designed to be another OnlyFans. But we shouldn’t rule out adult content either. Creativity comes in so many forms, and we shouldn’t limit that. Thats
                      why Boredable is for users 18+ only. Don’t want to see explicit content? Users can easily hide it from their feed, and view it when and only if they want to.
                    </p>
                  </div>
                  <div className="col-span-3 lg:col-span-1 mb-8">
                    <h3 className="font-bold text-lg mb-4">Built on an open API for everyone</h3>
                    <p>
                      The Boredable app is built on an API accessible by anyone. That means anyone can create a new app, bot, or website that interacts with Boredable data. Support for
                      protocols like ActivityPub coming later will allow you to interact with other services and potentially other instances like Boredable.{` `}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black text-white py-16 lg:py-28 px-8 lg:px-0">
            <div className="max-w-2xl mx-auto text-aqua">
              <h2 className="text-3xl font-black mb-8">A non-profit organization with a focus on creating a better social media experience for everyone.</h2>
            </div>

            <div className="max-w-2xl mx-auto text-base">
              <p className="mb-4">
                What if, instead of being another traditionally VC-backed startup, Boredable took a different approach? Imagine a platform grounded in the essence of simplicity and a
                commitment to a user-first mindset. Boredable would be a deviation of mainstream platforms, carving out piece of internet where genuine connections are made and users are
                the real focus. How could this be achieved? It might look a little something like this:
              </p>
              <ol className="mb-5 list-decimal pl-5 space-y-4">
                <li className="mb-2">
                  <strong>Tailored Premium Features</strong>: Boredable would offer select premium features designed to enhance the user experience, catering to both individuals and
                  businesses looking for a passive yet entertaining experience.
                </li>
                <li className="mb-2">
                  <strong>Reinvest in Development</strong>: Revenue from these premium would be directly channeled back into the platform, ensuring that dedicated developers continually
                  refine and innovate.
                </li>
                <li className="mb-2">
                  <strong>Organic Growth through User-Centricity</strong>: As Boredable&apos;s offerings become more tailored, it would naturally draw in people and businesses seeking a
                  no-frills, authentic platform. These fresh users would inject new perspectives, making for a lively, dynamic community.
                </li>
                <li className="mb-2">
                  <strong>Sustained Revenue Cycle</strong>: As more users recognize and appreciate the value of the platform&apos;s premium offerings, the revenue generated would continue
                  to be reinvested in development. This would create a sustainable cycle of growth and innovation, with users always at the heart of decisions.
                </li>
              </ol>

              <p>
                Of course this is just the start. To be sustainable, I’d also love to partner with sponsors and organizations to keep Boredable as free as possible for all users, while
                also creating tools that benefit everyone.
              </p>
            </div>
          </div>

          <div className="text-xl max-w-2xl mx-auto py-16 lg:py-28 px-8 lg:px-0">
            <h2 className="text-3xl font-black mb-4 lg:pr-16">This all sounds pretty cool! What next?</h2>
            <div className="text-left text-base lg:pb-16 leading-relaxed">
              <p className="mb-4">
                I spent the last year (give or take) building this idea from scratch, and refining the idea. The entire platform is actually already built, and the code will be up on
                Github soon. Everything from authentication, the API, basic profiles, filtering, blocking, geotagging, all the core features I wanted are built out and mostly working! But
                it’s not great- there&apos;s a lot of bugs, the UX is still a work in progress, and Im working on scaling. It&apos;s little more than a minimum viable product right now.
                That is to say, it works, but its not ready to compete with the likes of Threads or BlueSky or other shiny new platforms that are competeing for Twitter&apos;s spot.
              </p>

              <p>
                Thats where you come in. Right now I am mainly wanting to gauge interest and support in the project. If you are interested in donating or becoming a sponsor for the
                project, please also reach out! If you&apos;re interested in getting involved or just want to know more, let&apos;s chat. I&apos;m{` `}
                <a className="underline font-bold" href="https://www.linkedin.com/in/underlost/">
                  @underlost
                </a>
                . Or you can always{` `}
                <a className="underline font-bold" href="mailto:tyler@underlost.xyz">
                  send me an email
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let settings
  console.time(`Writing Boredable Page - getStaticProps`)
  try {
    settings = await getAllSettings()
  } catch (error) {
    throw new Error(`Writing Index creation failed.`)
  }
  const cmsData = {
    settings,
    seoImage: await seoImage({ siteUrl: settings.processEnv.siteUrl }),
  }
  console.timeEnd(`Writing Boredable Page - getStaticProps`)

  return {
    props: {
      cmsData,
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }), // re-generate at most once every revalidate second
  }
}
