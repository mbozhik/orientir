'use client'

import LogoImage from '$/logo-min.svg'
import {ChevronLeft, ChevronRight} from 'lucide-react'

import type {PROJECTS_QUERYResult} from '-/sanity.types'
import type {SanityImageSource} from '@sanity/image-url/lib/types/types'

import {useRef, useState, useEffect, useCallback} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {SwiperRef} from 'swiper/react'
import {EffectFade, Autoplay} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'

import {urlFor} from '@/sanity/lib/image'
// import {useMediaQuery} from '@/lib/use-media-query'

import Image from 'next/image'
import {H2, P, SPAN} from '~/UI/Typography'
import {DetailsButton} from '~/UI/Button'

type BgImage = {
  id: number
  src: SanityImageSource | null
  alt: string | null
  opacity: number
}

export default function ProjectsModule({items}: {items: PROJECTS_QUERYResult}) {
  // const isDesktop = useMediaQuery('(min-width: 768px)')
  // const device = isDesktop ? 'desktop' : 'mobile'

  const swiperRef = useRef<SwiperRef | null>(null)
  const [bgImages, setBgImages] = useState<BgImage[]>([
    {
      id: 0,
      opacity: 1,
      src: items[0]?.image?.desktop || null,
      alt: items[0]?.image?.alt || null,
    },
    {
      id: 1,
      opacity: 0,
      src: items[0]?.image?.desktop || null,
      alt: items[0]?.image?.alt || null,
    },
  ])
  const [activeImageId, setActiveImageId] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const resetInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    setProgress(0)
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0
        }
        return prev + 100 / (4000 / 100) // 4000ms is Autoplay delay
      })
    }, 100)
  }, [])

  useEffect(() => {
    resetInterval()
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [activeIndex, resetInterval])

  useEffect(() => {
    if (progress >= 100 && swiperRef.current) {
      swiperRef.current.swiper.slideNext()
    }
  }, [progress])

  const handleSlideChange = useCallback(() => {
    if (swiperRef.current?.swiper) {
      const realIndex = swiperRef.current.swiper.realIndex
      const nextImageId = activeImageId === 0 ? 1 : 0
      const currentImage = items[realIndex]?.image?.desktop || null

      setBgImages((prev) => prev.map((img): BgImage => (img.id === nextImageId ? {...img, src: currentImage, opacity: 1} : {...img, opacity: 0})))

      setActiveImageId(nextImageId)
      setActiveIndex(realIndex)
      resetInterval()
    }
  }, [activeImageId, items, resetInterval])

  return (
    <section data-section="projects-index" className="relative grid place-items-center h-[80vh] overflow-hidden">
      <div className="absolute inset-0 w-full h-full -z-10">
        {bgImages.map((img) => (
          <div key={img.id} className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out" style={{opacity: img.opacity}}>
            {img.src && <Image priority quality={100} className="object-cover w-full h-full" src={urlFor(img.src).url()} width="2000" height="1000" alt={img.alt ? img.alt : ''} />}
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
        effect={'fade'}
        modules={[EffectFade, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onSlideChange={handleSlideChange}
      >
        {items.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-between px-14 py-14 sm:flex-col-reverse sm:px-4 sm:py-3 sm:gap-6 sm:pb-14 sm:w-auto sm:mx-3 bg-background">
              <div className="py-7 sm:py-0 space-y-7 sm:space-y-3">
                <SPAN className="font-bold text-gray">{`${index + 1}/${items.length}`}</SPAN>

                <H2 className="max-w-[37ch]">{project.naming}</H2>

                {project.description && (
                  <P animated={false} className="line-clamp-3 sm:line-clamp-4">
                    <span>{project.description.length > 150 ? `${project.description.substring(0, project.description.substring(0, 150).lastIndexOf(' '))}...` : project.description}</span>
                  </P>
                )}

                <DetailsButton href={`/projects/${project.slug?.current}`} text="Подробнее" />
              </div>

              <div className="flex flex-col items-center justify-between sm:grid sm:grid-cols-2">
                <Image className="object-contain w-36 sm:w-16" src={LogoImage} alt="" />
                <div className="flex justify-between w-full sm:justify-end sm:gap-6">
                  <ChevronLeft className="cursor-pointer s-14 sm:s-16 text-gray hover:text-red duration-200" strokeWidth={1.5} onClick={() => swiperRef.current?.swiper.slidePrev()} />
                  <ChevronRight className="cursor-pointer s-14 sm:s-16 text-gray hover:text-red duration-200" strokeWidth={1.5} onClick={() => swiperRef.current?.swiper.slideNext()} />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full px-3.5">
                <div className="flex p-1.5 gap-1.5 sm:gap-1">
                  {items.map((_, index) => (
                    <div key={index} className="flex-1 h-1.5 sm:h-1 bg-gray">
                      <div
                        className="h-full bg-red transition-all duration-100 ease-linear"
                        style={{
                          width: `${index === activeIndex ? progress : index < activeIndex ? 100 : 0}%`,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
