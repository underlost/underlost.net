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
    <article className={`post-card-featured ${postClass} ${large}`}>
      <Link href={url} className="post-card-link" aria-label={post.title}>
        {featImg ? (
          <div className="post-card-image-wrapper" aria-label={post.title}>
            {nextImages.feature ? (
              <Image
                src={featImg.url}
                alt={post.title || ``}
                sizes="(max-width: 640px) 320px, (max-width: 1000px) 500px, 680px"
                quality={nextImages.quality}
                width={featImg.dimensions.width}
                height={featImg.dimensions.height}
                className="absolute inset-0 w-full h-full object-cover -z-10"
              />
            ) : (
              post.feature_image && <img className="post-card-image" src={post.feature_image} alt={post.title} />
            )}
          </div>
        ) : null}
      </Link>

      <div className="post-card-content">
        <header className="post-card-header">
          {post.primary_tag && <div className="post-card-primary-tag">{post.primary_tag.name}</div>}
          <Link href={url} className="post-card-content-link">
            <h2 className="post-card-title">{post.title}</h2>
          </Link>
        </header>
        <section className="post-card-excerpt">
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

        <Link href={url} className="btn">
          Read More
        </Link>
      </div>
    </article>
  )
}
