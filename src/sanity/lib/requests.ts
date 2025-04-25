import type {DIRECTIONS_QUERYResult} from '-/sanity.types'

import {sanityFetch} from '@/sanity/lib/live'
import {defineQuery} from 'next-sanity'

export async function getDirections() {
  const DIRECTIONS_QUERY = defineQuery(`
    *[_type == "direction"]{
        id, heading, params
    }`)

  try {
    const directions = await sanityFetch({query: DIRECTIONS_QUERY})

    return (directions.data as DIRECTIONS_QUERYResult) || []
  } catch (error) {
    console.log('Error fetching directions:', error)
    return []
  }
}
