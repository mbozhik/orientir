'use client'

import {useEffect, useRef} from 'react'
import {horizontalLoop} from '@/utils/gsap/horizontal-loop'

import Image from 'next/image'

export default function ClientsModule({items}: {items: string[]}) {
  const marqueeRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!marqueeRef.current) return

    const marqueeItems = marqueeRef.current.querySelectorAll('[data-marquee="item"]')

    horizontalLoop(marqueeItems, {
      repeat: -1,
      speed: 2,
      paddingRight: 0,
    })
  }, [])

  return (
    <div className="w-[75%] xl:w-[89%] sm:w-full mx-auto border-t-[1px] border-gray-light">
      <div ref={marqueeRef} className="relative flex overflow-hidden">
        {items.map((logo, index) => (
          <div data-marquee="item" className="w-[350px] xl:w-[300px] sm:w-[200px] py-8 shrink-0 flex items-center justify-center" key={index}>
            <Image className="w-40 xl:w-36 object-contain hover:scale-[1.1] duration-300" src={logo} alt={`Client logo ${index + 1}`} width={150} height={50} />
          </div>
        ))}
      </div>
    </div>
  )
}
