'use client'

import type {PROJECTS_QUERYResult} from '-/sanity.types'
import {STATUS_VALUES, type ResidentStatus} from '@/sanity/schemaTypes/typeResident'

import {cn} from '@/lib/utils'
import {useState, useEffect} from 'react'
import {motion} from 'framer-motion'

import {parseCoordinates, defaultCoordinates} from '@/lib/parse-coordinates'

import {H2, H3, H4, P, SPAN} from '~/UI/Typography'
import {DetailsButton} from '~/UI/Button'
import {Map, type YMapCoordinates} from '~/UI/Map'
import {ArrowDownRight} from '~/UI/Icons'

const projectStates: (ResidentStatus | 'Все')[] = ['Все', 'completed', 'in_progress', 'free_lots']

export default function Overview({items: projects}: {items: PROJECTS_QUERYResult}) {
  const [activeTab, setActiveTab] = useState<number | null>(0)
  const [mapCoordinates, setMapCoordinates] = useState<YMapCoordinates>(parseCoordinates(projects[0]?.location?.coordinates) || defaultCoordinates)
  const [mapPlacemarks, setMapPlacemarks] = useState<YMapCoordinates[] | undefined>(undefined)
  const [selectedState, setSelectedState] = useState<ResidentStatus | 'Все'>('Все')

  const filteredProjects = selectedState === 'Все' ? projects : projects.filter((project) => project.residents?.some((resident) => resident.status === selectedState))

  useEffect(() => {
    if (activeTab === null) {
      if (filteredProjects.length > 0) {
        const allCoordinates = filteredProjects.map((project) => parseCoordinates(project.location?.coordinates)).filter((coords): coords is YMapCoordinates => coords !== null)

        setMapPlacemarks(allCoordinates)
        setMapCoordinates(defaultCoordinates)
      } else {
        setMapPlacemarks(undefined)
        setMapCoordinates(defaultCoordinates)
      }
    } else {
      const project = filteredProjects[activeTab]
      const projectCoords = parseCoordinates(project?.location?.coordinates)
      if (projectCoords) {
        setMapCoordinates(projectCoords)
        setMapPlacemarks(undefined)
      }
    }
  }, [activeTab, filteredProjects])

  const residentCounts = projectStates.map((state) => {
    if (state === 'Все') {
      return projects.reduce((total, project) => total + (project.residents?.length || 0), 0)
    }

    return projects.reduce((count, project) => {
      const residentsInState = project.residents?.filter((resident) => resident.status === state).length || 0
      return count + residentsInState
    }, 0)
  })

  return (
    <section data-section="overview-projects" className="pb-20 space-y-3 sm:space-y-5">
      <div className="flex gap-8 sm:flex-wrap sm:gap-x-4 sm:gap-y-1.5">
        {projectStates.map((state, index) => (
          <div key={index} className={cn('flex gap-1 cursor-pointer', selectedState === state ? 'text-red' : 'text-gray')} onClick={() => setSelectedState(state)}>
            <P>{state === 'Все' ? state : STATUS_VALUES[state as ResidentStatus]}</P>
            <span className="text-xs font-bold">({residentCounts[index]})</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6 sm:flex sm:flex-col">
        <div className="space-y-2.5 xl:space-y-2 sm:space-y-1.5">
          {filteredProjects.map((project, index) => {
            const filteredResidents = selectedState === 'Все' ? project.residents || [] : project.residents?.filter((resident) => resident.status === selectedState) || []

            return (
              <div className="space-y-4" key={project.slug?.current}>
                <div className={cn('flex items-center justify-between px-6 py-5 xl:py-4 sm:px-4 text-foreground cursor-pointer border-[2px] hover:bg-red hover:text-background hover:border-red border-foreground duration-300 group', activeTab === index ? 'bg-red text-background border-red' : 'bg-transparent')} onClick={() => setActiveTab(activeTab === index ? null : index)}>
                  <H2 className="xl:text-3xl sm:text-[28px]">{project.naming}</H2>

                  <ArrowDownRight className={cn('scale-[1.3] xl:scale-[0.9] fill-foreground group-hover:rotate-45 group-hover:fill-background duration-300', activeTab === index && 'rotate-45 fill-background')} />
                </div>

                {activeTab === index && (
                  <div className="grid grid-cols-2 gap-8 pb-5 sm:pb-3 sm:grid-cols-1 sm:gap-10">
                    <div className="flex flex-col justify-between gap-5">
                      <H4>{project.description}</H4>
                      <DetailsButton className="hover:text-red" href={`/projects/${project.slug?.current}`} text="Подробнее" />
                    </div>

                    <div className="mt-1 space-y-4 xl:space-y-3 sm:space-y-2">
                      <H3 className="xl:text-[26px]">Резиденты:</H3>

                      <div className="space-y-1">
                        {filteredResidents.length === 0 ? (
                          <H4>Нет резидентов для данного фильтра.</H4>
                        ) : (
                          filteredResidents.map(({naming, status, area}, index) => (
                            <div className="space-y-1.5 py-1.5 sm:py-0 border-b-2 duration-200 border-transparent hover:border-red cursor-pointer" key={index}>
                              <div className="flex justify-between">
                                <SPAN className="lowercase text-gray font-extralight">{status ? STATUS_VALUES[status] : status}</SPAN>

                                {/* {type && <SPAN className="self-end opacity-0 text-gray font-extralight">{type}</SPAN>} */}
                              </div>

                              <div className="flex justify-between">
                                <H4 className="font-bold">{naming}</H4>
                                {area && <SPAN className="self-end font-bold">{area} м2</SPAN>}
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

        <motion.div
          key={JSON.stringify({mapCoordinates, mapPlacemarks})}
          className="sticky sm:relative top-4 right-0 h-[80vh] w-[44vw] sm:size-auto z-50 overflow-hidden"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: {opacity: 0, scale: 0.95},
            visible: {opacity: 1, scale: 1, transition: {duration: 0.5, ease: 'easeInOut'}},
          }}
        >
          <Map coordinates={mapCoordinates} placemarks={mapPlacemarks} height="85vh" />
        </motion.div>
      </div>
    </section>
  )
}
