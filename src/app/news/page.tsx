import {TNews} from '@/app/api/news/route'
import {getNews} from '@/utils/getData'
import {cn} from '@/lib/utils'

import Container, {containerStyles, sitePadding} from '~/Global/Container'
import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import NewsModule from '~~/news/NewsModule'

export default async function NewsPage() {
  const news: TNews[] = await getNews()

  return (
    <Container className={cn('space-y-16 xl:space-y-10 sm:space-y-7 mb-36 xl:mb-24 sm:mb-16', sitePadding)}>
      <section data-section="hero-news" className="flex items-start justify-between mt-10 sm:flex-col sm:gap-5 sm:mt-5">
        <Heading type="h1" text="Новости" />
        <Text type="h4" className="max-w-[50ch] font-bold sm:font-normal" text="Sed vestibulum non erat non semper. Nunc malesuada tristique scelerisque. Quisque porttitor tempor dapibus. Quisque in dignissim nisi, ac volutpat dolor." />
      </section>

      <section data-section="module-news">
        <NewsModule items={news} className={containerStyles.min_width} />
      </section>
    </Container>
  )
}
