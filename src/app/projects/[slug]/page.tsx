import {API_URL} from '@/lib/constants'
import {TProjectExtra} from '@/app/api/projects/route'

import Container from '~/Global/Container'
import Showcase from '~~/projects/slug/Showcase'
import Info from '~~/projects/slug/Info'

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
      <Container className="space-y-4">
        <Info project={project} />
      </Container>
    </>
  )
}
