import Heading from '~/UI/Heading'
import Text from '~/UI/Text'

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
    <section data-section="resources-about" className="grid grid-cols-10 pt-16 sm:grid-cols-1 sm:gap-7 xl:pt-12 sm:pt-0">
      <Heading type="h1" className="col-span-5 xl:col-span-4" text="Ресурсы" />

      <div className="flex flex-col col-span-5 gap-10 xl:gap-7 sm:gap-5 xl:col-span-6">
        {resourcesData.map(({heading, text}, index) => (
          <div className="grid grid-cols-2 sm:grid-cols-1 pb-10 xl:pb-7 sm:pb-5 border-b-[1px] border-gray-light" key={index}>
            <Heading type="h2" className="text-blue" text={heading} />
            <Text type="p" className="max-w-[35ch]" text={text} />
          </div>
        ))}
      </div>
    </section>
  )
}
