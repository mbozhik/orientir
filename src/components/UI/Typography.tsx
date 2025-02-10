'use client'

import {cn} from '@/lib/utils'
import React from 'react'
import {motion} from 'framer-motion'
import {useMediaQuery} from '@/lib/use-media-query'

type Props = {
  type: TypoTypes
  className?: string
  children: React.ReactNode
  animated?: boolean
  by?: 'word' | 'line'
  offset?: number
}

export type TypoTypes = keyof typeof typoClasses

export const typoClasses = {
  h1: 'text-[50px] xl:text-[40px] sm:text-[35px] leading-[1.1] sm:leading-[1.2] font-bold', // Header H1 50
  h2: 'text-[36px] xl:text-4xl sm:text-2xl leading-[1.1] font-bold', // Header H2 36
  h3: 'text-[32px] xl:text-3xl sm:text-2xl leading-[1.1] font-bold', // Header H3 32
  h4: 'text-2xl xl:text-xl sm:leading-tight leading-[1.1]', // Header H4 24 Regular
  p: 'text-[20px] xl:text-xl leading-[1.1]', // Paragraph 20 Regular
  span: 'text-[18px] sm:text-lg leading-[1.1]', // Subscript 18 Regular
} as const

function Typography({type, className, children, animated = true, by = 'line', offset = 150}: Props) {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const Element = type

  const renderAnimatedTypography = () => {
    const textContent = React.Children.toArray(children)
      .filter((child) => typeof child === 'string')
      .join(' ')

    const segments = by === 'line' ? textContent.split('\n').filter(Boolean) : textContent.split(' ').filter(Boolean)

    const container = {
      hidden: {opacity: 0},
      visible: (i = 1) => ({
        opacity: 1,
        transition: {staggerChildren: 0.12, delayChildren: 0.04 * i},
      }),
    }

    const child = {
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          damping: by === 'word' ? 20 : 12,
          stiffness: by === 'word' ? 300 : 100,
        },
      },
      hidden: {
        opacity: 0,
        y: 20,
        transition: {
          type: 'spring',
          damping: by === 'word' ? 20 : 12,
          stiffness: by === 'word' ? 300 : 100,
        },
      },
    }

    const typoClass = typoClasses[type]
    const combinedClassName = `${typoClass} ${className || ''}`

    return (
      <motion.div
        style={{overflow: 'hidden'}}
        variants={container}
        initial="hidden"
        whileInView="visible" // Trigger animation when in view
        viewport={{once: true, margin: `-${isDesktop ? offset : '50'}px 0px`}}
        className={combinedClassName}
      >
        {React.createElement(
          type, // Use the `type` prop to dynamically create the element
          null,
          segments.map((segment, index) => (
            <motion.span key={index} variants={child} style={{display: 'inline-block', marginRight: by === 'word' ? '0.25em' : '0'}}>
              {segment}
              {by === 'word' && ' '}
            </motion.span>
          )),
        )}
      </motion.div>
    )
  }

  if (animated) {
    return renderAnimatedTypography()
  }

  return <Element className={cn(typoClasses[type], className)}>{children}</Element>
}

function createTypography(type: TypoTypes) {
  const Component = ({className, children, animated, by, offset}: Omit<Props, 'type'>) => (
    <Typography type={type} className={className} animated={animated} by={by} offset={offset}>
      {children}
    </Typography>
  )
  Component.displayName = `Typography(${type.toUpperCase()})`
  return Component
}

export const H1 = createTypography('h1')
export const H2 = createTypography('h2')
export const H3 = createTypography('h3')
export const H4 = createTypography('h4')
export const P = createTypography('p')
export const SPAN = createTypography('span')
