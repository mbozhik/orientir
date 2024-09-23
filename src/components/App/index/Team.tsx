import ElenaBondarchukPhoto from '$/index/team/elena-bondarchuk.jpg'
import AlexeyBondarchukPhoto from '$/index/team/alexey-bondarchuk.jpg'
import ElenaBabenkoPhoto from '$/index/team/elena-babenko.jpg'
import OlgaKaskarovaPhoto from '$/index/team/olga-kaskarova.jpg'
import DmitriiBelousPhoto from '$/index/team/dmirtii-belous.jpg'
import AnarDamirovPhoto from '$/index/team/anar-damirov.jpg'

import Link from 'next/link'
import Image from 'next/image'
import Heading from '~/UI/Heading'
import Text from '~/UI/Text'

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

export default function Team() {
  return (
    <section data-section="team-index" className="space-y-20 sm:space-y-5">
      <Heading className="max-w-[50ch]" type="h1" text="Команда" />

      <div className="w-[75%] sm:w-full mx-auto grid grid-cols-3 gap-7 xl:gap-5 sm:grid-cols-1">
        {teamConfig.map((person, index) => (
          <div className="space-y-3 sm:space-y-2" key={index}>
            <Image className="w-full" src={person.photo} alt="" />

            <div className="space-y-1 sm:-space-y-1">
              <Heading type="h3" text={person.name} />
              <Text type="sub" className="text-gray" text={person.position} />
            </div>
          </div>
        ))}
      </div>

      <Link className="hidden sm:block" href="/news">
        <Text type="h4" className="font-bold underline hover:no-underline underline-offset-[8px]" text="Все новости" />
      </Link>
    </section>
  )
}
