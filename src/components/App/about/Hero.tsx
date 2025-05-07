import type {PAGES_ITEM_QUERYResult} from '-/sanity.types'

import {urlFor} from '@/sanity/lib/image'

import Image from 'next/image'
import {H1, H2} from '~/UI/Typography'

const blockHeight = 'h-screen !h-svh'

export default function Hero({page}: {page: PAGES_ITEM_QUERYResult}) {
  return (
    <section data-section="hero-about" className={`relative w-full ${blockHeight}`}>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-foreground/0 to-foreground/30 xl:to-foreground/50"></div>
      {page?.hero?.image && <Image priority={true} quality={100} className="object-cover w-full h-full" src={urlFor(page?.hero?.image).url()} width={2000} height={100} alt="" />}

      <div className="absolute bottom-0 left-0 w-full text-background">
        <div className="flex justify-between px-24 sm:flex-col sm:gap-3 xl:px-16 sm:px-3 pb-14 sm:pb-5">
          <H1 className="xl:text-5xl sm:text-[28px] sm:leading-[1.2]">О компании</H1>

          <H2 className="max-w-[40ch] xl:text-3xl xl:leading-[1.15] sm:text-lg sm:leading-[1.2] sm:font-normal">{page?.hero?.heading}</H2>
        </div>
      </div>
    </section>
  )
}
