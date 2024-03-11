/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
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
  const { nextImages } = settings.processEnv
  const { url: cmsUrl } = settings

  return (
    <ul className="author-list mr-1.5">
      {authors?.map((author, i) => {
        const url = resolveUrl({ cmsUrl, slug: author.slug, url: author.url || undefined })
        const profileImg = author.profileImage

        return (
          <li key={i} className="author-list-item flex">
            <Link className="relative w-5 h-5 rounded-full block mr-2" href={url}>
              {profileImg && nextImages.feature ? (
                <span className={`${(isPost && `author`) || `static`}-avatar`} aria-label={author.name}>
                  <Image src={profileImg.url} alt={author.name || ``} className="rounded-full" quality={nextImages.quality} {...profileImg.dimensions} />
                </span>
              ) : author.profile_image ? (
                <span className={`${(isPost && `author`) || `static`}-avatar`} aria-label={author.name}>
                  <img src={author.profile_image} className="rounded-full" alt={author.name} />
                </span>
              ) : (
                <span className={`${(isPost && `author`) || `static`}-avatar author-profile-image rounded-full`} aria-label={author.name} />
              )}
            </Link>
            <Link href={url}>{author.name}</Link>
          </li>
        )
      })}
    </ul>
  )
}
