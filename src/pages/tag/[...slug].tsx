import { useRouter } from 'next/router'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Tag } from '@tryghost/content-api'
import { getTagBySlug, getAllTags, getAllSettings, getPostsByTag, GhostSettings, GhostPostOrPage, GhostPostsOrPages } from '@/lib/ghost'
import { resolveUrl } from '@/utils/routing'
import { processEnv } from '@/lib/processEnv'
import { BodyClass } from '@/components/helpers/BodyClass'
import { SEO } from '@/components/meta/seo'
import { ISeoImage, seoImage } from '@/components/meta/seoImage'
import { Layout } from "@/components/Layout"
import { PostView } from '@/components/PostView'
import { PageHeader } from '@/components/PageHeader'

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
    <Layout isHome={true} settings={settings} bodyClass={`tag-color-scheme-c layout-fullbleed ${bodyClass}`}>
      <SEO {...{ settings, title: title || meta_title || ``, description: meta_description || ``, seoImage }} />
      <article>
        <div className="container lg:mt-24 mb-11 my-11 relative">
          <PageHeader title={tag.name ?? ``} excerpt={tag.description ?? ``} />
        </div>
        <div className="inner py-11">
          <div className="max-w-lg mx-auto my-16 squiggle s3 px-8" />
          <PostView className="tag-color-scheme-a" posts={posts} settings={settings} />
        </div>
      </article>
    </Layout>
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