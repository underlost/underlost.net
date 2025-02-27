/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'

import { resolveUrl } from '../utils/routing'
import { PostClass } from '../components/helpers/PostClass'
import { GhostPostOrPage, GhostSettings } from '../lib/ghost'

interface PortfolioCardProps {
  settings: GhostSettings
  post: GhostPostOrPage
  num?: number
}

export const PortfolioCard = ({ settings, post, num }: PortfolioCardProps) => {
  const { nextImages } = settings.processEnv
  const cmsUrl = settings.url
  const url = resolveUrl({ cmsUrl, collectionPath: `portfolio/`, slug: post.slug, url: post.url })
  const featImg = post.featureImage
  const postClass = PostClass({ tags: post.tags, isFeatured: post.featured, isImage: !!featImg })
  const large = (featImg && num !== undefined && 0 === num % 6 && `post-card-large`) || ``

  return (
    <article className={`portfolio-card relative mb-11 ${postClass} ${large}`}>
      {featImg ? (
        <Link href={url} className="post-card-image-link block mb-3" aria-label={post.title}>
          {nextImages.feature ? (
            <div className="post-card-image relative">
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
            <h2 className="post-card-title text-2xl font-black font-stretch-extra-expanded mb-2">{post.title}</h2>
          </header>
          <section className="post-card-excerpt">
            <p>{post.excerpt}</p>
          </section>
        </Link>
      </div>
    </article>
  )
}
