import {cn} from '@/lib/utils'

interface Props {
  type: 'h1' | 'h2' | 'h3'
  text: string
  className?: string
}

export const headingClasses = {
  h1: 'text-[50px] xl:text-[40px] sm:text-[35px] leading-[1.1] sm:leading-[1.2]', // Header H1 50
  h2: 'text-[36px] xl:text-4xl sm:text-2xl leading-[1.1]', // Header H2 36
  h3: 'text-[32px] xl:text-3xl sm:text-2xl leading-[1.1]', // Header H3 32
}

export default function Heading({type, text, className}: Props) {
  const Heading = type

  return <Heading className={cn('font-bold', headingClasses[type], className)} dangerouslySetInnerHTML={{__html: text || ''}} />
}
