import Image from 'next/image'
import { getLang, get } from '../utils/use-lang'

import { GhostAuthor, GhostSettings } from '../lib/ghost'

interface HeaderAuthorProps {
  settings: GhostSettings
  author: GhostAuthor
}

export const HeaderAuthor = ({ settings, author }: HeaderAuthorProps) => {
  const { nextImages } = settings.processEnv
  const text = get(getLang(settings.lang))
  const twitterUrl = author.twitter ? `https://twitter.com/${author.twitter.replace(/^@/, ``)}` : null
  const facebookUrl = author.facebook ? `https://www.facebook.com/${author.facebook.replace(/^\//, ``)}` : null

  const coverImg = author.cover_image || ``
  const profileImg = author.profileImage

  const numberOfPosts = author.count?.posts

  return (
    <header className="site-archive-header mb-11">
      {coverImg && nextImages.feature && <Image src={coverImg} alt={author.name || ``} layout="fill" objectFit="cover" quality={nextImages.quality} />}
      <div className="inner">
        <div className="site-header-content author-header flex gap-8">
          {profileImg && nextImages.feature ? (
            <div className="author-profile-image h-24 w-24 relative">
              <Image className="author-profile-image rounded-full" src={profileImg.url} alt={author.name || ``} quality={nextImages.quality} {...profileImg.dimensions} />
            </div>
          ) : author.profile_image ? (
            /* eslint-disable @next/next/no-img-element */
            <img className="author-profile-image" src={author.profile_image} alt={author.name || ``} />
          ) : (
            <div className="author-profile-image"></div>
          )}
          <div className="author-header-content max-w-xl">
            <h1 className="site-title text-xl font-black">{author.name}</h1>
            {author.bio && <h2 className="author-bio mb-5">{author.bio}</h2>}
            <div className="author-meta">
              {author.location && <div className="author-location">{author.location}</div>}
              <div className="author-stats">{(numberOfPosts && ` ${numberOfPosts} ${1 < numberOfPosts ? text(`POSTS`) : text(`POST`)}`) || `${text(`NO_POSTS`)}`}</div>
              {author.website && (
                <span className="author-social-link">
                  <a href={author.website} target="_blank" rel="noopener noreferrer">
                    {text(`WEBSITE`)}
                  </a>
                </span>
              )}
              {twitterUrl && (
                <span className="author-social-link">
                  <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                </span>
              )}
              {facebookUrl && (
                <span className="author-social-link">
                  <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
