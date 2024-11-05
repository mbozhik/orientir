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

export default function Gallery({project}: {project: TProjectExtra}) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null)

  return (
    <section data-section="gallery-project" className="relative">
      <Swiper data-slider="swiper" className="w-full h-[85vh]" loop={true} spaceBetween={10} navigation={true} thumbs={{swiper: thumbsSwiper}} modules={[FreeMode, Navigation, Thumbs]}>
        {project.gallery.map((image, index) => (
          <SwiperSlide className="bg-center bg-cover" key={index}>
            <Image quality={100} className="block object-cover s-full" src={image} width={2000} height={2000} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute z-50 w-full bottom-10">
        <Swiper data-slider="thumbs" className="w-1/2 mx-auto h-[12vh]" onSwiper={setThumbsSwiper} loop={true} spaceBetween={10} slidesPerView={6} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]}>
          {project.gallery.map((image, index) => (
            <SwiperSlide className="bg-center bg-cover" key={index}>
              <Image quality={100} className="block object-cover s-full" src={image} width={500} height={500} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
