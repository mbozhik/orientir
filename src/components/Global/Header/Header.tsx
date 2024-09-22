import {cn} from '@/lib/utils'
import {containerStyles} from '~/Global/Container'
import LogoImage from '$/logo.svg'
import {Menu} from 'lucide-react'

import Link from 'next/link'
import Image from 'next/image'
import LangSwitch from '~/Global/Header/LangSwitch'

const headerNavConfig = {
  company: 'Компания',
  directions: 'Направления',
  projects: 'Проекты',
  news: 'Новости',
}

export default function Header() {
  return (
    <header className={cn('py-7 xl:py-5 sm:py-4 flex justify-between items-center text-2xl xl:text-xl', containerStyles.width)}>
      <nav className="flex items-end gap-10 xl:gap-7">
        <Image className="object-contain h-7 xl:h-5 w-fit" src={LogoImage} alt="Логтип Ориентир" />

        {Object.entries(headerNavConfig).map(([key, label]) => (
          <Link className="leading-none sm:hidden" key={key} href={`/${key}`}>
            {label}
          </Link>
        ))}
      </nav>

      <Menu className="hidden sm:block sm:s-7" />

      <LangSwitch />
    </header>
  )
}
