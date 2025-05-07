import {getPagesItem, getNews} from '@/sanity/lib/requests'

import {cn} from '@/lib/utils'

import Container, {containerStyles, sitePadding} from '~/Global/Container'
import {H1, H4} from '~/UI/Typography'
import NewsModule from '~~/news/NewsModule'

export const metadata = {
  title: 'Новости',
}

export default async function NewsPage() {
  const page = await getPagesItem('news')
  const news = await getNews()

  return (
    <Container className={cn('space-y-16 xl:space-y-10 sm:space-y-7 mb-36 xl:mb-24 sm:mb-16', sitePadding)}>
      <section data-section="hero-news" className="flex items-start justify-between mt-10 sm:flex-col sm:gap-5 sm:mt-5">
        <H1>{page?.hero?.heading}</H1>
        <H4 className="max-w-[50ch] font-bold sm:font-normal">{page?.hero?.caption}</H4>
      </section>

      <section data-section="module-news">
        <NewsModule items={news} className={containerStyles.min_width} />
      </section>
    </Container>
  )
}
