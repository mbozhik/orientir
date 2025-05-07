import type {PAGES_ITEM_QUERYResult} from '-/sanity.types'

import {cn} from '@/lib/utils'
import {containerStyles} from '~/Global/Container'

import QuoteImage from '$/quote.svg'

import Image from 'next/image'
import {H2, P} from '~/UI/Typography'

export default function Quote({page}: {page: PAGES_ITEM_QUERYResult}) {
  return (
    <section data-section="quote-about" className="pb-16 xl:pb-12 sm:pb-8 border-b-[1px] border-gray-light">
      <div className={cn('relative flex flex-col gap-4 xl:gap-6 p-5 sm:p-0', containerStyles.min_width)}>
        <H2 className="max-w-[60ch] xl:max-w-[40ch] sm:leading-[1.2]">{page?.aboutQuote?.quote}</H2>

        <P className="self-end max-w-[60ch] tracking-tight sm:leading-[1.2]">{page?.aboutQuote?.caption}</P>

        <Image className="absolute inset-0 s-24 xl:s-20 sm:s-14 -z-20 sm:-top-3 sm:-left-2" src={QuoteImage} alt="" />
      </div>
    </section>
  )
}
