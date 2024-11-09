import Container from '~/Global/Container'

import Hero from '~~/about/Hero'
import Quote from '~~/about/Quote'
import Resources from '~~/about/Resources'

import Clients from '~~/index/Clients'
import News from '~~/index/News'
import Team from '~~/index/Team'

export default function AboutPage() {
  return (
    <>
      <Hero />
      <Container className="space-y-36 xl:space-y-28 sm:space-y-20 my-36 xl:my-28 sm:my-16">
        <Quote />
        <Resources />
        <Clients />
        <News />
        <Team />
      </Container>
    </>
  )
}
