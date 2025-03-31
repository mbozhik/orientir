import HeroImage from '$/index/background.jpg'

import {cn} from '@/lib/utils'
import {containerStyles} from '~/Global/Container'

import Image from 'next/image'
import {H1} from '~/UI/Typography'

const blockHeight = 'h-[87svh] h-[87vh] sm:h-screen sm:!h-svh'

export default function Hero({className}: {className?: string}) {
  return (
    <section data-section="hero-index" className={cn('sm:!mx-0 sm:pt-0', containerStyles.width, className)}>
      <div className={`relative w-full ${blockHeight}`}>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-foreground/10 via-foreground/20 to-foreground/50"></div>
        <Image priority={true} quality={100} className="object-cover w-full h-full" src={HeroImage} alt="Здание Ориентир" />

        <div className="absolute left-20 bottom-20 xl:left-14 xl:bottom-14 sm:left-2 sm:bottom-2">
          <H1 className="xl:text-5xl sm:text-[28px] sm:leading-[1.2] text-background max-w-[30ch] sm:max-w-none">ОРИЕНТИР&nbsp;&mdash; девелопер полного цикла в&nbsp;сфере складской и&nbsp;индустриальной недвижимости.</H1>
        </div>
      </div>
    </section>
  )
}
