'use client'

import type {PAGES_ITEM_QUERYResult} from '-/sanity.types'

import {containerStyles} from '~/Global/Container'
import {cn} from '@/lib/utils'

import {urlFor} from '@/sanity/lib/image'

import Image from 'next/image'
import Marquee from '~/UI/Marquee'

export default function ClientsModule({page}: {page: PAGES_ITEM_QUERYResult}) {
  return (
    <div className={cn('border-t-[1px] border-gray-light', containerStyles.min_width)}>
      <div className="relative flex overflow-hidden">
        <Marquee className="bg-muted">
          {page?.indexClients?.logos?.map((logo, index) => (
            <div data-marquee="item" className="grid w-40 xl:w-36 shrink-0 place-items-center" key={index}>
              {logo.image && <Image className="s-full object-contain hover:scale-[1.05] duration-300 saturate-0" src={urlFor(logo.image).url()} alt={logo.company || `Логотип ${index + 1}`} width={150} height={50} />}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}
