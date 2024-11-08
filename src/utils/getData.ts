import {API_URL} from '@/lib/constants'

import {TDirection} from '@/app/api/directions/route'

export async function getDirections(): Promise<TDirection[]> {
  const res = await fetch(`${API_URL}/api/directions`, {cache: 'no-store'})
  if (!res.ok) {
    throw new Error('Failed to fetch directions')
  }
  return res.json()
}
