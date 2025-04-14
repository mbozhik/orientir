'use client'

import {containerStyles} from '~/Global/Container'
import {cn} from '@/lib/utils'

import Image, {StaticImageData} from 'next/image'
import Marquee from '~/UI/Marquee'

export default function ClientsModule({items}: {items: StaticImageData[]}) {
  return (
    <div className={cn('border-t-[1px] border-gray-light', containerStyles.min_width)}>
      <div className="relative flex overflow-hidden">
        <Marquee className="bg-muted">
          {items.map((logo, index) => (
            <div data-marquee="item" className="grid w-40 xl:w-36 shrink-0 place-items-center" key={index}>
              <Image className="s-full object-contain hover:scale-[1.05] duration-300 saturate-0" src={logo} alt={`Client logo ${index + 1}`} width={150} height={50} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}
