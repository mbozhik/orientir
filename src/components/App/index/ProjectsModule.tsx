import {TProject} from '@/app/api/projects/route'

import ProjectsImage from '$/index/projects.jpg'
import LogoImage from '$/logo-min.svg'
import {ChevronLeft, ChevronRight} from 'lucide-react'

import Image from 'next/image'
import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import {DetailsButton} from '~/UI/Button'

export default function ProjectsModule({items}: {items: TProject[]}) {
  return (
    <section data-section="projects-index" className="relative grid place-items-center h-[80vh]">
      <Image className="absolute object-cover w-full h-full -z-10" src={ProjectsImage} alt="" />

      {items.slice(0, 1).map((project, index) => (
        <div key={index} className="flex justify-between w-[48%] px-14 py-14 sm:flex-col-reverse sm:p-6 sm:gap-10 sm:w-auto sm:mx-3 xl:w-2/3 bg-background">
          <div className="py-7 sm:py-0 space-y-7 sm:space-y-3">
            <Text type="sub" className="font-bold text-gray" text={`${index + 1}/${items.length}`} />

            <Heading type="h2" text={project.project} />
            <Text type="p" className="max-w-[37ch]" text={project.description} />

            <DetailsButton href={`/projects/${project.slug}`} text="Подробнее" />
          </div>

          <div className="flex flex-col items-center justify-between sm:grid sm:grid-cols-2">
            <Image className="object-contain w-36 sm:w-16" src={LogoImage} alt="" />

            <div className="flex justify-between w-full sm:justify-end sm:gap-14">
              <ChevronLeft className="cursor-pointer s-14 text-gray" strokeWidth={1.5} />
              <ChevronRight className="cursor-pointer s-14 text-gray" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
