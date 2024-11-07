'use client'

import {cn} from '@/lib/utils'
import {useState, useEffect} from 'react'
import {isMobile} from '@bozzhik/is-mobile'

import {TProject} from '@/app/api/projects/route'
import {containerStyles} from '~/Global/Container'

import AwardImage from '$/projects/award.png'

import Image from 'next/image'
import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import {ResidentCard} from '~~/projects/slug/ShowcaseResident'

const screenHeight = 'h-screen !h-svh'

function DeskShowcase({project}: {project: TProject}) {
  const [activeTab, setActiveTab] = useState<number | null>(null)
  const [activeAward, setActiveAward] = useState<{index: number | null; text: string | null}>({index: null, text: null})

  const combinedAwards = [...(project.award ? [{image: AwardImage, text: project.award}] : []), ...Object.values(project.residents).flatMap((resident) => (resident.award ? [{image: AwardImage, text: resident.award}] : []))]

  useEffect(() => {
    if (project.award) {
      setActiveAward({index: 0, text: project.award})
    }
  }, [project.award])

  const handleTabClick = (index: number) => {
    setActiveTab(index)

    const resident = Object.values(project.residents)[index]
    if (resident.award) {
      setActiveAward({index: index + (project.award ? 1 : 0), text: resident.award})
    } else {
      setActiveAward({index: null, text: null})
    }
  }

  return (
    <section data-section="desk-showcase-project" className={`relative ${screenHeight}`}>
      <div className={`h-full pb-10 ${containerStyles.width}`}>
        <div className="flex items-end justify-between h-full">
          <div className="flex flex-col gap-1.5">
            {activeTab !== null && (
              <div className="flex gap-1.5">
                {Object.values(project.residents).map((resident, index) => {
                  return activeTab === index ? <ResidentCard key={index} resident={resident} isExtra={!!resident.extra_info} /> : null
                })}
              </div>
            )}

            <div className="flex flex-wrap max-w-[55vw] gap-1.5">
              {Object.values(project.residents).map(({name, status, type, area}, index) => (
                <div onClick={() => handleTabClick(index)} className={cn('p-2.5 flex flex-col gap-1.5 duration-200 cursor-pointer', activeTab === index ? 'bg-red text-background' : 'bg-background hover:bg-blue group hover:text-background')} key={index}>
                  <div className={cn('flex justify-between gap-16 duration-200 text-gray group-hover:text-background font-extralight', activeTab === index && 'text-background')}>
                    <Text type="sub" className="lowercase" text={status === 'Свободные земельные участки' ? 'Свободные ЗУ' : status} />
                    {type && <Text type="sub" className="self-end" text={type} />}
                  </div>

                  <div className="flex justify-between gap-16">
                    <Text type="h4" className="font-bold leading-none" text={name} />
                    <Text type="sub" className="self-end font-bold" text={`${area} м2`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {combinedAwards.length > 0 && (
            <div className="flex flex-col gap-1.5 items-end">
              {activeAward.text && (
                <div className="p-4 bg-background">
                  <Text type="sub" className="max-w-[45ch] xl:max-w-[40ch] font-extralight" text={activeAward.text} />
                </div>
              )}

              <div className="flex gap-2.5 px-4 py-3.5 w-fit bg-background">
                {combinedAwards.map((award, index) => (
                  <div key={index} className={cn('cursor-pointer duration-300', activeAward.index === index && 'scale-[1.2]')} onClick={() => setActiveAward({index, text: award.text})}>
                    <Image quality={100} src={award.image} alt={award.text} />
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

function MobileShowcase({project}: {project: TProject}) {
  const combinedAwards = [...(project.award ? [{image: AwardImage, text: project.award}] : []), ...Object.values(project.residents).flatMap((resident) => (resident.award ? [{image: AwardImage, text: resident.award}] : []))]

  return (
    <section data-section="desk-showcase-project" className="relative space-y-5">
      <Image className="object-cover w-full h-[40vh]" src={project.image} alt="" />

      <div className={`space-y-3 ${containerStyles.width}`}>
        <Heading type="h1" className="sm:text-[33px]" text={project.project} />

        {combinedAwards.length > 0 && (
          <div className="p-3 space-y-3 border border-gray-light">
            <Heading type="h2" className="sm:text-2xl text-gray" text="Награды" />

            <div className="flex flex-col gap-3">
              {combinedAwards.map((award, index) => (
                <div key={index} className="flex gap-5">
                  <Image quality={100} className="object-contain s-14" src={award.image} alt={award.text} />
                  <Text type="p" className="sm:text-xs" text={award.text} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default function Showcase({project}: {project: TProject}) {
  return <>{!isMobile ? <DeskShowcase project={project} /> : <MobileShowcase project={project} />}</>
}
