import {cn} from '@/lib/utils'

interface Props {
  type: 'h4' | 'sub' | 'p'
  text: string
  className?: string
}

export const textClasses = {
  h4: 'text-[26px] xl:text-xl sm:leading-tight', // Header H4 24 Regular
  sub: 'text-xl sm:text-lg', // Subscript 18 Regular
  p: 'text-[22px] xl:text-xl', // Paragraph 20 Regular
}

export default function Text({type, text, className}: Props) {
  return <p className={cn(textClasses[type], 'leading-[1.1]', className)} dangerouslySetInnerHTML={{__html: text || ''}} />
}
