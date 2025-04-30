import type {ContentMini} from '-/sanity.types'
import {BLOCK_WIDTH} from '~~/news/slug/ContentNews'

import {cn} from '@/lib/utils'
import {urlFor} from '@/sanity/lib/image'

import Image from 'next/image'
import {PortableBlock} from '~/UI/PortableBlock'

export default function ContentMiniBlock({block, className}: {block: ContentMini; className?: string}) {
  return (
    <section data-block="content-mini-block" className={cn('grid grid-cols-20 sm:grid-cols-1 sm:gap-y-10', BLOCK_WIDTH, 'sm:mx-3', className)}>
      <div className="col-span-8 sm:gap-7">
        <Image quality={100} className={cn('object-cover w-full')} src={block.image ? urlFor(block.image).url() : ''} width={1000} height={1000} alt={block.image?.alt || ''} />
      </div>

      <div className="col-span-2 sm:hidden"></div>

      <div className="col-span-10">
        <PortableBlock className="xl:max-w-[50ch]" value={block.content} />
      </div>
    </section>
  )
}
