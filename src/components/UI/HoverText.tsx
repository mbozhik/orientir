'use client'

import React, {useRef, useEffect} from 'react'
import {motion, useAnimate, stagger} from 'framer-motion'
import {cn} from '@/lib/utils'

type Props = {
  children: React.ReactNode
  triggerRef?: React.RefObject<HTMLElement>
  className?: string
}

export default function HoverText({children, triggerRef, className}: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [, animate] = useAnimate()

  useEffect(() => {
    const targetRef = triggerRef || containerRef

    if (!containerRef.current || !targetRef.current) return

    const container = containerRef.current
    const originalElement = container.children[0] as HTMLElement
    const clonedElement = container.children[1] as HTMLElement

    const splitText = (element: HTMLElement) => {
      const text = element.innerText
      element.innerHTML = ''
      return Array.from(text).map((char) => {
        const span = document.createElement('span')
        span.style.display = 'inline-block'
        span.textContent = char === ' ' ? '\u00A0' : char
        element.appendChild(span)
        return span
      })
    }

    const originalChars = splitText(originalElement)
    const clonedChars = splitText(clonedElement)

    originalChars.forEach((char) => {
      char.style.transform = 'translateY(0%)'
    })
    clonedChars.forEach((char) => {
      char.style.transform = 'translateY(100%)'
    })

    animate(clonedChars, {y: '100%'}, {duration: 0})

    const handleMouseEnter = () => {
      animate(originalChars, {y: '-100%'}, {duration: 0.3, ease: 'easeInOut', delay: stagger(0.02)})
      animate(clonedChars, {y: '0%'}, {duration: 0.3, ease: 'easeInOut', delay: stagger(0.02)})
    }

    const handleMouseLeave = () => {
      animate(originalChars, {y: '0%'}, {duration: 0.3, ease: 'easeInOut', delay: stagger(0.02)})
      animate(clonedChars, {y: '100%'}, {duration: 0.3, ease: 'easeInOut', delay: stagger(0.02)})
    }

    const triggerElement = targetRef.current
    triggerElement.addEventListener('mouseenter', handleMouseEnter)
    triggerElement.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      triggerElement.removeEventListener('mouseenter', handleMouseEnter)
      triggerElement.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [triggerRef, animate])

  return (
    <div ref={containerRef} className="relative inline-block overflow-hidden">
      <motion.div className={className}>{children}</motion.div>
      <motion.div className={cn('absolute top-0 left-0', className)}>
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child, {
                ...child.props,
              })
            : child,
        )}
      </motion.div>
    </div>
  )
}
