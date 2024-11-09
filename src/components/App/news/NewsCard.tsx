import {TNewsCard} from '@/app/api/news/route'

import Text from '~/UI/Text'
import {DetailsButton} from '~/UI/Button'

export default function NewsCard({tag, heading, date, slug}: TNewsCard) {
  return (
    <div className="flex flex-col justify-between px-10 border-[1px] py-9 xl:px-7 xl:py-6 sm:px-6 sm:py-5 gap-14 xl:gap-10 sm:gap-6 border-gray-light">
      <div className="space-y-4 sm:space-y-2">
        <Text type="sub" className="font-bold text-gray-dark" text={tag} />
        <Text type="h4" className="max-w-[40ch] line-clamp-3" text={heading} />
      </div>

      <div className="flex items-center justify-between sm:flex-col sm:gap-2.5 sm:items-start">
        <Text type="sub" className="font-bold text-gray" text={date} />
        <DetailsButton href={`/news/${slug}`} text="Читать дальше" />
      </div>
    </div>
  )
}
