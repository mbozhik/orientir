'use client'

import {TProjectExtra} from '@/app/api/projects/route'
import {isMobile} from '@bozzhik/is-mobile'

import {useState, useRef} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {SwiperRef} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import Image from 'next/image'
import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import {Tab} from '~~/projects/slug/showcase/ResidentTabs'
// import {CardDetails} from '~~/projects/slug/showcase/ResidentCard'
import {ArrowLeft, ArrowRight} from 'lucide-react'

export default function Specs({project}: {project: TProjectExtra}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef<SwiperRef | null>(null)

  if (!isMobile) {
    return null
  }

  return (
    <section data-section="mob-objects-project" className="space-y-4">
      <div className="flex items-end justify-between">
        <Heading type="h1" className="sm:text-[33px]" text="Объекты" />

        <div className="flex justify-between gap-3">
          <ArrowLeft className="s-12 sm:s-10 text-gray-dark" strokeWidth={1.3} onClick={() => swiperRef.current?.swiper.slidePrev()} />
          <ArrowRight className="s-12 sm:s-10 text-gray-dark" strokeWidth={1.3} onClick={() => swiperRef.current?.swiper.slideNext()} />
        </div>
      </div>

      <Swiper ref={swiperRef} data-slider="mobile-objects" spaceBetween={30} loop={true} onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}>
        {Object.values(project.residents).map((resident, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center gap-5 sm:gap-3">
              <Tab className="w-full bg-blue text-background" name={resident.name} status={resident.status} type={resident.type} area={resident.area} isActive={index === activeIndex} />
              <Image quality={100} className="object-cover w-full h-[35vh]" src={resident.image} alt={resident.name} />

              <div className="flex flex-col gap-5">
                <div className="">
                  <div className="flex flex-row-reverse justify-between w-full gap-2">
                    <Text type="sub" className="font-extralight" text={resident.status === 'Завершен' && resident.completion_time ? `Завершен <span class="font-bold">за ${resident.completion_time}</span>` : resident.status === 'Свободные земельные участки' ? 'Свободные ЗУ' : resident.status} />
                    <Heading type="h3" className="leading-none" text={resident.name} />
                  </div>

                  <div className="flex flex-row justify-between w-full font-extralight">
                    {resident.type && <Text type="sub" text={resident.type} />}
                    <Text type="sub" text={`${resident.area} м2`} />
                  </div>
                </div>

                <Text type="p" text={resident.description} />

                {/* {resident.extra_info && (
                  <div className="grid grid-cols-2 gap-2">
                    {resident.extra_info.map((info, index) => (
                      <CardDetails key={index} label={info.label} value={info.text} />
                    ))}
                  </div>
                )} */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
