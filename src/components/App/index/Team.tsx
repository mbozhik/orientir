import type {PAGES_ITEM_QUERYResult} from '-/sanity.types'
import type {SanityImageSource} from '@sanity/image-url/lib/types/types'
import {containerStyles} from '~/Global/Container'

import {cn} from '@/lib/utils'
import {urlFor} from '@/sanity/lib/image'

import Image from 'next/image'
import {H1, H3, H4, SPAN} from '~/UI/Typography'

function TeamCard({member}: {member: {name?: string; position?: string; photo?: SanityImageSource}}) {
  const {name, position, photo} = member

  return (
    <div className="flex flex-col gap-3 sm:gap-2 w-full">
      {photo && <Image quality={100} className={cn('block object-cover object-top h-full')} src={urlFor(photo).url()} alt={name || ''} width={1000} height={1000} />}

      <div className="space-y-1 xl:-space-y-1">
        <H3>{name}</H3>
        <SPAN className="text-gray xl:text-base sm:leading-[1.25]">{position}</SPAN>
      </div>
    </div>
  )
}

export default function Team({page}: {page: PAGES_ITEM_QUERYResult}) {
  return (
    <section data-section="team-index" className="space-y-14 sm:space-y-7">
      <div className="space-y-2">
        <H1 className="max-w-[50ch]">Команда</H1>
        <H4 className="hidden sm:block">{page?.indexTeam?.heading}</H4>
      </div>

      <div className={cn('flex flex-col gap-14 xl:gap-10 w-fit', containerStyles.min_width)}>
        <div className="grid grid-cols-3 gap-5 sm:gap-5 sm:flex sm:flex-col">
          {page?.indexTeam?.members?.slice(0, 1).map((member, index) => <TeamCard member={member} key={index} />)}

          <div className="col-span-2 space-y-7 sm:space-y-0">
            <H4 className="max-w-[55ch] sm:hidden">{page?.indexTeam?.heading}</H4>

            <div className="grid grid-cols-2 gap-5 sm:gap-5 sm:flex sm:flex-col">{page?.indexTeam?.members?.slice(1, 3).map((member, index) => <TeamCard member={member} key={index} />)}</div>
          </div>
        </div>

        <H4 className="hidden sm:block">{page?.indexTeam?.heading2}</H4>

        <div className="grid grid-cols-3 sm:grid-cols-1 self-end gap-5 sm:gap-5 w-full">{page?.indexTeam?.members?.slice(3).map((member, index) => <TeamCard member={member} key={index} />)}</div>
      </div>
    </section>
  )
}
