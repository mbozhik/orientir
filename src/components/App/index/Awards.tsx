import {cn} from '@/lib/utils'
import {containerStyles} from '~/Global/Container'
import {H1, H2, P} from '~/UI/Typography'

type Award = {
  award: string
  object: string
  status: string
}

const awardsConfig: {[key: number]: Award[]} = {
  25: [
    {award: 'CRE Moscow Awards', object: 'Генеральный директор ГК "Ориентир" Елена Бабенко в номинации "Персона года"', status: 'Номинант'},
    {award: 'CRE Moscow Awards', object: 'Распределительный центр для компании "Золотое яблоко" в парке "Ориентир Запад" в номинации "Крупный складской комплекс"', status: 'Номинант'},
  ],
  24: [
    {award: 'CRE Federal Awards', object: 'Фулфилмент-центр для компании OZON в г. Санкт-Петербург, Янино в номинации "Сделка года. Аренда индустриальной недвижимости"', status: 'Лауреат'},
    {award: 'CRE Federal Awards', object: 'Cтроительство и продажа складского комплекса OZON Янино компании PARUS в номинации "Сделка года. Купля-продажа"', status: 'Лауреат'},
    {award: 'CRE Moscow Awards', object: 'Складской комплекс компании VS Real Estate в парке "Ориентир Юг" в номинации "Складской комплекс" ', status: 'Лауреат'},
  ],
  23: [
    {award: 'Arendator Awards', object: 'Многофункциональный производственно-складской комплекс "Ориентир Юг" в номинации "Лучший складской комплекс"', status: 'Победитель'},
    {award: 'PROESTATE & TOBY Awards', object: 'Многофункциональный производственно-складской комплекс «Ориентир Юг» в номинации "Индустриальная недвижимость"', status: 'Победитель'},
    {award: 'CRE Moscow Awards', object: 'Многофункциональный производственно-складской комплекс "Ориентир Юг" в номинации "Крупный складской комплекс"', status: 'Лауреат'},
  ],
  22: [
    {award: 'CRE Moscow Awards', object: 'Фулфилмент-центр компании OZON в парке "Ориентир Запад" в номинации "Складской комплекс"', status: 'Победитель'},
    {award: 'CRE Moscow Awards', object: 'Пакетная сделка строительства BTS Фулфилмент-центров для OZON в парке "Ориентир Запад" в номинации "Сделка года. Аренда"', status: 'Победитель'},
    {award: 'Arendator Awards', object: 'Многофункциональный производственно-складской комплекс Ориентир Север-4 в номинации "Лучший складской комплекс"', status: 'Лауреат'},
  ],
  21: [
    {award: 'Рекорды рынка недвижимости', object: 'Парк "Ориентир Запад" в номинации «Логистический комплекс №1» в России', status: 'Победитель'},
    {award: 'CRE Moscow Awards', object: 'Фулфилмент-центр компании OZON в парке "Ориентир Запад" в номинации "Сделка года. Аренда"', status: 'Победитель'},
    {award: 'Arendator Awards', object: 'Парк "Ориентир Запад" в номинации "Лучший складской комплекс"', status: 'Победитель'},
    {award: 'CRE Federal Awards', object: 'Мультитемператрурный производственно-складской центр компании Лента в парке "Ориентир СПб" в номинации "Складской комплекс"', status: 'Победитель'},
    {award: 'PROESTATE & TOBY Awards', object: 'Мультитемператрурный производственно-складской центр компании Лента в номинации "Регионы. Индустриальная недвижимость"', status: 'Победитель'},
    {award: 'CRE Moscow Awards', object: 'Мультитемпературный распределительный центр компании X5 Retail Group торговой сети "Перекресток" в парке "Ориентир Север-4" в номинации "Сделка года. Аренда"', status: 'Лауреат'},
    {award: 'CRE Moscow Awards', object: 'Продажа индустриального парка «Ориентир Север - 1» компании PLT в номинации "Сделка года. Купля-прдажа"', status: 'Лауреат'},
    {award: 'CRE Moscow Awards', object: 'Мультитемпературный распределительный центр компании X5 Retail Group торговой сети "Перекресток" в парке "Ориентир Север-4" в номинации "Складской комплекс"', status: 'Лауреат'},
  ],
  20: [{award: 'Arendator Awards', object: 'Крупнейший фулфилмент-хаб ведущего онлайн ритейлера России компании OZON в парке Ориентир Север-1 в номинации "Лучший складской комплекс"', status: 'Победитель'}],
  19: [{award: 'CRE Moscow Awards', object: 'Фулфилмент-фабрика компании OZON в парке "Ориентир Север 1" в номинации "Сделка года. Аренда"', status: 'Победитель'}],
  18: [
    {award: 'CRE Moscow Awards', object: ' Мультитемпературный распределительный центр компании X5 Retail Group торговой сети Пятёрочка в парке "Ориентир Север-2" в номинации "Складской комплекс"', status: 'Победитель'},
    {award: 'CRE Moscow Awards', object: 'Мультитемпературный распределительный центр компании X5 Retail Group торговой сети Пятёрочка в парке "Ориентир Север-2" в номинации "Сделка года. Аренда"', status: 'Лауреат'},
    {award: 'CRE Moscow Awards', object: 'Генеральный директор ГК "Ориентир" Андрей Постников в номинации "Персона года"', status: 'Лауреат'},
  ],
  17: [
    {award: 'CRE Moscow Awards', object: `Мультитемпературный распределительный центр компании О'КЕЙ в парке "Ориентир Север-2" в номинации "Сделка года. Аренда"`, status: 'Победитель'},
    {award: 'CRE Moscow Awards', object: 'Офисно-складской комплекс "Ориентир Север-2", Блоки 1-3, 1-4, 1-5, 2-3 в номинации "Складской комплекс"', status: 'Лауреат'},
  ],
  16: [{award: 'CRE Moscow Awards', object: 'Офисно-складской комплекс "Индустриальный парк "Север" в номинации "Складской комплекс"', status: 'Победитель'}],
  15: [{award: 'CRE Moscow Awards', object: 'Крупнейший распределительный центр компании OBI в парке "Ориентир Север-2" в номинации "Сделка года. Аренда"', status: 'Лауреат'}],
  14: [{award: 'CRE Moscow Awards', object: 'Складской комплекс компании IKEA в парке "Ориентир Север-1" в номинации "Сделка года. Аренда"', status: 'Лауреат'}],
}

const headingStyles = 'text-[220px] xl:text-[150px] sm:text-2xl sm:text-gray leading-none font-bold'

export default function Awards() {
  const years = Object.entries(awardsConfig)
    .sort(([a], [b]) => Number(b) - Number(a))
    .map(([year, awards]) => ({
      year: Number(year),
      awards,
    }))

  return (
    <section data-section="awards-index" className="relative space-y-20 sm:space-y-7 pb-32 xl:pb-0">
      <H1 className="max-w-[50ch]">Награды</H1>

      <div className={cn('flex', containerStyles.min_width)}>
        <h1 className={cn(headingStyles, 'sticky top-52 self-start sm:hidden')}>20</h1>

        <div className="flex flex-col">
          {years.map((yearData, index) => (
            <div key={yearData.year} className="flex sm:flex-col">
              <div className={cn('grid grid-cols-10 justify-between', 'w-full sm:pb-3 sm:gap-0 sm:flex sm:flex-col border-b-2 border-gray-dark sm:border-gray-light', index !== 0 && 'pt-6', index === years.length - 1 && 'border-transparent')}>
                <h1 className={cn('col-span-3', headingStyles, 'sticky sm:static top-52 self-start sm:font-normal')}>
                  <span className="hidden sm:inline">20</span>
                  <span>{yearData.year}</span>
                </h1>

                <div className={cn('col-span-7', 'mt-2 space-y-10 sm:space-y-2 !pb-16 last:!pb-0 sm:!pb-4')}>
                  {yearData.awards.map((award: Award, awardIndex: number) => (
                    <div key={awardIndex}>
                      <H2>{award.award}</H2>

                      <div className="space-y-1">
                        <P className="max-w-[64ch]">{award.object}</P>

                        <P className="text-gray">{award.status}</P>
                      </div>
                    </div>
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
