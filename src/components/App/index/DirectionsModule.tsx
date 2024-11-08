'use client'

import {cn} from '@/lib/utils'
import {useState} from 'react'
import {TDirection} from '@/app/api/directions/route'

import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import {ArrowDownRight} from '~/UI/Icons'

export default function DirectionsModule({directions}: {directions: TDirection[]}) {
  const [openTab, setOpenTab] = useState<string | null>(directions[0]?.id || null)

  const handleToggle = (id: string) => {
    setOpenTab(openTab === id ? null : id)
  }

  const interactiveClasses = {
    text: 'text-gray-dark duration-300 group-hover:text-red',
    icon: 'fill-gray group-hover:rotate-45 group-hover:fill-red duration-300',
  }

  return (
    <div className="space-y-5">
      {directions.map((direction) => (
        <div key={direction.id} className="pb-4 space-y-5 sm:space-y-3.5 border-b-[1px] xl:pb-4 sm:pb-2 border-gray-light group">
          <div className="flex justify-between gap-10 cursor-pointer" onClick={() => handleToggle(direction.id)}>
            <div className="flex gap-5">
              <Text type="sub" className={cn('mt-1 sm:mt-0 font-light sm:hidden', interactiveClasses.text, openTab === direction.id && 'text-red')} text={direction.id} />
              <Heading type="h2" className={cn(interactiveClasses.text, openTab === direction.id && 'text-red')} text={direction.heading} />
            </div>

            <ArrowDownRight className={cn('sm:scale-[0.6]', interactiveClasses.icon, openTab === direction.id && 'rotate-45 fill-red')} />
          </div>

          {openTab === direction.id && (
            <div className="flex flex-col gap-1.5 ml-10 sm:ml-0 text-gray-dark">
              {direction.list.map((item, index) => (
                <Text type="p" text={item} key={index} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
