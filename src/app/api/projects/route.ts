import {NextResponse} from 'next/server'
import {StaticImageData} from 'next/image'

import OrientirZapadImage from '$/projects/orientir-zapad.jpg'
import OrientirSeverImage from '$/projects/orientir-sever.jpg'
import OrientirSever2Image from '$/projects/orientir-sever-2.jpg'
import OrientirZapad2Image from '$/projects/orientir-zapad-2.jpg'
import OrientirZapad3Image from '$/projects/orientir-zapad-3.jpg'

import ResidentOneImage from '$/projects/resident-1.jpg'
import ResidentTwoImage from '$/projects/resident-2.jpg'
import ResidentThreeImage from '$/projects/resident-3.jpg'

export type TProject = {
  id: number
  slug: string
  project: string
  image: StaticImageData
  description: string
  residents: Record<number, Resident>
}

type Resident = {
  name: string
  status: ResidentStatus
  type?: 'ФФФ' | 'ПК' | 'РЦ'
  area: string
  image: StaticImageData
}

export type ResidentStatus = 'Завершен' | 'В процессе' | 'Свободные земельные участки'

const projects: TProject[] = [
  {
    id: 1,
    slug: 'orientir-zapad',
    project: 'Ориентир Запад',
    image: OrientirZapadImage,
    description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
    residents: {
      1: {
        name: 'OZON',
        status: 'Завершен',
        type: 'ФФФ',
        area: '157 000',
        image: ResidentOneImage,
      },
      2: {
        name: 'ТехноАвиа',
        status: 'Завершен',
        type: 'ПК',
        area: '40 000',
        image: ResidentTwoImage,
      },
      3: {
        name: 'Золотое яблоко',
        status: 'В процессе',
        type: 'РЦ',
        area: '46 000',
        image: ResidentThreeImage,
      },
      4: {
        name: 'Свободное назначение',
        status: 'Свободные земельные участки',
        area: '46 000',
        image: ResidentOneImage,
      },
    },
  },
  {
    id: 2,
    slug: 'orientir-sever',
    project: 'Ориентир Север',
    image: OrientirSeverImage,
    description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
    residents: {
      1: {
        name: 'Свободное назначение',
        status: 'Свободные земельные участки',
        area: '25 000',
        image: ResidentOneImage,
      },
      2: {
        name: 'Свободное назначение',
        status: 'Завершен',
        area: '25 000',
        image: ResidentTwoImage,
      },
    },
  },
  {
    id: 3,
    slug: 'orientir-sever-2',
    project: 'Ориентир Север-2',
    image: OrientirSever2Image,
    description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
    residents: {
      1: {
        name: 'Свободное назначение',
        status: 'Свободные земельные участки',
        area: '25 000',
        image: ResidentThreeImage,
      },
      2: {
        name: 'Свободное назначение',
        status: 'Свободные земельные участки',
        area: '25 000',
        image: ResidentTwoImage,
      },
    },
  },
  {
    id: 4,
    slug: 'orientir-zapad-2',
    project: 'Ориентир Запад-2',
    image: OrientirZapad2Image,
    description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
    residents: {
      1: {
        name: 'OZON',
        status: 'В процессе',
        type: 'ФФФ',
        area: '157 000',
        image: ResidentOneImage,
      },
      2: {
        name: 'ТехноАвиа',
        status: 'Завершен',
        type: 'ПК',
        area: '40 000',
        image: ResidentTwoImage,
      },
      3: {
        name: 'Золотое яблоко',
        status: 'Завершен',
        type: 'РЦ',
        area: '46 000',
        image: ResidentThreeImage,
      },
      4: {
        name: 'Свободное назначение',
        status: 'Завершен',
        area: '46 000',
        image: ResidentOneImage,
      },
    },
  },
  {
    id: 5,
    slug: 'orientir-zapad-3',
    project: 'Ориентир Запад-3',
    image: OrientirZapad3Image,
    description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
    residents: {
      1: {
        name: 'OZON',
        status: 'Завершен',
        type: 'ФФФ',
        area: '157 000',
        image: ResidentTwoImage,
      },
      2: {
        name: 'ТехноАвиа',
        status: 'Завершен',
        type: 'ПК',
        area: '40 000',
        image: ResidentThreeImage,
      },
    },
  },
]

export async function GET(req: Request) {
  const {searchParams} = new URL(req.url)
  const slug = searchParams.get('slug')

  if (!slug) {
    return NextResponse.json(projects)
  }

  const project = projects.find((project) => project.slug === slug)

  if (!project) {
    return NextResponse.json({error: 'Project not found'}, {status: 404})
  }

  return NextResponse.json(project)
}
