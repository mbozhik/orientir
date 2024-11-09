import {cn} from '@/lib/utils'

import Container, {sitePadding} from '~/Global/Container'
import Heading from '~/UI/Heading'
import Text from '~/UI/Text'

export default function NewsPage() {
  return (
    <Container className={cn('space-y-36 xl:space-y-28 sm:space-y-20 mb-36 xl:mb-28 sm:mb-16', sitePadding)}>
      <section data-section="hero-news" className="flex items-start justify-between mt-10 sm:flex-col sm:gap-5 sm:mt-5">
        <Heading type="h1" text="Новости" />
        <Text type="h4" className="max-w-[50ch] font-bold sm:font-normal" text="Sed vestibulum non erat non semper. Nunc malesuada tristique scelerisque. Quisque porttitor tempor dapibus. Quisque in dignissim nisi, ac volutpat dolor." />
      </section>
    </Container>
  )
}
