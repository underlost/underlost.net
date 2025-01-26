import React from 'react'
import Image from 'next/image'
import dayjs from 'dayjs'

interface PostFeaturedHeaderProps {
  title?: string | null
  excerpt?: string
  feature_image_alt?: string
  feature_image_caption?: string
  published_at?: string | null
  updated_at?: string | null
  primary_tag?: {
    name?: string
  } | null
  nextImages?: {
    feature: boolean
    quality: number
  }
  featImg?: {
    url: string
    dimensions: {
      width: number
      height: number
    }
  }
}

export const PostFeaturedHeader = ({ title, excerpt, published_at, updated_at, featImg, nextImages, feature_image_alt, feature_image_caption }: PostFeaturedHeaderProps) => (
  <>
    <div className="post-header-featured">
      <header className="relative max-w-3xl mx-auto mb-11 z-20 text-center text-white">
        <h1 className="post-full-title h2 mb-11">{title}</h1>
        {excerpt && <p className="post-full-custom-excerpt subtitle max-w-xl mx-auto">{excerpt}</p>}
      </header>

      {featImg &&
        (nextImages?.feature && featImg.dimensions ? (
          <figure className="absolute inset-0 w-full h-full object-cover" style={{ display: `inherit` }}>
            <Image
              src={featImg.url}
              alt={feature_image_alt || title || ``}
              quality={nextImages.quality}
              className="h-full w-full object-cover"
              sizes={`(max-width: 350px) 350px, (max-width: 530px) 530px, (max-width: 710px) 710px, (max-width: 1170px) 1170px, (max-width: 2110px) 2110px, 2000px`}
              {...featImg.dimensions}
            />
            {featImg && feature_image_caption && <figcaption className="max-w-lg mx-auto text-center pt-4 text-sm italic" dangerouslySetInnerHTML={{ __html: feature_image_caption }} />}
          </figure>
        ) : null) // TODO: Implement this case
      }
    </div>

    <div className="byline-meta-content font-mono text-xs max-w-lg mx-auto text-center my-16">
      {published_at && (
        <span className="flex flex-col items-center">
          <time className="byline-meta-date" dateTime={published_at || ``}>
            Written {dayjs(published_at || ``).format(`MMMM D, YYYY`)}
          </time>

          {updated_at && (
            <time className="byline-meta-date" dateTime={updated_at || ``}>
              Last updated {dayjs(updated_at || ``).format(`MMMM D, YYYY`)}
            </time>
          )}
        </span>
      )}

      <div className="max-w-lg mx-auto my-16! squiggle s1 px-8" />
    </div>
  </>
)
