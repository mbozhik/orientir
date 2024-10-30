import {NextResponse} from 'next/server'

export type TProject = {
  id: number
  division: string
  description: string
}

export async function GET() {
  const projects: TProject[] = [
    {
      id: 1,
      division: 'Ориентир Запад',
      description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
    },
    {
      id: 2,
      division: 'Ориентир Север-1',
      description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
    },
    {
      id: 3,
      division: 'Ориентир Север-2',
      description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
    },
  ]
  return NextResponse.json(projects)
}
