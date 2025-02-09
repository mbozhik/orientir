import {TProject} from '@/app/api/projects/route'
import {getProjects} from '@/utils/getData'

import Container, {sitePadding} from '~/Global/Container'
import Overview from '~~/projects/Overview'

import Typography from '~/UI/Typography'

export default async function ProjectsPage() {
  const projects: TProject[] = await getProjects()

  return (
    <Container className={`space-y-4 ${sitePadding}`}>
      <Typography type="h1" className="mt-10 sm:mt-5" text="Проекты" />

      <Overview items={projects} />
    </Container>
  )
}
