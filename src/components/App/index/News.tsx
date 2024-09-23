import {ArrowUpRight} from 'lucide-react'
import Link from 'next/link'
import Heading from '~/UI/Heading'
import Text from '~/UI/Text'

const newsConfig = [
  {
    subscript: 'CRE',
    text: 'ГК Ориентир подтвердила звание лидера рынка в CRE League.',
    date: '23.04.2024',
    link: '/news/1',
  },
  {
    subscript: 'Ориентир',
    text: 'Генподрядчик «СтройМонолитСервис» завершил строительство первой очереди промышленного технопарка Capital Group - «Алабушево» общей площадью 53600,4 кв. м.',
    date: '18.03.2024',
    link: '/news/2',
  },
  {
    subscript: 'Ориентир',
    text: 'ГК «Ориентир» объявляет о назначении нового генерального директора',
    date: '23.02.2024',
    link: '/news/3',
  },
]

export default function News() {
  return (
    <section data-section="news-index" className="space-y-20 sm:space-y-5">
      <div className="flex justify-between">
        <Heading className="max-w-[50ch]" type="h1" text="Новости" />

        <Link className="text-end sm:hidden" href="/news">
          <Text type="h4" className="font-bold underline hover:no-underline underline-offset-[8px]" text="Все новости" />
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-5 sm:grid-cols-1 sm:gap-3">
        {newsConfig.map((newsItem, index) => (
          <div className="flex flex-col justify-between p-10 border-2 gap-14 xl:p-8 sm:p-6 xl:gap-10 sm:gap-6 border-gray-light" key={index}>
            <div className="space-y-4">
              <Text type="sub" className="font-bold text-gray-dark" text={newsItem.subscript} />
              <Text type="h4" className="max-w-[40ch]" text={newsItem.text} />
            </div>

            <div className="flex items-center justify-between sm:flex-col sm:gap-3 sm:items-start">
              <Text type="sub" className="font-bold text-gray-dark" text={newsItem.date} />

              <Link href={newsItem.link} className="group inline-flex items-center gap-2 pb-1 border-b-[3px] border-foreground hover:border-blue">
                <Text type="h4" className="duration-200 group-hover:text-blue" text="Читать дальше" />
                <ArrowUpRight className="duration-200 group-hover:text-blue" size={35} strokeWidth={1.25} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Link className="hidden sm:block" href="/news">
        <Text type="h4" className="font-bold underline hover:no-underline underline-offset-[8px]" text="Все новости" />
      </Link>
    </section>
  )
}
