import {NextResponse} from 'next/server'
import {StaticImageData} from 'next/image'

import type {YMapCoordinates} from '~/UI/Map'

import {projectImages} from '@/app/api/projects/images'
const {units, residents, gallery} = projectImages

export type TResident = {
  name: string
  description: string
  status: ResidentStatus
  type?: 'ФФФ' | 'ПК' | 'РЦ'
  area?: string
  image: StaticImageData
  award?: string
  completion_time?: string
  extra_info?: {label: string; text: string}[]
}

export type TProject = {
  id: number
  slug: string
  project: string
  image: StaticImageData
  mobile_image: StaticImageData
  description: string
  residents: Record<number, TResident>
  award?: string
  location: {coordinates: YMapCoordinates; map: {address: string; link: string}; availability: {gap: string; benchmark: string}[]}
}

export type TProjectExtra = TProject & {
  full_description?: string | string[]
  project_area: string
  zone_area: string
  more_info?: {image: StaticImageData; text: string}[]
  specifications: {heading: string; caption: string}[]
  gallery: {image: StaticImageData; caption: string}[]
}

export type ResidentStatus = 'Завершен' | 'В процессе' | 'Свободные земельные участки'

const mockGallery = [
  {
    image: gallery[1],
    caption: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
  },
  {
    image: gallery[2],
    caption: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut',
  },
  {
    image: gallery[3],
    caption: 'Sed do eiusmod tempor incididunt ut labore et dolore magna',
  },
  {
    image: gallery[4],
    caption: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco',
  },
  {
    image: gallery[5],
    caption: 'Laboris nisi ut aliquip ex ea commodo consequat',
  },
  {
    image: gallery[6],
    caption: 'Duis aute irure dolor in reprehenderit in voluptate',
  },
]

const projects: TProjectExtra[] = [
  {
    id: 1,
    slug: 'orientir-sever',
    project: 'Ориентир Север - 1',
    image: units.sever.default,
    mobile_image: units.sever.mobile,
    description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
    full_description: 'Парк «Ориентир Север-1» имеет стратегическое расположение вблизи федеральных трасс и основных крупных развязок, обладает исключительной транспортной доступностью, что является одним из ключевых факторов для компаний сектора e-commerce.',

    project_area: '114 000',
    zone_area: '19,56',
    location: {
      coordinates: {center: [50.12321844175395, 53.209391913316], zoom: 15},
      map: {
        address: 'Московская область, Солнечногорский район, деревня Хоругвино, рядом с трассами А-107, ЦКАД, М-11 и М-10',
        link: 'https://yandex.ru/maps/-/CHqn5Ek6',
      },
      availability: [
        {
          gap: '5км',
          benchmark: 'до ЦКАД',
        },
        {
          gap: '5 км',
          benchmark: 'от трассы М-11',
        },
        {
          gap: '14 км',
          benchmark: 'от трассы М-10',
        },
        {
          gap: '40 км',
          benchmark: 'от МКАД',
        },
      ],
    },

    specifications: [
      {
        heading: 'Электроснабжение',
        caption: 'Подпись ...',
      },
      {
        heading: 'Водоснабжение',
        caption: 'Подпись ...',
      },
      {
        heading: 'Котельная на биотопливе',
        caption: 'Подпись ...',
      },
      {
        heading: 'Система отопления и вентиляции',
        caption: 'Подпись ...',
      },
    ],

    residents: {
      1: {
        name: 'OZON',
        description: 'Фулфилмент-фабрика',
        status: 'Завершен',
        completion_time: '12 мес.',
        area: '114 000',
        image: residents[1],

        extra_info: [
          {label: 'Рабочая высота', text: '12 м'},
          {label: 'Шаг колонн', text: '12х24 м'},
          {label: 'Бетонный пол', text: 'с антипылевым покрытием'},
          {label: 'Нагрузка на пол', text: 'От 7 т/м²'},
          {label: 'Типы помещений', text: 'складские, офисные'},
          {label: 'Особенности', text: 'здания соединены надземным переходом'},
          {label: 'Автоматизация', text: 'складских процессов и сборки заказов'},
          {label: 'Многоуровневое', text: 'стеллажное хранение'},
          {label: 'Мощность хаба', text: 'позваляет обработать свыше 380 тыс. посылок в сутки'},
          {label: 'Парковка', text: '459 м/м'},
        ],
      },
    },

    gallery: mockGallery,
  },
  {
    id: 2,
    slug: 'orientir-sever-2',
    project: 'Ориентир Север - 2',
    image: units.sever2.default,
    mobile_image: units.sever2.mobile,
    description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
    full_description: 'Парк «Ориентир Север-2» - это современный складской комплекс класса А+ с полностью автономной инфраструктурой, оснащенный передовыми инженерными системами.',

    project_area: '270 000',
    zone_area: '50',
    location: {
      coordinates: {center: [50.12321844175395, 53.209391913316], zoom: 15},
      map: {
        address: 'Московская область, Солнечногорский район, деревня Литвиново, рядом с трассами ЦКАД, М-11 и М-10',
        link: 'https://yandex.ru/maps/-/CHqn5AjS',
      },
      availability: [
        {
          gap: '5км',
          benchmark: 'до ЦКАД',
        },
        {
          gap: '5 км',
          benchmark: 'от трассы М-11',
        },
        {
          gap: '14 км',
          benchmark: 'от трассы М-10',
        },
        {
          gap: '35 км',
          benchmark: 'от а/п Шереметьево',
        },
        {
          gap: '40 км',
          benchmark: 'от МКАД',
        },
      ],
    },

    more_info: [
      {
        image: units.sever.default,
        text: '"Ориентир Север-2" трижды становился победителем ежегодной профессиональной премии в области коммерческой недвижимости Commercial Real Estate Awards в номинациях «Складской комплекс 2016», «Сделка года 2017» и «Складской комплекс 2018».',
      },
      {
        image: units.zapad.default,
        text: 'Это качественный проект с продуманной концепцией и отличным расположением, что делает его привлекательным для широкого круга российских и международных клиентов. Комплекс принадлежит компании Raven Russia.',
      },
    ],

    specifications: [
      {
        heading: 'Электроснабжение',
        caption: 'Подпись ...',
      },
      {
        heading: 'Водоснабжение',
        caption: 'Подпись ...',
      },
      {
        heading: 'Котельная на биотопливе',
        caption: 'Подпись ...',
      },
      {
        heading: 'Система отопления и вентиляции',
        caption: 'Подпись ...',
      },
    ],

    residents: {
      1: {
        name: 'Комплекс 1',
        description: 'Логистический / мультитемпературный комплекс',
        status: 'Завершен',
        completion_time: '12 мес.',
        area: '200 000',
        image: residents[1],

        extra_info: [
          {label: 'Рабочая высота', text: '12 м'},
          {label: 'Шаг колонн', text: '12х24 м'},
          {label: 'Бетонный пол', text: 'с антипылевым покрытием'},
          {label: 'Нагрузка на пол', text: 'От 8-9 т/м²'},
          {label: 'Типы помещений', text: 'складские, офисные'},
          {label: 'Доковооруженность', text: '1 док на 650 м2'},
          // {label: 'Парковка', text: ''},
          // {label: '', text: 'Кросс-докинг'},
        ],
      },
      2: {
        name: 'X5 Group',
        description: 'Мультитемпературный распределительный центр',
        status: 'Завершен',
        completion_time: '7 мес.',
        area: '45 000',
        image: residents[2],

        extra_info: [
          {label: 'Рабочая высота', text: '12 м'},
          {label: 'Шаг колонн', text: '12х24 м'},
          {label: 'Бетонный пол', text: 'с антипылевым покрытием'},
          {label: 'Нагрузка на пол', text: 'От 8-9 т/м²'},
          {label: 'Типы помещений', text: 'складские, офисные'},
          {label: 'Склад хранения', text: 'с разными температурными режимами'},
          {label: 'Высокая доковооруженность', text: 'кросс-док'},
          {label: 'Собственная', text: ' авто-ремонтная мастерская'},
          {label: 'Единый диспетчерский центр', text: 'для мониторинга инфраструктуры'},
          // {label: 'Парковка', text: ''},
        ],
      },
      3: {
        name: 'Столичные поставки',
        description: 'Логистический центр',
        status: 'Завершен',
        completion_time: '12 мес.',
        area: '10 300',
        image: residents[3],

        extra_info: [
          {label: 'Рабочая высота', text: '12 м'},
          {label: 'Шаг колонн', text: '12х24 м'},
          {label: 'Бетонный пол', text: 'с антипылевым покрытием'},
          {label: 'Нагрузка на пол', text: 'От 7 т/м²'},
          {label: 'Типы помещений', text: 'складские, офисные'},
          {label: 'Системы управления', text: 'процессами на складе (WMS) и транспортом (TMS)'},
          {label: 'Современные технологии', text: 'учёта и обработки заказов'},
        ],
      },
    },

    gallery: mockGallery,
  },
  {
    id: 3,
    slug: 'orientir-sever-3',
    project: 'Ориентир Север - 3',
    image: units.sever3.default,
    mobile_image: units.sever3.mobile,
    description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
    full_description: 'Парк «Ориентир Север-3» имеет стратегически премиальное расположение на пересечении со скоростной трассой М 11 (Москва - Санкт Петербург) и удобным доступом к международному аэропорту Шереметьево.',

    project_area: '100 000',
    zone_area: '22',
    location: {
      coordinates: {center: [50.12321844175395, 53.209391913316], zoom: 15},
      map: {
        address: 'Московская область, Солнечногорский район, деревня Хоругвино, рядом с трассами А-107, ЦКАД, М-11 и М-10',
        link: 'https://yandex.ru/maps/-/CHqn5Ek6',
      },
      availability: [
        {
          gap: '5км',
          benchmark: 'до ЦКАД',
        },
        {
          gap: '5 км',
          benchmark: 'от трассы М-11',
        },
        {
          gap: '14 км',
          benchmark: 'от трассы М-10',
        },
        {
          gap: '35 км',
          benchmark: 'от а/п Шереметьево',
        },
        {
          gap: '40 км',
          benchmark: 'от МКАД',
        },
      ],
    },

    more_info: [
      {
        image: units.sever.default,
        text: 'Многофункциональный офисно-складской комплекс для сети гипермаркетов Утконос - является крупнейшим в России комплексом полного цикла работы интернет-гипермаркета, включающий в себя все типы температурных режимов от алкогольной камеры до глубокой заморозки, а также магазин, аптеку, авторемонтное предприятие и помещения для досуга и отдыха персонала.',
      },
      {
        image: units.zapad.default,
        text: 'После начала строительства, заказчик подверг изменениям 90% проекта. Оперативная работа проектной и строительных служб ГК Ориентир позволили обеспечить изначально согласованные сроки.',
      },
    ],

    specifications: [
      {
        heading: 'Электроснабжение',
        caption: 'Подпись ...',
      },
      {
        heading: 'Водоснабжение',
        caption: 'Подпись ...',
      },
      {
        heading: 'Котельная на биотопливе',
        caption: 'Подпись ...',
      },
      {
        heading: 'Система отопления и вентиляции',
        caption: 'Подпись ...',
      },
    ],

    residents: {
      1: {
        name: 'Утконос',
        description: 'Многофункциональный офисно-складской комплекс',
        status: 'Завершен',
        completion_time: '12 мес.',
        area: '70 000',
        image: residents[1],

        extra_info: [
          {label: 'Рабочая высота', text: '12 м'},
          {label: 'Шаг колонн', text: '12х24 м'},
          {label: 'Бетонный пол', text: 'с антипылевым покрытием'},
          {label: 'Нагрузка на пол', text: 'От 7 т/м²'},
          {label: 'Типы помещений', text: 'складские, офисные'},
          {label: 'Склад хранения', text: 'холодной и замороженной продукции, алкогольный и фармацевтический склад'},
          {label: 'Зона размещения', text: 'гравитационного мезонина'},
          {label: 'Доковооруженность', text: '1/700 м²'},
          // {label: 'Парковка', text: ''},
          {label: 'Реализация', text: 'более 20 000 заказов в день'},
        ],
      },
    },

    gallery: mockGallery,
  },
  {
    id: 4,
    slug: 'orientir-sever-4',
    project: 'Ориентир Север - 4',
    image: units.sever4.default,
    mobile_image: units.sever4.mobile,
    description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.', // ##
    full_description: 'Парк «Ориентир Север-4» имеет стратегически премиальное расположение на пересечении со скоростной трассой М 11 (Москва - Санкт Петербург) и удобным доступом к международному аэропорту Шереметьево.',

    project_area: '100 000',
    zone_area: '27',
    location: {
      coordinates: {center: [50.12321844175395, 53.209391913316], zoom: 15}, // ##
      map: {
        address: 'Московская область, Солнечногорский район, деревня Литвиново, рядом с трассами А-107, ЦКАД, М-11 и М-10',
        link: 'https://yandex.ru/maps/-/CHqn5Ek6', // ##
      },
      availability: [
        {
          gap: '5км',
          benchmark: 'до ЦКАД',
        },
        {
          gap: '5 км',
          benchmark: 'от трассы М-11',
        },
        {
          gap: '14 км',
          benchmark: 'от трассы М-10',
        },
        {
          gap: '35 км',
          benchmark: 'от а/п Шереметьево',
        },
        {
          gap: '40 км',
          benchmark: 'от МКАД',
        },
      ],
    },

    more_info: [
      {
        image: units.sever.default,
        text: 'Это качественный проект с продуманной концепцией и отличным расположением, что делает его привлекательным для широкого круга российских и международных клиентов. При строительстве складского комплекса "Север-4" были учтены все требования, которые клиенты предъявляет к складским помещениям класса А+',
      },
      {
        image: units.zapad.default,
        text: 'Комплекс принадлежит компании Professional Logistics Technologies (PLT)',
      },
    ],

    specifications: [
      {
        heading: 'Электроснабжение',
        caption: 'Подпись ...',
      },
      {
        heading: 'Водоснабжение',
        caption: 'Подпись ...',
      },
      {
        heading: 'Котельная на биотопливе',
        caption: 'Подпись ...',
      },
      {
        heading: 'Система отопления и вентиляции',
        caption: 'Подпись ...',
      },
    ],

    residents: {
      1: {
        name: 'Комплекс 1',
        description: 'Мультитемпературный распределительный центр, логистические операторы',
        status: 'Завершен',
        completion_time: '8 мес.',
        area: '65 000',
        image: residents[1],

        extra_info: [
          {label: 'Рабочая высота', text: '12 м'},
          {label: 'Шаг колонн', text: '12х24 м'},
          {label: 'Бетонный пол', text: 'с антипылевым покрытием'},
          {label: 'Нагрузка на пол', text: 'От 7 т/м²'},
          {label: 'Типы помещений', text: 'складские, офисные'},
          {label: 'Склад хранения', text: 'холодной и замороженной продукции'},
          {label: 'Доковооруженность', text: '1/360 м²'},
        ],
      },
      2: {
        name: 'Комплекс 2',
        description: 'Распределительный центр',
        status: 'Завершен',
        completion_time: '8 мес.',
        area: '35 000',
        image: residents[2],

        extra_info: [
          {label: 'Рабочая высота', text: '12 м'},
          {label: 'Шаг колонн', text: '12х24 м'},
          {label: 'Бетонный пол', text: 'с антипылевым покрытием'},
          {label: 'Нагрузка на пол', text: 'От 7 т/м²'},
          {label: 'Типы помещений', text: 'складские, офисные'},
        ],
      },
    },

    gallery: mockGallery,
  },
  {
    id: 5,
    slug: 'orientir-zapad',
    project: 'Ориентир Запад',
    image: units.zapad.default,
    mobile_image: units.zapad.mobile,
    description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
    full_description: 'Парк «Ориентир Запад» признан лучшим «Логистическим комплексом №1» в России. Награда была вручена в рамках престижной профессиональной премии Рекорды Рынка Недвижимости. Логистический комплекс признали лучшим по качественным характеристикам, расположению, транспортной доступности, удобству для пользователей, а также соотношению цена-качество.',

    project_area: '400 000',
    zone_area: '107',
    location: {
      coordinates: {center: [50.12321844175395, 53.209391913316], zoom: 15},
      map: {
        address: 'Московская область, Городской округ Истра, село Петровское на пересечении федеральных трасс А-107 и М-9',
        link: 'https://yandex.ru/maps/-/CHqnnJiV',
      },
      availability: [
        {
          gap: '2км',
          benchmark: 'от А-107 и ЦКАД',
        },
        {
          gap: '60 км',
          benchmark: 'от а/п Шереметьево',
        },
        {
          gap: '35 км',
          benchmark: 'от МКАД',
        },
      ],
    },

    more_info: [
      {
        image: units.sever.default,
        text: 'В рамках развития инфраструктуры складского комплекса, компания ОРИЕНТИР реализовала строительство прямой двусторонней автомобильной развязки с федеральной трассой Новая Рига, как в сторону Москвы, так и в сторону Московской области, через которую Резиденты могут беспрепятственно проезжать как в Москву, так и в область.',
      },
    ],

    specifications: [
      {
        heading: 'Электроснабжение',
        caption: 'Подпись ...',
      },
      {
        heading: 'Водоснабжение',
        caption: 'Подпись ...',
      },
      {
        heading: 'Котельная на биотопливе',
        caption: 'Подпись ...',
      },
      {
        heading: 'Система отопления и вентиляции',
        caption: 'Подпись ...',
      },
    ],

    residents: {
      1: {
        name: 'OZON',
        description: 'Фулфилмент и сортировочный центр',
        status: 'Завершен',
        completion_time: '12 мес.',
        area: '157 000',
        image: residents[1],

        extra_info: [
          {label: 'Рабочая высота', text: '15 м, 12 м'},
          {label: 'Шаг колонн', text: '6х6 м, 12х12 м и 12х24 м '},
          {label: 'Бетонный пол', text: 'с антипылевым покрытием'},
          {label: 'Железобетонные перекрытия', text: 'в два этажа площадью 41 000 м²'},
          {label: 'Нагрузка на пол', text: 'от 8 т/м², точечные нагрузки - до 120 т'},
          {label: 'Многоуровневая система', text: 'хранения в 6 ярсов (мезонин)'},
          {label: 'Высокая докооворуженность', text: '1 док на 870 м²'},
          {label: 'Мощность хаба', text: 'составляет до 800 000 посылок в сутки'},
          {label: 'Абсолютная', text: 'автоматизация складских процессов'},
          {label: 'Синхронизированная работа', text: 'сортировочного и фулфилмент центров'},
        ],
      },
      2: {
        name: 'Техноавиа',
        description: 'Производственно-складской комплекс',
        status: 'Завершен',
        completion_time: '12 мес.',
        area: '40 000',
        image: residents[2],

        extra_info: [
          {label: 'Рабочая высота', text: '12 м'},
          {label: 'Шаг колонн', text: '12х24 м'},
          {label: 'Бетонный пол', text: 'с антипылевым покрытием'},
          {label: 'Специальные', text: 'зоны хранения, маркировки и нанесения логотипов'},
          {label: 'Железобетонная', text: 'антресоль'},
          {label: 'Многоуровневый', text: 'металлический мезонин'},
          {label: 'Типы помещений', text: 'складские, офисные, производство'},
        ],
      },
      3: {
        name: 'Золотое яблоко',
        description: 'Распределительный центр',
        status: 'Завершен',
        completion_time: '12 мес.',
        area: '46 710',
        image: residents[3],

        extra_info: [
          {label: 'Рабочая высота', text: '12 м'},
          {label: 'Шаг колонн', text: '12х24 м, 6х6 м, 9х12 м'},
          {label: 'Многоуровневая система', text: 'хранения в 4 яруса (мезонин)'},
          {label: 'Высокая докооворуженность', text: '22 шт'},
          {label: 'Мощность хаба', text: '59 млн.ед. продукции в год'},
          {label: 'Современное', text: 'технологическое оборудование'},
          {label: 'Парковка', text: '108 м/м'},
        ],
      },
      4: {
        name: 'СберЛогистика',
        description: 'Фулфилмент и сортировочный центр',
        status: 'В процессе',
        area: '156 170',
        image: residents[1],

        extra_info: [
          {label: 'Рабочая высота', text: '15 м'},
          {label: 'Шаг колонн', text: '12х24 м'},
          {label: 'Бетонный пол', text: 'с антипылевым покрытием'},
          {label: 'Нагрузка на пол', text: 'от 8 т/м²'},
          {label: 'Железобетонные перекрытия', text: 'в два этажа площадью 43 530 м²'},

          {label: 'Многоуровневая система', text: 'хранения в 5 ярусов (мезонин)'},
          {label: 'Мощность хаба', text: 'составляет 1 млн. посылок в сутки'},
          {label: 'Современное', text: 'технологическое оборудование'},
          {label: 'Парковка', text: '473 м/м'},
          {label: 'Синхронизированная работа', text: 'сортировочного и фулфилмент центров'},
        ],
      },
    },

    gallery: mockGallery,
  },
  {
    id: 6,
    slug: 'orientir-ug',
    project: 'Ориентир Юг',
    image: units.ug.default,
    mobile_image: units.ug.mobile,
    description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
    full_description: 'Парк «Ориентир Юг» современное индустриальное пространство класса А с внедрением новейших технологий в области автоматизации складских процессов.',

    project_area: '160 000',
    zone_area: '36',
    location: {
      coordinates: {center: [50.12321844175395, 53.209391913316], zoom: 15},
      map: {
        address: 'Московская область, Подольский район, с/о Сынковский, вблизи села Сынково, рядом с трассами А-107 и М-2',
        link: 'https://yandex.ru/maps/-/CHqGnEJj',
      },
      availability: [
        {
          gap: '1,5 км',
          benchmark: 'от М-2',
        },
        {
          gap: '5 км',
          benchmark: 'до ЦКАД',
        },
        {
          gap: '5 км',
          benchmark: 'до А-107',
        },
        {
          gap: '23 км',
          benchmark: 'от МКАД',
        },
      ],
    },

    more_info: [
      {
        image: units.sever.default,
        text: 'В рамках развития инфраструктуры комплекса, реализуется строительство прямого съезда с федеральной трассы М-2 «Крым», благодаря чему стратегическое расположение вблизи трёх федеральных трасс даёт преимущество в скорости доставки.',
      },
      {
        image: units.zapad.default,
        text: 'Победитель в номинации «Лучший складской комплекс 2023» в рамках профессиональной премии в области коммерческой недвижимости Arendator Awards. Победитель в номинации «Индустриальная и складская недвижимость 2023» в рамках профессиональной премии в области коммерческой недвижимости PROESTATE & TOBY Awards.',
      },
    ],

    specifications: [
      {
        heading: 'Электроснабжение',
        caption: 'Подпись ...',
      },
      {
        heading: 'Водоснабжение',
        caption: 'Подпись ...',
      },
      {
        heading: 'Котельная на биотопливе',
        caption: 'Подпись ...',
      },
      {
        heading: 'Система отопления и вентиляции',
        caption: 'Подпись ...',
      },
    ],

    residents: {
      1: {
        name: 'Глория Джинс',
        description: 'Производственно-складской комплекс (разновысотное здание)',
        status: 'Завершен',
        completion_time: '16 мес.',
        area: '27 000',
        image: residents[1],

        extra_info: [
          {label: 'Рабочая высота', text: '10 м и 18 м'},
          {label: 'Шаг колонн', text: '6x6 м, 12х24 м'},
          {label: 'Бетонный пол', text: 'с антипылевым покрытием'},
          {label: 'Нагрузка на пол', text: 'От 28 т/м²'},
          {label: 'Типы помещений', text: 'складские, офисные'},
          {label: 'Высотное хранение', text: 'с автоматизированной погрузкой-выгрузкой коробов через систему лифтов и шаттлов'},
          {label: 'Конвейерная', text: 'и сортировочная системы для коробов'},
        ],
      },
      2: {
        name: 'VS Real Estate',
        description: 'Складской комплекс',
        status: 'Завершен',
        completion_time: '12 мес.',
        area: '133 000',
        image: residents[2],

        extra_info: [
          {label: 'Рабочая высота', text: '12 м'},
          {label: 'Шаг колонн', text: '12х24 м'},
          {label: 'Бетонный пол', text: 'с антипылевым покрытием'},
          {label: 'Нагрузка на пол', text: 'От 6 т/м²'},
          {label: 'Многоуровневый', text: 'металлический мезонин'},
          {label: 'Модернизация', text: 'инженерных и конструктивных решений'},
          {label: 'Типы помещений', text: 'складские, офисные'},
        ],
      },
    },

    gallery: mockGallery,
  },
  {
    id: 7,
    slug: 'orientir-spb-ug',
    project: 'Ориентир СПб, Юг',
    image: units.ug.default,
    mobile_image: units.ug.mobile,
    description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
    full_description: 'Флагманский производственно-складской объект для компании Лента построен в собственность в стратегическом для клиента регионе - в парке ОРИЕНТИР Санкт-Петербург ЮГ. Объект располагается на первой линии важнейшей транспортной артерии - трассы М-10, что позволило не только закрепить лидерство компании в регионе, но и начать реализовывать новые гибкие форматы доставки до конечного потребителя в условиях меняющегося рынка в COVID-19.',

    project_area: '650 000',
    zone_area: '135',
    location: {
      coordinates: {center: [50.12321844175395, 53.209391913316], zoom: 15},
      map: {
        address: 'Ленинградская область, Тосненский район, Красноборское городское поселение на трассе М-10',
        link: 'https://yandex.ru/maps/-/CHqGzQ71',
      },
      availability: [
        {
          gap: '20 км',
          benchmark: 'от КАД',
        },
        {
          gap: '31 км',
          benchmark: 'от а/п Пулково',
        },
      ],
    },

    more_info: [
      {
        image: units.sever.default,
        text: '"Лента" - это полностью автономный складской и производственный объект, включающий в себя заготовочную фабрику полуфабрикатов и кулинарных изделий, 6 отделов с различными температурными режимами, в том числе сухим, холодильным, морозильным. РЦ позволил централизовать хранение, повысил качество продукции и позволил сократить время доставки.',
      },
      {
        image: units.zapad.default,
        text: 'Победитель в номинации «Складской комплекс 2021» в рамках профессиональной премии в области коммерческой недвижимости CRE Federal Awards. Победитель в номинации «Индустриальная и складская недвижимость. Регионы 2021» в рамках профессиональной премии в области коммерческой недвижимости PROESTATE & TOBY Awards',
      },
    ],

    specifications: [
      {
        heading: 'Электроснабжение',
        caption: 'Подпись ...',
      },
      {
        heading: 'Водоснабжение',
        caption: 'Подпись ...',
      },
      {
        heading: 'Котельная на биотопливе',
        caption: 'Подпись ...',
      },
      {
        heading: 'Система отопления и вентиляции',
        caption: 'Подпись ...',
      },
    ],

    residents: {
      1: {
        name: 'Лента',
        description: 'Мультитемпературный производственно-складской центр',
        status: 'Завершен',
        completion_time: '8 мес.',
        area: '70 000',
        image: residents[1],

        extra_info: [
          {label: 'Рабочая высота', text: '12 м'},
          {label: 'Шаг колонн', text: '12х24 м'},
          {label: 'Бетонный пол', text: 'с антипылевым покрытием'},
          {label: 'Нагрузка на пол', text: 'От 8 т/м²'},
          {label: 'Типы помещений', text: 'производственный блок, заготовочная фабрика полуфабрикатови кулинарных изделий'},
          {label: 'Склад хранения', text: 'с шестью температурными режимами'},
          {label: 'Система рекуперации тепла', text: 'от холодильных систем'},
        ],
      },
      2: {
        name: 'Сводобный земельный участок',
        description: 'Сводобный земельный участок',
        status: 'Завершен',
        completion_time: '8 мес.',
        area: '380 000',
        image: residents[2],
      },
    },

    gallery: mockGallery,
  },
  {
    id: 8,
    slug: 'orientir-spb-sever',
    project: 'Ориентир СПб, север',
    image: units.ug.default,
    mobile_image: units.ug.mobile,
    description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
    // full_description: '',

    project_area: '117 400',
    zone_area: '46',
    location: {
      coordinates: {center: [50.12321844175395, 53.209391913316], zoom: 15},
      map: {
        address: 'Ленинградская область, Всеволожский район, Заневское городское поселение, массив Янино-2, первая линия Колтушского ш.',
        link: 'https://yandex.ru/maps/-/CHqG7N~~',
      },
      availability: [
        {
          gap: '4 км',
          benchmark: 'от КАД',
        },
        {
          gap: '34 км',
          benchmark: 'от а/п Пулково',
        },
      ],
    },

    specifications: [
      {
        heading: 'Электроснабжение',
        caption: 'Подпись ...',
      },
      {
        heading: 'Водоснабжение',
        caption: 'Подпись ...',
      },
      {
        heading: 'Котельная на биотопливе',
        caption: 'Подпись ...',
      },
      {
        heading: 'Система отопления и вентиляции',
        caption: 'Подпись ...',
      },
    ],

    residents: {
      1: {
        name: 'Озон Янино',
        description: '',
        status: 'В процессе',
        image: residents[1],
      },
    },

    gallery: mockGallery,
  },
  {
    id: 9,
    slug: 'orientir-kaliningrad',
    project: 'Ориентир Калининград',
    image: units.ug.default,
    mobile_image: units.ug.mobile,
    description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
    full_description: 'Сделка по купле-продаже мультитемпературного РЦ с собственным производством «Фабрика кухни» для торговой сети «Пятёрочка» площадью 26 803 м2 между Ориентир и X5 Group – является стратегически важной и социально-значимой для региона, поскольку его строительство позволит создать новые рабочие места и укрепить связи с локальными поставщиками, а также улучшить обслуживание покупателей и обеспечить их товарами повседневного спроса.',

    project_area: '26 803',
    zone_area: '6,6',
    location: {
      coordinates: {center: [50.12321844175395, 53.209391913316], zoom: 15},
      map: {
        address: 'Ленинградская область, Всеволожский район, Заневское городское поселение, массив Янино-2, первая линия Колтушского ш.',
        link: 'https://yandex.ru/maps/-/CHqKAH-F',
      },
      availability: [
        {
          gap: '4 км',
          benchmark: 'от КАД',
        },
        {
          gap: '34 км',
          benchmark: 'от а/п Пулково',
        },
      ],
    },

    more_info: [
      {
        image: units.sever.default,
        text: 'Проект реализуется по схеме BTS на обособленной территории с необходимой инфраструктурой. РЦ будет включать в себя производственный блок «Фабрика кухни» для заготовок полуфабрикатов и кулинарных изделий c собственной системой мониторинга и автоматической поддержкой температуры, а также зоны с несколькими температурными режимами.',
      },
      {
        image: units.zapad.default,
        text: 'Ввод запланирован на II кв. 2025г. Расположение РЦ на первой линии а/д Северный обход и в 1,5 км от Приморского кольца (федерального назначения), обеспечит высокий уровень транспортной доступности и возможность построения эффективных логистических схем.',
      },
    ],

    specifications: [
      {
        heading: 'Электроснабжение',
        caption: 'Подпись ...',
      },
      {
        heading: 'Водоснабжение',
        caption: 'Подпись ...',
      },
      {
        heading: 'Котельная на биотопливе',
        caption: 'Подпись ...',
      },
      {
        heading: 'Система отопления и вентиляции',
        caption: 'Подпись ...',
      },
    ],

    residents: {
      1: {
        name: 'Х5 Retail Group',
        description: 'Мультитемпературный распределительный центр',
        status: 'В процессе',
        area: '26 900',
        image: residents[1],

        extra_info: [
          {label: 'Рабочая высота', text: '12,5 м'},
          {label: 'Шаг колонн', text: '12х24 м'},
          {label: 'Бетонный пол', text: 'с антипылевым покрытием'},
          {label: 'Нагрузка на пол', text: 'От 9 т/м²'},
          {label: 'Типы помещений', text: 'складские, офисные, фреш, фров'},
          {label: 'Фабрики-Кухни', text: 'для производства готовой продукции'},
          {label: 'Несколько', text: 'цехов для разной заготовок'},
        ],
      },
    },

    gallery: mockGallery,
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
