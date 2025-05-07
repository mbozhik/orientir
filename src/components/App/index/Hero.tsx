import type {PAGES_ITEM_QUERYResult} from '-/sanity.types'

import {cn} from '@/lib/utils'
import {urlFor} from '@/sanity/lib/image'
import {containerStyles} from '~/Global/Container'

import Image from 'next/image'
import {H1} from '~/UI/Typography'

const blockHeight = 'h-[87svh] h-[87vh] sm:h-screen sm:!h-svh'

export default function Hero({page, className}: {page: PAGES_ITEM_QUERYResult; className?: string}) {
  return (
    <section data-section="hero-index" className={cn('sm:!mx-0 sm:pt-0', containerStyles.width, className)}>
      <div className={`relative w-full ${blockHeight}`}>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-foreground/10 via-foreground/20 to-foreground/50"></div>
        {page?.hero?.image && <Image priority={true} quality={100} className="object-cover w-full h-full" src={urlFor(page?.hero?.image).url()} width={2000} height={100} alt="" />}

        <div className="absolute left-20 bottom-20 xl:left-14 xl:bottom-14 sm:left-2 sm:bottom-2">
          <H1 className="xl:text-5xl sm:text-[28px] sm:leading-[1.2] text-background max-w-[30ch] sm:max-w-none">{page?.hero?.heading}</H1>
        </div>
      </div>
    </section>
  )
}
