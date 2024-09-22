import {cn} from '@/lib/utils'
import {containerStyles} from '~/Global/Container'
import LogoImage from '$/logo.svg'

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
    <header className={cn('py-7 flex justify-between items-center text-2xl', containerStyles.width)}>
      <nav className="flex gap-10">
        <Image className="h-7 w-fit object-contain" src={LogoImage} alt="Логтип Ориентир" />

        {Object.entries(headerNavConfig).map(([key, label]) => (
          <Link key={key} href={`/${key}`}>
            {label}
          </Link>
        ))}
      </nav>

      <LangSwitch />
    </header>
  )
}
