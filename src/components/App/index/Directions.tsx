import {TDirection} from '@/app/api/directions/route'
import {API_URL} from '@/lib/constants'

import DirectionsImage from '$/index/directions.jpg'
import Image from 'next/image'

import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import {ExpandButton} from '~/UI/Button'
import DirectionsModule from '~/App/index/DirectionsModule'

async function getDirections(): Promise<TDirection[]> {
  const res = await fetch(`${API_URL}/api/directions`, {cache: 'no-store'})
  if (!res.ok) {
    throw new Error('Failed to fetch directions')
  }
  return res.json()
}

export default async function Directions() {
  const directions: TDirection[] = await getDirections()

  return (
    <section data-section="directions-index" className="space-y-20 sm:space-y-5">
      <div className="grid grid-cols-2 sm:grid-cols-1 sm:gap-3">
        <Heading type="h1" text="Направления" />

        <div className="flex gap-10">
          <Text type="h4" text="Наша компания осуществляет весь спектр работ по строительству и эксплуатации объектов: от разработки концепции до полной реализации и последующего технического обслуживания." />
          <ExpandButton href="/services" view="desktop" text="Все услуги" />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-1 sm:gap-5">
        <Image className="sm:h-[40vh]" src={DirectionsImage} alt="Здание Ориентир" />

        <DirectionsModule directions={directions} />
      </div>

      <ExpandButton href="/services" view="mobile" text="Все услуги" />
    </section>
  )
}
