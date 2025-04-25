import type {NEWS_QUERYResult} from '-/sanity.types'

import {cn} from '@/lib/utils'
import NewsCard from '~~/news/NewsCard'

export default function NewsGrid({items, className, limit}: {items: NEWS_QUERYResult; className?: string; limit?: number}) {
  const sortedNews = [...items].sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''))

  const displayedNews = limit ? sortedNews.slice(0, limit) : sortedNews

  return (
    <div className={cn('grid grid-cols-2 gap-3 sm:grid-cols-1', className)}>
      {displayedNews.map((news, index) => (
        <NewsCard card={news} key={index} />
      ))}
    </div>
  )
}
