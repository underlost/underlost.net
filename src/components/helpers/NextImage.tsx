import Image from 'next/image'
import { ComponentPropsWithNode } from 'rehype-react'
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

export const NextImage = (props: ComponentPropsWithNode) => {
  const { node } = props
  if (!node) return null
  const imageNode = node as ImageNode
  const imageDimensions = imageNode.imageDimensions
  const { src, className: classArray, alt } = imageNode.properties
  const className = classArray?.join(` `)
  const isDomainWhitelisted = domains.some((domain) => src.includes(domain))

  //console.log(imageNode)

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