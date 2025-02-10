'use client'

import {containerStyles} from '~/Global/Container'
import {cn} from '@/lib/utils'

import Image from 'next/image'
import Marquee from '~/UI/Marquee'

export default function ClientsModule({items}: {items: string[]}) {
  return (
    <div className={cn('border-t-[1px] border-gray-light', containerStyles.min_width)}>
      <div className="relative flex overflow-hidden">
        <Marquee className="bg-muted">
          {items.map((logo, index) => (
            <div data-marquee="item" className="py-8 shrink-0 flex items-center justify-center" key={index}>
              <Image className="w-40 xl:w-36 object-contain hover:scale-[1.1] duration-300" src={logo} alt={`Client logo ${index + 1}`} width={150} height={50} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}
