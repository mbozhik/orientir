import {cn} from '@/lib/utils'

type Props = {
  type: TypoTypes
  text: string
  className?: string
}

export type TypoTypes = keyof typeof typoClasses

export const typoClasses = {
  h1: 'text-[50px] xl:text-[40px] sm:text-[35px] leading-[1.1] sm:leading-[1.2]', // Header H1 50
  h2: 'text-[36px] xl:text-4xl sm:text-2xl leading-[1.1]', // Header H2 36
  h3: 'text-[32px] xl:text-3xl sm:text-2xl leading-[1.1]', // Header H3 32
  h4: 'text-2xl xl:text-xl sm:leading-tight leading-[1.1]', // Header H4 24 Regular
  p: 'text-[20px] xl:text-xl leading-[1.1]', // Paragraph 20 Regular
  span: 'text-[18px] sm:text-lg leading-[1.1]', // Subscript 18 Regular
} as const

export default function Typography({type, text, className}: Props) {
  const Element = type

  return <Element className={cn('font-bold', typoClasses[type], className)} dangerouslySetInnerHTML={{__html: text || ''}} />
}
