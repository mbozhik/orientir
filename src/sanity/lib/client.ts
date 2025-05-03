import {createClient} from 'next-sanity'

import {apiVersion, dataset, projectId} from '@/sanity/env'
import {API_URL} from '@/lib/constants'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  stega: {
    studioUrl: `${API_URL}/studio`,
  },
})
