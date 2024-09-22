import DirectionsImage from '$/index/directions.jpg'

import Link from 'next/link'
import Image from 'next/image'
import Heading from '~/UI/Heading'
import Text from '@/components/UI/Text'

export default function Directions() {
  return (
    <section data-section="directions-index" className="space-y-14">
      <div className="grid grid-cols-2">
        <Heading type="h1" text="Направления" />

        <div className="flex ">
          <Text type="h4" text="Наша компания осуществляет весь спектр работ по строительству и эксплуатации объектов: от разработки концепции до полной реализации и последующего технического обслуживания." />

          <Link className="w-full text-end" href="/services">
            <Text type="h4" className="font-bold underline hover:no-underline underline-offset-[8px]" text="Все услуги" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <Image src={DirectionsImage} alt="Здание Ориентир" />
      </div>
    </section>
  )
}
