'use client'

import type {DIRECTIONS_QUERYResult} from '-/sanity.types'

import {cn} from '@/lib/utils'
import {useState} from 'react'

import {H2, P, SPAN} from '~/UI/Typography'
import {ArrowRight} from 'lucide-react'

export default function DirectionsModule({directions}: {directions: DIRECTIONS_QUERYResult}) {
  const sortedDirections = [...directions].sort((a, b) => (a.id || 0) - (b.id || 0))

  const [openTab, setOpenTab] = useState<number | null>(sortedDirections[0]?.id || null)

  const handleToggle = (id: number) => {
    setOpenTab(openTab === id ? null : id)
  }

  const interactiveClasses = {
    text: 'text-gray-dark duration-300 group-hover:text-red',
    icon: 'text-gray group-hover:rotate-45 group-hover:text-red duration-300',
  }

  return (
    <div className="space-y-3 xl:space-y-2 sm:space-y-3.5">
      {sortedDirections.map((direction) => (
        <div key={direction.id} className="space-y-5 sm:space-y-3.5 border-b-[1px] pb-5 xl:pb-4 sm:pb-3.5 border-gray-light group">
          <div className="flex items-end justify-between gap-10 cursor-pointer" onClick={() => handleToggle(direction.id || 0)}>
            <div className="flex gap-5">
              <SPAN className={cn('mt-1 sm:mt-0 font-light sm:hidden', interactiveClasses.text, openTab === direction.id && 'text-red')}>{'0' + direction.id}</SPAN>
              <H2 className={cn(interactiveClasses.text, openTab === direction.id && 'text-red', 'xl:text-3xl')}>{direction.heading}</H2>
            </div>

            <ArrowRight className={cn('s-12 xl:s-10', interactiveClasses.icon, openTab === direction.id && 'rotate-45 text-red')} strokeWidth={1.25} />
          </div>

          {openTab === direction.id && <div className="flex flex-col gap-1.5 ml-10 sm:ml-0 text-gray-dark">{direction.params?.map((item, index) => <P key={index}>{item}</P>)}</div>}
        </div>
      ))}
    </div>
  )
}
