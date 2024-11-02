import {NextResponse} from 'next/server'

export type TProject = {
  id: number
  slug: string
  project: string
  description: string
  residents: Record<number, Resident>
}

type Resident = {
  name: string
  status: ResidentStatus
  type?: 'ФФФ' | 'ПК' | 'РЦ'
  area: string
}

export type ResidentStatus = 'Завершен' | 'В процессе' | 'Свободные земельные участки'

const projects: TProject[] = [
  {
    id: 1,
    slug: 'orientir-zapad',
    project: 'Ориентир Запад',
    description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
    residents: {
      1: {
        name: 'OZON',
        status: 'Завершен',
        type: 'ФФФ',
        area: '157 000',
      },
      2: {
        name: 'ТехноАвиа',
        status: 'Завершен',
        type: 'ПК',
        area: '40 000',
      },
      3: {
        name: 'Золотое яблоко',
        status: 'В процессе',
        type: 'РЦ',
        area: '46 000',
      },
      4: {
        name: 'Свободное назначение',
        status: 'Свободные земельные участки',
        area: '46 000',
      },
    },
  },
  {
    id: 2,
    slug: 'orientir-sever-1',
    project: 'Ориентир Север-1',
    description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
    residents: {
      1: {
        name: 'Свободное назначение',
        status: 'Свободные земельные участки',
        area: '25 000',
      },
      2: {
        name: 'Свободное назначение',
        status: 'Завершен',
        area: '25 000',
      },
    },
  },
  {
    id: 3,
    slug: 'orientir-sever-2',
    project: 'Ориентир Север-2',
    description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
    residents: {
      1: {
        name: 'Свободное назначение',
        status: 'Свободные земельные участки',
        area: '25 000',
      },
      2: {
        name: 'Свободное назначение',
        status: 'Свободные земельные участки',
        area: '25 000',
      },
    },
  },
  {
    id: 4,
    slug: 'orientir-sever-3',
    project: 'Ориентир Запад-3',
    description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
    residents: {
      1: {
        name: 'OZON',
        status: 'В процессе',
        type: 'ФФФ',
        area: '157 000',
      },
      2: {
        name: 'ТехноАвиа',
        status: 'Завершен',
        type: 'ПК',
        area: '40 000',
      },
      3: {
        name: 'Золотое яблоко',
        status: 'Завершен',
        type: 'РЦ',
        area: '46 000',
      },
      4: {
        name: 'Свободное назначение',
        status: 'Завершен',
        area: '46 000',
      },
    },
  },
  {
    id: 5,
    slug: 'orientir-sever-4',
    project: 'Ориентир Запад-4',
    description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
    residents: {
      1: {
        name: 'OZON',
        status: 'Завершен',
        type: 'ФФФ',
        area: '157 000',
      },
      2: {
        name: 'ТехноАвиа',
        status: 'Завершен',
        type: 'ПК',
        area: '40 000',
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
