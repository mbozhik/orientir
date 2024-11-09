import {TNews} from '@/app/api/news/route'
import {getNewsItem} from '@/utils/getData'

import Image from 'next/image'
import {containerStyles, sitePadding} from '~/Global/Container'
import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import {DetailsButton} from '~/UI/Button'
import NewsContent from '~~/news/slug/NewsContent'

export default async function ProjectPage({params}: {params: Promise<{slug: string}>}) {
  const slug = (await params).slug
  const news: TNews = await getNewsItem(slug)

  return (
    <>
      <section data-section="hero-news" className={`${containerStyles.width} ${sitePadding}`}>
        <div className="flex items-end justify-between mt-10 sm:flex-col sm:gap-5 sm:mt-5">
          <div className="space-y-5">
            <Heading type="h1" className="max-w-[30ch]" text={news.heading} />
            <Text type="sub" className="font-bold text-gray" text={news.date} />
          </div>

          <DetailsButton href={news.source} target="_blank" text="Источник" />
        </div>
      </section>

      <Image quality={100} priority={true} className="object-cover mt-12 sm:mt-10 sm:h-[35vh]" src={news.image} alt={news.heading} />

      <NewsContent content={news.content} quote={news.quote} extraImage={news.extra_image} />
    </>
  )
}
