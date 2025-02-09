import ElenaBondarchukPhoto from '$/index/team/elena-bondarchuk.jpg'
import AlexeyBondarchukPhoto from '$/index/team/alexey-bondarchuk.jpg'
import ElenaBabenkoPhoto from '$/index/team/elena-babenko.jpg'
import OlgaKaskarovaPhoto from '$/index/team/olga-kaskarova.jpg'
import DmitriiBelousPhoto from '$/index/team/dmirtii-belous.jpg'
import AnarDamirovPhoto from '$/index/team/anar-damirov.jpg'

import {containerStyles} from '~/Global/Container'
import {cn} from '@/lib/utils'

import Image, {type StaticImageData} from 'next/image'
import Typography from '~/UI/Typography'

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
    name: 'Дмитрий Белоус',
    position: 'Руководитель коммерческого отдела',
    photo: DmitriiBelousPhoto,
  },
  {
    name: 'Анар Дамиров',
    position: 'Директор, Автоматизация и управление проектами',
    photo: AnarDamirovPhoto,
  },
]

type TPerson = {
  photo: StaticImageData
  name: string
  position: string
}

function TeamCard({person, className}: {person: TPerson; className?: string}) {
  const {position, name, photo} = person

  return (
    <div className={cn('flex flex-col gap-3 sm:gap-2 w-full', className)}>
      <Image quality={100} className="block object-cover h-full" src={photo} alt={name} />

      <div className="space-y-1 xl:-space-y-1">
        <Typography type="h3" text={name} />
        <Typography type="span" className="text-gray xl:text-base sm:leading-[1.25]" text={position} />
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <section data-section="team-index" className="space-y-14 sm:space-y-7">
      <div className="space-y-2">
        <Typography className="max-w-[50ch]" type="h1" text="Команда" />
        <Typography type="h4" className="hidden sm:block" text="Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue." />
      </div>

      <div className={cn('flex flex-col gap-14 xl:gap-10 w-fit', containerStyles.min_width)}>
        <div className="grid grid-cols-3 gap-5 xl:gap-3.5 sm:gap-5 sm:flex sm:flex-col">
          {teamConfig.slice(0, 1).map((person, index) => (
            <TeamCard person={person} className="" key={index} />
          ))}

          <div className="col-span-2 space-y-10 xl:space-y-7 sm:space-y-0">
            <Typography type="h4" className="max-w-[55ch] sm:hidden" text="Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue." />

            <div className="grid grid-cols-2 gap-5 xl:gap-3.5 sm:gap-5 sm:flex sm:flex-col">
              {teamConfig.slice(1, 3).map((person, index) => (
                <TeamCard person={person} key={index} />
              ))}
            </div>
          </div>
        </div>

        <Typography type="h4" className="hidden sm:block" text="Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus erat libero, dictum nec ligula congue, semper euismod massa. Praesent mattis metus id justo blandit, blandit cursus tellus feugiat. " />

        <div className="flex self-end gap-5 sm:flex-col xl:gap-3.5 sm:gap-5 w-full">
          {teamConfig.slice(3, 6).map((person, index) => (
            <TeamCard person={person} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
