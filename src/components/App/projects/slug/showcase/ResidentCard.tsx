import {TResident} from '@/app/api/projects/route'
import {X} from 'lucide-react'

// import Image from 'next/image'
import {H3, P, SPAN} from '~/UI/Typography'
import {cn} from '@/lib/utils'

export function CardDetails({label, value}: {label: string; value: string}) {
  return (
    <div className="flex flex-col">
      <SPAN className="text-base text-gray-dark font-extralight">{label}</SPAN>
      <P>{value}</P>
    </div>
  )
}

export default function ResidentCard({resident, isExtra, onClose}: {resident: TResident; isExtra: boolean; onClose: () => void}) {
  const {name, description, status, area, completion_time, extra_info} = resident

  return (
    <div className={cn('flex gap-3 p-2.5 bg-background', !isExtra ? 'max-w-[30vw] xl:max-w-[40vw]' : 'max-w-[45vw] xl:max-w-[50vw]')}>
      {/* <div className={`bg-background aspect-square ${!isExtra ? 'w-[30vw]' : 'w-[13vw]'}`}>
        <Image className="object-cover s-full" src={image} alt={name} />
      </div> */}

      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-10">
          <div className="col-span-5 pt-1.5 flex flex-col justify-between gap-2">
            <SPAN className="text-gray font-extralight">{status === 'Завершен' && completion_time ? `Завершен <span class="font-bold">за ${completion_time}</span>` : status === 'Свободные земельные участки' ? 'Свободные ЗУ' : status}</SPAN>
            <H3 className="leading-none">{name}</H3>
          </div>

          <div className="col-span-4 pt-1.5 flex flex-col gap-4 text-gray font-extralight">
            {/* {type && <SPAN className="!opacity-0">{type === 'ФФФ' ? 'Фулфилмент - фабрика' : type}</SPAN>} */}
            <SPAN>{`${area} м2`}</SPAN>
          </div>

          <X onClick={onClose} className="col-span-1 cursor-pointer justify-self-end hover:text-red hover:scale-[1.1] duration-200" />
        </div>

        {!isExtra && <P>{description}</P>}

        {isExtra && <div className="grid grid-cols-2 gap-2">{extra_info && extra_info.map((info, index) => <CardDetails key={index} label={info.label} value={info.text} />)}</div>}
      </div>
    </div>
  )
}
