import {getNews} from '@/sanity/lib/requests'

import {cn} from '@/lib/utils'

import Container, {containerStyles, sitePadding} from '~/Global/Container'
import {H1, H4} from '~/UI/Typography'
import NewsModule from '~~/news/slug/NewsModule'

export default async function NewsPage() {
  const news = await getNews()

  return (
    <Container className={cn('space-y-16 xl:space-y-10 sm:space-y-7 mb-36 xl:mb-24 sm:mb-16', sitePadding)}>
      <section data-section="hero-news" className="flex items-start justify-between mt-10 sm:flex-col sm:gap-5 sm:mt-5">
        <H1>Новости</H1>
        <H4 className="max-w-[50ch] font-bold sm:font-normal">Sed vestibulum non erat non semper. Nunc malesuada tristique scelerisque. Quisque porttitor tempor dapibus. Quisque in dignissim nisi, ac volutpat dolor.</H4>
      </section>

      <section data-section="module-news">
        <NewsModule items={news} className={containerStyles.min_width} />
      </section>
    </Container>
  )
}
