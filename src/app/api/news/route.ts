import {NextResponse} from 'next/server'
import {StaticImageData} from 'next/image'

import NewsOneImage from '$/news/1.jpg'
import NewsTwoImage from '$/news/2.jpg'
import NewsThreeImage from '$/news/3.jpg'
import NewsFourImage from '$/news/4.jpg'
import NewsFiveImage from '$/news/5.jpg'

import NewsExtraImage from '$/news/extra.jpg'
import NewsOptionalOneImage from '$/news/optional-1.jpg'
import NewsOptionalTwoImage from '$/news/optional-2.jpg'
import NewsOptionalThreeImage from '$/news/optional-3.jpg'
import NewsPersonImage from '$/news/person.jpg'

export type TNewsContent = {
  caption?: string
  image?: StaticImageData
  blocks: Array<{
    heading?: string
    text: string
  }>
}

export type TNewsQuote = {
  speech: string
  person: string
  position: string
  image: StaticImageData
}

export type TNews = {
  date: string
  tag: string
  heading: string
  slug: string
  image: StaticImageData
  extra_image?: StaticImageData
  content: TNewsContent[]
  quote: TNewsQuote
}

const itemQuote: TNewsQuote = {
  speech: 'Praesent ac aliquet lorem. Morbi feugiat aliquam ligula, et vestibulum ligula hendrerit vitae. Sed ex lorem, pulvinar sed auctor sit amet, molestie a nibh. Ut euismod nisl arcu, sed placerat nulla volutpat aliquet.',
  person: 'Сидоров Михаил Сергеевич',
  position: 'главный инженер проектного бюро "СтройТехПроект"',
  image: NewsPersonImage,
}

const itemContent: TNewsContent[] = [
  {
    caption: 'Lorem ipsum dolor sit amet consectetur. Semper euismod arcu lorem nibh ut sem ac in fermentum. Adipiscing pellentesque phasellus aliquet quis morbi nunc cursus sed ac. Faucibus mi quam maecenas quis. ',
    image: NewsOptionalOneImage,
    blocks: [
      {
        heading: 'Adipiscing pellentesque',
        text: 'Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
      },
      {
        heading: 'Vorem ipsum',
        text: 'Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.',
      },
      {
        heading: 'Aliquam erat volutpat',
        text: 'Vestibulum dictum ultrices elit a luctus. Sed in ante ut leo congue posuere at sit amet ligula. Pellentesque eget augue nec nisl sodales blandit sed et sem. Aenean quis finibus arcu, in hendrerit purus. Praesent ac aliquet lorem. Morbi feugiat aliquam ligula, et vestibulum ligula hendrerit vitae. Sed ex lorem, pulvinar sed auctor sit amet, molestie a nibh. Ut euismod nisl arcu, sed placerat nulla volutpat aliquet. Ut id convallis nisl. Ut mauris leo, lacinia sed elit id, sagittis rhoncus odio. Pellentesque sapien libero, lobortis a placerat et, malesuada sit amet dui. Nam sem sapien, congue eu rutrum nec, pellentesque eget ligula.',
      },
    ],
  },
  {
    image: NewsOptionalTwoImage,
    blocks: [
      {
        text: 'Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
      },
      {
        text: 'Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.',
      },
      {
        text: 'Vestibulum dictum ultrices elit a luctus. Sed in ante ut leo congue posuere at sit amet ligula. Pellentesque eget augue nec nisl sodales blandit sed et sem. Aenean quis finibus arcu, in hendrerit purus. Praesent ac aliquet lorem. Morbi feugiat aliquam ligula, et vestibulum ligula hendrerit vitae. Sed ex lorem, pulvinar sed auctor sit amet, molestie a nibh. Ut euismod nisl arcu, sed placerat nulla volutpat aliquet. Ut id convallis nisl. Ut mauris leo, lacinia sed elit id, sagittis rhoncus odio. Pellentesque sapien libero, lobortis a placerat et, malesuada sit amet dui. Nam sem sapien, congue eu rutrum nec, pellentesque eget ligula.',
      },
    ],
  },
  {
    image: NewsOptionalThreeImage,
    blocks: [
      {
        text: 'Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
      },
      {
        heading: 'Vorem ipsum',
        text: 'Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.',
      },
    ],
  },
]

const news: TNews[] = [
  {
    date: '23.04.24',
    tag: 'CRE',
    heading: 'ГК Ориентир подтвердила звание лидера рынка в CRE League.',
    slug: 'zvanie-lidera-rynka',
    image: NewsOneImage,
    extra_image: NewsExtraImage,
    content: itemContent,
    quote: itemQuote,
  },
  {
    date: '18.03.24',
    tag: 'Ориентир',
    heading: 'Генподрядчик «СтройМонолитСервис» завершил строительство первой очереди промышленного технопарка Capital Group - «Алабушево» общей площадью 53600,4 кв. м.',
    slug: 'zavershil-stroitelstvo',
    image: NewsTwoImage,
    extra_image: NewsExtraImage,
    content: itemContent,
    quote: itemQuote,
  },
  {
    date: '23.02.24',
    tag: 'Ориентир',
    heading: 'ГК «Ориентир» объявляет о назначении нового генерального директора.',
    slug: 'obyavlyaet-o-naznachenii-novogo',
    image: NewsThreeImage,
    extra_image: NewsExtraImage,
    content: itemContent,
    quote: itemQuote,
  },
  {
    date: '10.01.24',
    tag: 'CRE',
    heading: 'Технопарк Ориентир вошел в топ-5 лучших промышленных парков России.',
    slug: 'tehnopark-top5',
    image: NewsFourImage,
    extra_image: NewsExtraImage,
    content: itemContent,
    quote: itemQuote,
  },
  {
    date: '15.12.23',
    tag: 'Ориентир',
    heading: 'Запущен новый проект для поддержания устойчивости производственных цепочек.',
    slug: 'noviy-proekt-podderzhaniya',
    image: NewsFiveImage,
    extra_image: NewsExtraImage,
    content: itemContent,
    quote: itemQuote,
  },
  {
    date: '05.11.23',
    tag: 'CRE',
    heading: 'Ориентир и CRE совместно организовали форум для обмена опытом в сфере логистики.',
    slug: 'forum-dlya-obmena-opytom',
    image: NewsOneImage,
    extra_image: NewsExtraImage,
    content: itemContent,
    quote: itemQuote,
  },
  {
    date: '30.10.23',
    tag: 'Ориентир',
    heading: 'Внедрение новых технологий для сокращения сроков строительства на 20%.',
    slug: 'novye-tehnologii-sokrasheniya',
    image: NewsTwoImage,
    extra_image: NewsExtraImage,
    content: itemContent,
    quote: itemQuote,
  },
  {
    date: '20.09.23',
    tag: 'CRE',
    heading: 'Аналитика CRE показала рост спроса на индустриальные парки в России.',
    slug: 'rost-sprosa-na-parki',
    image: NewsThreeImage,
    extra_image: NewsExtraImage,
    content: itemContent,
    quote: itemQuote,
  },
  {
    date: '01.09.23',
    tag: 'Ориентир',
    heading: 'Запуск программы повышения квалификации для молодых специалистов.',
    slug: 'programma-dlya-molodyh-spetsialistov',
    image: NewsFourImage,
    extra_image: NewsExtraImage,
    content: itemContent,
    quote: itemQuote,
  },
  {
    date: '18.08.23',
    tag: 'CRE',
    heading: 'Совместное исследование с CRE: основные тренды развития рынка в 2023 году.',
    slug: 'osnovnye-trendy-2023',
    image: NewsFiveImage,
    extra_image: NewsExtraImage,
    content: itemContent,
    quote: itemQuote,
  },
  {
    date: '05.07.23',
    tag: 'Ориентир',
    heading: 'Ориентир начинает работу по расширению производственных мощностей.',
    slug: 'nachinaet-rabotu-po-rasshireniyu',
    image: NewsOneImage,
    extra_image: NewsExtraImage,
    content: itemContent,
    quote: itemQuote,
  },
  {
    date: '22.06.23',
    tag: 'CRE',
    heading: 'Ориентир и CRE объявили о новом партнерстве для улучшения логистики.',
    slug: 'novoe-partnerstvo',
    image: NewsTwoImage,
    extra_image: NewsExtraImage,
    content: itemContent,
    quote: itemQuote,
  },
  {
    date: '10.05.23',
    tag: 'Ориентир',
    heading: 'Начата разработка нового индустриального комплекса в Московской области.',
    slug: 'razrabotka-ind-kompleksa',
    image: NewsThreeImage,
    extra_image: NewsExtraImage,
    content: itemContent,
    quote: itemQuote,
  },
  {
    date: '25.04.23',
    tag: 'CRE',
    heading: 'В CRE стартовал новый проект по цифровизации логистических процессов.',
    slug: 'proekt-tsifrovizatsii-logistiki',
    image: NewsFourImage,
    extra_image: NewsExtraImage,
    content: itemContent,
    quote: itemQuote,
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
