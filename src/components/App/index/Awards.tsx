import {Fragment} from 'react'
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

export default function Awards() {
  return (
    <section data-section="awards-index" className="space-y-20 sm:space-y-5">
      <Heading className="max-w-[50ch]" type="h1" text="Команда" />

      <div className="w-[75%] sm:w-full mx-auto grid grid-cols-2 gap-7 xl:gap-5 xl:pb-5 sm:grid-cols-1 border-b-2 border-gray-light">
        {awardsConfig.slice(0, 1).map((award, index) => (
          <Fragment key={index}>
            <div key={index}>
              <h1 className="text-[220px] xl:text-[150px] sm:text-9xl leading-none font-bold">{`20${award.year}`}</h1>
            </div>

            <div className="space-y-5">
              <Heading type="h2" text={award.title} />
              <Text type="p" text={award.description} />
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  )
}
