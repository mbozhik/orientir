import ProjectsImage from '$/index/projects.jpg'
import LogoImage from '$/logo-min.svg'

import Image from 'next/image'

import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import DetailsButton from '~/UI/DetailsButton'
import {ArrowX} from '~/UI/Icons'

export default function ProjectsModule() {
  return (
    <section data-section="projects-index" className="relative grid place-items-center">
      <Image className="object-cover w-full -z-10 sm:h-[70vh]" src={ProjectsImage} alt="" />

      <div className="absolute flex justify-between w-1/2 p-16 sm:flex-col-reverse sm:p-6 sm:gap-10 sm:w-auto sm:mx-3 xl:w-2/3 bg-background">
        <div className="py-7 sm:py-0 space-y-7 sm:space-y-3">
          <Text type="sub" className="font-bold text-gray" text="1/4" />

          <Heading type="h2" text="Ориентир Запад" />
          <Text type="p" className="max-w-[37ch]" text="Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue." />

          <DetailsButton href="/projects/1" text="Подробнее" />
        </div>

        <div className="flex flex-col items-center justify-between sm:grid sm:grid-cols-2">
          <Image className="object-contain w-44 sm:w-16" src={LogoImage} alt="" />

          <div className="flex justify-between w-full sm:justify-end sm:gap-14">
            <ArrowX className="scale-[1.1] sm:scale-[0.9]" direction="left" />
            <ArrowX className="scale-[1.1] sm:scale-[0.9]" />
          </div>
        </div>
      </div>
    </section>
  )
}
