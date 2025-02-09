import ResourcesImage from '$/about-resources.svg'

import Image from 'next/image'
import Typography from '~/UI/Typography'

const resourcesData = [
  {
    heading: 'Более 200 га',
    text: 'земли находится в собственности группы под реализацию текущих и перспективных проектов',
  },
  {
    heading: 'Более 500.000 м²',
    text: 'складских и производственных помещений построено',
  },
  {
    heading: 'Более 60 единиц',
    text: 'современной техники насчитывает собственный технопарк',
  },
  {
    heading: 'До 50% энергии',
    text: 'мы сберегаем, благодаря внедрению энергоэффективных технологий',
  },
]

export default function Resources() {
  return (
    <section data-section="resources-about" className="grid grid-cols-10 pt-16 sm:flex sm:flex-col sm:gap-7 xl:pt-12 sm:pt-0">
      <div className="col-span-5 xl:col-span-4 flex flex-col gap-12 xl:gap-24 sm:gap-4">
        <Typography type="h1" text="Ресурсы" />

        <div className="relative w-full h-[85%] xl:h-[65%] sm:h-[33vh] pr-20 sm:pr-0 overflow-hidden">
          <Image fill={true} quality={100} className="w-full object-contain sm:object-cover object-left" src={ResourcesImage} alt="Ориентир ресурсы" />
        </div>
      </div>

      <div className="flex flex-col col-span-5 gap-10 xl:gap-7 sm:gap-5 xl:col-span-6">
        {resourcesData.map(({heading, text}, index) => (
          <div className="grid grid-cols-2 sm:grid-cols-1 pb-10 xl:pb-7 sm:pb-5 border-b-[1px] border-gray-light" key={index}>
            <Typography type="h2" className="text-blue" text={heading} />
            <Typography type="p" className="max-w-[35ch]" text={text} />
          </div>
        ))}
      </div>
    </section>
  )
}
