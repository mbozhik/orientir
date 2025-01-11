'use client'

import {cn} from '@/lib/utils'
import {useState} from 'react'
import {TProject, ResidentStatus} from '@/app/api/projects/route'

import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import {DetailsButton} from '~/UI/Button'
import YandexMap from '~/UI/Map'

const projectStates: (ResidentStatus | 'Все')[] = ['Все', 'Завершен', 'В процессе', 'Свободные земельные участки']

export function ArrowDownRight({className}: {className?: string}) {
  return (
    <svg className={className} width="39" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m22.96 31.84-1.98-1.98 12.463-12.464H.597v-2.792h32.846L20.98 2.141 22.96.16 38.799 16l-15.84 15.838Z" />
    </svg>
  )
}

export default function Overview({items: projects}: {items: TProject[]}) {
  const [activeTab, setActiveTab] = useState<number | null>(0)
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
    <section data-section="overview-projects" className="pb-20 space-y-3 sm:space-y-5">
      <div className="flex gap-8 sm:flex-wrap sm:gap-x-4 sm:gap-y-1.5">
        {projectStates.map((state, index) => (
          <div className={cn('flex gap-1 cursor-pointer', selectedState === state ? 'text-red' : 'text-gray')} onClick={() => setSelectedState(state)} key={index}>
            <Text type="p" text={state} />
            <span className="text-xs font-bold">({residentCounts[index]})</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6 sm:flex sm:flex-col-reverse">
        <div className="space-y-2.5 xl:space-y-2 sm:space-y-1.5">
          {filteredProjects.map((project, index) => {
            const filteredResidents = selectedState === 'Все' ? Object.values(project.residents) : Object.values(project.residents).filter((resident) => resident.status === selectedState)

            return (
              <div className="space-y-4" key={project.slug}>
                <div className={cn('flex items-center justify-between px-6 py-5 xl:py-4 sm:px-4 text-foreground cursor-pointer border-[2px] hover:bg-red hover:text-background hover:border-red  border-foreground duration-300 group', activeTab === index ? 'bg-red text-background border-red' : 'bg-transparent')} onClick={() => setActiveTab(activeTab === index ? null : index)}>
                  <Heading type="h2" className="xl:text-3xl sm:text-[28px]" text={project.project} />
                  <ArrowDownRight className={cn('scale-[1.3] xl:scale-[0.9] fill-foreground group-hover:rotate-45 group-hover:fill-background duration-300', activeTab === index && 'rotate-45 fill-background')} />
                </div>

                {activeTab === index && (
                  <div className="grid grid-cols-2 gap-8 pb-5 sm:pb-3 sm:grid-cols-1 sm:gap-10">
                    <div className="flex flex-col justify-between sm:gap-5">
                      <Text type="h4" text={project.description} />
                      <DetailsButton className="hover:text-red" href={`/projects/${project.slug}`} text="Подробнее" />
                    </div>

                    <div className="mt-1 space-y-4 xl:space-y-3 sm:space-y-2">
                      <Heading type="h3" className="xl:text-[26px]" text="Резиденты:" />
                      <div className="space-y-1">
                        {filteredResidents.length === 0 ? (
                          <Text type="h4" text="Нет резидентов для данного фильтра." />
                        ) : (
                          filteredResidents.map(({name, status, type, area}, index) => (
                            <div key={index} className="space-y-1.5 py-1.5 sm:py-0 border-b-2 duration-200 border-transparent hover:border-red cursor-pointer">
                              <div className="flex justify-between">
                                <Text type="sub" className="lowercase text-gray font-extralight" text={status === 'Свободные земельные участки' ? 'Свободные ЗУ' : status} />
                                {type && <Text type="sub" className="self-end opacity-0 text-gray font-extralight" text={type} />}
                              </div>

                              <div className="flex justify-between">
                                <Text type="h4" className="font-bold" text={name} />
                                <Text type="sub" className="self-end font-bold" text={`${area} м2`} />
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <YandexMap />
      </div>
    </section>
  )
}
