import {TProjectExtra} from '@/app/api/projects/route'
import Image from 'next/image'

import Link from 'next/link'
import {Fragment} from 'react'
import Heading from '~/UI/Heading'
import Text from '~/UI/Text'

export default function Info({project}: {project: TProjectExtra}) {
  return (
    <section data-section="info-project" className="space-y-7 sm:space-y-5">
      <Heading type="h1" className="mt-10 sm:hidden" text={project.project} />

      <div className="grid grid-cols-2 sm:grid-cols-1 gap-14 xl:gap-10 sm:gap-7 px-44 xl:px-24 sm:px-0">
        {project.full_description.map((text, index) => (
          <Text type="h4" text={text} key={index} />
        ))}

        <div className="space-y-1.5 sm:space-y-5">
          <div className="flex sm:flex-col sm:items-start items-center gap-2.5 sm:gap-1">
            <Text type="sub" className="font-extralight" text="Площадь проекта" />
            <Text type="p" className="font-bold" text={`${project.project_area} м2`} />
          </div>

          <div className="flex sm:flex-col sm:items-start items-center gap-2.5 sm:gap-1">
            <Text type="sub" className="font-extralight" text="Площадь проекта" />
            <Text type="p" className="font-bold" text={`${project.zone_area} га`} />
          </div>
        </div>

        <div className="flex sm:flex-col sm:items-start gap-2.5 sm:gap-1">
          <Text type="sub" className="font-extralight xl:mt-1.5 sm:mt-0" text="Локация" />
          <Link href={project.location.address} className="hover:underline">
            <Text type="p" className="font-bold" text={project.location.address} />
          </Link>
        </div>

        {project.more_info &&
          project.more_info.map((info, index) => (
            <Fragment key={index}>
              <Image className="w-[45%] xl:w-[60%] sm:w-full object-cover" src={info.image} alt={project.project} />
              <Text type="p" className="sm:-mt-3" text={info.text} />
            </Fragment>
          ))}
      </div>
    </section>
  )
}
