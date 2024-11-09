import {TProjectExtra} from '@/app/api/projects/route'
import {getProjectItem} from '@/utils/getData'

import Container from '~/Global/Container'
import Showcase from '~~/projects/slug/showcase/Showcase'
import Info from '~~/projects/slug/Info'
import Specs from '~~/projects/slug/Specs'
import Objects from '~~/projects/slug/Objects'
import MapPoint from '~~/projects/slug/MapPoint'
import Gallery from '~~/projects/slug/Gallery'

export default async function ProjectPage({params}: {params: Promise<{slug: string}>}) {
  const slug = (await params).slug
  const project: TProjectExtra = await getProjectItem(slug)

  return (
    <>
      <Showcase project={project} />
      <Container className="mb-24 space-y-24 sm:space-y-16 sm:mb-16">
        <Info project={project} />
        <Specs project={project} />
        <Objects project={project} />
        <Gallery project={project} />
      </Container>
      <MapPoint project={project} />
    </>
  )
}
