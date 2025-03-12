import ElenaBondarchukPhoto from '$/index/team/elena-bondarchuk.jpg'
import AlexeyBondarchukPhoto from '$/index/team/alexey-bondarchuk.jpg'
import ElenaBabenkoPhoto from '$/index/team/elena-babenko.jpg'
import OlgaKaskarovaPhoto from '$/index/team/olga-kaskarova.jpg'
import PetrZaritkiyPhoto from '$/index/team/petr-zaritkiy.jpg'
import YanaTruhanPhoto from '$/index/team/yana-truhan.jpg'

import {containerStyles} from '~/Global/Container'
import {cn} from '@/lib/utils'

import Image, {type StaticImageData} from 'next/image'
import {H1, H3, H4, SPAN} from '~/UI/Typography'

const teamConfig = [
  {
    name: 'Елена Бондарчук',
    position: 'Акционер',
    photo: ElenaBondarchukPhoto,
  },
  {
    name: 'Алексей Бондарчук',
    position: 'Генеральный директор СтройМонолитСервис',
    photo: AlexeyBondarchukPhoto,
  },
  {
    name: 'Елена Бабенко',
    position: 'Генеральный директор ГК Ориентир',
    photo: ElenaBabenkoPhoto,
  },
  {
    name: 'Ольга Кашкарова',
    position: 'Инвестиционый директор',
    photo: OlgaKaskarovaPhoto,
  },
  {
    name: 'Петр Зарицкий',
    position: 'Коммерческий директор',
    photo: PetrZaritkiyPhoto,
  },
  {
    name: 'Яна Трухан',
    position: 'Директор',
    photo: YanaTruhanPhoto,
  },
]

type TPerson = {
  photo: StaticImageData
  name: string
  position: string
}

function TeamCard({person}: {person: TPerson}) {
  const {position, name, photo} = person

  return (
    <div className="flex flex-col gap-3 sm:gap-2 w-full">
      <Image quality={100} className={cn('block object-cover object-top h-full')} src={photo} alt={name} />

      <div className="space-y-1 xl:-space-y-1">
        <H3>{name}</H3>
        <SPAN className="text-gray xl:text-base sm:leading-[1.25]">{position}</SPAN>
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <section data-section="team-index" className="space-y-14 sm:space-y-7">
      <div className="space-y-2">
        <H1 className="max-w-[50ch]">Команда</H1>
        <H4 className="hidden sm:block">Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.</H4>
      </div>

      <div className={cn('flex flex-col gap-14 xl:gap-10 w-fit', containerStyles.min_width)}>
        <div className="grid grid-cols-3 gap-5 sm:gap-5 sm:flex sm:flex-col">
          {teamConfig.slice(0, 1).map((person, index) => (
            <TeamCard person={person} key={index} />
          ))}

          <div className="col-span-2 space-y-10 xl:space-y-7 sm:space-y-0">
            <H4 className="max-w-[55ch] sm:hidden">Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.</H4>

            <div className="grid grid-cols-2 gap-5 sm:gap-5 sm:flex sm:flex-col">
              {teamConfig.slice(1, 3).map((person, index) => (
                <TeamCard person={person} key={index} />
              ))}
            </div>
          </div>
        </div>

        <H4 className="hidden sm:block">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus erat libero, dictum nec ligula congue, semper euismod massa. Praesent mattis metus id justo blandit, blandit cursus tellus feugiat.</H4>

        <div className="flex self-end gap-5 sm:flex-col sm:gap-5 w-full">
          {teamConfig.slice(3, 6).map((person, index) => (
            <TeamCard person={person} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
