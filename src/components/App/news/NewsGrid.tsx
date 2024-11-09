import {cn} from '@/lib/utils'
import {TNews} from '@/app/api/news/route'
import NewsCard from '~~/news/NewsCard'

type Props = {
  items: TNews[]
  className?: string
  limit?: number
}

export default function NewsGrid({items, className, limit}: Props) {
  const sortedNews = [...items].sort((a, b) => {
    const dateA = new Date(a.date.split('.').reverse().join('-'))
    const dateB = new Date(b.date.split('.').reverse().join('-'))
    return dateB.getTime() - dateA.getTime()
  })

  const displayedNews = limit ? sortedNews.slice(0, limit) : sortedNews

  return (
    <div className={cn('grid grid-cols-2 gap-3 sm:grid-cols-1', className)}>
      {displayedNews.map((newsItem, index) => (
        <NewsCard key={index} tag={newsItem.tag} heading={newsItem.heading} date={newsItem.date} slug={newsItem.slug} />
      ))}
    </div>
  )
}
