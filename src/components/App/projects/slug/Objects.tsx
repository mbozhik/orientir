'use client'

import {TProjectExtra} from '@/app/api/projects/route'
// import {isMobile} from '@bozzhik/is-mobile'
const isMobile = true

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import Image from 'next/image'
import {Tab} from './showcase/ResidentTabs'

export default function Specs({project}: {project: TProjectExtra}) {
  if (!isMobile) {
    return null
  }

  return (
    <section data-section="mob-objects-project" className="space-y-5">
      <Heading type="h1" className="sm:text-[33px]" text="Объекты" />

      <Swiper data-slider="mobile-objects" spaceBetween={30}>
        {Object.values(project.residents).map((resident, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center gap-5">
              <Tab className="bg-blue text-background w-full" name={resident.name} status={resident.status} type={resident.type} area={resident.area} />
              <Image quality={100} className="object-cover w-full h-40" src={resident.image} alt={resident.name} />

              <div>
                <Text type="p" className="sm:text-xs" text={resident.name} />
                <Text type="p" className="sm:text-xs" text={resident.status} />
                {resident.award && <Text type="p" className="sm:text-xs" text={resident.award} />}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
