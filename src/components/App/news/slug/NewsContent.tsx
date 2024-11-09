import {TNewsContent} from '@/app/api/news/route'
import {Fragment} from 'react'
import {cn} from '@/lib/utils'

import Image, {StaticImageData} from 'next/image'
import {containerStyles} from '@/components/Global/Container'
import Heading from '~/UI/Heading'
import Text from '~/UI/Text'

type Props = {
  content: TNewsContent[]
  extraImage?: StaticImageData
}

export default function NewsContent({content, extraImage}: Props) {
  return (
    <main className="my-32 space-y-36 xl:space-y-28 sm:space-y-20 xl:my-24 sm:mb-12">
      {content.map((contentItem, index) => (
        <Fragment key={index}>
          <section className={cn('grid grid-cols-20', containerStyles.width)} data-section={`news-block-${index + 1}`}>
            <div className="flex flex-col justify-between col-span-8">
              {contentItem.caption && <Heading type="h2" className="max-w-[35ch]" text={contentItem.caption} />}
              {contentItem.image && <Image quality={100} className={cn('object-cover w-full', !contentItem.caption && 'h-full')} src={contentItem.image} alt={contentItem.caption || 'Content image'} />}
            </div>

            <div className="col-span-2"></div>

            <div className="col-span-10 space-y-10">
              {contentItem.blocks.map((block, blockIndex) => (
                <div key={blockIndex} className="space-y-4">
                  {block.heading && <Heading type="h3" className="font-normal" text={block.heading} />}
                  <Text type="p" className="max-w-[65ch]" text={block.text} />
                </div>
              ))}
            </div>
          </section>

          {index === 0 && extraImage && <Image quality={100} className="object-cover w-full h-[85vh]" src={extraImage} alt="Extra image" />}
        </Fragment>
      ))}
    </main>
  )
}
