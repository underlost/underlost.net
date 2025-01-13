import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllTiers } from '@/lib/ghost'

export default async function handler( req: NextApiRequest, res: NextApiResponse) {
  try {
    const tiers = await getAllTiers()
    //console.log(tiers)
    return res.status(200).json(tiers)
  } catch (error) {
    console.error(`Error fetching tiers:`, error)
    res.status(500).json({ error: `Failed to fetch tiers` })
  }

  return res.status(200).json({ tiers: [] })
}