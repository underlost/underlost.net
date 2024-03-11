/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { resolveUrl } from '../utils/routing'
import { PostClass } from '../components/helpers/PostClass'
import { GhostPostOrPage, GhostSettings } from '../lib/ghost'
import { RenderContent } from '@/components/RenderContent'

dayjs.extend(relativeTime)

interface AsideCardProps {
  settings: GhostSettings
  post: GhostPostOrPage
  num?: number
}

export const AsideCard = ({ settings, post, num }: AsideCardProps) => {
  const featImg = post.featureImage
  const postClass = PostClass({ tags: post.tags, isFeatured: post.featured, isImage: !!featImg })
  const large = (featImg && num !== undefined && 0 === num % 6 && `post-card-large`) || ``

  let timeNow = dayjs()
  let timeAdded = dayjs(post.published_at)
  let timeSince = timeNow.to(timeAdded)

  const htmlAst = post.html

  return (
    <aside className={`post-card relative mb-16 ${postClass} ${large}`}>
      <div className="post-card-content">
        <header className="post-card-header">
          {post.primary_tag && <div className="post-card-primary-tag">{post.primary_tag.name}</div>}
          <h2 className="post-card-title uppercase font-black">{post.title}</h2>
        </header>
        <section className="post-card-content">{htmlAst && <div dangerouslySetInnerHTML={{ __html: htmlAst }} />}</section>

        <footer className="post-card-meta mt-5">
          <div className="post-card-byline-content">
            <span className="post-card-byline-date font-mono uppercase text-xs">
              <time dateTime={post.published_at || ``}>{timeSince}&nbsp;</time>
            </span>
          </div>
        </footer>
      </div>
    </aside>
  )
}
