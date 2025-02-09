import {TNews} from '@/app/api/news/route'
import {containerStyles} from '~/Global/Container'
import {getNews} from '@/utils/getData'

import Typography from '~/UI/Typography'
import {ExpandButton} from '~/UI/Button'
import NewsGrid from '~~/news/NewsGrid'

export default async function News() {
  const news: TNews[] = await getNews()

  return (
    <section data-section="news-index" className="space-y-20 sm:space-y-7">
      <div className="flex justify-between">
        <Typography type="h1" text="Новости" />
        <ExpandButton href="/news" view="desktop" text="Все новости" />
      </div>

      <NewsGrid items={news} limit={2} className={containerStyles.min_width} />

      <ExpandButton href="/news" view="mobile" text="Все новости" />
    </section>
  )
}
