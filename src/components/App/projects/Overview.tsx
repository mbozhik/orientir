import {TProject} from '@/app/api/projects/route'
import Heading from '~/UI/Heading'

export default function Overview({items: projects}: {items: TProject[]}) {
  return (
    <section data-section="overview-projects" className="space-y-3">
      {projects.map((project) => (
        <div className="flex items-center justify-between px-6 py-5 bg-red text-background" key={project.id}>
          <Heading type="h2" text={project.division} />

          <div>arrow</div>
        </div>
      ))}
    </section>
  )
}
