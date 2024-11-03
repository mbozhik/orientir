'use client'

import {cn} from '@/lib/utils'
import {useState} from 'react'

import {TProject} from '@/app/api/projects/route'
import {containerStyles} from '~/Global/Container'

import {X} from 'lucide-react'
import Image from 'next/image'
import Heading from '~/UI/Heading'
import Text from '~/UI/Text'

const screenHeight = 'h-screen !h-svh'

export default function Showcase({project}: {project: TProject}) {
  const [activeTab, setActiveTab] = useState<number | null>(null)

  const residentsGridConfig = {
    base: 'grid-cols-10',
    name: 'col-span-5',
    info: 'col-span-4',
    close: 'col-span-1',
  }

  return (
    <section data-section="showcase-project" className={`relative ${screenHeight}`}>
      <div className={`h-full pb-10 ${containerStyles.width}`}>
        <div className="flex items-end h-full">
          <div className="flex flex-col gap-1.5">
            {activeTab !== null && (
              <div className="flex gap-1.5">
                {Object.values(project.residents).map(
                  ({name, status, type, area, image}, index) =>
                    activeTab === index && (
                      <div className="flex gap-3 p-2.5 max-w-[45vw] bg-background" key={index}>
                        <div className="w-[30vw] bg-background aspect-square">
                          <Image className="object-cover s-full" src={image} alt={name} />
                        </div>

                        <div className="flex flex-col gap-7">
                          <div className={`grid ${residentsGridConfig.base}`}>
                            <div className={`pt-1.5 flex flex-col justify-between gap-1 ${residentsGridConfig.name}`}>
                              <Text type="sub" className="text-gray font-extralight" text={status === 'Свободные земельные участки' ? 'Свободные ЗУ' : status} />
                              <Heading type="h3" text={name} />
                            </div>

                            <div className={`pt-1.5 flex flex-col justify-between text-gray font-extralight ${residentsGridConfig.info}`}>
                              {type && <Text type="sub" text={type === 'ФФФ' ? 'Фулфилмент - фабрика' : type} />}
                              <Text type="sub" text={`${area} м2`} />
                            </div>

                            <X className={`cursor-pointer justify-self-end hover:text-red hover:scale-[1.1] duration-200 ${residentsGridConfig.close}`} onClick={() => setActiveTab(null)} />
                          </div>

                          <Text type="p" text={project.description} />
                        </div>
                      </div>
                    ),
                )}
              </div>
            )}

            <div className="flex gap-1.5">
              {Object.values(project.residents).map(({name, status, type, area}, index) => (
                <div className={cn('p-2.5 flex flex-col gap-1.5 duration-200 cursor-pointer', activeTab === index ? 'bg-red text-background' : 'bg-background hover:bg-blue group hover:text-background')} key={index} onClick={() => setActiveTab(index)}>
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
        </div>
      </div>

      <Image className="absolute inset-0 object-cover w-full h-full -z-20" src={project.image} alt="" />
    </section>
  )
}
