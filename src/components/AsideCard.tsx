/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { getLang, get } from '@/utils/use-lang'
import { resolveUrl } from '@/utils/routing'
import { PostClass } from '@/components/helpers/PostClass'
import { GhostPostOrPage, GhostSettings } from '@/lib/ghost'
import { readingTime as readingTimeHelper } from '@/lib/readingTime'

dayjs.extend(relativeTime)

interface AsideCardProps {
  settings: GhostSettings
  post: GhostPostOrPage
  num?: number
}

export const AsideCard = ({ settings, post, num }: AsideCardProps) => {
  const featImg = post.featureImage
  const postClass = PostClass({ tags: post.tags, isFeatured: post.featured, isImage: !!featImg })
  const text = get(getLang(settings.lang))
  const cmsUrl = settings.url
  const large = (featImg && num !== undefined && 0 === num % 6 && `post-card-large`) || ``
  const url = resolveUrl({ cmsUrl, collectionPath: `notes/`, slug: post.slug, url: post.url })
  const readingTime = readingTimeHelper(post).replace(`min read`, text(`MIN_READ`))
  const timeNow = dayjs()
  const timeAdded = dayjs(post.published_at)
  const timeSince = timeNow.to(timeAdded)
  const published_at_nice = dayjs(post.published_at).format(`MMMM DD, YYYY`)
  const htmlAst = post.html

  return (
    <aside className={`post-card relative py-8 ${postClass} ${large}`}>
      <div className="post-card-content">
        <header className="post-card-header">
          <div className="tags flex gap-2 items-center justify-between mb-6 w-full leading-none">
            <div className="relative flex items-center gap-2 text-sm">
              <div className="flex items-center gap-1">
                <img
                  className="w-6 h-6 rounded-full" 
                  alt={post.primary_author?.name || ``}
                  src={post.primary_author?.profile_image || ``}
                />
                <span className="text-sm font-semibold">
                  {post.primary_author?.name || ``}
                </span>
              </div>
              <time className="relative group text-xs" dateTime={post.published_at || ``}>
                <span className="group-hover:hidden">{timeSince}</span>
                <span className="hidden group-hover:block">{published_at_nice || ``}</span>
              </time>
            </div>
            {post.primary_tag && <div className="post-card-primary-tag text-xs font-medium">{post.primary_tag.name}</div>}
          </div>
          <Link href={url}>
            <h2 className="post-card-title uppercase font-black mb-5">{post.title}</h2>
          </Link>
        </header>
        {htmlAst && <section className="gh-content mb-11" dangerouslySetInnerHTML={{ __html: htmlAst }} />}
        <footer className="post-card-meta mt-5">
          <span className="uppercase font-mono text-xs">{readingTime}</span>
        </footer>
      </div>
    </aside>
  )
}
