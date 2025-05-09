import type {PROJECTS_ITEM_QUERYResult} from '-/sanity.types'

import {urlFor} from '-/src/sanity/lib/image'

import {Fragment} from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {H1, P, SPAN} from '~/UI/Typography'
import {PortableBlock} from '~/UI/PortableBlock'

export default function Info({project}: {project: PROJECTS_ITEM_QUERYResult}) {
  return (
    <section data-section="info-project" className="space-y-7 sm:space-y-5">
      <H1 className="mt-10 sm:hidden">{project?.naming}</H1>

      <div className="grid grid-cols-2 sm:flex sm:flex-col gap-14 xl:gap-10 sm:gap-7 px-44 xl:px-24 sm:px-0">
        {/* {project.full_description && Array.isArray(project.full_description) ? project.full_description.map((text, index) => <H4 key={index}>{text}</H4>) : <H4 className="col-span-2">{project.full_description}</H4>} */}

        <div className="space-y-1.5 sm:space-y-5">
          <div className="flex sm:flex-col sm:items-start items-center gap-2.5 sm:gap-0">
            <SPAN animated={false} className="font-extralight">
              Площадь проекта
            </SPAN>
            <P className="font-bold text-red">{project?.area?.project} м2</P>
          </div>

          <div className="flex sm:flex-col sm:items-start items-center gap-2.5 sm:gap-0">
            <SPAN animated={false} className="font-extralight">
              Площадь участка
            </SPAN>
            <P className="font-bold text-red">{project?.area?.zone} га</P>
          </div>
        </div>

        <div className="flex sm:flex-col sm:items-start gap-2.5 sm:gap-0">
          <SPAN animated={false} className="font-extralight xl:mt-1.5 sm:mt-0">
            Локация
          </SPAN>

          <Link href={project?.location?.link ? project.location?.link : '#'} className="hover:underline sm:underline sm:underline-offset-2">
            <P className="font-bold text-red">{project?.location?.address}</P>
          </Link>
        </div>

        {project?.information &&
          project.information.map((info, index) => (
            <Fragment key={index}>
              <div data-block="image-container" className="w-[70%] sm:w-full">
                {info.image && <Image quality={100} className="object-cover w-full" src={urlFor(info.image).url()} width={1000} height={1000} alt={project.naming ?? ''} />}
              </div>

              <PortableBlock value={info.text} />
            </Fragment>
          ))}
      </div>
    </section>
  )
}
