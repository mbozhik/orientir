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
    heading: 'ГК «Ориентир» объявляет о назначении нового генерального директора.',
    slug: 'obyavlyaet-o-naznachenii-novogo',
  },
  {
    date: '10.01.24',
    tag: 'CRE',
    heading: 'Технопарк Ориентир вошел в топ-5 лучших промышленных парков России.',
    slug: 'tehnopark-top5',
  },
  {
    date: '15.12.23',
    tag: 'Ориентир',
    heading: 'Запущен новый проект для поддержания устойчивости производственных цепочек.',
    slug: 'noviy-proekt-podderzhaniya',
  },
  {
    date: '05.11.23',
    tag: 'CRE',
    heading: 'Ориентир и CRE совместно организовали форум для обмена опытом в сфере логистики.',
    slug: 'forum-dlya-obmena-opytom',
  },
  {
    date: '30.10.23',
    tag: 'Ориентир',
    heading: 'Внедрение новых технологий для сокращения сроков строительства на 20%.',
    slug: 'novye-tehnologii-sokrasheniya',
  },
  {
    date: '20.09.23',
    tag: 'CRE',
    heading: 'Аналитика CRE показала рост спроса на индустриальные парки в России.',
    slug: 'rost-sprosa-na-parki',
  },
  {
    date: '01.09.23',
    tag: 'Ориентир',
    heading: 'Запуск программы повышения квалификации для молодых специалистов.',
    slug: 'programma-dlya-molodyh-spetsialistov',
  },
  {
    date: '18.08.23',
    tag: 'CRE',
    heading: 'Совместное исследование с CRE: основные тренды развития рынка в 2023 году.',
    slug: 'osnovnye-trendy-2023',
  },
  {
    date: '05.07.23',
    tag: 'Ориентир',
    heading: 'Ориентир начинает работу по расширению производственных мощностей.',
    slug: 'nachinaet-rabotu-po-rasshireniyu',
  },
  {
    date: '22.06.23',
    tag: 'CRE',
    heading: 'Ориентир и CRE объявили о новом партнерстве для улучшения логистики.',
    slug: 'novoe-partnerstvo',
  },
  {
    date: '10.05.23',
    tag: 'Ориентир',
    heading: 'Начата разработка нового индустриального комплекса в Московской области.',
    slug: 'razrabotka-ind-kompleksa',
  },
  {
    date: '25.04.23',
    tag: 'CRE',
    heading: 'В CRE стартовал новый проект по цифровизации логистических процессов.',
    slug: 'proekt-tsifrovizatsii-logistiki',
  },
]

export async function GET() {
  return NextResponse.json(news)
}
