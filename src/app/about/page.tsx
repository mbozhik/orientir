import {getPagesItem} from '@/sanity/lib/requests'

import Container from '~/Global/Container'
import Hero from '~~/about/Hero'
import Quote from '~~/about/Quote'
import Resources from '~~/about/Resources'

import Clients from '~~/index/Clients'
// import News from '~~/index/News'
import Team from '~~/index/Team'

export const metadata = {
  title: 'О компании',
}

export default async function AboutPage() {
  const page = await getPagesItem('about')
  const indexPage = await getPagesItem('index')

  return (
    <>
      <Hero page={page} />
      <Container className="space-y-36 xl:space-y-28 sm:space-y-20 my-36 xl:my-28 sm:my-16">
        <Quote page={page} />
        <Resources page={page} />
        <Clients page={indexPage} />
        {/* <News /> */}
        <Team page={indexPage} />
      </Container>
    </>
  )
}
