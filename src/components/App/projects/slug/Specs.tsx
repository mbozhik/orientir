import Heading from '~/UI/Heading'
import Text from '~/UI/Text'

type Props = {
  heading: string
  caption: string
}

export default function Specs({heading = 'Характеристики', data}: {heading?: string; data: Props[]}) {
  return (
    <section data-section="specs-project" className="space-y-10">
      <Heading type="h1" className="sm:text-[33px]" text={heading} />

      <div className="grid grid-cols-2 sm:grid-cols-1 gap-y-10 xl:gap-y-8 px-44 xl:px-24 sm:px-0">
        {data.map((spec, index) => (
          <div key={index} className="space-y-10 xl:space-y-7 sm:space-y-5">
            <div className="flex flex-col justify-between gap-14 xl:gap-12 sm:gap-8 px-10 xl:px-7 sm:px-5 border-l-[1px] border-gray">
              <Heading type="h1" className="text-blue" text={spec.heading} />
              <Text type="p" className="max-w-[30ch] line-clamp-3" text={spec.caption} />
            </div>

            {[0, 1].includes(index) && <div className="w-[90%] mx-auto border-gray border-b-[1px]"></div>}
          </div>
        ))}
      </div>
    </section>
  )
}
