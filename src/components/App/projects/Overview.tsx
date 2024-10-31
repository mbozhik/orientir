'use client'

import {cn} from '@/lib/utils'
import {useState} from 'react'
import {TProject} from '@/app/api/projects/route'

import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import {ArrowDownRight} from '~/UI/Icons'
import DetailsButton from '~/UI/DetailsButton'

const projectStates = ['Все', 'Завершен', 'В процессе', 'Свободные земельные участки']

export default function Overview({items: projects}: {items: TProject[]}) {
  const [activeTab, setActiveTab] = useState<number | null>(null)

  return (
    <section data-section="overview-projects" className="space-y-3">
      <div className="flex gap-8">
        {projectStates.map((state, index) => (
          <div className="flex gap-1" key={state}>
            <Text type="p" className="cursor-pointer" text={state} />
            <span className="text-xs font-bold">({index + 10})</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2.5">
          {projects.map((project, index) => (
            <div className="space-y-4" key={project.id}>
              <div className={cn('flex items-center justify-between px-6 py-5 text-background cursor-pointer hover:bg-red duration-200 group', activeTab === index ? 'bg-red' : 'bg-blue')} onClick={() => setActiveTab(index)}>
                <Heading type="h2" text={project.division} />
                <ArrowDownRight className={cn('scale-[1.3] fill-background group-hover:rotate-45 duration-200', activeTab === index && 'rotate-45')} />
              </div>

              {activeTab === index && (
                <div className="grid grid-cols-2 gap-8 pb-5">
                  <div className="flex flex-col justify-between">
                    <Text type="h4" text={project.description} />
                    <DetailsButton href={`/projects/${project.id}`} text="Подробнее" />
                  </div>

                  <div className="mt-1 space-y-4">
                    <Heading type="h3" text="Резиденты:" />

                    <div className="space-y-1">
                      {Object.values(project.residents).map(({name, status, type, area}) => (
                        <div className="space-y-1.5 py-1.5 border-b-[1px] border-transparent hover:border-red cursor-pointer" key={name}>
                          <div className="flex justify-between">
                            <Text type="sub" className="text-gray font-extralight" text={status} />
                            {type && <Text type="sub" className="font-bold" text={type} />}
                          </div>

                          <div className="flex justify-between">
                            <Text type="h4" className="font-bold" text={name} />
                            <Text type="sub" className="text-gray font-extralight" text={`${area} м2`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="w-full bg-blue/25 aspect-[10/8]"></div>
      </div>
    </section>
  )
}
