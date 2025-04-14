'use client'

import {cn} from '@/lib/utils'
import {useMediaQuery} from '@/lib/use-media-query'

type MarqueeProps = {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children?: React.ReactNode
  vertical?: boolean
  repeat?: number
  [key: string]: React.ReactNode
}

export default function Marquee({className, reverse, pauseOnHover = false, children, vertical = false, repeat = 4, ...props}: MarqueeProps) {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <div
      {...props}
      className={cn(
        'group flex overflow-hidden px-2 [--duration:22s] [gap:var(--gap)]',
        isDesktop ? '[--gap:5rem]' : '[--gap:2rem]',
        {
          'flex-row': !vertical,
          'flex-col': vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn('flex shrink-0 justify-around [gap:var(--gap)]', {
              'animate-marquee flex-row': !vertical,
              'animate-marquee-vertical flex-col': vertical,
              'group-hover:[animation-play-state:paused]': pauseOnHover,
              '[animation-direction:reverse]': reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  )
}
