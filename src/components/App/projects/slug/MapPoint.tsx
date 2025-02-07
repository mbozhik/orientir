import {TProjectExtra} from '@/app/api/projects/route'

import Text from '~/UI/Text'
import {Map} from '~/UI/Map'

export default function MapPoint({project}: {project: TProjectExtra}) {
  return (
    <section data-section="map_point-project" className="relative overflow-hidden w-full sm:space-y-5 h-[75vh] sm:h-auto bg-gray-light">
      <div className="h-fit z-20 flex flex-col gap-4 absolute sm:static inset-6 xl:inset-4 sm:p-3 sm:pb-0">
        <div className="px-5 py-4 sm:px-3 sm:py-2 bg-background w-fit">
          <Text type="sub" className="max-w-[50ch] sm:text-sm sm:leading-[1.2]" text={project.location.address} />
        </div>

        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 w-fit">
          {project.location.availability.map((item, index) => (
            <div key={index} className="flex flex-col bg-background flex-1">
              <div className="h-2 sm:h-1.5 bg-red"></div>
              <div className="inline-flex text-nowrap gap-1 px-3.5 py-4 sm:px-3 sm:py-2">
                <Text type="sub" className="max-w-[50ch] sm:text-sm sm:leading-[1.2] font-bold" text={item.gap} />
                <Text type="sub" className="max-w-[50ch] sm:text-sm sm:leading-[1.2]" text={item.benchmark} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Map coordinates={project.location.coordinates} />
    </section>
  )
}
