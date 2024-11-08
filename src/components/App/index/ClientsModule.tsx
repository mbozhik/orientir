'use client'

import Image from 'next/image'

export default function ClientsModule({items}: {items: string[]}) {
  return (
    <div className="w-[75%] sm:w-full mx-auto border-t-[1px] border-gray-light">
      <div className="flex items-center justify-around gap-5 sm:overflow-hidden sm:gap-10">
        {items.map((logo, index) => (
          <Image className="object-contain s-32 hover:scale-[1.1] duration-300" key={index} src={logo} alt="" />
        ))}
      </div>
    </div>
  )
}
