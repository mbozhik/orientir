import {getProjects} from '@/sanity/lib/requests'

import Container, {sitePadding} from '~/Global/Container'
import Overview from '~~/projects/Overview'

import {H1} from '~/UI/Typography'

export const metadata = {
  title: 'Проекты',
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <Container className={`space-y-4 ${sitePadding}`}>
      <H1 className="mt-10 sm:mt-5">Проекты</H1>

      <Overview items={projects} />
    </Container>
  )
}
