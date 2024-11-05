import {TProjectExtra} from '@/app/api/projects/route'
import Text from '~/UI/Text'

export default function MapPoint({project}: {project: TProjectExtra}) {
  return (
    <section data-section="map_point-project" className="relative overflow-hidden w-full h-[60vh] xl:h-[50vh] sm:h-[40vh] bg-gray">
      <div className="absolute flex flex-col s-fit top-10 left-20 sm:inset-4 bg-background">
        <div className="w-full h-2 bg-red"></div>
        <div className="px-5 py-4 sm:px-3 sm:py-2">
          <Text type="sub" className="max-w-[50ch] sm:text-sm sm:leading-[1.2]" text={project.location.address} />
        </div>
      </div>

      <iframe className="w-full h-full" src={project.location.widget} allowFullScreen={true}></iframe>
    </section>
  )
}
