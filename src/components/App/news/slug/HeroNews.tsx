import type {NEWS_ITEM_QUERYResult} from '-/sanity.types'

import {H1, SPAN} from '~/UI/Typography'
import {DetailsButton} from '~/UI/Button'

export default function HeroNews({item, className}: {item: NEWS_ITEM_QUERYResult; className?: string}) {
  return (
    <section data-section="hero-news" className={className}>
      <div className="flex items-end justify-between mt-10 sm:flex-col sm:gap-5 sm:mt-5">
        <div className="space-y-5">
          <H1 className="max-w-[30ch]">{item?.heading}</H1>
          <SPAN className="font-bold text-gray">{item?.date}</SPAN>
        </div>

        <DetailsButton href={item?.source as string} target="_blank" text="Источник" />
      </div>
    </section>
  )
}
