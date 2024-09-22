import {cn} from '@/lib/utils'

interface Props {
  type: 'h4' | 'h5' | 'h6'
  text: string
  className?: string
}

export const textClasses = {
  h4: 'text-[26px]',
  h5: '',
  h6: 'text-xl text-red font-light',
}

export default function Text({type, text, className}: Props) {
  return <p className={cn(textClasses[type], 'leading-[1.1]', className)} dangerouslySetInnerHTML={{__html: text || ''}} />
}
