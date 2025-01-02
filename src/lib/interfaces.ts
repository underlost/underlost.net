export type Link = {
  layout: string
  title: string
  slug: string
  alt: string
  description: string
  keywords: Array<string>
  website: string
  icon: string
  permalink: string
  weight: number
  sticky: boolean
  type: string
  content: string
}

export type Portfolio = {
  guid: string
  slug: string
  title: string
  description: string
  keywords: Array<string>
  color: string
  image: string
  date: string
  published: boolean
  type: string
  tools_used: Array<string>
  frameworks_used: Array<string>
  timeline: string
  role: string
}
