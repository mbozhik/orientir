'use client'

import {cn} from '@/lib/utils'
import {useState} from 'react'

import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import {ArrowDownRight} from '~/UI/Icons'

interface DirectionsModuleProps {
  config: {
    [key: string]: {
      heading: string
      list: {[key: number]: string}
    }
  }
}

export default function DirectionsModule({config}: DirectionsModuleProps) {
  const [openTab, setOpenTab] = useState<string | null>('01')

  const handleToggle = (key: string) => {
    setOpenTab(openTab === key ? null : key)
    console.log(key)
  }

  return (
    <div className="space-y-5">
      {Object.entries(config).map(([key, value]) => (
        <div key={key} className="pb-3 space-y-5 border-b-2 border-gray-light group">
          <div className="flex justify-between gap-10 cursor-pointer" onClick={() => handleToggle(key)}>
            <div className="flex gap-5">
              <Text type="sub" className={cn('mt-1 text-gray-dark duration-300 group-hover:text-red', openTab === key && 'text-red')} text={key} />
              <Heading type="h2" className={cn('text-gray-dark duration-300 group-hover:text-red', openTab === key && 'text-red')} text={value.heading} />
            </div>

            <ArrowDownRight className={`fill-gray group-hover:rotate-45 group-hover:fill-red duration-300 ${openTab === key && 'rotate-45 fill-red'}`} />
          </div>

          {openTab === key && (
            <div className="flex flex-col gap-2 ml-10 text-gray-dark">
              {Object.values(value.list).map((item, index) => (
                <Text key={index} type="p1" text={item} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
