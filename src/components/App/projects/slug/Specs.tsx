import {cn} from '@/lib/utils'
import {H1, P} from '~/UI/Typography'

type Props = {
  heading: string
  caption: string
}

export default function Specs({heading = 'Характеристики', data}: {heading?: string; data: Props[]}) {
  return (
    <section data-section="specs-project" className="space-y-10">
      <H1 className="sm:text-[33px]">{heading}</H1>

      <div className="grid grid-cols-2 sm:grid-cols-1 gap-y-10 xl:gap-y-8 px-44 xl:px-24 sm:px-0">
        {data.map((spec, index) => (
          <div key={index} className="space-y-10 xl:space-y-7 sm:space-y-5">
            <div className="flex flex-col justify-between gap-14 xl:gap-10 sm:gap-8 px-10 xl:px-7 sm:px-5 border-l-[1px] border-gray">
              <H1 className="text-blue">{spec.heading}</H1>
              <P className="max-w-[35ch] line-clamp-3">{spec.caption}</P>
            </div>

            {[0, 1, 2].includes(index) && <div className={cn('w-[90%] mx-auto border-gray border-b-[1px]', index === 2 && 'hidden sm:block')}></div>}
          </div>
        ))}
      </div>
    </section>
  )
}
