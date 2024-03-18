import Image from 'next/image'
import Link from 'next/link'
import dayjs from 'dayjs'

import { readingTime as readingTimeHelper } from '../lib/readingTime'
import { resolveUrl } from '../utils/routing'
import { getLang, get } from '../utils/use-lang'
import { AuthorList } from '../components/AuthorList'
import { PostClass } from '../components/helpers/PostClass'
import { GhostPostOrPage, GhostSettings } from '../lib/ghost'

interface PostCardProps {
  settings: GhostSettings
  post: GhostPostOrPage
  num?: number
}

export const FeaturedPostCard = ({ settings, post, num }: PostCardProps) => {
  const { nextImages } = settings.processEnv
  const text = get(getLang(settings.lang))
  const cmsUrl = settings.url
  const url = resolveUrl({ cmsUrl, collectionPath: `writing/`, slug: post.slug, url: post.url })
  const featImg = post.featureImage
  const readingTime = readingTimeHelper(post).replace(`min read`, text(`MIN_READ`))
  const postClass = PostClass({ tags: post.tags, isFeatured: post.featured, isImage: !!featImg })
  const large = (featImg && num !== undefined && 0 === num % 6 && `post-card-large`) || ``

  return (
    <article className={`grid grid-cols-12 post-card relative break-inside-avoid gap-x-11 ${postClass} ${large}`}>
      <div className="col-span-7">
        {featImg ? (
          <Link href={url} className="post-card-image-link mb-2 block" aria-label={post.title}>
            {nextImages.feature ? (
              <div className="post-card-image relative">
                <Image
                  src={featImg.url}
                  alt={post.title || ``}
                  sizes="(max-width: 640px) 320px, (max-width: 1000px) 500px, 680px"
                  quality={nextImages.quality}
                  width={featImg.dimensions.width}
                  height={featImg.dimensions.height}
                />
              </div>
            ) : (
              post.feature_image && <img className="post-card-image" src={post.feature_image} alt={post.title} />
            )}
          </Link>
        ) : null}
      </div>

      <div className="post-card-content col-span-5 lg:my-auto">
        <header className="post-card-header">
          {post.primary_tag && <div className="post-card-primary-tag">{post.primary_tag.name}</div>}
          <Link href={url} className="post-card-content-link">
            <h2 className="post-card-title text-wide text-3xl text-balance mb-4">{post.title}</h2>
          </Link>
        </header>

        <section className="post-card-excerpt mb-2 text-lg">
          <Link href={url}>
            <p>{post.excerpt}</p>
          </Link>
        </section>

        <footer className="post-card-meta">
          <div className="post-card-byline-content flex sr-only">
            <AuthorList {...{ settings, authors: post.authors }} />
          </div>
          <span className="post-card-byline-date">
            <time className="sr-only" dateTime={post.published_at || ``}>
              {dayjs(post.published_at || ``).format(`D MMM YYYY`)}&nbsp;
            </time>
            <span className="uppercase font-mono text-xs">{readingTime}</span>
          </span>
        </footer>
      </div>
    </article>
  )
}
