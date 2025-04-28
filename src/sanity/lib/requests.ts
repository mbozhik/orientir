import type {PROJECTS_QUERYResult, PROJECTS_ITEM_QUERYResult, DIRECTIONS_QUERYResult, NEWS_QUERYResult, NEWS_ITEM_QUERYResult} from '-/sanity.types'

import {sanityFetch} from '@/sanity/lib/live'
import {defineQuery} from 'next-sanity'

async function fetchEntity<T>(query: string): Promise<T[]> {
  try {
    const response = await sanityFetch({query})
    return (response.data as T[]) || []
  } catch (error) {
    console.log('Error fetching data:', error)
    return []
  }
}

async function fetchEntityItem<T>(query: string, params?: {slug?: string}): Promise<T | null> {
  try {
    const response = await sanityFetch({query, params})
    return (response.data as T) || null
  } catch (error) {
    console.log('Error fetching data:', error)
    return null
  }
}

const PROJECTS_QUERY = defineQuery(`
    *[_type == "project"] | order(id asc) {
        naming, slug, id, description, information, residents, area, location, specifications, awards, image, gallery
    }`)
const PROJECTS_ITEM_QUERY = defineQuery(`
    *[_type == "project" && slug.current == $slug][0]{
        naming, slug, description, information, residents, area, location, specifications, awards, image, gallery
    }`)

const DIRECTIONS_QUERY = defineQuery(`
    *[_type == "direction"]{
        id, heading, params
    }`)

const NEWS_QUERY = defineQuery(`
    *[_type == "news"]{
        heading, tag, date, source, slug, cover, content
    }`)
const NEWS_ITEM_QUERY = defineQuery(`
    *[_type == "news" && slug.current == $slug][0]{
        heading, tag, date, source, slug, cover, content
    }`)

const QUERIES = {
  PROJECTS_QUERY,
  PROJECTS_ITEM_QUERY,
  DIRECTIONS_QUERY,
  NEWS_QUERY,
  NEWS_ITEM_QUERY,
} as const

export const getProjects = (): Promise<PROJECTS_QUERYResult> => fetchEntity(QUERIES.PROJECTS_QUERY)
export const getProjectsItem = (slug: string) => fetchEntityItem<PROJECTS_ITEM_QUERYResult>(QUERIES.PROJECTS_ITEM_QUERY, {slug})
export const getDirections = (): Promise<DIRECTIONS_QUERYResult> => fetchEntity(QUERIES.DIRECTIONS_QUERY)
export const getNews = (): Promise<NEWS_QUERYResult> => fetchEntity(QUERIES.NEWS_QUERY)
export const getNewsItem = (slug: string) => fetchEntityItem<NEWS_ITEM_QUERYResult>(QUERIES.NEWS_ITEM_QUERY, {slug})
