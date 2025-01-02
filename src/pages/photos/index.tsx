import { Layout } from "@/components/Layout"
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { SEO } from '../../components/meta/seo'
import { seoImage } from '../../components/meta/seoImage'
import { processEnv } from '../../lib/processEnv'
import { getAllSettings, GhostSettings, getAllPhotoPosts, GhostPostsOrPages, GhostPostOrPage, getPageBySlug } from '../../lib/ghost'
import { PhotoCard } from '../../components/PhotoCard'
import { PageHeader } from "@/components/PageHeader"
import { RenderContent } from '@/components/RenderContent'

/**
 *
 * Renders the photo index page
 *
 */


interface CmsData {
  settings: GhostSettings
  posts: GhostPostsOrPages
  page: GhostPostOrPage
  seoImage : any
}

interface PhotosIndexProps {
  cmsData: CmsData
}

export default function PhotosIndex({ cmsData }: PhotosIndexProps) {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>

  const { settings, seoImage, page } = cmsData
  const { meta_title, meta_description } = page
  const title = meta_title || `${page.title} - ${settings.title}`
  const posts = cmsData.posts
  const htmlAst = page.htmlAst
  if (htmlAst === undefined) throw Error(`Photography page index: htmlAst must be defined.`)

  return (
    <Layout isHome={true} settings={settings} bodyClass="tag-color-scheme-g" image="/images/background_duotone.jpg">
      <SEO {...{ settings, title, meta_title, meta_description, seoImage }} />
      <div className="container">
        <div className="tag-color-scheme-g container-inner">
          <article className="container-content">
            <PageHeader title={page.title} />
            <section className="post-content load-external-scripts gh-content text-lg">
              <RenderContent htmlAst={htmlAst} />
            </section>
          </article>
          <section className="lg:mb-48 lg:mx-16">
            <div className="gap-4 lg:gap-8 columns-2 lg:columns-3">
              {posts.map((post, i) => (
                <PhotoCard key={i} settings={settings} post={post} num={i} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let settings
  let posts
  let page
  console.time(`Writing Photos Index - getStaticProps`)
  try {
    page = await getPageBySlug(`photos`)
    posts = await getAllPhotoPosts()
    settings = await getAllSettings()
  } catch (error) {
    throw new Error(`Writing Index creation failed.`)
  }
  const cmsData = {
    settings,
    posts,
    page,
    seoImage: await seoImage({ siteUrl: settings.processEnv.siteUrl }),
  }
  console.timeEnd(`Writing Photos Index - getStaticProps`)

  return {
    props: {
      cmsData,
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }), // re-generate at most once every revalidate second
  }
}