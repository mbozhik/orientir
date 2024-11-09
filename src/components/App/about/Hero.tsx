import HeroImage from '$/about.jpg'

import Image from 'next/image'
import Heading from '~/UI/Heading'

const blockHeight = 'h-screen !h-svh'

export default function Hero() {
  return (
    <section data-section="hero-about" className={`relative w-full ${blockHeight}`}>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-foreground/0 to-foreground/30 xl:to-foreground/50"></div>
      <Image quality={100} priority={true} className="object-cover w-full h-full" src={HeroImage} alt="Один из проектов компании 'Ориентир'" />

      <div className="absolute bottom-0 left-0 w-full text-background">
        <div className="flex justify-between px-24 sm:flex-col sm:gap-3 xl:px-16 sm:px-3 pb-14 sm:pb-5">
          <Heading type="h1" className="xl:text-5xl sm:text-[28px] sm:leading-[1.2]" text="О компании" />
          <Heading type="h2" className="max-w-[40ch] xl:text-3xl xl:leading-[1.15] sm:text-lg sm:leading-[1.2] sm:font-normal" text="ОРИЕНТИР&nbsp;&mdash; эксперты в&nbsp;современном индустриальном девелопменте. Используя собственные строительные и&nbsp;производственные мощности, мы&nbsp;создаём уникальные складские и&nbsp;промышленные комплексы&nbsp;&mdash; от&nbsp;разработки концепции до&nbsp;управления построенными нами объектами." />
        </div>
      </div>
    </section>
  )
}
