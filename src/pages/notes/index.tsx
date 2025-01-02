import { Layout } from '@/components/Layout'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { SEO } from '@/components/meta/seo'
import { seoImage } from '@/components/meta/seoImage'
import { processEnv } from '@/lib/processEnv'
import { PostClass } from '@/components/helpers/PostClass'
import { getAllSettings, GhostSettings, GhostPostOrPage, GhostPostsOrPages, getAllAsidePosts, getPageBySlug } from '../../lib/ghost'
import { RenderContent } from '@/components/RenderContent'
import { AsideCard } from '@/components/AsideCard'
import { PageHeader } from '@/components/PageHeader'
import { BodyClass } from '@/components/helpers/BodyClass'


/**
 *
 * Renders the Notes page
 *
 */

interface CmsData {
  settings: GhostSettings
  posts: GhostPostsOrPages
  seoImage: any
  page: GhostPostOrPage
  bodyClass: string
}

interface NotesPageIndexProps {
  cmsData: CmsData
}

export default function NotesPageIndex({ cmsData }: NotesPageIndexProps) {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>

  const { settings, seoImage, bodyClass } = cmsData
  const { nextImages } = settings.processEnv
  const page = cmsData.page
  const { meta_title, meta_description } = page
  const title = meta_title || `${page.title} - ${settings.title}`
  const featImg = page.featureImage
  const postClass = PostClass({ tags: page.tags, isFeatured: page.featured, isImage: !!featImg })
  const posts = cmsData.posts
  const htmlAst = page.htmlAst
  if (htmlAst === undefined) throw Error(`notebook page index: htmlAst must be defined.`)

  return (
    <Layout isHome={true} settings={settings} bodyClass={bodyClass}>
      <SEO {...{ settings, title, meta_title, meta_description, seoImage }} />

      <div className="gh-canvas">
        <div className="stack">

          <article className={`${postClass}`}>
            <header>
              {featImg &&
                (nextImages.feature && featImg.dimensions ? (
                  <figure className="post-full-image mx-auto mb-11" style={{ display: `inherit` }}>
                    <Image
                      src={featImg.url}
                      alt={page.feature_image_alt || page.title || ``}
                      quality={nextImages.quality}
                      className="max-h-[600px] object-contain"
                      sizes={`
                                (max-width: 350px) 350px,
                                (max-width: 530px) 530px,
                                (max-width: 710px) 710px,
                                (max-width: 1170px) 1170px,
                                (max-width: 2110px) 2110px, 2000px
                              `}
                      {...featImg.dimensions}
                    />
                    {featImg && page.feature_image_caption && <figcaption className="max-w-lg mx-auto text-center pt-4 text-sm italic" dangerouslySetInnerHTML={{ __html: page.feature_image_caption }} />}
                  </figure>
                ) : (
                  page.feature_image && (
                    <figure className="post-full-image">
                      <img src={page.feature_image} alt={page.feature_image_alt || page.title || ``} />
                      {featImg && page.feature_image_caption && <figcaption className="max-w-lg mx-auto text-center pt-4 text-sm italic" dangerouslySetInnerHTML={{ __html: page.feature_image_caption }} />}
                    </figure>
                  )
                ))}
              
              <h1 className="font-bold text-xl">{page.title}</h1>
            </header>
          
            <section className="post-content load-external-scripts gh-content">
              <RenderContent htmlAst={htmlAst} />
            </section>
          </article>

          <div className="divide-y">
            {posts.map((post, i) => <AsideCard key={post.id} settings={settings} post={post} num={i} />)}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let settings
  let posts
  let page
  console.time(`Notes Page - getStaticProps`)
  try {
    posts = await getAllAsidePosts({ limit: 25 })
    settings = await getAllSettings()
    page = await getPageBySlug(`notes`)
  } catch (error) {
    throw new Error(`Notes Page creation failed.`)
  }
  const tags = (page && page.tags) || undefined
  const cmsData = {
    settings,
    posts,
    page,
    bodyClass: BodyClass({ page: page || undefined, tags }),
    seoImage: await seoImage({ siteUrl: settings.processEnv.siteUrl }),
  }
  console.timeEnd(`Notes Page - getStaticProps`)

  return {
    props: {
      cmsData,
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }), // re-generate at most once every revalidate second
  }
}
