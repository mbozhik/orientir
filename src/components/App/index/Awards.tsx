import {cn} from '@/lib/utils'
import {containerStyles} from '~/Global/Container'
import {H1, H2, P} from '~/UI/Typography'

const awardsConfig = [
  {year: 19, title: 'CRE Awards', description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, metus sit amet imperdiet dignissim, lectus nunc imperdiet leo, mattis efficitur metus orci at enim. Praesent laoreet nulla et est malesuada vestibulum. Aliquam sodales posuere nunc vel mattis.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, metus sit amet imperdiet dignissim, lectus nunc imperdiet leo, mattis efficitur metus orci at enim. Praesent laoreet nulla et est malesuada vestibulum. Aliquam sodales posuere nunc vel mattis.']},
  {year: 18, title: 'CRE Awards', description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, metus sit amet imperdiet dignissim, lectus nunc imperdiet leo, mattis efficitur metus orci at enim. Praesent laoreet nulla et est malesuada vestibulum. Aliquam sodales posuere nunc vel mattis.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, metus sit amet imperdiet dignissim, lectus nunc imperdiet leo, mattis efficitur metus orci at enim. Praesent laoreet nulla et est malesuada vestibulum. Aliquam sodales posuere nunc vel mattis.']},
  {year: 17, title: 'CRE Awards', description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, metus sit amet imperdiet dignissim, lectus nunc imperdiet leo, mattis efficitur metus orci at enim. Praesent laoreet nulla et est malesuada vestibulum. Aliquam sodales posuere nunc vel mattis.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, metus sit amet imperdiet dignissim, lectus nunc imperdiet leo, mattis efficitur metus orci at enim. Praesent laoreet nulla et est malesuada vestibulum. Aliquam sodales posuere nunc vel mattis.']},
  {year: 16, title: 'CRE Awards', description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, metus sit amet imperdiet dignissim, lectus nunc imperdiet leo, mattis efficitur metus orci at enim. Praesent laoreet nulla et est malesuada vestibulum. Aliquam sodales posuere nunc vel mattis.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, metus sit amet imperdiet dignissim, lectus nunc imperdiet leo, mattis efficitur metus orci at enim. Praesent laoreet nulla et est malesuada vestibulum. Aliquam sodales posuere nunc vel mattis.']},
  {year: 15, title: 'CRE Awards', description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, metus sit amet imperdiet dignissim, lectus nunc imperdiet leo, mattis efficitur metus orci at enim. Praesent laoreet nulla et est malesuada vestibulum. Aliquam sodales posuere nunc vel mattis.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper, metus sit amet imperdiet dignissim, lectus nunc imperdiet leo, mattis efficitur metus orci at enim. Praesent laoreet nulla et est malesuada vestibulum. Aliquam sodales posuere nunc vel mattis.']},
]

const headingStyles = 'text-[220px] xl:text-[150px] sm:text-2xl sm:text-gray leading-none font-bold'

export default function Awards() {
  return (
    <section data-section="awards-index" className="relative space-y-20 sm:space-y-7">
      <H1 className="max-w-[50ch]">Награды</H1>

      <div className={cn('flex', containerStyles.min_width)}>
        <h1 className={cn(headingStyles, 'sticky top-52 self-start sm:hidden')}>20</h1>

        <div className="flex flex-col">
          {awardsConfig.map((award, index) => (
            <div key={index} className="flex sm:flex-col">
              <div className={cn('flex justify-between w-full gap-32 sm:pb-3 sm:gap-0 sm:flex-col border-b-2 border-gray-dark sm:border-gray-light', index !== 0 && 'pt-6', index === awardsConfig.length - 1 && 'border-transparent')}>
                <h1 className={cn(headingStyles, 'sticky sm:static top-52 self-start sm:font-normal')}>
                  <span className="hidden sm:inline">20</span>
                  <span>{award.year}</span>
                </h1>

                <div className="mt-2 space-y-5 sm:space-y-2 pb-20 sm:pb-4">
                  <H2>{award.title}</H2>

                  {award.description.map((sentence, i) => (
                    <P key={i}>{sentence}</P>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
