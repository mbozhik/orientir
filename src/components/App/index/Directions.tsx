import DirectionsImage from '$/index/directions.jpg'

import Link from 'next/link'
import Image from 'next/image'
import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import DirectionsModule from '~/App/index/DirectionsModule'

const directionsConfig = {
  '01': {
    heading: 'Девелопмент',
    list: {
      1: 'Поиск и анализ земельного участка',
      2: 'Подбор локации',
      3: 'Разработка концепции',
      4: 'Оценка эффективности проекта',
      5: 'Строительство объекта',
      6: 'Эксплуатация и управление объектом',
      7: 'Продажа готового актива инвесторам',
    },
  },
  '02': {
    heading: 'Генеральный подряд',
    list: {
      1: 'Пункт',
      2: 'Пункт',
      3: 'Пункт',
    },
  },
  '03': {
    heading: 'Холодоснабжение',
    list: {
      1: 'Пункт',
      2: 'Пункт',
      3: 'Пункт',
    },
  },
  '04': {
    heading: 'Автоматизация',
    list: {
      1: 'Пункт',
      2: 'Пункт',
      3: 'Пункт',
    },
  },
}

export default function Directions() {
  return (
    <section data-section="directions-index" className="space-y-20 sm:space-y-5">
      <div className="grid grid-cols-2 sm:grid-cols-1 sm:gap-3">
        <Heading type="h1" text="Направления" />

        <div className="flex">
          <Text type="h4" text="Наша компания осуществляет весь спектр работ по строительству и эксплуатации объектов: от разработки концепции до полной реализации и последующего технического обслуживания." />

          <Link className="w-full text-end sm:hidden" href="/services">
            <Text type="h4" className="font-bold underline hover:no-underline underline-offset-[8px]" text="Все услуги" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-1 sm:gap-5">
        <Image className="sm:h-[40vh]" src={DirectionsImage} alt="Здание Ориентир" />

        <DirectionsModule config={directionsConfig} />
      </div>

      <Link className="hidden sm:block" href="/services">
        <Text type="h4" className="font-bold underline hover:no-underline underline-offset-[8px]" text="Все услуги" />
      </Link>
    </section>
  )
}
