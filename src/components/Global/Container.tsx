import {cn} from '@/lib/utils'

interface Props {
  children: React.ReactNode
  className?: string
}

export const sitePadding = 'pt-[88px] xl:pt-16'

export const containerStyles = {
  width: 'mx-[6.25rem] xl:mx-[4rem] sm:mx-3',
}
const {width} = containerStyles

export default function Container({children, className}: Props) {
  return <main className={cn(width, className)}>{children}</main>
}
