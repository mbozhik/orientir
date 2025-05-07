import type {PAGES_ITEM_QUERYResult} from '-/sanity.types'

import {cn} from '@/lib/utils'
import {containerStyles} from '~/Global/Container'
import {H1, H2, P} from '~/UI/Typography'

const headingStyles = 'text-[220px] xl:text-[150px] sm:text-2xl sm:text-gray leading-none font-bold'

export default function Awards({page}: {page: PAGES_ITEM_QUERYResult}) {
  const awardsData = page?.indexAwards || []

  const years = awardsData
    .map((yearData) => ({
      year: yearData.year ? Number(String(yearData.year).slice(-2)) : 0,
      awards: yearData.achievements || [],
      _key: yearData._key,
    }))
    .sort((a, b) => b.year - a.year)

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

                <div className={cn('col-span-7', 'mt-2 space-y-10 sm:space-y-2 pb-10 xl:pb-6 sm:pb-4')}>
                  {yearData.awards.map((award, idx) => (
                    <div key={idx}>
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
