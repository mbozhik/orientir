import {cn} from '@/lib/utils'

interface Props {
  type: 'h1' | 'h2' | 'h3'
  text: string
  className?: string
}

export const headingClasses = {
  h1: 'text-[55px] xl:text-5xl sm:text-3xl', // Header H1 50
  h2: 'text-[40px] xl:text-4xl sm:text-2xl', // Header H2 36
  h3: 'text-4xl xl:text-3xl sm:text-2xl', // Header H3 32
}

export default function Heading({type, text, className}: Props) {
  const Heading = type

  return <Heading className={cn(headingClasses[type], 'font-bold leading-[1.1]', className)} dangerouslySetInnerHTML={{__html: text || ''}} />
}
