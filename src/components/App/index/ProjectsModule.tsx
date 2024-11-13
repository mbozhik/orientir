'use client'

import {useRef, useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {SwiperRef} from 'swiper/react'
import {EffectCreative, Autoplay} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-creative'

import {TProject} from '@/app/api/projects/route'
import {ChevronLeft, ChevronRight} from 'lucide-react'
import LogoImage from '$/logo-min.svg'

import Image from 'next/image'
import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import {DetailsButton} from '~/UI/Button'

export default function ProjectsModule({items}: {items: TProject[]}) {
  const swiperRef = useRef<SwiperRef | null>(null)
  const [bgImages, setBgImages] = useState([
    {id: 0, src: items[0].image, opacity: 1},
    {id: 1, src: items[0].image, opacity: 0},
  ])
  const [activeImageId, setActiveImageId] = useState(0)

  const handleSlideChange = () => {
    if (swiperRef.current?.swiper) {
      const realIndex = swiperRef.current.swiper.realIndex
      const nextImageId = activeImageId === 0 ? 1 : 0

      setBgImages((prev) => prev.map((img) => (img.id === nextImageId ? {...img, src: items[realIndex].image, opacity: 1} : {...img, opacity: 0})))

      setActiveImageId(nextImageId)
    }
  }

  return (
    <section data-section="projects-index" className="relative grid place-items-center h-[80vh] overflow-hidden">
      <div className="absolute inset-0 w-full h-full -z-10">
        {bgImages.map((img) => (
          <div key={img.id} className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out" style={{opacity: img.opacity}}>
            <Image className="object-cover w-full h-full" src={img.src} alt="" priority />
          </div>
        ))}
      </div>

      <Swiper
        ref={swiperRef}
        data-slider="projects-index"
        className="w-[48%] xl:w-[60%] sm:w-full"
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onSlideChange={handleSlideChange}
      >
        {items.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-between px-14 py-14 sm:flex-col-reverse sm:p-6 sm:gap-10 sm:w-auto sm:mx-3 bg-background">
              <div className="py-7 sm:py-0 space-y-7 sm:space-y-3">
                <Text type="sub" className="font-bold text-gray" text={`${index + 1}/${items.length}`} />
                <Heading type="h2" text={project.project} />
                <Text type="p" className="max-w-[37ch]" text={project.description} />
                <DetailsButton href={`/projects/${project.slug}`} text="Подробнее" />
              </div>

              <div className="flex flex-col items-center justify-between sm:grid sm:grid-cols-2">
                <Image className="object-contain w-36 sm:w-16" src={LogoImage} alt="" />
                <div className="flex justify-between w-full sm:justify-end sm:gap-14">
                  <ChevronLeft className="cursor-pointer s-14 swiper-button-prev text-gray hover:text-red duration-200" strokeWidth={1.5} onClick={() => swiperRef.current?.swiper.slidePrev()} />
                  <ChevronRight className="cursor-pointer s-14 swiper-button-next text-gray hover:text-red duration-200" strokeWidth={1.5} onClick={() => swiperRef.current?.swiper.slideNext()} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
