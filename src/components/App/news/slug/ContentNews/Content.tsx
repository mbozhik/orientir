import type {Content} from '-/sanity.types'
import {BLOCK_WIDTH} from '~~/news/slug/ContentNews'

import {cn} from '@/lib/utils'
import {urlFor} from '@/sanity/lib/image'

import Image from 'next/image'
import {PortableBlock} from '~/UI/PortableBlock'
import {H3} from '~/UI/Typography'

export default function Content({block, className}: {block: Content; className?: string}) {
  return (
    <section data-block="content-mini-block" className={cn('grid grid-cols-20 sm:grid-cols-1 sm:gap-y-10', BLOCK_WIDTH, 'sm:mx-3', className)}>
      <div className={cn('col-span-8 sm:gap-7', block.heading && 'flex flex-col justify-between')}>
        <H3>{block.heading}</H3>

        <Image quality={100} className={cn('object-cover w-full')} src={block.image ? urlFor(block.image).url() : ''} width={1000} height={1000} alt={block.image?.alt || ''} />
      </div>

      <div className="col-span-2 sm:hidden"></div>

      <div className="col-span-10">
        <PortableBlock className="xl:max-w-[50ch]" value={block.content} />
      </div>
    </section>
  )
}
