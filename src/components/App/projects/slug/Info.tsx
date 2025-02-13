import {TProjectExtra} from '@/app/api/projects/route'
import Image from 'next/image'

import Link from 'next/link'
import {Fragment} from 'react'
import {H1, H4, P, SPAN} from '~/UI/Typography'

export default function Info({project}: {project: TProjectExtra}) {
  return (
    <section data-section="info-project" className="space-y-7 sm:space-y-5">
      <H1 className="mt-10 sm:hidden">{project.project}</H1>

      <div className="grid grid-cols-2 sm:grid-cols-1 gap-14 xl:gap-10 sm:gap-7 px-44 xl:px-24 sm:px-0">
        {project.full_description && Array.isArray(project.full_description) ? project.full_description.map((text, index) => <H4 key={index}>{text}</H4>) : <H4 className="col-span-2">{project.full_description}</H4>}

        <div className="space-y-1.5 sm:space-y-5">
          <div className="flex sm:flex-col sm:items-start items-center gap-2.5 sm:gap-0">
            <SPAN animated={false} className="font-extralight">
              Площадь проекта
            </SPAN>
            <P className="font-bold text-red">{project.project_area} м2</P>
          </div>

          <div className="flex sm:flex-col sm:items-start items-center gap-2.5 sm:gap-0">
            <SPAN animated={false} className="font-extralight">
              Площадь участка
            </SPAN>
            <P className="font-bold text-red">{project.zone_area} га</P>
          </div>
        </div>

        <div className="flex sm:flex-col sm:items-start gap-2.5 sm:gap-0">
          <SPAN animated={false} className="font-extralight xl:mt-1.5 sm:mt-0">
            Локация
          </SPAN>

          <Link href={project.location.map.link} className="hover:underline sm:underline sm:underline-offset-2">
            <P className="font-bold text-red">{project.location.map.address}</P>
          </Link>
        </div>

        {project.more_info &&
          project.more_info.map((info, index) => (
            <Fragment key={index}>
              <Image className="w-[70%] sm:w-full object-cover" src={info.image} alt={project.project} />
              <P className="sm:-mt-3">{info.text}</P>
            </Fragment>
          ))}
      </div>
    </section>
  )
}
