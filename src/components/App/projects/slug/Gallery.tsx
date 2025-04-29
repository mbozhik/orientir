'use client'

import type {PROJECTS_ITEM_QUERYResult} from '-/sanity.types'
import type {SanityImageSource} from '@sanity/image-url/lib/types/types'

import React, {useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {FreeMode, Navigation, Thumbs} from 'swiper/modules'
import {Swiper as SwiperCore} from 'swiper'
import {urlFor} from '@/sanity/lib/image'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import Image from 'next/image'
import {SPAN} from '~/UI/Typography'

export default function Gallery({project}: {project: PROJECTS_ITEM_QUERYResult}) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  if (!project?.gallery) return null

  const activeCaption = project.gallery[activeIndex]?.caption || ''

  return (
    <section data-section="gallery-project" className="relative mx-auto">
      {activeCaption && (
        <div className="absolute z-20 flex flex-col s-fit top-4 left-5 sm:inset-2 bg-background">
          <div className="w-full h-2 sm:h-1.5 bg-blue"></div>

          <div className="px-5 py-4 sm:px-3 sm:py-2">
            <SPAN className="max-w-[50ch] sm:text-sm sm:leading-[1.2]">{activeCaption}</SPAN>
          </div>
        </div>
      )}

      <div>
        <Swiper data-slider="gallery" className="w-full h-[85vh] sm:h-[50vh]" onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} thumbs={{swiper: thumbsSwiper}} loop={true} spaceBetween={10} navigation={true} modules={[FreeMode, Navigation, Thumbs]}>
          {project.gallery.map((item, idx) => (
            <SwiperSlide className="bg-center bg-cover" key={idx}>
              <Image quality={100} className="block object-cover s-full" src={urlFor(item.image as SanityImageSource).url()} width={2000} height={2000} alt={item.caption || ''} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute z-50 w-full sm:static bottom-4">
          <div className="bg-background p-1 sm:px-0 w-[50%] sm:w-full mx-auto h-[10vh] sm:h-[7vh]">
            <Swiper data-slider="thumbs" className="h-full" onSwiper={setThumbsSwiper} loop={true} spaceBetween={4} slidesPerView={6} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]}>
              {project.gallery.map((item, idx) => (
                <SwiperSlide className="bg-center bg-cover cursor-pointer bg-foreground" key={idx}>
                  <Image quality={100} className="block object-cover s-full" src={urlFor(item.image as SanityImageSource).url()} width={500} height={500} alt={item.caption || ''} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
