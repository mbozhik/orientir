import {TResident} from '@/app/api/projects/route'
import {X} from 'lucide-react'

import Image from 'next/image'
import Text from '~/UI/Text'
import Heading from '~/UI/Heading'

export function CardDetails({label, value}: {label: string; value: string}) {
  return (
    <div className="flex flex-col">
      <Text type="sub" className="text-base text-gray-dark font-extralight" text={label} />
      <Text type="p" text={value} />
    </div>
  )
}

export default function ResidentCard({resident, isExtra}: {resident: TResident; isExtra: boolean}) {
  const {name, description, status, type, area, image, completion_time, extra_info} = resident

  return (
    <div className="flex gap-3 p-2.5 max-w-[45vw] xl:max-w-[50vw] bg-background">
      <div className={`bg-background aspect-square ${!isExtra ? 'w-[30vw]' : 'w-[13vw]'}`}>
        <Image className="object-cover s-full" src={image} alt={name} />
      </div>

      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-10">
          <div className="col-span-5 pt-1.5 flex flex-col justify-between gap-2">
            <Text type="sub" className="text-gray font-extralight" text={status === 'Завершен' && completion_time ? `Завершен <span class="font-bold">за ${completion_time}</span>` : status === 'Свободные земельные участки' ? 'Свободные ЗУ' : status} />
            <Heading type="h3" className="leading-none" text={name} />
          </div>

          <div className="col-span-4 pt-1.5 flex flex-col gap-4 text-gray font-extralight">
            {type && <Text type="sub" text={type === 'ФФФ' ? 'Фулфилмент - фабрика' : type} />}
            <Text type="sub" text={`${area} м2`} />
          </div>

          <X className="col-span-1 cursor-pointer justify-self-end hover:text-red hover:scale-[1.1] duration-200" />
        </div>

        {!isExtra && <Text type="p" text={description} />}

        {isExtra && <div className="grid grid-cols-2 gap-2">{extra_info && extra_info.map((info, index) => <CardDetails key={index} label={info.label} value={info.text} />)}</div>}
      </div>
    </div>
  )
}
