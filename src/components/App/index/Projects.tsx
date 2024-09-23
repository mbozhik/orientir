import Link from 'next/link'
import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import ProjectsModule from '~~/index/ProjectsModule'

export default function Projects() {
  return (
    <section data-section="projects-index" className="space-y-12 sm:space-y-5">
      <div className="flex justify-between">
        <Heading className="max-w-[50ch]" type="h1" text="Проекты компании «Ориентир» соответствуют самым высоким российским и европейским стандартам качества." />

        <Link className="text-end sm:hidden" href="/projects">
          <Text type="h4" className="font-bold underline hover:no-underline underline-offset-[8px]" text="Все проекты" />
        </Link>
      </div>

      <ProjectsModule />
    </section>
  )
}
