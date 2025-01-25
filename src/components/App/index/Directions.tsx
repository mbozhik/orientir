import {TDirection} from '@/app/api/directions/route'
import {getDirections} from '@/utils/getData'

import DirectionsImage from '$/index/directions.jpg'
import Image from 'next/image'

import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import {ExpandButton} from '~/UI/Button'
import DirectionsModule from '~/App/index/DirectionsModule'

export default async function Directions({isIndex = true}: {isIndex?: boolean}) {
  const directions: TDirection[] = await getDirections()

  return (
    <section data-section="directions-index" className="space-y-20 sm:space-y-7">
      <div className="grid grid-cols-2 sm:grid-cols-1 sm:gap-3">
        <Heading type="h1" text="Направления" />

        <div className="flex gap-10">
          <Text type="h4" text="Наша компания осуществляет весь спектр работ по строительству и эксплуатации объектов: от разработки концепции до полной реализации и последующего технического обслуживания." />
          {isIndex && <ExpandButton href="/directions" view="desktop" text="Подробнее" />}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-1 sm:gap-5">
        <Image className="w-[55%] xl:w-[75%] sm:w-full sm:h-[40vh] aspect-[9/10] object-cover" src={DirectionsImage} alt="Здание Ориентир" />

        <DirectionsModule directions={directions} />
      </div>

      <ExpandButton href="/directions" view="mobile" text="Подробнее" />
    </section>
  )
}
