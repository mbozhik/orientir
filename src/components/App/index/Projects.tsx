import {getProjects} from '@/sanity/lib/requests'

import {H1} from '~/UI/Typography'
import {ExpandButton} from '~/UI/Button'
import ProjectsModule from '~~/index/ProjectsModule'

export default async function Projects() {
  const projects = await getProjects()

  return (
    <section data-section="projects-index" className="space-y-12 sm:space-y-7">
      <div className="flex justify-between">
        <H1 className="max-w-[50ch]">Проекты компании «Ориентир» соответствуют самым высоким российским и европейским стандартам качества.</H1>

        <ExpandButton href="/projects" view="desktop" text="Все проекты" />
      </div>

      <ProjectsModule items={projects} />

      <ExpandButton href="/projects" view="mobile" text="Все проекты" />
    </section>
  )
}
