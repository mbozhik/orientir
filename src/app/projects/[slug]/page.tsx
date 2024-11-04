import {API_URL} from '@/lib/constants'
import {TProjectExtra} from '@/app/api/projects/route'

import Container, {sitePadding} from '~/Global/Container'
import Heading from '~/UI/Heading'

import Showcase from '~~/projects/slug/Showcase'

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
      <Container className={`space-y-4 ${sitePadding}`}>
        <Heading type="h1" className="mt-10 sm:mt-5 sm:text-[35px]" text={project.project} />
      </Container>
    </>
  )
}
