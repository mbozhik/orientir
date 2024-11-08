import {NextResponse} from 'next/server'

export type TNews = {
  date: string
  tag: string
  heading: string
  slug: string
}

const news: TNews[] = [
  {
    date: '23.04.24',
    tag: 'CRE',
    heading: 'ГК Ориентир подтвердила звание лидера рынка в CRE League.',
    slug: 'zvanie-lidera-rynka',
  },
  {
    date: '18.03.24',
    tag: 'Ориентир',
    heading: 'Генподрядчик «СтройМонолитСервис» завершил строительство первой очереди промышленного технопарка Capital Group - «Алабушево» общей площадью 53600,4 кв. м.',
    slug: 'zavershil-stroitelstvo',
  },
  {
    date: '23.02.24',
    tag: 'Ориентир',
    heading: 'ГК «Ориентир» объявляет о назначении нового генерального директора',
    slug: 'obyavlyaet-o-naznachenii-novogo',
  },
]

export async function GET() {
  return NextResponse.json(news)
}
