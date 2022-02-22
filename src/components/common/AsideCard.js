import React from 'react'
import PropTypes from 'prop-types'
import { Tags } from '@tryghost/helpers-gatsby'
//import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import dayjs from 'dayjs'
let relativeTime = require(`dayjs/plugin/relativeTime`)
dayjs.extend(relativeTime)

const AsideCard = ({ post }) => {
  let timeNow = dayjs()
  let timeAdded = dayjs(post.published_at)
  let timeSince = timeNow.to(timeAdded)
  //const readingTime = readingTimeHelper(post)
  //const publishedAt = dayjs(post.published_at).format(`MMM D, YYYY`)
  //const updatedAt = dayjs(post.updated_at).format(`MMM D, YYYY`)

  return (
    <aside className="aside-card py-lg-3 mb-4">
      <header className="post-card-header">
        {post.primary_tag && <p className="post-card-tags h6 text-uppercase mb-1">{post.primary_tag.name}</p>}
      </header>
      <section className="content-body load-external-scripts mb-1" dangerouslySetInnerHTML={{ __html: post.html }} />
      <footer className="post-card-footer mt-0">
        <div className="post-meta mb-2">
          <time className="post-byline-item d-inline-block h6 text-uppercase pe-5" dateTime={post.published_at}>
            {timeSince}
          </time>
        </div>
        {post.tags && <div className="post-card-tags h6 text-uppercase mb-1"><span className="sr-only">Posted in:</span> <Tags post={post} visibility="public" autolink={false} /></div>}
        <div className="sr-only">
          <span>By: { post.primary_author.name }</span>
        </div>
      </footer>
    </aside>
  )
}

AsideCard.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    published_at: PropTypes.string,
    updated_at: PropTypes.string,
    feature_image: PropTypes.string,
    featured: PropTypes.bool,
    primary_tag: PropTypes.PropTypes.object,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    html: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    primary_author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      profile_image: PropTypes.string,
    }).isRequired,
  }).isRequired,
}

export default AsideCard
