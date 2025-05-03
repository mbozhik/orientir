import type {TypeParams} from '-/sanity.types'

import {cn} from '@/lib/utils'
import {H1, P} from '~/UI/Typography'

export default function Specs({heading = 'Инженерные мощности', data}: {heading?: string; data: TypeParams | null | undefined}) {
  return (
    <section data-section="specs-project" className="space-y-10">
      <H1 className="sm:text-[33px]">{heading}</H1>

      <div className="grid grid-cols-2 sm:grid-cols-1 gap-y-10 xl:gap-y-8 px-44 xl:px-24 sm:px-0">
        {data?.map((spec, index) => (
          <div key={index} className="space-y-10 xl:space-y-7 sm:space-y-5">
            <div className="flex flex-col justify-between gap-14 xl:gap-10 sm:gap-8 px-10 xl:px-7 sm:px-5 border-l-[1px] border-gray">
              <H1 className="text-blue sm:!text-3xl !leading-[1] sm:!leading-[1.1]">{spec.param}</H1>
              <P className={cn('mr-24 line-clamp-3', index === 3 && 'mr-0')}>{spec.value}</P>
            </div>

            {[0, 1, 2].includes(index) && <div className={cn('w-[90%] mx-auto border-gray border-b-[1px]', index === 2 && 'hidden sm:block')}></div>}
          </div>
        ))}
      </div>
    </section>
  )
}
