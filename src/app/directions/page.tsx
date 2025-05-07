import {getPagesItem, getDirections} from '@/sanity/lib/requests'

import {urlFor} from '@/sanity/lib/image'

import Image from 'next/image'
import {H1, H2} from '~/UI/Typography'

import Container, {containerStyles, sitePadding} from '~/Global/Container'
import Details from '~~/directions/Details'
import Specs from '~~/projects/slug/Specs'

export const metadata = {
  title: 'Направления',
}

export default async function DirectionsPage() {
  const page = await getPagesItem('directions')
  const directions = await getDirections()

  return (
    <>
      <section data-section="hero-directions" className={`${containerStyles.width} ${sitePadding}`}>
        <div className="flex items-start justify-between mt-10 sm:flex-col sm:gap-5 sm:mt-5">
          <H1>{page?.hero?.heading}</H1>
          <H2 className="font-normal max-w-[45ch] xl:text-3xl">{page?.hero?.caption}</H2>
        </div>
      </section>

      {page?.hero?.image && <Image quality={100} priority={true} className="object-cover mt-12 sm:mt-10 sm:h-[35vh]" src={urlFor(page?.hero?.image).url()} width={2000} height={100} alt="" />}

      <Container className="space-y-36 xl:space-y-28 sm:space-y-20 my-36 xl:my-28 sm:my-16">
        <Details page={page} items={directions} />
        <Specs heading="Показатели" data={page?.directionsSpecs?.specifications} />
      </Container>
    </>
  )
}
