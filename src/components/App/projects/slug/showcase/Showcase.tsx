'use client'

import {cn} from '@/lib/utils'
import {useMediaQuery} from '@/lib/use-media-query'
import {useState, useEffect} from 'react'

import {TProject} from '@/app/api/projects/route'
import {containerStyles} from '~/Global/Container'
import AwardImage from '$/projects/award.png'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import Image from 'next/image'
import {H1, P, SPAN} from '~/UI/Typography'
import ResidentCard from '~~/projects/slug/showcase/ResidentCard'
import ResidentTabs from '~~/projects/slug/showcase/ResidentTabs'

const screenHeight = 'h-screen !h-svh'

function DeskShowcase({project}: {project: TProject}) {
  const [activeTab, setActiveTab] = useState<number | null>(null)
  const [activeAward, setActiveAward] = useState<{index: number | null; text: string | null}>({index: null, text: null})

  const combinedAwards = [...(project.awards ? (Array.isArray(project.awards) ? project.awards : [project.awards]).map((text) => ({image: AwardImage, text})) : []), ...Object.values(project.residents).flatMap((resident) => (resident.award ? [{image: AwardImage, text: resident.award}] : []))]

  useEffect(() => {
    if (project.awards) {
      const firstAward = Array.isArray(project.awards) ? project.awards[0] : project.awards
      setActiveAward({index: 0, text: firstAward})
    }
  }, [project.awards])

  const handleTabClick = (index: number) => {
    setActiveTab(index)

    const resident = Object.values(project.residents)[index]
    if (resident.award) {
      const projectAwardsCount = project.awards ? (Array.isArray(project.awards) ? project.awards.length : 1) : 0
      setActiveAward({index: index + projectAwardsCount, text: resident.award})
    } else {
      setActiveAward({index: null, text: null})
    }
  }

  const handleCloseCard = () => {
    setActiveTab(null)
    setActiveAward({index: null, text: null})
  }

  return (
    <section data-section="desk-showcase-project" className={`relative ${screenHeight}`}>
      <div className={`h-full pb-10 ${containerStyles.width}`}>
        <div className="flex items-end justify-between h-full">
          <div className="flex flex-col gap-1.5">
            {activeTab !== null && (
              <div className="flex gap-1.5">
                {Object.values(project.residents).map((resident, index) => {
                  return activeTab === index ? <ResidentCard key={index} resident={resident} isExtra={!!resident.extra_info} onClose={handleCloseCard} /> : null
                })}
              </div>
            )}

            <ResidentTabs project={project} activeTab={activeTab} handleTabClick={handleTabClick} />
          </div>

          {combinedAwards.length > 0 && (
            <div className="flex flex-col gap-1.5 items-end">
              {activeAward.text && (
                <div className="p-4 bg-background max-w-[45ch] xl:max-w-[40ch]">
                  <SPAN className="font-extralight">{activeAward.text}</SPAN>
                </div>
              )}

              <div className="flex gap-2.5 xl:gap-1.5 px-4 xl:px-2.5 py-3.5 w-fit bg-background">
                {combinedAwards.map((award, index) => (
                  <div key={index} className={cn('cursor-pointer duration-300', activeAward.index === index && 'scale-[1.2]')} onClick={() => setActiveAward({index, text: award.text})}>
                    <Image unoptimized className="object-contain xl:h-16" src={award.image} alt={award.text} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Image className="absolute inset-0 object-cover w-full h-full -z-20" src={project.image} alt="" />
    </section>
  )
}

function MobileAwards({project}: {project: TProject}) {
  const combinedAwards = [...(project.awards ? (Array.isArray(project.awards) ? project.awards : [project.awards]).map((text) => ({image: AwardImage, text})) : []), ...Object.values(project.residents).flatMap((resident) => (resident.award ? [{image: AwardImage, text: resident.award}] : []))]

  return (
    <section data-section="mob-awards-project" className="relative mb-6 space-y-5">
      <Image className="object-cover w-full h-[40vh]" src={project.mobile_image} alt="" />

      <div className={`space-y-3 ${containerStyles.width}`}>
        <H1 className="sm:text-[33px]">{project.project}</H1>

        {combinedAwards.length > 0 && (
          <div className="overflow-hidden pb-4">
            <Swiper data-slider="mobile-awards" className="flex w-full gap-3" spaceBetween={30} pagination={{clickable: true}} modules={[Pagination]}>
              {combinedAwards.map((award, index) => (
                <SwiperSlide key={index}>
                  <div className="flex items-center gap-6 px-3 pl-4 py-2.5 border border-gray-light">
                    <Image quality={100} className="object-contain s-14" src={award.image} alt={award.text} />
                    <P className="sm:text-xs">{award.text}</P>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  )
}

export default function Showcase({project}: {project: TProject}) {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return <>{isDesktop ? <DeskShowcase project={project} /> : <MobileAwards project={project} />}</>
}
