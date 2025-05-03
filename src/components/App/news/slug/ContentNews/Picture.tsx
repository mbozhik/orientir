import type {Picture} from '-/sanity.types'

import {urlFor} from '@/sanity/lib/image'

import Image from 'next/image'
import {SPAN} from '~/UI/Typography'

export default function PictureBlock({block}: {block: Picture}) {
  return (
    <section data-block="quote-block" className="relative">
      {block.image && <Image quality={100} className="object-cover w-full sm:h-[35vh] h-[80vh]" width={2000} height={100} src={urlFor(block.image).url()} alt={block.image.alt || ''} />}

      {block.caption && (
        <div className="absolute z-20 flex flex-col s-fit bottom-4 left-5 sm:inset-2 bg-background">
          <div className="w-full h-2 sm:h-1.5 bg-blue"></div>

          <div className="px-5 py-4 sm:px-3 sm:py-2">
            <SPAN className="max-w-[50ch] sm:text-sm sm:leading-[1.2]">{block.caption}</SPAN>
          </div>
        </div>
      )}
    </section>
  )
}
