import {TProjectExtra} from '@/app/api/projects/route'
import Text from '~/UI/Text'

export default function MapPoint({project}: {project: TProjectExtra}) {
  return (
    <section data-section="map_point-project" className="relative overflow-hidden w-full sm:space-y-5 h-[75vh] sm:h-auto bg-gray-light">
      <div className="flex flex-col gap-4 absolute sm:static top-10 left-8 xl:top-8 xl:left-8 sm:p-3 sm:pb-0">
        <div className="px-5 py-4 sm:px-3 sm:py-2 bg-background">
          <Text type="sub" className="max-w-[50ch] sm:text-sm sm:leading-[1.2]" text={project.location.address} />
        </div>

        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
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

      <iframe className="pointer-events-none w-full h-full sm:h-[45vh]" src={project.location.widget} allowFullScreen={true}></iframe>
    </section>
  )
}
