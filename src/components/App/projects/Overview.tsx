'use client'

import {cn} from '@/lib/utils'
import {useState} from 'react'
import {TProject, ResidentStatus} from '@/app/api/projects/route'

import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import {ArrowDownRight} from '~/UI/Icons'
import DetailsButton from '~/UI/DetailsButton'

const projectStates: (ResidentStatus | 'Все')[] = ['Все', 'Завершен', 'В процессе', 'Свободные земельные участки']

export default function Overview({items: projects}: {items: TProject[]}) {
  const [activeTab, setActiveTab] = useState<number | null>(null)
  const [selectedState, setSelectedState] = useState<ResidentStatus | 'Все'>('Все')

  const residentCounts = projectStates.map((state) => {
    if (state === 'Все') {
      return projects.reduce((total, project) => total + Object.values(project.residents).length, 0)
    }

    return projects.reduce((count, project) => {
      const residentsInState = Object.values(project.residents).filter((resident) => resident.status === state).length
      return count + residentsInState
    }, 0)
  })

  const filteredProjects = selectedState === 'Все' ? projects : projects.filter((project) => Object.values(project.residents).some((resident) => resident.status === selectedState))

  return (
    <section data-section="overview-projects" className="pb-20 space-y-3 sm:space-y-7">
      <div className="flex gap-8 sm:flex-wrap sm:gap-y-2">
        {projectStates.map((state, index) => (
          <div className={cn('flex gap-1 cursor-pointer', selectedState === state ? 'text-red' : 'text-gray')} onClick={() => setSelectedState(state)} key={index}>
            <Text type="p" text={state} />
            <span className="text-xs font-bold">({residentCounts[index]})</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:flex sm:flex-col-reverse gap-6">
        <div className="space-y-2.5">
          {filteredProjects.map((project, index) => (
            <div className="space-y-4" key={project.id}>
              <div className={cn('flex items-center justify-between px-6 py-5 text-background cursor-pointer hover:bg-red duration-200 group', activeTab === index ? 'bg-red' : 'bg-blue')} onClick={() => setActiveTab(activeTab === index ? null : index)}>
                <Heading type="h2" text={project.division} />
                <ArrowDownRight className={cn('scale-[1.3] xl:scale-100 fill-background group-hover:rotate-45 duration-200', activeTab === index && 'rotate-45')} />
              </div>

              {activeTab === index && (
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-8 sm:gap-10 pb-5">
                  <div className="flex flex-col justify-between sm:gap-5">
                    <Text type="h4" text={project.description} />
                    <DetailsButton href={`/projects/${project.id}`} text="Подробнее" />
                  </div>

                  <div className="mt-1 space-y-4">
                    <Heading type="h3" text="Резиденты:" />
                    <div className="space-y-1">
                      {Object.values(project.residents).map(({name, status, type, area}) => (
                        <div key={name} className="space-y-1.5 py-1.5 border-b-[1px] border-transparent hover:border-red cursor-pointer">
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

        <div className="relative overflow-hidden w-full bg-blue/25 aspect-[10/8]">
          <iframe className="w-full h-full" src="https://yandex.ru/map-widget/v1/?ll=37.619406%2C55.749228&mode=poi&poi%5Bpoint%5D=37.618879%2C55.751426&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1023322799&z=16.8" allowFullScreen={true}></iframe>
        </div>
      </div>
    </section>
  )
}
