import {cn} from '@/lib/utils'
import {TProject} from '@/app/api/projects/route'

import Text from '~/UI/Text'

type Props = {
  project: TProject
  activeTab: number | null
  handleTabClick: (index: number) => void
}

export default function ResidentTabs({project, activeTab, handleTabClick}: Props) {
  return (
    <div className="flex flex-wrap max-w-[55vw] gap-1.5">
      {Object.values(project.residents).map(({name, status, type, area}, index) => (
        <div onClick={() => handleTabClick(index)} className={cn('p-2.5 flex flex-col gap-1.5 duration-200 cursor-pointer', activeTab === index ? 'bg-red text-background' : 'bg-background hover:bg-blue group hover:text-background')} key={index}>
          <div className={cn('flex justify-between gap-16 duration-200 text-gray group-hover:text-background font-extralight', activeTab === index && 'text-background')}>
            <Text type="sub" className="lowercase" text={status === 'Свободные земельные участки' ? 'Свободные ЗУ' : status} />
            {type && <Text type="sub" className="self-end" text={type} />}
          </div>

          <div className="flex justify-between gap-16">
            <Text type="h4" className="font-bold leading-none" text={name} />
            <Text type="sub" className="self-end font-bold" text={`${area} м2`} />
          </div>
        </div>
      ))}
    </div>
  )
}
