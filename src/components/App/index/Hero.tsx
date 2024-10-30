import HeroImage from '$/index/background.jpg'

import {cn} from '@/lib/utils'
import {containerStyles} from '@/components/Global/Container'

import Image from 'next/image'
import Heading from '~/UI/Heading'

const blockHeight = '!h-[87svh] h-[87vh] sm:!h-[90vh]'

export default function Hero({className}: {className?: string}) {
  return (
    <section data-section="hero-index" className={cn('sm:!mx-0', containerStyles.width, className)}>
      <div className={`relative w-full ${blockHeight}`}>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-foreground/5 via-foreground/20 to-foreground/30"></div>
        <Image quality={100} className="object-cover w-full h-full" src={HeroImage} alt="Здание Ориентир" />

        <div className="absolute left-20 bottom-20 xl:left-14 xl:bottom-14 sm:left-2 sm:bottom-2">
          <Heading type="h1" className="text-background max-w-[30ch] sm:max-w-none" text="ОРИЕНТИР&nbsp;&mdash; девелопер полного цикла в&nbsp;сфере складской и&nbsp;индустриальной недвижимости." />
        </div>
      </div>
    </section>
  )
}
