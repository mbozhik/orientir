import type {PAGES_ITEM_QUERYResult} from '-/sanity.types'
import {getDirections} from '@/sanity/lib/requests'

import {urlFor} from '@/sanity/lib/image'

import Image from 'next/image'
import {H1, H4} from '~/UI/Typography'
import {ExpandButton} from '~/UI/Button'
import DirectionsModule from '~/App/index/DirectionsModule'

export default async function Directions({page}: {page: PAGES_ITEM_QUERYResult}) {
  const directions = await getDirections()

  return (
    <section data-section="directions-index" className="space-y-20 sm:space-y-7">
      <div className="grid grid-cols-2 sm:grid-cols-1 sm:gap-3">
        <H1>{page?.indexDirections?.heading}</H1>

        <div className="flex gap-10">
          <H4>{page?.indexDirections?.caption}</H4>

          <ExpandButton href="/directions" view="desktop" text="Подробнее" />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-1 sm:gap-5">
        {page?.indexDirections?.image && <Image quality={100} className="w-[25vw] xl:w-[35vw] sm:w-full sm:h-[45vh] aspect-[9/10] object-cover sm:object-bottom" src={urlFor(page?.indexDirections?.image).url()} width={1000} height={1000} alt="" />}

        <DirectionsModule directions={directions} />
      </div>

      <ExpandButton href="/directions" view="mobile" text="Подробнее" />
    </section>
  )
}
