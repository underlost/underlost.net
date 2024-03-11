import Link from 'next/link'
import dayjs from 'dayjs'

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
  const url = (primaryTag && resolveUrl({ cmsUrl, slug: primaryTag.slug, url: primaryTag.url })) || ``
  const primaryTagCount = primaryTag?.count?.posts

  return (
    <>
      {posts && 0 < posts.length ? (
        <aside className="read-next outer bg-aqua text-black pt-11 pb-36 mt-24">
          <div className="inner">
            <div className="read-next-feed">
              <div className="">
                <div className="gh-canvas py-5">
                  <article className="read-next-card">
                    <header className="read-next-card-header mb-8">
                      <h3 className="font-mono uppercase">
                        <span>{text(`MORE_IN`)}</span> <Link href={url}>{primaryTag?.name}</Link>
                      </h3>
                    </header>
                    <div className="read-next-card-content">
                      <ul className="divide-y divide-gray-950/30">
                        {posts?.map((post, i) => {
                          const url = resolveUrl({ cmsUrl, collectionPath: `writing/`, slug: post.slug, url: post.url })
                          return (
                            <li className="py-3" key={i}>
                              <h4 className="text-lg font-black">
                                <Link href={url}>{post.title}</Link>
                              </h4>
                              <div className="read-next-card-meta">
                                <p>
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
          </div>
        </aside>
      ) : (
        <div className="py-36" />
      )}
    </>
  )
}
