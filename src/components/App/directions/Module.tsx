import {TDirection} from '@/app/api/directions/route'

import DirectionsImage from '$/index/directions.jpg'

import Image from 'next/image'
import {H1, H2, H4, P, SPAN} from '~/UI/Typography'

export default async function Module({items}: {items: TDirection[]}) {
  return (
    <section data-section="module-directions" className="space-y-20 sm:space-y-5">
      <div className="grid grid-cols-2 sm:grid-cols-1 sm:gap-4">
        <H1 className="!leading-none">
          Комплексный <br /> подход
        </H1>
        <H4 className="max-w-[45ch]">Наша компания подбирает и реализует оптимальное складское решение для ваших бизнес-процессов – от аренды стандартного сухого склада в нашем парке до строительства на вашей земле специализированного объекта «под ключ» и его автоматизации.</H4>
      </div>

      <div className="grid grid-cols-10 gap-20 sm:flex sm:flex-col xl:gap-14 sm:gap-12">
        <Image className="col-span-2 sm:w-full" src={DirectionsImage} alt="Здание Ориентир" />

        <div className="grid grid-cols-2 col-span-8 sm:grid-cols-1 gap-y-7 xl:gap-x-7 xl:gap-y-5 sm:gap-y-7">
          {items.map((direction) => (
            <div className="flex flex-col gap-5 sm:gap-3.5 group border-b-[1px] pb-9 xl:pb-5 sm:pb-7 border-gray-light" key={direction.id}>
              <div className="flex items-start gap-5">
                <SPAN className="mt-1 font-light sm:mt-0 text-red">{direction.id}</SPAN>
                <H2 className="text-red xl:text-3xl">{direction.heading}</H2>
              </div>

              <div className="flex flex-col gap-1.5 ml-10 sm:mr-3 text-gray-dark">
                {direction.list.map((item, index) => (
                  <P key={index}>{item}</P>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
