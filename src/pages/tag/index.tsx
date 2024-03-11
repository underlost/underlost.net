import Link from 'next/link'
import { Layout } from "@/components/Layout"
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { SEO } from '../../components/meta/seo'
import { seoImage } from '../../components/meta/seoImage'
import { processEnv } from '../../lib/processEnv'
import { getAllSettings, GhostSettings, getAllTags, GhostTags } from '../../lib/ghost'
import { PageHeader } from '@/components/PageHeader'

/**
 *
 * Renders the Public tags index page
 *
 */


interface CmsData {
  settings: GhostSettings
  tags: GhostTags,
  seoImage : any
}

interface TagIndexProps {
  cmsData: CmsData
}

export default function TagIndex({ cmsData }: TagIndexProps) {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>

  const { settings, seoImage } = cmsData
  const title = `Website Tags`
  const tags = cmsData.tags

  return (
    <Layout isHome={true} settings={settings} bodyClass="">
      <SEO {...{ settings, seoImage, title }} />
      <article className="gh-canvas mb-48">
        <PageHeader title="Tags" excerpt="Looking for a specific tag?" />

        <section>
          <ul className="mb-11">
            {tags.map((tag, i) => (
              <li className="inline-block mr-1.5 mb-2" key={i}>
                <Link className="bg-black dark:bg-zinc-800 text-white p-1" href={`/tag/${tag.slug}`}>{tag.name}</Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let settings
  let tags
  console.time(`Writing Index - getStaticProps`)
  try {
    tags = await getAllTags() // Added the 'page' property with a default value of 1
    settings = await getAllSettings()
  } catch (error) {
    throw new Error(`Writing Tag Index creation failed.`)
  }
  const cmsData = {
    settings,
    tags,
    seoImage: await seoImage({ siteUrl: settings.processEnv.siteUrl }),
  }
  console.timeEnd(`Writing Tag Index - getStaticProps`)

  return {
    props: {
      cmsData,
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }), // re-generate at most once every revalidate second
  }
}