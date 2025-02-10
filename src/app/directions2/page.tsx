import DirectionsImage from '$/directions.jpg'

import Image from 'next/image'
import {H1, H2} from '~/UI/Typography'

import Container, {containerStyles, sitePadding} from '~/Global/Container'
import Directions from '~~/index/Directions'
import Specs from '~~/projects/slug/Specs'

const indicatorsData = [
  {
    heading: '7 парков',
    caption: 'расположенных в самых востребованных локациях Московской и Ленинградской области',
  },
  {
    heading: 'Свыше 500.000 м²',
    caption: 'построено в Московской области, обеспечивая высокий уровень складской инфраструктуры региона',
  },
  {
    heading: '54% проектов',
    caption: 'Эффективная планировка территории с учетом оптимизации логистических потоков.',
  },
  {
    heading: '47% проектов',
    caption: 'составляют мультитемпературные и лицензируемые комплексы, отвечающие современным требованиям рынка',
  },
]

export default async function DirectionsPage() {
  return (
    <>
      <section data-section="hero-directions" className={`${containerStyles.width} ${sitePadding}`}>
        <div className="flex items-start justify-between mt-10 sm:flex-col sm:gap-5 sm:mt-5">
          <H1>
            Области <br /> экспертизы
          </H1>
          <H2 className="font-normal max-w-[45ch] xl:text-3xl">
            <span className="text-red">Мы подбираем и реализуем оптимальное складское решение для ваших бизнес-процессов</span>– от аренды стандартного сухого склада в нашем парке до строительства на вашей земле специализированного объекта «под ключ» и его автоматизации.
          </H2>
        </div>
      </section>

      <Image quality={100} priority={true} className="object-cover mt-12 sm:mt-10 sm:h-[35vh]" src={DirectionsImage} alt="" />

      <Container className="space-y-36 xl:space-y-28 sm:space-y-20 my-36 xl:my-28 sm:my-16">
        <Directions isIndex={false} />
        <Specs heading="Показатели" data={indicatorsData} />
      </Container>
    </>
  )
}
