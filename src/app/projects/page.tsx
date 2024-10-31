import {API_URL} from '@/lib/constants'
import {TProject} from '@/app/api/projects/route'

import Container, {sitePadding} from '~/Global/Container'
import Overview from '~~/projects/Overview'

import Heading from '~/UI/Heading'

async function getProjects() {
  const res = await fetch(`${API_URL}/api/projects`, {cache: 'no-store'})
  if (!res.ok) {
    throw new Error('Failed to fetch projects')
  }
  return res.json()
}

export default async function ProjectsPage() {
  const projects: TProject[] = await getProjects()

  return (
    <Container className={`space-y-4 ${sitePadding}`}>
      <Heading type="h1" className="mt-10" text="Проекты" />

      <Overview items={projects} />
    </Container>
  )
}
