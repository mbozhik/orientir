import {TProject} from '@/app/api/projects/route'
import {getProjects} from '@/utils/getData'

import Container, {sitePadding} from '~/Global/Container'
import Overview from '~~/projects/Overview'

import Heading from '~/UI/Heading'

export default async function ProjectsPage() {
  const projects: TProject[] = await getProjects()

  return (
    <Container className={`space-y-4 ${sitePadding}`}>
      <Heading type="h1" className="mt-10 sm:mt-5" text="Проекты" />

      <Overview items={projects} />
    </Container>
  )
}
