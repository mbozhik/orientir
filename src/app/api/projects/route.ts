import {NextResponse} from 'next/server'

export type TProject = {
  id: number
  division: string
  description: string
  residents: Record<number, Resident>
}

type Resident = {
  name: string
  status: 'завершен' | 'в процессе' | 'свободный ЗУ'
  type?: 'ФФФ' | 'ПК' | 'РЦ'
  area: string
}

export async function GET() {
  const projects: TProject[] = [
    {
      id: 1,
      division: 'Ориентир Запад',
      description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
      residents: {
        1: {
          name: 'OZON',
          status: 'завершен',
          type: 'ФФФ',
          area: '157 000',
        },
        2: {
          name: 'ТехноАвиа',
          status: 'завершен',
          type: 'ПК',
          area: '40 000',
        },
        3: {
          name: 'Золотое яблоко',
          status: 'в процессе',
          type: 'РЦ',
          area: '46 000',
        },
        4: {
          name: 'Свободное назначение',
          status: 'свободный ЗУ',
          area: '46 000',
        },
      },
    },
    {
      id: 2,
      division: 'Ориентир Север-1',
      description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
      residents: {
        1: {
          name: 'Свободное назначение',
          status: 'свободный ЗУ',
          area: '25 000',
        },
        2: {
          name: 'Свободное назначение',
          status: 'свободный ЗУ',
          area: '25 000',
        },
      },
    },
    {
      id: 3,
      division: 'Ориентир Север-2',
      description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
      residents: {
        1: {
          name: 'Свободное назначение',
          status: 'свободный ЗУ',
          area: '25 000',
        },
        2: {
          name: 'Свободное назначение',
          status: 'свободный ЗУ',
          area: '25 000',
        },
      },
    },
  ]
  return NextResponse.json(projects)
}
