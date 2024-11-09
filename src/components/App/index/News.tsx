import {TNews} from '@/app/api/news/route'
import {containerStyles} from '~/Global/Container'
import {getNews} from '@/utils/getData'
import {cn} from '@/lib/utils'

import Heading from '~/UI/Heading'
import {ExpandButton} from '~/UI/Button'
import NewsCard from '~~/news/NewsCard'

export default async function News() {
  const news: TNews[] = await getNews()

  return (
    <section data-section="news-index" className="space-y-20 sm:space-y-7">
      <div className="flex justify-between">
        <Heading type="h1" text="Новости" />
        <ExpandButton href="/news" view="desktop" text="Все новости" />
      </div>

      <div className={cn('grid grid-cols-2 gap-3 sm:grid-cols-1', containerStyles.min_width)}>
        {news.slice(0, 2).map((newsItem, index) => (
          <NewsCard key={index} tag={newsItem.tag} heading={newsItem.heading} date={newsItem.date} slug={newsItem.slug} />
        ))}
      </div>

      <ExpandButton href="/news" view="mobile" text="Все новости" />
    </section>
  )
}
