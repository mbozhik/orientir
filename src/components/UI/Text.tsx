import {cn} from '@/lib/utils'

interface Props {
  type: 'h4' | 'h5'
  text: string
  className?: string
}

export const textClasses = {
  h4: 'text-[26px] leading-[1.1]',
  h5: '',
}

export default function Text({type, text, className}: Props) {
  return <p className={cn(textClasses[type], className)} dangerouslySetInnerHTML={{__html: text || ''}} />
}
