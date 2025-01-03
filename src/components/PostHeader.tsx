import React from 'react'
import dayjs from 'dayjs'

interface PostHeaderProps {
  title?: string
  excerpt?: string
  published_at?: string | null
  updated_at?: string | null
  readingTime?: string | null
  primary_tag?: {
    name?: string
  } | null
}

export const PostHeader = ({ title, excerpt, primary_tag, published_at, updated_at, readingTime }: PostHeaderProps) => (
  <header className="post-full-header max-w-7xl mx-auto mb-8 lg:mb-16 px-5 text-shadow shadow-white dark:shadow-black">
    <div className="lg:grid lg:grid-cols-12 lg:gap-x-11">
      <div className="col-span-12 lg:col-span-7">
        {primary_tag && <div className="post-card-primary-tag">{primary_tag.name}</div>}
        <h1 className="h2">{title}</h1>
      </div>
      <p className="col-span-12 lg:col-span-5 mt-auto text-xl">{excerpt}</p>
    </div>
    <div className="byline-meta-content mt-3 font-mono">
      {published_at && (
        <span>
          <time className="byline-meta-date" dateTime={published_at || ``}>
            Written {dayjs(published_at || ``).format(`MMMM D, YYYY`)}
          </time>

          {updated_at && (
            <>
              <span className="bull inline-block px-1">&bull;</span>
              <time className="byline-meta-date" dateTime={updated_at || ``}>
                Last updated {dayjs(updated_at || ``).format(`MMMM D, YYYY`)}
              </time>
            </>
          )}
        </span>
      )}
      {readingTime && (
        <span className="byline-reading-time">
          <span className="bull">&bull;</span> {readingTime}
        </span>
      )}
    </div>
  </header>
)
