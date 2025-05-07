import type {PAGES_ITEM_QUERYResult} from '-/sanity.types'

import {urlFor} from '@/sanity/lib/image'

import Image from 'next/image'
import {H1, H2, P} from '~/UI/Typography'

export default function Resources({page}: {page: PAGES_ITEM_QUERYResult}) {
  return (
    <section data-section="resources-about" className="grid grid-cols-10 pt-16 sm:flex sm:flex-col sm:gap-7 xl:pt-12 sm:pt-0">
      <div className="col-span-5 xl:col-span-4 flex flex-col gap-12 xl:gap-24 sm:gap-4">
        <H1>{page?.aboutResources?.heading}</H1>

        <div className="relative w-full h-[85%] xl:h-[65%] sm:h-[33vh] pr-20 sm:pr-0 overflow-hidden">{page?.aboutResources?.image && <Image fill={true} quality={100} className="w-full object-contain sm:object-cover object-left" src={urlFor(page?.aboutResources?.image).url()} alt="" />}</div>
      </div>

      <div className="flex flex-col col-span-5 gap-10 xl:gap-7 sm:gap-5 xl:col-span-6">
        {page?.aboutResources?.resources?.map((resource, index) => (
          <div className="grid grid-cols-2 sm:grid-cols-1 pb-10 xl:pb-7 sm:pb-5 border-b-[1px] border-gray-light" key={index}>
            <H2 className="text-blue">{resource.param}</H2>
            <P className="max-w-[35ch]">{resource.value}</P>
          </div>
        ))}
      </div>
    </section>
  )
}
