'use client'

import {ArrowUpRight, Menu, X} from 'lucide-react'
import LogoImage from '$/logo.svg'
import LogoMonoImage from '$/logo-mono.svg'

import {WEBSITE_PATHS, WEBSITE_RESOURCES} from '@/lib/constants'
import {containerStyles} from '~/Global/Container'

import {useState, useLayoutEffect} from 'react'
import {usePathname} from 'next/navigation'
import {motion, AnimatePresence} from 'framer-motion'
import {useMediaQuery} from '@/lib/use-media-query'
import {cn} from '@/lib/utils'

import Link from 'next/link'
import Image from 'next/image'
import LangSwitch from '~/Global/Header/LangSwitch'
import {P, SPAN} from '~/UI/Typography'

export default function Header() {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  useLayoutEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const pathname = usePathname()
  const fullPages = ['/projects/', '/about']
  const isFullPage = fullPages.some((page) => pathname.includes(page))

  const menuHeight = 'h-screen !h-svh'

  return (
    <>
      <header className={cn('absolute sm:fixed z-[150] inset-0 w-full h-fit py-6 xl:py-5 sm:py-3.5 text-2xl xl:text-xl', !isDesktop ? 'bg-background text-foreground' : !isFullPage ? 'bg-background text-foreground' : 'bg-gradient-to-b from-foreground/25 to-foreground/0 text-background')}>
        <div className={cn('flex justify-between items-center', containerStyles.width)}>
          <nav className="flex items-end gap-10 xl:gap-7">
            <Link href="/" onClick={() => !isDesktop && isMenuOpen && setIsMenuOpen(false)}>
              <div className="w-[200px] xl:w-44">
                <Image className="object-contain w-full" src={!isDesktop ? LogoImage : !isFullPage ? LogoImage : LogoMonoImage} alt="Логтип Ориентир" />
              </div>
            </Link>

            {Object.entries(WEBSITE_PATHS).map(([key, label]) => (
              <Link className={`leading-none sm:hidden ${pathname === `/${key}` ? 'text-red' : ''}`} href={`/${key}`} key={key}>
                {label}
              </Link>
            ))}
          </nav>

          <LangSwitch />

          {!isDesktop && (
            <button onClick={toggleMenu}>
              <motion.span className="block" key={isMenuOpen ? 'close' : 'menu'} initial={{opacity: 0, scale: 0.8}} animate={{opacity: 1, scale: 1}} exit={{opacity: 0, scale: 0.8}} transition={{duration: 0.2, ease: 'easeInOut'}}>
                {isMenuOpen ? <X className="s-8" /> : <Menu className="s-8" />}
              </motion.span>
            </button>
          )}
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div className={cn('fixed z-[100] inset-0 p-2.5 pb-4 bg-background', 'flex flex-col gap-8 justify-end', menuHeight)} initial={{opacity: 0, y: '-100%'}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: '-100%'}} transition={{duration: 0.5, ease: 'easeInOut'}}>
            <nav className="flex flex-col gap-3 w-full">
              {Object.entries(WEBSITE_PATHS).map(([key, label]) => (
                <motion.div initial={{opacity: 0, y: 30}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: 30}} transition={{delay: 0.4, duration: 0.5}} key={key}>
                  <Link href={`/${key}`} onClick={toggleMenu}>
                    <P className="sm:text-[26px]">{label}</P>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="flex flex-col justify-between gap-1.5">
              {Object.entries(WEBSITE_RESOURCES.contacts)
                .slice(0, 2)
                .map(([label, link]) => (
                  <motion.div className="mr-20" initial={{opacity: 0, y: 30}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: 30}} transition={{delay: 0.6, duration: 0.5}} key={link}>
                    <Link className="hover:underline text-base" href={link}>
                      <P>{label}</P>
                    </Link>
                  </motion.div>
                ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {Object.entries(WEBSITE_RESOURCES.info).map(([department, email], index) => (
                <motion.div className="space-y-1 w-full" initial={{opacity: 0, y: 30}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: 30}} transition={{delay: 0.8, duration: 0.5}} key={index}>
                  <SPAN>{`${department}:`}</SPAN>

                  <Link href={`mailto:${email}`} className="flex items-center justify-center gap-2 pl-4 pr-2.5 py-0.5 w-full border-2 group border-gray hover:border-blue duration-200">
                    <P className="mt-1 font-bold duration-200 group-hover:text-blue">{email}</P>
                    <ArrowUpRight className="duration-200 group-hover:text-blue" size={35} strokeWidth={1.25} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
