import { GhostPostsOrPages, GhostSettings } from '../lib/ghost'
import { PostCard } from './PostCard'

interface PostViewProps {
  settings: GhostSettings
  posts: GhostPostsOrPages
  isHome?: boolean
  title?: string
  className?: string
  collectionPath?: string
  cards?: boolean
}

export const PostView = ({ title = ``, className = ``, posts, settings, collectionPath = `writing/`, cards = true }: PostViewProps) => (
  <section className={`${className} px-8 py-16`}>
    {title && <h2 className="h1 text-center uppercase">{title}</h2>}
    <div className="max-w-5xl mx-auto -translate-y-4 lg:-translate-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-11">
        {posts.map((post, i) => (
          <div key={i} className="col-span-1">
            <PostCard settings={settings} post={post} num={i} collectionPath={collectionPath} card={cards} />
          </div>
        ))}
      </div>
    </div>
  </section>
)
