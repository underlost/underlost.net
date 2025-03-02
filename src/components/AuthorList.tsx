import Link from 'next/link'
import { resolveUrl } from '../utils/routing'
import { getLang, get } from '../utils/use-lang'
import { GhostAuthor, GhostSettings } from '../lib/ghost'

interface AuthorListProps {
  settings: GhostSettings
  authors?: GhostAuthor[]
  isPost?: boolean
}

export const AuthorList = ({ settings, authors, isPost }: AuthorListProps) => {
  const text = get(getLang(settings.lang))
  const { url: cmsUrl } = settings

  return (
    <ul className="author-list mr-1.5">
      {authors?.map((author, i) => {
        const url = resolveUrl({ cmsUrl, slug: author.slug, url: author.url || undefined })

        return (
          <li key={i} className="author-list-item flex">
            <Link href={url}>{author.name}</Link>
          </li>
        )
      })}
    </ul>
  )
}
