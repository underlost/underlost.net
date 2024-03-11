import { GhostPostsOrPages, GhostSettings } from '../lib/ghost'
import { PostCard } from './PostCard'

interface PostViewProps {
  settings: GhostSettings
  posts: GhostPostsOrPages
  isHome?: boolean
}

export const PostView = (props: PostViewProps) => (
  <div className="inner posts gh-canvas">
    {props.posts.map((post, i) => (
      <PostCard key={i} settings={props.settings} post={post} num={i} />
    ))}
  </div>
)
