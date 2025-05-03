import type {BuilderNews, ContentMini, Picture, Quote} from '-/sanity.types'

import {containerStyles, sitePadding} from '~/Global/Container'
import {cn} from '@/lib/utils'

// import ContentBlock from '~~/news/slug/ContentNews/Content'
import ContentMiniBlock from '~~/news/slug/ContentNews/ContentMini'
import PictureBlock from '~~/news/slug/ContentNews/Picture'
import QuoteBlock from '~~/news/slug/ContentNews/Quote'

export const BLOCK_WIDTH = [containerStyles.min_width, 'sm:w-auto sm:mx-3']

export default function ContentNews({content}: {content: BuilderNews | null | undefined}) {
  if (!content || content.length === 0) {
    return null
  }

  return (
    <section data-section="content-news" className={cn('py-16 space-y-12 sm:py-10 sm:space-y-8', sitePadding)}>
      {content.map((block) => {
        const blockType = block._type

        switch (blockType) {
          // case 'content':
          //   return <ContentBlock key={block._key} block={block as Content} />
          case 'contentMini':
            return <ContentMiniBlock key={block._key} block={block as ContentMini} />
          case 'picture':
            return <PictureBlock key={block._key} block={block as Picture} />
          case 'quote':
            return <QuoteBlock key={block._key} block={block as Quote} />
          default:
            return null
        }
      })}
    </section>
  )
}
