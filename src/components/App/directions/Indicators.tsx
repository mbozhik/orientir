'use client'

import {cn} from '@/lib/utils'
import {useState} from 'react'

import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import {ArrowDownRight} from '~~/projects/Overview'

const indicatorsData = [
  {
    heading: 'Lorem ipsum',
    text: 'Sed vestibulum non erat non semper. Nunc malesuada tristique scelerisque. Quisque porttitor tempor dapibus. Quisque in dignissim nisi, ac volutpat dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla sed odio nec tortor aliquet rutrum vitae quis nibh. Ut aliquet quam vitae enim dictum volutpat sed at quam.',
  },
  {
    heading: 'Morbi dictum',
    text: 'Sed vestibulum non erat non semper. Nunc malesuada tristique scelerisque. Quisque porttitor tempor dapibus. Quisque in dignissim nisi, ac volutpat dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla sed odio nec tortor',
  },
  {
    heading: 'Dolor sit amet, consectetur',
    text: 'Sed vestibulum non erat non semper. Nunc malesuada tristique scelerisque. Quisque porttitor tempor dapibus. Quisque in dignissim nisi, ac volutpat dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla sed odio nec tortor',
  },
  {
    heading: 'Vivamus velit augue',
    text: 'Sed vestibulum non erat non semper. Nunc malesuada tristique scelerisque. Quisque porttitor tempor dapibus. Quisque in dignissim nisi, ac volutpat dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla sed odio nec tortor',
  },
  {
    heading: 'Cras magna nulla',
    text: 'Sed vestibulum non erat non semper. Nunc malesuada tristique scelerisque. Quisque porttitor tempor dapibus. Quisque in dignissim nisi, ac volutpat dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla sed odio nec tortor',
  },
  {
    heading: 'Praesent justo dolor',
    text: 'Sed vestibulum non erat non semper. Nunc malesuada tristique scelerisque. Quisque porttitor tempor dapibus. Quisque in dignissim nisi, ac volutpat dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla sed odio nec tortor',
  },
]

export default function Indicators() {
  const [activeTab, setActiveTab] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setActiveTab(activeTab === index ? null : index)
  }

  return (
    <section data-section="indicators-directions" className="grid grid-cols-2 gap-x-10 sm:grid-cols-1">
      <div>
        {indicatorsData.slice(0, 3).map((indicator, index) => {
          const actualIndex = index
          return (
            <div className="space-y-4" key={actualIndex}>
              <div className={cn('flex items-center justify-between px-1 py-5 group cursor-pointer', 'text-gray-dark hover:text-red duration-300', 'border-b-[1px] border-gray-light', activeTab === actualIndex && 'text-red')} onClick={() => handleToggle(actualIndex)}>
                <Heading type="h2" className="xl:text-3xl sm:text-[28px]" text={indicator.heading} />
                <ArrowDownRight className={cn('scale-[1.2] xl:scale-[0.9]', 'rotate-45 fill-gray-dark group-hover:rotate-90 group-hover:fill-red duration-300', activeTab === actualIndex && 'fill-red rotate-90')} />
              </div>

              {activeTab === actualIndex && (
                <div className="pb-5 sm:pb-3">
                  <Text type="p" text={indicator.text} />
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div>
        {indicatorsData.slice(3, 6).map((indicator, index) => {
          const actualIndex = index + 3
          return (
            <div className="space-y-4" key={actualIndex}>
              <div className={cn('flex items-center justify-between px-1 py-5 group cursor-pointer', 'text-gray-dark hover:text-red duration-300', 'border-b-[1px] border-gray-light', activeTab === actualIndex && 'text-red')} onClick={() => handleToggle(actualIndex)}>
                <Heading type="h2" className="xl:text-3xl sm:text-[28px]" text={indicator.heading} />
                <ArrowDownRight className={cn('scale-[1.2] xl:scale-[0.9]', 'rotate-45 fill-gray-dark group-hover:rotate-90 group-hover:fill-red duration-300', activeTab === actualIndex && 'fill-red rotate-90')} />
              </div>

              {activeTab === actualIndex && (
                <div className="pb-5 sm:pb-3">
                  <Text type="p" text={indicator.text} />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
