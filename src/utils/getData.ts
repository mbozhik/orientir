import {API_URL} from '@/lib/constants'

import {TDirection} from '@/app/api/directions/route'
import {TProject} from '@/app/api/projects/route'

export async function getDirections(): Promise<TDirection[]> {
  const res = await fetch(`${API_URL}/api/directions`, {cache: 'no-store'})
  if (!res.ok) {
    throw new Error('Failed to fetch directions')
  }
  return res.json()
}

export async function getProjects(): Promise<TProject[]> {
  const res = await fetch(`${API_URL}/api/projects`, {cache: 'no-store'})
  if (!res.ok) {
    throw new Error('Failed to fetch projects')
  }
  return res.json()
}
