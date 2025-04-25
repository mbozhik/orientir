import {API_URL} from '@/lib/constants'

import {TProject, TProjectExtra} from '@/app/api/projects/route'
import {TNews} from '@/app/api/news/route'

export async function getProjects(): Promise<TProject[]> {
  const res = await fetch(`${API_URL}/api/projects`, {cache: 'no-store'})
  if (!res.ok) {
    throw new Error('Failed to fetch projects')
  }
  return res.json()
}

export async function getProjectItem(slug: string): Promise<TProjectExtra> {
  const res = await fetch(`${API_URL}/api/projects?slug=${slug}`, {cache: 'no-store'})
  if (!res.ok) {
    throw new Error('Failed to fetch project item')
  }
  return res.json()
}

export async function getNews(): Promise<TNews[]> {
  const res = await fetch(`${API_URL}/api/news`, {cache: 'no-store'})
  if (!res.ok) {
    throw new Error('Failed to fetch news')
  }
  return res.json()
}

export async function getNewsItem(slug: string): Promise<TNews> {
  const res = await fetch(`${API_URL}/api/news?slug=${slug}`, {cache: 'no-store'})
  if (!res.ok) {
    throw new Error('Failed to fetch news item')
  }
  return res.json()
}
