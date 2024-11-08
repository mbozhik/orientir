import {NextResponse} from 'next/server'

export type TDirection = {
  id: string
  heading: string
  list: string[]
}

const directions: TDirection[] = [
  {
    id: '01',
    heading: 'Девелопмент',
    list: ['Поиск и анализ земельного участка', 'Подбор локации', 'Разработка концепции', 'Оценка эффективности проекта', 'Строительство объекта', 'Эксплуатация и управление объектом', 'Продажа готового актива инвесторам'],
  },
  {
    id: '02',
    heading: 'Генеральный подряд',
    list: ['Пункт', 'Пункт', 'Пункт'],
  },
  {
    id: '03',
    heading: 'Холодоснабжение',
    list: ['Пункт', 'Пункт', 'Пункт'],
  },
  {
    id: '04',
    heading: 'Автоматизация',
    list: ['Пункт', 'Пункт', 'Пункт'],
  },
]

export async function GET() {
  return NextResponse.json(directions)
}
