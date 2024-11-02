'use client'

import {usePathname} from 'next/navigation'
import {siteRoutes} from '@/lib/constants'
import {containerStyles} from '~/Global/Container'

import {Menu} from 'lucide-react'
import LogoImage from '$/logo.svg'

import Link from 'next/link'
import Image from 'next/image'
import LangSwitch from '~/Global/Header/LangSwitch'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="absolute w-full z-[99] py-6 xl:py-5 sm:py-3.5 text-2xl xl:text-xl bg-background text-foreground">
      <div className={`flex justify-between items-center ${containerStyles.width}`}>
        <nav className="flex items-end gap-10 xl:gap-7">
          <Link href="/" className="">
            <div className="w-[200px] xl:w-44">
              <Image className="object-contain w-full" src={LogoImage} alt="Логтип Ориентир" />
            </div>
          </Link>

          {Object.entries(siteRoutes).map(([key, label]) => (
            <Link className={`leading-none sm:hidden ${pathname === `/${key}` ? 'text-red' : ''}`} href={`/${key}`} key={key}>
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
