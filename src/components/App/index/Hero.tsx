import HeroImage from '$/index/background.jpg'

import Image from 'next/image'
import {containerStyles} from '@/components/Global/Container'

export default function Hero() {
  return (
    <section data-section="hero-index" className={`relative ${containerStyles.width} sm:mx-0`}>
      <div className="w-full sm:h-[85vh]">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-foreground/5 via-foreground/20 to-foreground/30"></div>
        <Image quality={100} className="object-cover w-full h-full" src={HeroImage} alt="Здание Ориентир" />
      </div>

      <div className="absolute left-20 bottom-24 xl:left-14 xl:bottom-14 sm:left-3 sm:bottom-3">
        <h1 className="max-w-[30ch] sm:max-w-[20ch] text-[55px] xl:text-5xl sm:text-3xl !leading-[1.1] font-bold text-background">ОРИЕНТИР&nbsp;&mdash; девелопер полного цикла в&nbsp;сфере складской и&nbsp;индустриальной недвижимости.</h1>
      </div>
    </section>
  )
}
