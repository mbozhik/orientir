import {API_URL} from '@/lib/constants'

import {TProjectExtra} from '@/app/api/projects/route'

export async function getProjectItem(slug: string): Promise<TProjectExtra> {
  const res = await fetch(`${API_URL}/api/projects?slug=${slug}`, {cache: 'no-store'})
  if (!res.ok) {
    throw new Error('Failed to fetch project item')
  }
  return res.json()
}
