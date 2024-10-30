import {containerStyles} from '~/Global/Container'
import LogoImage from '$/logo.svg'
import {Menu} from 'lucide-react'

import Link from 'next/link'
import Image from 'next/image'
import LangSwitch from '~/Global/Header/LangSwitch'

export const headerConfig = {
  company: 'Компания',
  directions: 'Направления',
  projects: 'Проекты',
  news: 'Новости',
}

export default function Header() {
  return (
    <header className="absolute w-full z-[99] py-7 xl:py-5 sm:py-4 text-2xl xl:text-xl">
      <div className={`flex justify-between items-center ${containerStyles.width}`}>
        <nav className="flex items-end gap-10 xl:gap-7">
          <Link href="/">
            <Image className="object-contain h-7 xl:h-5 w-fit" src={LogoImage} alt="Логтип Ориентир" />
          </Link>

          {Object.entries(headerConfig).map(([key, label]) => (
            <Link className="leading-none sm:hidden" href={`/${key}`} key={key}>
              {label}
            </Link>
          ))}
        </nav>

        <Menu className="hidden sm:block sm:s-7" />

        <LangSwitch />
      </div>
    </header>
  )
}
