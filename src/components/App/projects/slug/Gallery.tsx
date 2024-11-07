'use client'

import React, {useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {FreeMode, Navigation, Thumbs} from 'swiper/modules'
import {Swiper as SwiperCore} from 'swiper'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import {TProjectExtra} from '@/app/api/projects/route'
import Image from 'next/image'
import Text from '~/UI/Text'

export default function Gallery({project}: {project: TProjectExtra}) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const activeCaption = project.gallery[activeIndex]?.caption || ''

  return (
    <section data-section="gallery-project" className="relative w-[79%] xl:w-[85%] sm:w-full mx-auto">
      <div className="absolute z-20 flex flex-col s-fit inset-4 sm:inset-2 bg-background">
        <div className="w-full h-2 bg-blue"></div>

        <div className="px-5 py-4 sm:px-3 sm:py-2">
          <Text type="sub" className="max-w-[50ch] sm:text-sm sm:leading-[1.2]" text={activeCaption} />
        </div>
      </div>

      <div className="sm:space-y-1">
        <Swiper data-slider="gallery" className="w-full h-[85vh] sm:h-[50vh]" onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} thumbs={{swiper: thumbsSwiper}} loop={true} spaceBetween={10} navigation={true} modules={[FreeMode, Navigation, Thumbs]}>
          {project.gallery.map(({image, caption}, index) => (
            <SwiperSlide className="bg-center bg-cover" key={index}>
              <Image quality={100} className="block object-cover s-full" src={image} width={2000} height={2000} alt={caption} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute z-50 w-full sm:static bottom-4">
          <div className="bg-background p-1 sm:px-0 w-1/2 sm:w-full mx-auto h-[10vh] sm:h-[7vh]">
            <Swiper data-slider="thumbs" className="h-full" onSwiper={setThumbsSwiper} loop={true} spaceBetween={4} slidesPerView={6} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]}>
              {project.gallery.map(({image, caption}, index) => (
                <SwiperSlide className="bg-center bg-cover cursor-pointer bg-foreground" key={index}>
                  <Image quality={100} className="block object-cover s-full" src={image} width={500} height={500} alt={caption} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
