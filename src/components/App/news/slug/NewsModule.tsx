'use client'

import {TNews} from '@/app/api/news/route'
import {useState} from 'react'

import NewsGrid from '~~/news/NewsGrid'
import {ArrowUpRight} from 'lucide-react'

type Props = {
  items: TNews[]
  className?: string
}

export default function NewsBlock({items, className}: Props) {
  const [displayLimit, setDisplayLimit] = useState(8)

  const handleLoadMore = () => {
    setDisplayLimit((prevLimit) => prevLimit + 8)
  }

  return (
    <div className={`space-y-8 sm:space-y-6 ${className}`}>
      <NewsGrid items={items} limit={displayLimit} />

      {displayLimit < items.length && (
        <button onClick={handleLoadMore} className="group mx-auto w-fit sm:w-full flex items-center sm:justify-center px-5 pt-2 pb-1.5 gap-1 border-[1px] border-gray">
          <span className="text-xl font-bold tracking-[-0.01em]">Показать больше</span>
          <ArrowUpRight className="duration-300 s-7 sm:s-6 group-hover:rotate-45" strokeWidth={1.25} />
        </button>
      )}
    </div>
  )
}
