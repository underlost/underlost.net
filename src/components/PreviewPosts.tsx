import Link from 'next/link'
import dayjs from 'dayjs'
import Image from 'next/image'

import { PostCard } from '@/components/PostCard'

import { readingTime as readingTimeHelper } from '@/lib/readingTime'
import { resolveUrl } from '@/utils/routing'
import { getLang, get } from '@/utils/use-lang'
import { Tag } from '@tryghost/content-api'
import { GhostPostOrPage, GhostPostsOrPages, GhostSettings } from '@/lib/ghost'

interface PreviewPostsProps {
  settings: GhostSettings
  primaryTag?: Tag | null
  posts?: GhostPostsOrPages
  prev?: GhostPostOrPage
  next?: GhostPostOrPage
}

export const PreviewPosts = ({ settings, primaryTag, posts }: PreviewPostsProps) => {
  const text = get(getLang(settings.lang))
  const { url: cmsUrl } = settings
  const { nextImages } = settings.processEnv
  const url = (primaryTag && resolveUrl({ cmsUrl, slug: primaryTag.slug, url: primaryTag.url })) || ``

  return (
    <>
      {posts && 0 < posts.length ? (
        <aside className="read-next outer">
          <div className="inner">
            <div className="read-next-feed">
              <div className="gh-canvas py-11">
                <article className="read-next-card">
                  <header className="read-next-card-header mb-8">
                    <h3 className="subtitle">
                      {primaryTag && primaryTag.name ? (<><span>{text(`MORE_IN`)}</span> <Link href={url}>{primaryTag?.name}</Link></>): (<span>Read More</span>)}
                    </h3>
                  </header>
                  <div className="read-next-card-content">
                    <ul className="divide-y">
                      {posts?.map((post, i) => {
                        const url = resolveUrl({ cmsUrl, collectionPath: `writing/`, slug: post.slug, url: post.url })
                        return (
                          <li className="py-3 flex gap-x-4" key={i}>
                            {post.feature_image ? (nextImages.feature ? (
                              <figure className="h-11 w-11 relative overflow-hidden rounded-lg">
                                <Image
                                  src={post.feature_image}
                                  alt={post.title || ``}
                                  sizes="(max-width: 640px) 320px, (max-width: 1000px) 500px, 680px"
                                  quality={nextImages.quality}
                                  height={320}
                                  width={320}
                                  className="absolute inset-0 w-full h-full object-cover"
                                />
                              </figure>
                            ) : (
                              post.feature_image && <img className="post-card-image" src={post.feature_image} alt={post.title} />
                            )) : null}
                            <div className="read-next-card-meta">
                              <h4 className="text-lg font-black">
                                <Link href={url}>{post.title}</Link>
                              </h4> 
                              <p className="datetime">
                                <time dateTime={post.published_at || ``}>{dayjs(post.published_at || ``).format(`D MMMM, YYYY`)}</time> –{` `}
                                {readingTimeHelper(post).replace(`min read`, text(`MIN_READ`))}
                              </p>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </aside>
      ) : (
        <div />
      )}
    </>
  )
}
