import type {PROJECTS_ITEM_QUERYResult} from '-/sanity.types'
import {STATUS_VALUES} from '@/sanity/schemaTypes/typeResident'
import {ChevronLeft, ChevronRight} from 'lucide-react'

import {useRef} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {SwiperRef} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import {cn} from '@/lib/utils'
import {H4, SPAN} from '~/UI/Typography'

type TabProps = {
  naming: string | undefined
  status: string | undefined
  type?: string
  area?: string
  isActive?: boolean
  onClick?: () => void
  className?: string
}

export function Tab({naming, status, area, isActive, onClick, className}: TabProps) {
  return (
    <div onClick={onClick} className={cn('p-2.5 xl:pb-1 sm:px-2.5 sm:py-1.5 flex flex-col gap-1.5 xl:gap-1 duration-200 cursor-pointer', isActive ? 'bg-red text-background' : 'bg-background hover:bg-blue group hover:text-background', className)}>
      <div className={cn('flex justify-between gap-16 duration-200 text-gray group-hover:text-background font-extralight', isActive && 'text-background')}>
        <SPAN className="lowercase">{status === 'Свободные земельные участки' ? 'Свободные ЗУ' : status}</SPAN>
        {/* {type && <Typography type="span" className="self-end" text={type} />} */}
      </div>

      <div className="flex justify-between gap-12 xl:gap-8">
        <H4 className="font-bold !leading-[1.05]">{naming}</H4>
        {area && <SPAN className="self-end font-bold">{area} м2</SPAN>}
      </div>
    </div>
  )
}

type Props = {
  project: PROJECTS_ITEM_QUERYResult
  activeTab: number | null
  handleTabClick: (index: number) => void
}

export default function ResidentTabs({project, activeTab, handleTabClick}: Props) {
  const residents = project?.residents ? Object.values(project.residents) : []
  const swiperRef = useRef<SwiperRef | null>(null)

  return (
    <div className="relative flex max-w-[55vw] xl:max-w-[65vw] gap-1.5">
      {residents.length > 3 ? (
        <>
          <Swiper ref={swiperRef} spaceBetween={6} slidesPerView="auto" centeredSlides={false} className="!w-full">
            {residents.map(({naming, status, type, area}, index) => (
              <SwiperSlide key={index} className="!w-auto flex-shrink-0">
                <Tab naming={naming} status={status ? STATUS_VALUES[status] : status} type={type} area={area} isActive={activeTab === index} onClick={() => handleTabClick(index)} />
              </SwiperSlide>
            ))}
          </Swiper>

          <ChevronLeft className="absolute z-20 duration-200 transform -translate-y-1/2 cursor-pointer -left-12 top-1/2 s-12 hover:text-background" strokeWidth={1.3} onClick={() => swiperRef.current?.swiper.slidePrev()} />
          <ChevronRight className="absolute z-20 duration-200 transform -translate-y-1/2 cursor-pointer -right-12 top-1/2 s-12 hover:text-background" strokeWidth={1.3} onClick={() => swiperRef.current?.swiper.slideNext()} />
        </>
      ) : (
        residents.map(({naming, status, type, area}, index) => <Tab key={index} naming={naming} status={status} type={type} area={area} isActive={activeTab === index} onClick={() => handleTabClick(index)} />)
      )}
    </div>
  )
}
