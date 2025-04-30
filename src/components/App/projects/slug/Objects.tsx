'use client'

import type {PROJECTS_ITEM_QUERYResult} from '-/sanity.types'
import {STATUS_VALUES} from '@/sanity/schemaTypes/types/typeResident'
import {ArrowLeft, ArrowRight} from 'lucide-react'

import {useState, useRef} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {SwiperRef} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import {useMediaQuery} from '@/lib/use-media-query'

import {H1, H3, P, SPAN} from '~/UI/Typography'
import {Tab} from '~~/projects/slug/showcase/ResidentTabs'
import {CardDetails} from '~~/projects/slug/showcase/ResidentCard'

export default function Specs({project}: {project: PROJECTS_ITEM_QUERYResult}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef<SwiperRef | null>(null)

  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return null
  }

  return (
    <section data-section="mob-objects-project" className="space-y-4">
      <div className="flex items-end justify-between">
        <H1 className="sm:text-[33px]">Объекты</H1>

        <div className="flex justify-between gap-3">
          <ArrowLeft className="s-12 sm:s-10 text-gray-dark" strokeWidth={1.3} onClick={() => swiperRef.current?.swiper.slidePrev()} />
          <ArrowRight className="s-12 sm:s-10 text-gray-dark" strokeWidth={1.3} onClick={() => swiperRef.current?.swiper.slideNext()} />
        </div>
      </div>

      <Swiper ref={swiperRef} data-slider="mobile-objects" spaceBetween={30} autoHeight={true} loop={true} onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}>
        {(project?.residents ? Object.values(project.residents) : []).map((resident, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center gap-5 sm:gap-3">
              <Tab className="w-full bg-blue text-background" naming={resident.naming} status={resident.status} type={resident.type} area={resident.area} isActive={index === activeIndex} />

              <div className="flex flex-col gap-5">
                <div className="">
                  <div className="flex flex-row-reverse justify-between w-full gap-2">
                    <div className="inline-flex gap-1">
                      <SPAN className="text-gray font-extralight">{resident.status === 'completed' && resident.completion_time && resident.status ? STATUS_VALUES[resident.status] : resident.status}</SPAN>
                      {resident.status === 'completed' && resident.completion_time && <SPAN className="font-bold text-gray">{resident.completion_time}</SPAN>}
                    </div>

                    <H3 className="leading-none">{resident.naming}</H3>
                  </div>

                  <div className="flex flex-row justify-between w-full font-extralight">
                    {resident.type && <SPAN>{resident.type}</SPAN>}
                    <SPAN>{`${resident.area} м2`}</SPAN>
                  </div>
                </div>

                <P>{resident.description}</P>

                {resident.info && (
                  <div className="grid grid-cols-2 gap-4">
                    <>
                      <div className="space-y-2">
                        {resident.info.slice(0, Math.ceil(resident.info.length / 2)).map((info, index) => (
                          <CardDetails key={index} label={info.param} value={info.value} />
                        ))}
                      </div>
                      <div className="space-y-2">
                        {resident.info.slice(Math.ceil(resident.info.length / 2)).map((info, index) => (
                          <CardDetails key={index} label={info.param} value={info.value} />
                        ))}
                      </div>
                    </>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
