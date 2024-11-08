import {cn} from '@/lib/utils'

type Props = {
  type: 'h4' | 'p' | 'sub'
  text: string
  className?: string
}

export const textClasses = {
  h4: 'text-2xl xl:text-xl sm:leading-tight leading-[1.1]', // Header H4 24 Regular
  p: 'text-[20px] xl:text-xl leading-[1.1]', // Paragraph 20 Regular
  sub: 'text-[18px] sm:text-lg leading-[1.1]', // Subscript 18 Regular
}

export default function Text({type, text, className}: Props) {
  return <p className={cn(textClasses[type], className)} dangerouslySetInnerHTML={{__html: text || ''}} />
}
