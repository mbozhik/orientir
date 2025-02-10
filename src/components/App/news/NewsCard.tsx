import {TNewsCard} from '@/app/api/news/route'

import {H4, SPAN} from '~/UI/Typography'
import {DetailsButton} from '~/UI/Button'

export default function NewsCard({tag, heading, date, slug}: TNewsCard) {
  return (
    <div className="flex flex-col justify-between px-10 border-[1px] py-9 xl:px-7 xl:py-6 sm:px-6 sm:py-5 gap-14 xl:gap-10 sm:gap-6 border-gray-light">
      <div className="space-y-4 sm:space-y-2">
        <SPAN className="font-bold text-gray-dark">{tag}</SPAN>
        <H4 className="max-w-[40ch] line-clamp-3">{heading}</H4>
      </div>

      <div className="flex items-center justify-between sm:flex-col sm:gap-2.5 sm:items-start">
        <SPAN className="font-bold text-gray">{date}</SPAN>
        <DetailsButton href={`/news/${slug}`} text="Читать дальше" />
      </div>
    </div>
  )
}
