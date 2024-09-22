import {cn} from '@/lib/utils'

interface Props {
  type: 'h4' | 'h5' | 'sub' | 'p1'
  text: string
  className?: string
}

export const textClasses = {
  h4: 'text-[26px] xl:text-xl sm:leading-tight',
  h5: '',
  sub: 'text-xl sm:text-lg font-light',
  p1: 'text-[22px] xl:text-xl',
}

export default function Text({type, text, className}: Props) {
  return <p className={cn(textClasses[type], 'leading-[1.1]', className)} dangerouslySetInnerHTML={{__html: text || ''}} />
}
