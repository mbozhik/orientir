import {cn} from '@/lib/utils'
import {TProject} from '@/app/api/projects/route'

import {useRef} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {SwiperRef} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import Text from '~/UI/Text'
import {ChevronLeft, ChevronRight} from 'lucide-react'

type TabProps = {
  name: string
  status: string
  type?: string
  area: string
  isActive?: boolean
  onClick?: () => void
  className?: string
}

type Props = {
  project: TProject
  activeTab: number | null
  handleTabClick: (index: number) => void
}

export function Tab({name, status, type, area, isActive, onClick, className}: TabProps) {
  return (
    <div onClick={onClick} className={cn('p-2.5 xl:pb-1 flex flex-col gap-1.5 xl:gap-1 duration-200 cursor-pointer', isActive ? 'bg-red text-background' : 'bg-background hover:bg-blue group hover:text-background', className)}>
      <div className={cn('flex justify-between gap-16 duration-200 text-gray group-hover:text-background font-extralight', isActive && 'text-background')}>
        <Text type="sub" className="lowercase" text={status === 'Свободные земельные участки' ? 'Свободные ЗУ' : status} />
        {type && <Text type="sub" className="self-end" text={type} />}
      </div>

      <div className="flex justify-between gap-16">
        <Text type="h4" className="font-bold leading-none" text={name} />
        <Text type="sub" className="self-end font-bold" text={`${area} м2`} />
      </div>
    </div>
  )
}

export default function ResidentTabs({project, activeTab, handleTabClick}: Props) {
  const residents = Object.values(project.residents)
  const swiperRef = useRef<SwiperRef | null>(null)

  return (
    <div className="relative flex max-w-[55vw] xl:max-w-[60vw] gap-1.5">
      {residents.length > 3 ? (
        <>
          <Swiper ref={swiperRef} spaceBetween={6} slidesPerView="auto" centeredSlides={false} className="!w-full">
            {residents.map(({name, status, type, area}, index) => (
              <SwiperSlide key={index} className="!w-auto flex-shrink-0">
                <Tab name={name} status={status} type={type} area={area} isActive={activeTab === index} onClick={() => handleTabClick(index)} />
              </SwiperSlide>
            ))}
          </Swiper>

          <ChevronLeft className="absolute z-20 duration-200 transform -translate-y-1/2 cursor-pointer -left-12 top-1/2 s-12 hover:text-background" strokeWidth={1.3} onClick={() => swiperRef.current?.swiper.slidePrev()} />
          <ChevronRight className="absolute z-20 duration-200 transform -translate-y-1/2 cursor-pointer -right-12 top-1/2 s-12 hover:text-background" strokeWidth={1.3} onClick={() => swiperRef.current?.swiper.slideNext()} />
        </>
      ) : (
        residents.map(({name, status, type, area}, index) => <Tab key={index} name={name} status={status} type={type} area={area} isActive={activeTab === index} onClick={() => handleTabClick(index)} />)
      )}
    </div>
  )
}
