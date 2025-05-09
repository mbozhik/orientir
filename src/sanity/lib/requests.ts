import type {PAGES_ITEM_QUERYResult, PROJECTS_QUERYResult, PROJECTS_ITEM_QUERYResult, DIRECTIONS_QUERYResult, NEWS_QUERYResult, NEWS_ITEM_QUERYResult} from '-/sanity.types'
import {PAGES_TOKENS} from '@/sanity/schemaTypes/page'

import {sanityFetch} from '@/sanity/lib/live'
import {defineQuery} from 'next-sanity'
import {draftMode} from 'next/headers'

async function fetchEntity<T>(query: string, draft: boolean = true): Promise<T[]> {
  try {
    const {isEnabled} = await draftMode()

    const response = await sanityFetch({
      query,
      ...(isEnabled && draft
        ? {
            perspective: 'drafts',
            useCdn: false,
            stega: true,
          }
        : undefined),
    })
    return (response.data as T[]) || []
  } catch (error) {
    console.log('Error fetching data:', error)
    return []
  }
}

async function fetchEntityItem<T>(query: string, params?: {slug?: string}, draft: boolean = false): Promise<T | null> {
  try {
    const {isEnabled} = await draftMode()
    const response = await sanityFetch({
      query,
      params,
      ...(isEnabled && draft
        ? {
            perspective: 'previewDrafts',
            useCdn: false,
            stega: true,
          }
        : undefined),
    })
    return (response.data as T) || null
  } catch (error) {
    console.log('Error fetching data:', error)
    return null
  }
}

const PAGES_ITEM_QUERY = defineQuery(`
    *[_type == "page" && token == $slug][0]{
        token, hero, indexDirections, indexClients, indexTeam, indexAwards, directionsDetails, directionsSpecs, aboutQuote, aboutResources
    }`)
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
  PAGES_ITEM_QUERY,
  PROJECTS_QUERY,
  PROJECTS_ITEM_QUERY,
  DIRECTIONS_QUERY,
  NEWS_QUERY,
  NEWS_ITEM_QUERY,
} as const

export const getPagesItem = (slug: keyof typeof PAGES_TOKENS) => fetchEntityItem<PAGES_ITEM_QUERYResult>(QUERIES.PAGES_ITEM_QUERY, {slug})
export const getProjects = (): Promise<PROJECTS_QUERYResult> => fetchEntity(QUERIES.PROJECTS_QUERY)
export const getProjectsItem = (slug: string) => fetchEntityItem<PROJECTS_ITEM_QUERYResult>(QUERIES.PROJECTS_ITEM_QUERY, {slug})
export const getDirections = (): Promise<DIRECTIONS_QUERYResult> => fetchEntity(QUERIES.DIRECTIONS_QUERY)
export const getNews = (): Promise<NEWS_QUERYResult> => fetchEntity(QUERIES.NEWS_QUERY)
export const getNewsItem = (slug: string) => fetchEntityItem<NEWS_ITEM_QUERYResult>(QUERIES.NEWS_ITEM_QUERY, {slug})
