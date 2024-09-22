import {cn} from '@/lib/utils'

interface Props {
  type: 'h1' | 'h2'
  text: string
  className?: string
}

export const headingClasses = {
  h1: 'text-[55px] xl:text-5xl sm:text-3xl font-bold',
  h2: 'text-[40px] xl:text-4xl sm:text-2xl font-bold',
}

export default function Heading({type, text, className}: Props) {
  const Heading = type

  return <Heading className={cn(headingClasses[type], 'leading-[1.1]', className)} dangerouslySetInnerHTML={{__html: text || ''}} />
}
