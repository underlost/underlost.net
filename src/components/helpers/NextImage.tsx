import Image from 'next/image'
import { Node } from 'unist'
import { Dimensions } from '../../lib/images'

const domains = [`images.unsplash.com`, `cdn.underlost.net`, `www.gravatar.com`, `cdn.alifewellplayed.com`]

interface PropertyProps {
  src: string
  className?: string[]
  alt?: string
}

interface ImageNode extends Node {
  imageDimensions: Dimensions
  properties: PropertyProps
}

interface NextImageProps {
  node?: ImageNode; // provide the node prop accordingly
}

export const NextImage = ({ node }: NextImageProps) => {
  if (!node) return null
  const imageDimensions = node.imageDimensions
  const { src, className: classArray, alt } = node.properties
  const className = classArray?.join(` `)
  const isDomainWhitelisted = domains.some((domain) => src.includes(domain))

  return (
    <div className="next-image-wrapper">
      <div {...{ className }}>
        {isDomainWhitelisted ? (
          <Image src={src} {...imageDimensions} {...{ className }} alt={alt || ``} />
        ) : (
          <img src={src} {...{ className }} alt={alt || ``} />
        )}
      </div>
    </div>
  )
}
