import Container from '~/Global/Container'
import Hero from '~~/index/Hero'
import Directions from '~~/index/Directions'

export default function Home() {
  return (
    <>
      <Hero />
      <Container className="space-x-20 my-36">
        <Directions />
      </Container>
    </>
  )
}
