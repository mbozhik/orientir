import {API_URL} from '@/lib/constants'
import {TProjectExtra} from '@/app/api/projects/route'

import Container from '~/Global/Container'
import Showcase from '~~/projects/slug/showcase/Showcase'
import Info from '~~/projects/slug/Info'
import Specs from '~~/projects/slug/Specs'
import MapPoint from '~~/projects/slug/MapPoint'
import Gallery from '~~/projects/slug/Gallery'

async function getProject(slug: string): Promise<TProjectExtra> {
  const res = await fetch(`${API_URL}/api/projects?slug=${slug}`, {cache: 'no-store'})
  if (!res.ok) {
    throw new Error('Failed to fetch project')
  }
  return res.json()
}

export default async function ProjectPage({params}: {params: Promise<{slug: string}>}) {
  const slug = (await params).slug
  const project: TProjectExtra = await getProject(slug)

  return (
    <>
      <Showcase project={project} />
      <Container className="mb-24 space-y-24 sm:space-y-16 sm:mb-16">
        <Info project={project} />
        <Specs project={project} />
        <Gallery project={project} />
      </Container>
      <MapPoint project={project} />
    </>
  )
}
