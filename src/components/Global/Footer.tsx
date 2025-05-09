'use client'

import {WEBSITE_PATHS, WEBSITE_RESOURCES} from '@/lib/constants'
import {ArrowUpRight} from 'lucide-react'
import LogoImage from '$/logo.svg'

import {usePathname} from 'next/navigation'
import {cn} from '@/lib/utils'

import Link from 'next/link'
import Image from 'next/image'
import {H2, P, SPAN} from '~/UI/Typography'

const {info, contacts} = WEBSITE_RESOURCES

export default function Footer() {
  const gridConfig = {
    base: 'grid-cols-10',
    info: 'col-span-5 xl:col-span-7',
    navigation: 'col-span-2 xl:col-span-1',
    contacts: 'col-span-3 xl:col-span-2',
  }

  const isStudioRoute = usePathname()?.startsWith('/studio')

  return (
    <footer className={cn(isStudioRoute && 'hidden', 'py-12 space-y-12 xl:py-10 px-28 xl:px-16 sm:px-4 sm:py-8 bg-gray-light')}>
      <div className={`grid gap-20 ${gridConfig.base} sm:flex sm:flex-col sm:gap-10`}>
        <section className={`${gridConfig.info}`}>
          <div className="space-y-14 sm:space-y-7">
            <H2 className="font-normal">Написать нам</H2>

            <div className="flex flex-wrap gap-5 sm:gap-3.5">
              {Object.entries(info).map(([department, email], index) => (
                <div key={index} className="space-y-2 sm:space-y-1 sm:w-full">
                  <SPAN>{`${department}:`}</SPAN>

                  <Link href={`mailto:${email}`} className="flex items-center sm:justify-center gap-2 pl-4 pr-2.5 py-0.5 sm:w-full border-2 group w-fit border-gray hover:border-blue duration-200">
                    <P className="mt-1 font-bold duration-200 group-hover:text-blue">{email}</P>
                    <ArrowUpRight className="duration-200 group-hover:text-blue" size={35} strokeWidth={1.25} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`space-y-5 justify-self-end ${gridConfig.navigation}`}>
          <P className="font-bold">Карта сайта</P>

          <div className="flex flex-col gap-3 xl:gap-1.5">
            {Object.entries(WEBSITE_PATHS).map(([key, label]) => (
              <Link className="hover:underline" href={`/${key}`} key={key}>
                <P>{label}</P>
              </Link>
            ))}
          </div>
        </section>

        <section className={`space-y-5 justify-self-end ${gridConfig.contacts}`}>
          <P className="font-bold">Контакты</P>

          <div className="flex flex-col justify-between gap-3 xl:gap-1.5">
            {Object.entries(contacts).map(([label, link]) => (
              <Link className="hover:underline sm:max-w-[30ch]" href={link} key={link}>
                <P>{label}</P>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <section className="flex items-end justify-between sm:items-start sm:flex-col sm:gap-6">
        <Link className="hover:underline" href="/privacy-policy">
          <SPAN>Политика конфиденциальности</SPAN>
        </Link>

        <Image className="object-contain h-10 sm:h-7 w-fit" src={LogoImage} alt="Логтип Ориентир" />
      </section>
    </footer>
  )
}
