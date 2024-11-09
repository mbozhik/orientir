import {NextResponse} from 'next/server'
import {StaticImageData} from 'next/image'

import NewsOneImage from '$/news/1.jpg'
import NewsTwoImage from '$/news/2.jpg'
import NewsThreeImage from '$/news/3.jpg'
import NewsFourImage from '$/news/4.jpg'
import NewsFiveImage from '$/news/5.jpg'

export type TNews = {
  date: string
  tag: string
  heading: string
  slug: string
  image: StaticImageData
}

const news: TNews[] = [
  {
    date: '23.04.24',
    tag: 'CRE',
    heading: 'ГК Ориентир подтвердила звание лидера рынка в CRE League.',
    slug: 'zvanie-lidera-rynka',
    image: NewsOneImage,
  },
  {
    date: '18.03.24',
    tag: 'Ориентир',
    heading: 'Генподрядчик «СтройМонолитСервис» завершил строительство первой очереди промышленного технопарка Capital Group - «Алабушево» общей площадью 53600,4 кв. м.',
    slug: 'zavershil-stroitelstvo',
    image: NewsTwoImage,
  },
  {
    date: '23.02.24',
    tag: 'Ориентир',
    heading: 'ГК «Ориентир» объявляет о назначении нового генерального директора.',
    slug: 'obyavlyaet-o-naznachenii-novogo',
    image: NewsThreeImage,
  },
  {
    date: '10.01.24',
    tag: 'CRE',
    heading: 'Технопарк Ориентир вошел в топ-5 лучших промышленных парков России.',
    slug: 'tehnopark-top5',
    image: NewsFourImage,
  },
  {
    date: '15.12.23',
    tag: 'Ориентир',
    heading: 'Запущен новый проект для поддержания устойчивости производственных цепочек.',
    slug: 'noviy-proekt-podderzhaniya',
    image: NewsFiveImage,
  },
  {
    date: '05.11.23',
    tag: 'CRE',
    heading: 'Ориентир и CRE совместно организовали форум для обмена опытом в сфере логистики.',
    slug: 'forum-dlya-obmena-opytom',
    image: NewsOneImage,
  },
  {
    date: '30.10.23',
    tag: 'Ориентир',
    heading: 'Внедрение новых технологий для сокращения сроков строительства на 20%.',
    slug: 'novye-tehnologii-sokrasheniya',
    image: NewsTwoImage,
  },
  {
    date: '20.09.23',
    tag: 'CRE',
    heading: 'Аналитика CRE показала рост спроса на индустриальные парки в России.',
    slug: 'rost-sprosa-na-parki',
    image: NewsThreeImage,
  },
  {
    date: '01.09.23',
    tag: 'Ориентир',
    heading: 'Запуск программы повышения квалификации для молодых специалистов.',
    slug: 'programma-dlya-molodyh-spetsialistov',
    image: NewsFourImage,
  },
  {
    date: '18.08.23',
    tag: 'CRE',
    heading: 'Совместное исследование с CRE: основные тренды развития рынка в 2023 году.',
    slug: 'osnovnye-trendy-2023',
    image: NewsFiveImage,
  },
  {
    date: '05.07.23',
    tag: 'Ориентир',
    heading: 'Ориентир начинает работу по расширению производственных мощностей.',
    slug: 'nachinaet-rabotu-po-rasshireniyu',
    image: NewsOneImage,
  },
  {
    date: '22.06.23',
    tag: 'CRE',
    heading: 'Ориентир и CRE объявили о новом партнерстве для улучшения логистики.',
    slug: 'novoe-partnerstvo',
    image: NewsTwoImage,
  },
  {
    date: '10.05.23',
    tag: 'Ориентир',
    heading: 'Начата разработка нового индустриального комплекса в Московской области.',
    slug: 'razrabotka-ind-kompleksa',
    image: NewsThreeImage,
  },
  {
    date: '25.04.23',
    tag: 'CRE',
    heading: 'В CRE стартовал новый проект по цифровизации логистических процессов.',
    slug: 'proekt-tsifrovizatsii-logistiki',
    image: NewsFourImage,
  },
]

export async function GET(req: Request) {
  const {searchParams} = new URL(req.url)
  const slug = searchParams.get('slug')

  if (!slug) {
    return NextResponse.json(news)
  }

  const news_item = news.find((news_item) => news_item.slug === slug)

  if (!news_item) {
    return NextResponse.json({error: 'Project not found'}, {status: 404})
  }

  return NextResponse.json(news_item)
}
