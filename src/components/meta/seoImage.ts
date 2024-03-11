import path from 'path'
import { resolve } from 'url'
import { existsSync } from 'fs'
import { siteImage } from './siteDefaults'
import { imageDimensions, imageDimensionsFromFile, Dimensions } from '../../lib/images'

export interface ISeoImage {
  url: string
  dimensions: Dimensions
}

interface SeoImageProps {
  siteUrl: string
  imageUrl?: string | null
  imageName?: string
}

export const seoImage = async (props: SeoImageProps): Promise<ISeoImage> => {
  const { siteUrl, imageUrl, imageName } = props
  const defaultDimensions = { width: 1200, height: 800 }

  if (imageUrl) {
    const url = imageUrl
    const dimensions = (await imageDimensions(url)) || defaultDimensions
    return { url, dimensions }
  }

  const publicRoot = path.join(process.cwd(), `public`)
  const file = path.join(publicRoot, imageName || siteImage)

  const url = resolve(siteUrl, imageName || siteImage)
  if (existsSync(file)) {
    const dimensions = (await imageDimensionsFromFile(file)) || defaultDimensions
    return { url, dimensions }
  }
  const dimensions = (await imageDimensions(url)) || defaultDimensions

  return { url, dimensions }
}