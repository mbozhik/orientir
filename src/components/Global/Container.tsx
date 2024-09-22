import {cn} from '@/lib/utils'

interface Props {
  children: React.ReactNode
  className?: string
}

export const containerStyles = {
  width: 'mx-[6.5rem] sm:mx-3',
}
const {width} = containerStyles

export default function Container({children, className}: Props) {
  return <main className={cn(width, className)}>{children}</main>
}
