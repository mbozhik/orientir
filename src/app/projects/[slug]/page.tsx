import {getProjectsItem} from '@/sanity/lib/requests'

import Container from '~/Global/Container'
import Showcase from '~~/projects/slug/showcase/Showcase'
import Info from '~~/projects/slug/Info'
import Specs from '~~/projects/slug/Specs'
import Objects from '~~/projects/slug/Objects'
import Gallery from '~~/projects/slug/Gallery'
import MapPoint from '~~/projects/slug/MapPoint'

export default async function ProjectPage({params}: {params: Promise<{slug: string}>}) {
  const slug = (await params).slug
  const project = await getProjectsItem(slug)

  return (
    <>
      <Showcase project={project} />

      <Container className="mb-24 space-y-24 sm:space-y-16 sm:mb-16">
        <Info project={project} />
        <Specs data={project?.specifications} />
        <Objects project={project} />
        <Gallery project={project} />
      </Container>

      <MapPoint project={project} />
    </>
  )
}
