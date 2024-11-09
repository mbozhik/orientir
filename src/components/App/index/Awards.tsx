import {cn} from '@/lib/utils'
import {isMobile} from '@bozzhik/is-mobile'
import {containerStyles} from '~/Global/Container'

import Heading from '~/UI/Heading'
import Text from '~/UI/Text'

const awardsConfig = [
  {
    year: 19,
    title: 'CRE Awards',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, metus sit amet imperdiet dignissim, lectus nunc imperdiet leo, mattis efficitur metus orci at enim. Praesent laoreet nulla et est malesuada vestibulum. Aliquam sodales posuere nunc vel mattis.',
  },
  {
    year: 18,
    title: 'CRE Awards',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, metus sit amet imperdiet dignissim, lectus nunc imperdiet leo, mattis efficitur metus orci at enim. Praesent laoreet nulla et est malesuada vestibulum. Aliquam sodales posuere nunc vel mattis.',
  },
]

const headingStyles = 'text-[220px] xl:text-[150px] sm:text-2xl sm:text-gray leading-none font-bold'

export default function Awards() {
  return (
    <section data-section="awards-index" className="space-y-20 sm:space-y-7">
      <Heading className="max-w-[50ch]" type="h1" text="Награды" />

      {(isMobile ? awardsConfig : awardsConfig.slice(0, 1)).map((award, index) => (
        <div key={index} className={cn('flex sm:flex-col', containerStyles.min_width)}>
          <h1 className={cn(headingStyles, 'sm:hidden')}>20</h1>

          <div className="flex justify-between w-full gap-32 border-b-2 sm:pb-3 sm:gap-0 sm:flex-col border-gray-light">
            <h1 className={cn(headingStyles, 'sm:inline-flex')}>
              <span className="hidden sm:inline">20</span> {award.year}
            </h1>

            <div className="mt-2 space-y-5 sm:space-y-0.5">
              <Heading type="h2" text={award.title} />
              <Text type="p" text={award.description} />
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
