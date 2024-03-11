import { useRouter } from 'next/router'

import { Tag } from '@tryghost/content-api'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Layout } from "@/components/Layout"
import { PostView } from '@/components/PostView'
import { SEO } from '@/components/meta/seo'
import { getTagBySlug, getAllTags, getAllSettings, getPostsByTag, GhostSettings, GhostPostOrPage, GhostPostsOrPages } from '@/lib/ghost'
import { resolveUrl } from '@/utils/routing'
import { ISeoImage, seoImage } from '@/components/meta/seoImage'
import { processEnv } from '@/lib/processEnv'

import { BodyClass } from '@/components/helpers/BodyClass'

/**
 * Tag page (/tag/:slug)
 *
 * Loads all posts for the requested tag.
 *
 */

interface CmsData {
  tag: Tag
  posts: GhostPostsOrPages
  seoImage: ISeoImage
  previewPosts?: GhostPostsOrPages
  prevPost?: GhostPostOrPage
  nextPost?: GhostPostOrPage
  settings: GhostSettings
  bodyClass: string
}

interface TagPageProps {
  cmsData: CmsData
}

const TagPage = ({ cmsData }: TagPageProps) => {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>
  const { tag, posts, settings, seoImage, bodyClass } = cmsData
  const { meta_title, meta_description } = tag
  const title = `${tag.name} - ${settings.title}`

  return (
    <>
      <SEO {...{ settings, title: title || meta_title || ``, description: meta_description || ``, seoImage }} />
      <Layout isHome={true} settings={settings} bodyClass={bodyClass}>
        <div className="mb-48">
          <article className="gh-canvas mb-11">
            <header className="mb-5">
              <h1 className="text-6xl text-wide mb-2">{tag.name}</h1>
              <p className="text-lg">{tag.description}</p>
            </header>
          </article>
          <PostView {...{ settings, posts }} />
        </div>
      </Layout>
    </>
  )
}

export default TagPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!(params && params.slug && Array.isArray(params.slug))) throw Error(`getStaticProps: wrong parameters.`)
  const [slug] = params.slug.reverse()

  const tag = await getTagBySlug(slug)
  const posts = await getPostsByTag(slug)
  const settings = await getAllSettings()

  return {
    props: {
      cmsData: {
        tag,
        posts,
        settings,
        seoImage: await seoImage({ siteUrl: settings.processEnv.siteUrl }),
        bodyClass: BodyClass({ tags: [tag] }),
      },
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }), // re-generate at most once every revalidate second
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await getAllTags()
  const settings = await getAllSettings()
  const { url: cmsUrl } = settings

  const paths = tags.map(({ slug, url }) => resolveUrl({ cmsUrl, slug, url })).filter((path) => path.startsWith(`/tag/`))

  return {
    paths,
    fallback: processEnv.isr.enable,
  }
}