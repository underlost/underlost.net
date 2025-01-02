import { Layout } from "@/components/Layout"
import { GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { SEO } from '@/components/meta/seo'
import { seoImage } from '@/components/meta/seoImage'
import { processEnv } from '@/lib/processEnv'
import { getAllSettings, GhostSettings, getPageBySlug, GhostPostOrPage, GhostPostsOrPages, getAllCurrentProjectPosts, getAllOldProjectPosts } from '@/lib/ghost'
import { PageHeader } from "@/components/PageHeader"
import { RenderContent } from '@/components/RenderContent'
import { PostView } from "@/components/PostView"
import { BodyClass } from '@/components/helpers/BodyClass'

/**
 *
 * Renders the Projects index page
 *
 */

interface CmsData {
  settings: GhostSettings
  posts: GhostPostsOrPages
  oldPosts: GhostPostsOrPages
  page: GhostPostOrPage
  seoImage : any
  bodyClass: string
}

interface ProjectsIndexProps {
  cmsData: CmsData
}

export default function ProjectsIndex({ cmsData }: ProjectsIndexProps) {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>

  const { settings, seoImage, bodyClass } = cmsData
  const title = `Personal Projects - ${settings.title}`
  const { nextImages } = settings.processEnv
  const posts = cmsData.posts
  const oldPosts = cmsData.oldPosts
  const page = cmsData.page
  const featImg = page.featureImage

  const htmlAst = page.htmlAst
  if (htmlAst === undefined) throw Error(`Projects page index: htmlAst must be defined.`)

  return (
    <Layout isHome={true} settings={settings} bodyClass={bodyClass} image="/images/background_duotone.jpg">
      <SEO {...{ settings, seoImage, title }} />
      <div className="container">
        <div className="tag-color-scheme-k container-inner">
          <div className="border-color container-border">
            {featImg &&
                  (nextImages.feature && featImg.dimensions ? (
                    <figure className="featured-image-blob" style={{ display: `inherit` }}>
                      <Image
                        src={featImg.url}
                        alt={page.title || ``}
                        quality={nextImages.quality}
                        sizes={`(max-width: 350px) 350px,(max-width: 530px) 530px,(max-width: 710px) 710px,(max-width: 1170px) 1170px,(max-width: 2110px) 2110px, 2000px`}
                        {...featImg.dimensions}
                      />
                    </figure>
                  ) : (
                    page.feature_image && (
                      <figure className="featured-image-blob">
                        <img src={page.feature_image} alt={page.title} />
                      </figure>
                    )
                  ))}
            <article className="container-content">
              <PageHeader title={page.title} />
              <section className="post-full-content post-content load-external-scripts gh-content text-2xl">
                <RenderContent htmlAst={htmlAst} />
              </section>
            </article>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <PostView className="tag-color-scheme-k" cards={false} posts={posts} collectionPath="projects/" settings={settings} />
          </div>
        </div>

        <PostView title="Previous Projects" className="tag-color-scheme-d py-16" posts={oldPosts} collectionPath="projects/" settings={settings} />

      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let settings
  let posts
  let oldPosts
  let page: GhostPostOrPage | null = null
  
  console.time(`Projects Index - getStaticProps`)
  try {
    page = await getPageBySlug(`projects`)
    posts = await getAllCurrentProjectPosts()
    oldPosts = await getAllOldProjectPosts()
    settings = await getAllSettings()
  } catch (error) {
    throw new Error(`Projects Index creation failed.`)
  }

  const tags = (page && page.tags) || undefined
  const cmsData = {
    settings,
    page,
    posts,
    oldPosts,
    bodyClass: BodyClass({ page: page || undefined, tags }),
    seoImage: await seoImage({ siteUrl: settings.processEnv.siteUrl }),
  }
  console.timeEnd(`Projects Index - getStaticProps`)

  return {
    props: {
      cmsData,
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }), // re-generate at most once every revalidate second
  }
}