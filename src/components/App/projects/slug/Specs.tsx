import {TProjectExtra} from '@/app/api/projects/route'

import Heading from '~/UI/Heading'
import Text from '~/UI/Text'

export default function Specs({project}: {project: TProjectExtra}) {
  return (
    <section data-section="specs-project" className="space-y-10 sm:space-y-7">
      <Heading type="h1" className="mt-10 sm:mt-5 sm:text-[33px]" text="Характеристики" />

      <div className="grid grid-cols-2 sm:grid-cols-1 gap-y-10 xl:gap-y-8 px-44 xl:px-24 sm:px-0">
        {project.specifications.map((spec, index) => (
          <div key={index} className="space-y-10 xl:space-y-8">
            <div className="flex flex-col justify-between gap-24 xl:gap-16 sm:gap-12 px-10 xl:px-8 border-l-[1px] border-gray">
              <Heading type="h1" className="text-6xl xl:text-6xl sm:text-[42px] text-blue" text={spec.heading} />
              <Text type="h4" className="max-w-[25ch]" text={spec.caption} />
            </div>

            {[0, 1].includes(index) && <div className="w-[90%] mx-auto border-gray border-b-[1px]"></div>}
          </div>
        ))}
      </div>
    </section>
  )
}
