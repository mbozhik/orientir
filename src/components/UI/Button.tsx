import {cn} from '@/lib/utils'

import Link from 'next/link'
import Text from '~/UI/Text'
import {ArrowUpRight} from 'lucide-react'

type Props = {
  href: string
  text: string
  className?: string
}

export function DetailsButton({href, text, className}: Props) {
  return (
    <Link href={href} className={cn('w-fit flex items-center gap-1 pb-0.5 border-b-[2px] sm:border-b-[1px] border-foreground hover:border-transparent', className)}>
      <Text type="h4" className="sm:text-lg" text={text} />
      <ArrowUpRight className="s-8 sm:s-6" strokeWidth={1.25} />
    </Link>
  )
}

export function ExpandButton({href, text, className}: Props) {
  return (
    <Link href={href} className={cn('group s-fit flex items-center gap-1 pb-0.5 duration-150 border-b-[2px] sm:border-b-[1px] border-foreground hover:border-transparent', className)}>
      <Text type="h4" className="font-bold text-nowrap" text={text} />
    </Link>
  )
}
