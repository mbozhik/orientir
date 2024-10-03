import {headerConfig} from './Header/Header'
import {ArrowUpRight} from 'lucide-react'
import LogoImage from '$/logo.svg'

import Link from 'next/link'
import Image from 'next/image'
import Heading from '~/UI/Heading'
import Text from '~/UI/Text'

const footerConfig = {
  info: {
    'Отдел продаж': 'sales@orientir.ru',
    Сотрудничество: 'contact@orientir.ru',
    'Отдел кадров': 'hr@orientir.ru',
  },
  contacts: {
    '+7 (499) 940 12-20': 'tel:+74999401220',
    'info@orientir.ru': 'mailto:info@orientir.ru',
    'Пресненская набережная, 10, <br /> Блок С, 25-й этаж': 'https://yandex.ru/maps/-/CDHoJ8JB',
  },
}
const {info, contacts} = footerConfig

export default function Footer() {
  const gridConfig = {
    base: 'grid-cols-10',
    info: 'col-span-5',
    navigation: 'col-span-2',
    contacts: 'col-span-3',
  }

  return (
    <footer className="py-16 space-y-32 xl:space-y-20 px-28 xl:px-16 sm:px-4 sm:py-8 bg-gray-light">
      <div className={`grid gap-20 ${gridConfig.base} sm:flex sm:flex-col sm:gap-12`}>
        <section className={`${gridConfig.info}`}>
          <div className="space-y-14 sm:space-y-7">
            <Heading type="h2" className="font-normal" text="Cras euismod porttitor ullamcorper. <br /> Vivamus vitae pellentesque justo." />

            <div className="flex flex-wrap gap-5">
              {Object.entries(info).map(([department, email], index) => (
                <div key={index} className="space-y-2 sm:w-full">
                  <Text type="sub" text={`${department}:`} />
                  <Link href={`mailto:${email}`} className="flex items-center sm:justify-center gap-2 px-5 py-1.5 sm:w-full border-2 group w-fit border-gray">
                    <Text type="p" className="mt-1 font-bold duration-200 group-hover:text-blue" text={email} />
                    <ArrowUpRight className="duration-200 group-hover:text-blue" size={35} strokeWidth={1.25} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`space-y-5 ${gridConfig.navigation}`}>
          <Text type="p" className="font-bold" text="Карта сайта" />

          <div className="flex flex-col gap-3">
            {Object.entries(headerConfig).map(([key, label]) => (
              <Link className="hover:underline" href={`/${key}`} key={key}>
                <Text type="p" text={label} />
              </Link>
            ))}
          </div>
        </section>

        <section className={`space-y-5 ${gridConfig.contacts}`}>
          <Text type="p" className="font-bold" text="Контакты" />

          <div className="flex flex-col justify-between gap-5">
            {Object.entries(contacts).map(([label, link]) => (
              <Link className="hover:underline" href={link} key={link}>
                <Text type="p" text={label} />
              </Link>
            ))}
          </div>
        </section>
      </div>

      <section className="flex items-end justify-between sm:items-start sm:flex-col-reverse sm:gap-4">
        <Link className="hover:underline" href="/privacy-policy">
          <Text type="sub" text="Политика конфиденциальности" />
        </Link>

        <Image className="object-contain h-[70px] xl:h-14 sm:h-7 w-fit" src={LogoImage} alt="Логтип Ориентир" />
      </section>
    </footer>
  )
}
