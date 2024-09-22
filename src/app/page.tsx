import Container from '~/Global/Container'
import Hero from '~~/index/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <mark className="px-1 text-xl bg-foreground text-background">ориентир</mark>
      </Container>
    </>
  )
}
