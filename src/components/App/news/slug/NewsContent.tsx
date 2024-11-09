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
    <main className="my-32 space-y-36 xl:space-y-28 sm:space-y-14 xl:my-24 sm:my-12">
      {content.map((contentItem, index) => (
        <Fragment key={index}>
          <section className={cn('grid grid-cols-20 sm:grid-cols-1 sm:gap-y-10', containerStyles.width, !contentItem.caption && 'sm:flex sm:flex-col-reverse')} data-section={`news-block-${index + 1}`}>
            <div className="flex flex-col justify-between col-span-8 sm:gap-7">
              {contentItem.caption && <Heading type="h2" className="xl:text-[34px] max-w-[35ch] sm:leading-[1.2]" text={contentItem.caption} />}
              {contentItem.image && <Image quality={100} className={cn('object-cover w-full', !contentItem.caption && 'h-full max-h-[70vh] xl:max-h-[50vh]')} src={contentItem.image} alt={contentItem.caption || 'Content image'} />}
            </div>

            <div className="col-span-2 sm:hidden"></div>

            <div className="flex flex-col col-span-10 gap-10 xl:gap-7 sm:flex-col-reverse">
              {contentItem.blocks.map((block, blockIndex) => (
                <div key={blockIndex} className="space-y-4 xl:space-y-2.5">
                  {block.heading && <Heading type="h3" className="font-normal" text={block.heading} />}
                  <Text type="p" className="max-w-[65ch]" text={block.text} />
                </div>
              ))}
            </div>
          </section>

          {index === 0 && extraImage && <Image quality={100} className="object-cover w-full h-[85vh] sm:h-[40vh]" src={extraImage} alt="Extra image" />}
        </Fragment>
      ))}
    </main>
  )
}
