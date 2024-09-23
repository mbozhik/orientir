import Container from '~/Global/Container'
import Hero from '~~/index/Hero'
import Directions from '~~/index/Directions'
import Clients from '~~/index/Clients'

export default function Home() {
  return (
    <>
      <Hero />
      <Container className="space-y-36 xl:space-y-28 sm:space-y-20 my-36 xl:my-28 sm:my-20">
        <Directions />
        <Clients />
      </Container>
    </>
  )
}
