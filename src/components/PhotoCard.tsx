/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import dayjs from 'dayjs'

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

export const PhotoCard = ({ settings, post, num }: PostCardProps) => {
  const { nextImages } = settings.processEnv
  const cmsUrl = settings.url
  const url = resolveUrl({ cmsUrl, collectionPath: `photos/`, slug: post.slug, url: post.url })
  const featImg = post.featureImage
  const postClass = PostClass({ tags: post.tags, isFeatured: post.featured, isImage: !!featImg })
  const large = (featImg && num !== undefined && 0 === num % 6 && `post-card-large`) || ``

  return (
    <article className={`post-card relative mb-8 ${postClass} ${large}`}>
      {featImg ? (
        <Link href={url} className="post-card-image-link" aria-label={post.title}>
          {nextImages.feature ? (
            <div className="post-card-image relative aspect-video">
              <Image
                src={featImg.url}
                alt={post.title || ``}
                sizes="(max-width: 640px) 320px, (max-width: 1000px) 500px, 680px"
                quality={nextImages.quality}
                className="object-cover"
                width={featImg.dimensions.width}
                height={featImg.dimensions.height}
              />
            </div>
          ) : (
            post.feature_image && <img className="post-card-image" src={post.feature_image} alt={post.title} />
          )}
        </Link>
      ) : null}

      <div className="post-card-content">
        <Link href={url} className="post-card-content-link">
          <header className="post-card-header">
            {post.primary_tag && <div className="post-card-primary-tag">{post.primary_tag.name}</div>}
            <h2 className="post-card-title text-wide text-lg font-black">{post.title}</h2>
          </header>
        </Link>

        <footer className="post-card-meta sr-only">
          <div className="post-card-byline-content">
            <span className="post-card-byline-date">
              <time dateTime={post.published_at || ``}>{dayjs(post.published_at || ``).format(`D MMM YYYY`)}&nbsp;</time>
            </span>
          </div>
        </footer>
      </div>
    </article>
  )
}
