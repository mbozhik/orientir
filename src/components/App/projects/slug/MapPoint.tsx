import type {PROJECTS_ITEM_QUERYResult} from '-/sanity.types'

import {parseCoordinates, defaultCoordinates} from '@/lib/parse-coordinates'

import {SPAN} from '~/UI/Typography'
import {Map} from '~/UI/Map'

export default function MapPoint({project}: {project: PROJECTS_ITEM_QUERYResult}) {
  if (!project?.location) {
    return null
  }

  return (
    <section data-section="map_point-project" className="relative overflow-hidden w-full sm:space-y-5 h-[75vh] sm:h-auto bg-gray-light">
      <div className="absolute z-20 flex flex-col gap-4 h-fit sm:static inset-6 xl:inset-4 sm:p-3 sm:pb-0">
        <div className="px-5 py-4 sm:px-3 sm:py-2 bg-background w-fit">
          <SPAN className="max-w-[50ch] sm:text-sm sm:leading-[1.2]">{project.location.address}</SPAN>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap w-fit">
          {project.location.availability?.map((item, index) => (
            <div key={index} className="flex flex-col flex-1 bg-background">
              <div className="h-2 sm:h-1.5 bg-red"></div>
              <div className="inline-flex text-nowrap gap-1 px-3.5 py-4 sm:px-3 sm:py-2">
                <SPAN className="max-w-[50ch] sm:text-sm sm:leading-[1.2] font-bold">{item.param}</SPAN>
                <SPAN className="max-w-[50ch] sm:text-sm sm:leading-[1.2]">{item.value}</SPAN>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Map coordinates={parseCoordinates(project.location.coordinates) || defaultCoordinates} />
    </section>
  )
}
