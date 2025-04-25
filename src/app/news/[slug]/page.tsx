import {containerStyles, sitePadding} from '~/Global/Container'

import {getNewsItem} from '@/sanity/lib/requests'
import {urlFor} from '@/sanity/lib/image'
import {cn} from '@/lib/utils'

import Image from 'next/image'
import HeroNews from '~~/news/slug/HeroNews'
import {PortableBlock} from '~/UI/PortableBlock'

export default async function NewsItemPage({params}: {params: Promise<{slug: string}>}) {
  const slug = (await params).slug
  const newsItem = await getNewsItem(slug)

  return (
    <>
      <HeroNews item={newsItem} className={cn(containerStyles.width, sitePadding)} />

      {newsItem?.cover && <Image quality={100} priority={true} className="object-cover mt-12 sm:mt-10 sm:h-[35vh] h-[80vh]" width={2000} height={100} src={urlFor(newsItem?.cover).url()} alt={newsItem?.cover?.alt || ''} />}

      <PortableBlock value={newsItem?.content} className={cn(containerStyles.width, sitePadding)} />
    </>
  )
}
