import {getPagesItem} from '@/sanity/lib/requests'

import Container, {sitePadding} from '~/Global/Container'

import Hero from '~~/index/Hero'
import Directions from '~~/index/Directions'
import Clients from '~~/index/Clients'
import Projects from '~~/index/Projects'
// import News from '~~/index/News'
import Team from '~~/index/Team'
import Awards from '~~/index/Awards'

export default async function HomePage() {
  const page = await getPagesItem('index')

  return (
    <>
      <Hero page={page} className={sitePadding} />
      <Container className="space-y-36 xl:space-y-28 sm:space-y-20 my-36 xl:my-28 sm:my-16">
        <Directions page={page} />
        <Clients page={page} />
        <Projects />
        {/* <News /> */}
        <Team page={page} />
        <Awards page={page} />
      </Container>
    </>
  )
}
