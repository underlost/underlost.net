import * as appConfig from './appConfig'

// siteUrl, platform, ghostAPIUrl, ghostAPIKey must be defined here
export const ghostAPIUrl = process.env.CMS_GHOST_API_URL || `https://secure.underlost.net`
export const ghostAPIKey = process.env.CMS_GHOST_API_KEY || ``

const siteUrl = process.env.SITE_URL || (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) || process.env.URL || `http://localhost:3000`

const platform = (process.env.NETLIFY === `true` && `netlify`) || `vercel`

// Environment variables that can be used to override the defaults in appconfig.js
const resolveBool = (value: string | undefined, defaultValue: boolean) => {
  if (!value) return defaultValue
  if (value === `true`) return true
  return false
}

const resolveNumber = (value: string | undefined, defaultValue: number) => {
  if (!value) return defaultValue
  return parseInt(value, 10)
}

function reolveJSON<T>(value: string | undefined, defaultValue: T) {
  if (!value) return defaultValue
  return JSON.parse(value) as T
}

export interface ProcessEnvProps {
  siteUrl: string
  platform: string
  gaMeasurementId: string
  nextImages: {
    feature: boolean
    inline: boolean
    quality: number
    source: boolean
  }
  rssFeed: boolean
  memberSubscriptions: boolean
  prism: {
    enable: boolean
    ignoreMissing: boolean
  }
  toc: {
    enable: boolean
    maxDepth: number
  }
  isr: {
    enable: boolean
    revalidate: number
    maxNumberOfPosts: number
    maxNumberOfPages: number
  }
}

export const processEnv: ProcessEnvProps = {
  siteUrl,
  platform,
  gaMeasurementId: process.env.JAMIFY_GA_MEASUREMENT_ID || appConfig.gaMeasurementId,
  nextImages: {
    feature: resolveBool(process.env.JAMIFY_NEXT_FEATURE_IMAGES, appConfig.nextFeatureImages),
    inline: resolveBool(process.env.JAMIFY_NEXT_INLINE_IMAGES, appConfig.nextInlineImages),
    quality: resolveNumber(process.env.JAMIFY_NEXT_IMAGES_QUALITY, appConfig.imageQuality),
    source: resolveBool(process.env.JAMIFY_NEXT_SOURCE_IMAGES, appConfig.sourceImages),
  },
  rssFeed: resolveBool(process.env.JAMIFY_RSS_FEED, appConfig.rssFeed),
  memberSubscriptions: resolveBool(process.env.JAMIFY_MEMBER_SUBSCRIPTIONS, appConfig.memberSubscriptions),
  prism: {
    enable: resolveBool(process.env.JAMIFY_PRISM, appConfig.prism),
    ignoreMissing: resolveBool(process.env.JAMIFY_PRISM_IGNORE_MISSING, appConfig.prismIgnoreMissing),
  },
  toc: {
    enable: resolveBool(process.env.JAMIFY_TOC, appConfig.toc),
    maxDepth: resolveNumber(process.env.JAMIFY_TOC_MAX_DEPTH, appConfig.maxDepth),
  },
  isr: {
    enable: resolveBool(process.env.JAMIFY_NEXT_ISR, appConfig.isr),
    revalidate: resolveNumber(process.env.JAMIFY_NEXT_ISR_REVALIDATE, appConfig.revalidate),
    maxNumberOfPosts: resolveNumber(process.env.JAMIFY_NEXT_ISR_MAX_NUMBER_POSTS, appConfig.maxNumberOfPosts),
    maxNumberOfPages: resolveNumber(process.env.JAMIFY_NEXT_ISR_MAX_NUMBER_PAGES, appConfig.maxNumberOfPages),
  },
}
