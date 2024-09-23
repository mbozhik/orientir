import {cn} from '@/lib/utils'

interface Props {
  className?: string
  direction?: 'left' | 'right'
}

export function ArrowDownRight({className}: Props) {
  return (
    <svg className={cn('fill-gray', className)} width="39" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m22.96 31.84-1.98-1.98 12.463-12.464H.597v-2.792h32.846L20.98 2.141 22.96.16 38.799 16l-15.84 15.838Z" />
    </svg>
  )
}

export function ArrowX({className, direction = 'right'}: Props) {
  return (
    <svg className={cn('fill-gray', direction === 'right' && 'rotate-[180deg]', className)} width="18" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.578 30 18 27.308l-12.797-12.3L18 2.692 15.578 0 0 15.008 15.578 30Z" />
    </svg>
  )
}
