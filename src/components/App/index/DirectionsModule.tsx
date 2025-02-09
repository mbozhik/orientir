'use client'

import {cn} from '@/lib/utils'
import {useState} from 'react'
import {TDirection} from '@/app/api/directions/route'

import Typography from '~/UI/Typography'
import {ArrowRight} from 'lucide-react'

export default function DirectionsModule({directions}: {directions: TDirection[]}) {
  const [openTab, setOpenTab] = useState<string | null>(directions[0]?.id || null)

  const handleToggle = (id: string) => {
    setOpenTab(openTab === id ? null : id)
  }

  const interactiveClasses = {
    text: 'text-gray-dark duration-300 group-hover:text-red',
    icon: 'text-gray group-hover:rotate-45 group-hover:text-red duration-300',
  }

  return (
    <div className="space-y-3 xl:space-y-2 sm:space-y-3.5">
      {directions.map((direction) => (
        <div key={direction.id} className="space-y-5 sm:space-y-3.5 border-b-[1px] pb-5 xl:pb-4 sm:pb-3.5 border-gray-light group">
          <div className="flex items-end justify-between gap-10 cursor-pointer" onClick={() => handleToggle(direction.id)}>
            <div className="flex gap-5">
              <Typography type="span" className={cn('mt-1 sm:mt-0 font-light sm:hidden', interactiveClasses.text, openTab === direction.id && 'text-red')} text={direction.id} />
              <Typography type="h2" className={cn(interactiveClasses.text, openTab === direction.id && 'text-red', 'xl:text-3xl')} text={direction.heading} />
            </div>

            <ArrowRight className={cn('s-12 xl:s-10', interactiveClasses.icon, openTab === direction.id && 'rotate-45 text-red')} strokeWidth={1.25} />
          </div>

          {openTab === direction.id && (
            <div className="flex flex-col gap-1.5 ml-10 sm:ml-0 text-gray-dark">
              {direction.list.map((item, index) => (
                <Typography type="p" text={item} key={index} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
