import QuoteImage from '$/quote.svg'

import type {Quote} from '-/sanity.types'
import {BLOCK_WIDTH} from '~~/news/slug/ContentNews'

import {cn} from '@/lib/utils'
import {urlFor} from '@/sanity/lib/image'

import Image from 'next/image'
import {H2, P} from '~/UI/Typography'

export default function QuoteBlock({block}: {block: Quote}) {
  return (
    <section data-block="quote-block" className={cn('grid grid-cols-10 pt-16 pb-8 xl:pb-12 sm:pb-8', 'sm:flex sm:flex-col-reverse sm:gap-10', 'border-t-[1px] border-b-[1px] border-gray-light', BLOCK_WIDTH)} data-section="quote-block">
      <div className="flex items-end col-span-4 gap-3">
        <Image quality={100} className="object-cover s-48 xl:s-32" src={block.author?.image ? urlFor(block.author?.image).url() : ''} width={1000} height={1000} alt={block.author?.name || ''} />

        <div className="flex flex-col gap-1.5 sm:gap-8 sm:justify-between">
          <P className="font-bold !leading-none sm:text-lg">{block.author?.name}</P>
          <P className="max-w-[25ch] xl:!leading-[1.1] sm:text-lg">{block.author?.position}</P>
        </div>
      </div>

      <div className="relative col-span-6">
        <H2 className="sm:text-[22px] sm:leading-[1.1]">{block.content}</H2>

        <Image className="absolute -top-7 -left-5 sm:-inset-3 s-24 sm:s-20 -z-20" src={QuoteImage} alt="" />
      </div>
    </section>
  )
}
