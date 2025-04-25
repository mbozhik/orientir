import {getDirections} from '@/sanity/lib/requests'

import DirectionsImage from '$/directions.jpg'

import Image from 'next/image'
import {H1, H2} from '~/UI/Typography'

import Container, {containerStyles, sitePadding} from '~/Global/Container'
import Module from '~~/directions/Module'
import Specs from '~~/projects/slug/Specs'

const indicatorsData = [
  {
    heading: 'более 1 400 000 м2',
    caption: 'качественной складской недвижимости успешно построено и введено в эксплуатацию',
  },
  {
    heading: 'свыше 550 га земли',
    caption: 'расположены в востребованных локациях Московской и Ленинградской областях',
  },
  {
    heading: 'законтрактовано 82 % проектов',
    caption: 'по модели built-to-suit',
  },
  {
    heading: 'каждый 2-ой м2 – температурный',
    caption: 'реализован собственными системами холодоснабжения',
  },
]

export default async function DirectionsPage() {
  const directions = await getDirections()

  return (
    <>
      <section data-section="hero-directions" className={`${containerStyles.width} ${sitePadding}`}>
        <div className="flex items-start justify-between mt-10 sm:flex-col sm:gap-5 sm:mt-5">
          <H1>Экспертиза</H1>
          <H2 className="font-normal max-w-[45ch] xl:text-3xl">Мы осуществляем проектирование, строительство и эксплуатацию крупнейших высокотехнологичных объектов различной степени сложности: от фулфилмент-фабрик и распределительных центров до мультитемператруных складов с контролируемой температурной и камерами глубокой заморозки, в том числе лицензируемых алкогольных и фармацевтических</H2>
        </div>
      </section>

      <Image quality={100} priority={true} className="object-cover mt-12 sm:mt-10 sm:h-[35vh]" src={DirectionsImage} alt="" />

      <Container className="space-y-36 xl:space-y-28 sm:space-y-20 my-36 xl:my-28 sm:my-16">
        <Module items={directions} />
        <Specs heading="Показатели" data={indicatorsData} />
      </Container>
    </>
  )
}
