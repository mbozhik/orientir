import {cn} from '@/lib/utils'

import Link from 'next/link'
import Text from '~/UI/Text'
import {ArrowUpRight} from 'lucide-react'

type Props = {
  href: string
  text: string
  className?: string
  view?: 'desktop' | 'mobile' | null
  target?: '_self' | '_blank'
}

export function DetailsButton({href, text, className, target = '_self'}: Props) {
  return (
    <Link href={href} target={target} className={cn('group w-fit flex items-center gap-1 pb-0.5 xl:pb-0 duration-150 border-b-[2px] sm:border-b-[1px] border-foreground hover:border-transparent', className)}>
      <Text type="h4" className="tracking-[-0.01em] sm:text-xl duration-300 group-hover:text-blue" text={text} />
      <ArrowUpRight className="duration-300 s-8 sm:s-6 group-hover:rotate-45 group-hover:text-blue" strokeWidth={1.25} />
    </Link>
  )
}

export function ExpandButton({href, text, className, view = null}: Props) {
  const viewStyles = view === 'desktop' ? 'sm:hidden' : view === 'mobile' ? 'hidden sm:block' : ''

  return (
    <Link href={href} className={cn('group s-fit flex items-center gap-1 pb-0.5 xl:pb-0 duration-150 border-b-[2px] sm:border-b-[1px] border-foreground hover:border-transparent', viewStyles, className)}>
      <Text type="h4" className="font-bold text-nowrap xl:leading-[1.2]" text={text} />
    </Link>
  )
}
