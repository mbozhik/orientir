import {X} from 'lucide-react'

import type {TypeResident} from '-/sanity.types'
import {STATUS_VALUES} from '@/sanity/schemaTypes/typeResident'

// import Image from 'next/image'
import {H3, P, SPAN} from '~/UI/Typography'
import {cn} from '@/lib/utils'

export function CardDetails({label, value}: {label: string | undefined; value: string | undefined}) {
  return (
    <div className="flex flex-col">
      <SPAN className="text-base text-gray-dark font-extralight">{label}</SPAN>
      <P className="max-w-[30ch] !leading-[1.05]">{value}</P>
    </div>
  )
}

export default function ResidentCard({resident, isExtra, onClose}: {resident: TypeResident; isExtra: boolean; onClose: () => void}) {
  const {naming, description, type, status, area, completion_time, info} = resident

  return (
    <div className={cn('flex gap-3 p-2.5 bg-background', !isExtra ? 'max-w-[30vw] xl:max-w-[40vw]' : 'max-w-[45vw] xl:max-w-[50vw]')}>
      {/* <div className={`bg-background aspect-square ${!isExtra ? 'w-[30vw]' : 'w-[13vw]'}`}>
        <Image className="object-cover s-full" src={image} alt={name} />
      </div> */}

      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-10">
          <div className="col-span-5 pt-1.5 flex flex-col justify-between gap-2">
            <div className="inline-flex gap-1">
              <SPAN className="text-gray font-extralight">{status === 'completed' && completion_time && status ? STATUS_VALUES[status] : status}</SPAN>
              {status === 'completed' && completion_time && <SPAN className="font-bold text-gray">{completion_time}</SPAN>}
            </div>

            <H3 className="leading-none">{naming}</H3>
          </div>

          <div className="col-span-4 pt-1.5 flex flex-col gap-2 text-gray font-extralight">
            {area && <SPAN>{`${area} м2`}</SPAN>}
            {type && <SPAN>{type}</SPAN>}
          </div>

          <X onClick={onClose} className="col-span-1 cursor-pointer justify-self-end hover:text-red hover:scale-[1.1] duration-200" />
        </div>

        {description && (
          <div className="space-y-2">
            {Array.isArray(description) ? (
              description.map((text, index) => (
                <P key={index}>{text}</P> // is array
              ))
            ) : (
              <P>{description}</P>
            )}
          </div>
        )}

        {isExtra && (
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {info && (
              <>
                <div className="space-y-2">
                  {info.slice(0, Math.ceil(info.length / 2)).map((info, index) => (
                    <CardDetails key={index} label={info.param} value={info.value} />
                  ))}
                </div>
                <div className="space-y-2">
                  {info.slice(Math.ceil(info.length / 2)).map((info, index) => (
                    <CardDetails key={index} label={info.param} value={info.value} />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
