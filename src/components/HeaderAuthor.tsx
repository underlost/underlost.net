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
    <header className="site-archive-header mb-11 stacked-sm">
      {coverImg && nextImages.feature && <Image src={coverImg} alt={author.name || ``} layout="fill" objectFit="cover" quality={nextImages.quality} />}
      <div className="inner">
        <div className="site-header-content author-header flex gap-8">
          {profileImg && nextImages.feature ? (
            <div className="author-profile-image h-28 w-28 relative border rounded-full p-2">
              <Image className="author-profile-image rounded-full" src={profileImg.url} alt={author.name || ``} quality={nextImages.quality} {...profileImg.dimensions} />
            </div>
          ) : author.profile_image ? (
            /* eslint-disable @next/next/no-img-element */
            <img className="author-profile-image" src={author.profile_image} alt={author.name || ``} />
          ) : (
            <div className="author-profile-image"></div>
          )}
          <div className="author-header-content max-w-xl">
            <h1 className="site-title text-xl font-black mb-4">{author.name}</h1>
            {author.bio && <p className="author-bio mb-5">{author.bio}</p>}
          </div>
        </div>
      </div>
    </header>
  )
}
