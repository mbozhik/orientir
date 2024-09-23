import ProjectsImage from '$/index/projects.jpg'
import LogoImage from '$/logo-min.svg'

import Image from 'next/image'
import Link from 'next/link'
import {ArrowX} from '~/UI/Icons'
import {ArrowUpRight} from 'lucide-react'

import Heading from '~/UI/Heading'
import Text from '~/UI/Text'

export default function ProjectsModule() {
  return (
    <section data-section="projects-index" className="relative grid place-items-center">
      <Image className="object-cover w-full -z-10" src={ProjectsImage} alt="" />

      <div className="absolute flex justify-between w-1/2 p-16 bg-background">
        <div className="py-7 space-y-7">
          <Text type="sub" className="font-bold text-gray" text="1/4" />

          <Heading type="h2" text="Ориентир Запад" />
          <Text type="p" className="max-w-[37ch]" text="Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue." />

          <Link href="/projects/1" className="inline-flex items-center gap-2 pb-1 border-b-[3px] border-foreground hover:border-[#00000000]">
            <Text type="h4" text="Подробнее" />
            <ArrowUpRight size={35} strokeWidth={1.25} />
          </Link>
        </div>

        <div className="flex flex-col items-center justify-between">
          <Image className="object-contain w-44" src={LogoImage} alt="" />

          <div className="flex justify-between w-full">
            <ArrowX className="scale-110" direction="left" />
            <ArrowX className="scale-110" />
          </div>
        </div>
      </div>
    </section>
  )
}
