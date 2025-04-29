'use client'

import type {TypeBlock} from '-/sanity.types'

import {PortableText} from '@portabletext/react'

import {getImageDimensions, type SanityImageSource} from '@sanity/asset-utils'
import {urlFor} from '@/sanity/lib/image'
import {cn} from '@/lib/utils'

import Link from 'next/link'
import Image from 'next/image'
import {typoClasses} from '~/UI/Typography'

const PortableImage = ({value}: {value: SanityImageSource}) => {
  const {width, height} = getImageDimensions(value)
  return (
    <div className="w-fit">
      <Image
        className="w-[50vw] sm:w-full object-contain place-self-center"
        quality={100}
        width={700}
        height={700}
        src={urlFor(value).url()}
        style={{
          aspectRatio: width / height,
        }}
        alt="image"
      />
    </div>
  )
}

export function PortableBlock({value, className}: {value: TypeBlock | null | undefined; className?: string}) {
  if (!value) return null

  return (
    <div className={cn(typoClasses.p, '!leading-[1.35]', 'space-y-7 pb-14', className)}>
      <PortableText
        components={{
          types: {
            image: PortableImage,
          },
          marks: {
            link: ({value, children}) => {
              const {href} = value
              return (
                <Link className="duration-200 text-blue underline underline-offset-[3px]" href={href} target="_blank" rel="noopener">
                  {children}
                </Link>
              )
            },
          },
        }}
        value={value}
      />
    </div>
  )
}
