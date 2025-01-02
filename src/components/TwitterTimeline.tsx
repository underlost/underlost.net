import React, { useState, useEffect } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { GhostPostOrPage } from '../lib/ghost'
import 'react-vertical-timeline-component/style.min.css'

interface TwitterTimelineProps {
  InitialData: GhostPostOrPage[]
}

const TwitterTimeline = ({ InitialData }: TwitterTimelineProps) => {
  const [posts, setPosts] = useState<GhostPostOrPage[]>(InitialData)
  const [start, setStart] = useState(10)
  const [hasMore, setHasMore] = useState<boolean | true>(true) // Whether there are more posts to load
  const [isLoading, setIsLoading] = useState<boolean | false>(false)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [ordering, SetOrdering] = useState<string | null>(`desc`) // `asc` or `desc`

  useEffect(() => {
    if (selectedTag !== null || start === 0) {
      loadMorePosts()
    }
  }, [selectedTag, start])

  const loadMorePosts = async () => {
    setIsLoading(true)
    try {
      const tagParam = selectedTag ? `&tag=${selectedTag}` : ``
      const orderParam = ordering ? `&order=${ordering}` : ``
      const res = await fetch(`/api/twitter?start=${start}${tagParam}${orderParam}`)
      const { posts: newPosts } = await res.json() // Destructure posts from the response
      setIsLoading(false)

      if (newPosts.length === 0) {
        setHasMore(false) // No more posts to load
        return
      }

      setPosts((prevPosts) => [...prevPosts, ...newPosts]) // Correctly merge the new posts with the existing ones

      setStart(start + 10)
    } catch (error) {
      console.error(`Error fetching more posts:`, error)
      setIsLoading(false)
    }
  }

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag)
    setStart(0) // Reset start index
    setPosts([]) // Clear existing posts
    setHasMore(true) // Reset hasMore
  }

  const handleClearTag = () => {
    setSelectedTag(null)
    setStart(0) // Reset start index
    setPosts([]) // Clear existing posts
    setHasMore(true) // Reset hasMore
    loadMorePosts() // Reload the default posts
  }

  const handleChangeOrdering = (e: React.ChangeEvent<HTMLSelectElement>) => {
    SetOrdering(e.target.value)
    setStart(0) // Reset start index
    setPosts([]) // Clear existing posts
    setHasMore(true) // Reset hasMore
    loadMorePosts() // Reload the default posts
  }

  return (
    <>
      <div className="gh-canvas md:pb-8">
        <section className="timeline-filter mb-8 stacked-sm">
          <h2 className="text-lg font-black mb-4">Timeline Settings</h2>
          <div className="lg:flex gap-20">
            <div className="block">
              <label htmlFor="twitter-tags" className="block mt-auto mr-3 text-xs font-black uppercase">
                Filter:
              </label>
              <select id="twitter-tags" className="dropdown" value={selectedTag || ``} onChange={(e) => handleTagClick(e.target.value)}>
                <option selected value="">
                  Select Tag
                </option>
                <option value="censorship">Censorship</option>
                <option value="politics">Politics</option>
                <option value="funny">Funny</option>
                <option value="outage">Outage</option>
                <option value="bsuiness">Business</option>
                <option value="advertising">Advertising</option>
              </select>
            </div>

            <div className="block">
              <label htmlFor="twitter-sort" className="block mt-auto mr-3 text-xs font-black uppercase">
                Sort:
              </label>
              <select id="twitter-sort" onChange={handleChangeOrdering} className="dropdown">
                <option value="desc">Newest First</option>
                <option value="asc">Oldest First</option>
              </select>
            </div>
          </div>
        </section>
      </div>

      <>
        {selectedTag && (
          <div className="text-center pb-8">
            <span>Filtering by: #{selectedTag}</span>
            <button className="btn btn-link ml-4 text-xs" onClick={handleClearTag}>
              Clear tag
            </button>
          </div>
        )}
      </>

      <VerticalTimeline>
        {posts.map((post, i) => {
          const publishedAt = new Date(post.published_at || ``).toLocaleDateString(`en-US`, {
            weekday: `long`,
            year: `numeric`,
            month: `long`,
            day: `numeric`,
          })

          const twitterIcon = (
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" className="fill-current h-6 w-6" viewBox="0 0 512 512">
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </svg>
          )

          return (
            <VerticalTimelineElement
              key={post.id}
              className="vertical-timeline-element"
              date={publishedAt}
              iconStyle={{ background: `rgb(33, 150, 243)`, color: `#fff` }}
              icon={twitterIcon}
            >
              {post.title && <h3 className="font-black text-lg mb-4">{post.title}</h3>}
              <div className="content-body load-external-scripts mb-1 text-sm" dangerouslySetInnerHTML={{ __html: post.html || `` }} />

              {post.tags && (
                <div className="related-tags">
                  <div className="block">
                    {post.tags
                      .filter((tag) => !tag.name?.startsWith(`#`))
                      .map((tag, index, array) => (
                        <span key={tag.name}>
                          <button className="twitter-tag-item italic text-xs" onClick={() => handleTagClick(tag.slug)}>
                            #{tag.name}
                          </button>
                          {index < array.length - 1 && `, `}
                        </span>
                      ))}
                  </div>
                </div>
              )}
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
      {hasMore && (
        <div className="text-center pt-8">
          <button className="btn btn-primary font-bold uppercase" onClick={loadMorePosts}>
            {isLoading ? `Loading...` : `Load more`}
          </button>
        </div>
      )}
    </>
  )
}

export default TwitterTimeline
