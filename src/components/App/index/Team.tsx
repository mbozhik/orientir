import ElenaBondarchukPhoto from '$/index/team/elena-bondarchuk.jpg'
import AlexeyBondarchukPhoto from '$/index/team/alexey-bondarchuk.jpg'
import ElenaBabenkoPhoto from '$/index/team/elena-babenko.jpg'
import OlgaKaskarovaPhoto from '$/index/team/olga-kaskarova.jpg'
import DmitriiBelousPhoto from '$/index/team/dmirtii-belous.jpg'
import AnarDamirovPhoto from '$/index/team/anar-damirov.jpg'

import Image, {StaticImageData} from 'next/image'
import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import {cn} from '@/lib/utils'

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

interface Person {
  photo: StaticImageData
  name: string
  position: string
}

function TeamCard({person, className}: {person: Person; className?: string}) {
  const {position, name, photo} = person

  return (
    <div className={cn('space-y-3 sm:space-y-2', className)}>
      <Image quality={100} className={cn('w-full object-cover', name === 'Елена Бондарчук' && 'h-[75vh]')} src={photo} alt={name} />

      <div className="space-y-1 xl:-space-y-1">
        <Heading type="h3" text={name} />
        <Text type="sub" className={cn('text-gray xl:text-base sm:leading-[1.25]', name === 'Анар Дамиров' && 'max-w-[30ch]')} text={position} />
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <section data-section="team-index" className="space-y-14 sm:space-y-7">
      <div className="space-y-2">
        <Heading className="max-w-[50ch]" type="h1" text="Команда" />
        <Text type="h4" className="hidden sm:block" text="Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue." />
      </div>

      <div className="flex flex-col gap-5 xl:gap-10 sm:gap-7 w-fit">
        <div className="flex xl:flex-col items-end gap-5 sm:gap-7">
          {teamConfig.slice(0, 3).map((person, index) => (
            <TeamCard person={person} className={[1, 2].includes(index) ? 'pb-[72px] xl:pb-0' : ''} key={index} />
          ))}
        </div>

        <Text type="h4" className="hidden sm:block" text="Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus erat libero, dictum nec ligula congue, semper euismod massa. Praesent mattis metus id justo blandit, blandit cursus tellus feugiat. " />

        <div className="flex xl:flex-col self-end gap-5 sm:gap-7">
          {teamConfig.slice(3, 6).map((person, index) => (
            <TeamCard person={person} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
