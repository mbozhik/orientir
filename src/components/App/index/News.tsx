import {TNews} from '@/app/api/news/route'
import {getNews} from '@/utils/getData'

import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import {DetailsButton, ExpandButton} from '~/UI/Button'

export default async function News() {
  const news: TNews[] = await getNews()

  return (
    <section data-section="news-index" className="space-y-20 sm:space-y-7">
      <div className="flex justify-between">
        <Heading type="h1" text="Новости" />
        <ExpandButton href="/news" view="desktop" text="Все новости" />
      </div>

      <div className="w-[75%] xl:w-[89%] sm:w-full mx-auto grid grid-cols-2 gap-4 sm:grid-cols-1 sm:gap-3">
        {news.slice(0, 2).map((newsItem, index) => (
          <div className="flex flex-col justify-between px-10 border-[1px] py-9 sm:px-6 sm:py-5 gap-14 xl:gap-10 sm:gap-4 border-gray-light" key={index}>
            <div className="space-y-4 sm:space-y-2">
              <Text type="sub" className="font-bold text-gray-dark" text={newsItem.tag} />
              <Text type="h4" className="max-w-[40ch] line-clamp-3" text={newsItem.heading} />
            </div>

            <div className="flex items-center justify-between sm:flex-col sm:gap-3 sm:items-start">
              <Text type="sub" className="font-bold text-gray-dark" text={newsItem.date} />

              <DetailsButton href={`/news/${newsItem.slug}`} text="Читать дальше" />
            </div>
          </div>
        ))}
      </div>

      <ExpandButton href="/news" view="mobile" text="Все новости" />
    </section>
  )
}
