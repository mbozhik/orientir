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

import ProjectOneImage from '$/projects/gallery/project-1.jpg'
import ProjectTwoImage from '$/projects/gallery/project-2.jpg'
import ProjectThreeImage from '$/projects/gallery/project-3.jpg'
import ProjectFourImage from '$/projects/gallery/project-4.jpg'
import ProjectFiveImage from '$/projects/gallery/project-5.jpg'
import ProjectSixImage from '$/projects/gallery/project-6.jpg'

export type TResident = {
  name: string
  description: string
  status: ResidentStatus
  type?: 'ФФФ' | 'ПК' | 'РЦ'
  area: string
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
  description: string
  residents: Record<number, TResident>
  award?: string
}

export type TProjectExtra = TProject & {
  full_description: string[]
  project_area: string
  zone_area: string
  location: {address: string; link: string; widget: string}
  more_info?: {image: StaticImageData; text: string}[]
  specifications: {heading: string; caption: string}[]
  gallery: {image: StaticImageData; caption: string}[]
}

export type ResidentStatus = 'Завершен' | 'В процессе' | 'Свободные земельные участки'

const projects: TProjectExtra[] = [
  {
    id: 1,
    slug: 'orientir-zapad',
    project: 'Ориентир Запад',
    image: OrientirZapadImage,
    description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
    award: 'Победитель в номинации «Сделка Года. Индустриальная недвижимость 2021» в рамках ежегодной профессиональной премии в области коммерческой недвижимости Commercial Real Estate Awards (проект)',

    residents: {
      1: {
        name: 'OZON',
        description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
        status: 'Завершен',
        type: 'ФФФ',
        area: '157 000',
        image: ResidentOneImage,
        award: 'Победитель в номинации «Сделка Года. Индустриальная недвижимость 2021» в рамках ежегодной профессиональной премии в области коммерческой недвижимости Commercial Real Estate Awards (резидент)',
        completion_time: '12 мес.',
      },
      2: {
        name: 'ТехноАвиа',
        description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
        status: 'Завершен',
        type: 'ПК',
        area: '40 000',
        image: ResidentTwoImage,
        award: 'Победитель в номинации «Сделка Года. Индустриальная недвижимость 2021» в рамках ежегодной профессиональной премии в области коммерческой недвижимости Commercial Real Estate Awards (резидент)',
        completion_time: '11 мес.',
      },
      3: {
        name: 'Золотое яблоко',
        description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
        status: 'В процессе',
        type: 'РЦ',
        area: '46 000',
        image: ResidentThreeImage,

        extra_info: [
          {label: 'Рабочая высота', text: '15м и 12м'},
          {label: 'Подключение', text: 'К инженерной инфраструктуре'},
          {label: 'Шаг колонн', text: '6х6, 12х12, 12х24 м'},
          {label: 'Мощность хаба', text: 'до 800 000 шт/сутки'},
          {label: 'Бетонный пол', text: 'С антипылевым покрытием'},
          {label: 'Система безопасности', text: 'Централизованная'},
          {label: 'Нагрузка на пол', text: 'От 8 т/м²'},
          {label: 'Точечные нагрузки', text: 'До 120 т'},
          {label: 'Система пожаротушения', text: 'Многоуровневая'},
          {label: 'Системы коммуникаций', text: 'Отопления и вентиляции'},
          {label: 'Высокая доковооруженность', text: '1 док на 870 м²'},
          {label: 'Железобетонные перекрытия', text: 'Два этажа площадью 41 000 м²'},
          {label: 'Мезонин', text: 'Шестиуровневый'},
          {label: 'Энергосбережение', text: 'Повышенное: 8 мВт'},
        ],
      },
    },

    full_description: ['Lorem ipsum dolor sit amet consectetur. Pellentesque egestas viverra netus sed viverra purus pellentesque quam amet. Vestibulum venenatis viverra nunc ultricies tortor nunc ac. Nisi euismod eu in lacinia commodo.', 'Vitae leo nulla dolor amet nec id. Scelerisque nibh sed mauris nibh pharetra. Semper malesuada vitae ut habitasse cursus. Id odio consequat orci malesuada cras et risus magna. Commodo.'],
    project_area: '400 000',
    zone_area: '107',
    location: {
      address: 'Московская область, Городской округ Истра, село Петровское на пересечении федеральных трасс А-107 и М-9',
      link: 'https://yandex.ru/maps/-/CDhhjL1K',
      widget: 'https://yandex.ru/map-widget/v1/?ll=37.619406%2C55.749228&mode=poi&poi%5Bpoint%5D=37.618879%2C55.751426&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1023322799&z=16.8',
    },
    more_info: [
      {
        image: OrientirZapadImage,
        text: 'Lorem ipsum dolor sit amet consectetur. Semper euismod arcu lorem nibh ut sem ac in fermentum. Adipiscing pellentesque phasellus aliquet quis morbi nunc cursus sed ac. Faucibus mi quam maecenas quis. Aliquam ultrices a mi pharetra accumsan elementum. Nunc et tempor laoreet tortor ut velit nulla augue neque. Lorem sagittis augue in amet ipsum placerat ornare facilisi vestibulum.',
      },
      {
        image: OrientirSeverImage,
        text: 'Lorem ipsum dolor sit amet consectetur. Semper euismod arcu lorem nibh ut sem ac in fermentum. Adipiscing pellentesque phasellus aliquet quis morbi nunc cursus sed ac. Faucibus mi quam maecenas quis. Aliquam ultrices a mi pharetra accumsan elementum. Nunc et tempor laoreet tortor ut velit nulla augue neque. Lorem sagittis augue in amet ipsum placerat ornare facilisi vestibulum.',
      },
    ],
    specifications: [
      {
        heading: 'Инфраструктура',
        caption: 'Современная инфраструктура с резервными мощностями инженерных систем.',
      },
      {
        heading: 'Транспорт',
        caption: 'Удобная транспортная доступность с прямым выездом на федеральные трассы А-107 и М-9.',
      },
      {
        heading: 'Планировка',
        caption: 'Эффективная планировка территории с учетом оптимизации логистических потоков.',
      },
      {
        heading: 'Безопасность',
        caption: 'Комплексная система безопасности с круглосуточным видеонаблюдением и контролем доступа.',
      },
    ],
    gallery: [
      {
        image: ProjectOneImage,
        caption: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
      },
      {
        image: ProjectTwoImage,
        caption: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut',
      },
      {
        image: ProjectThreeImage,
        caption: 'Sed do eiusmod tempor incididunt ut labore et dolore magna',
      },
      {
        image: ProjectFourImage,
        caption: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco',
      },
      {
        image: ProjectFiveImage,
        caption: 'Laboris nisi ut aliquip ex ea commodo consequat',
      },
      {
        image: ProjectSixImage,
        caption: 'Duis aute irure dolor in reprehenderit in voluptate',
      },
    ],
  },
  {
    id: 2,
    slug: 'orientir-sever',
    project: 'Ориентир Север',
    image: OrientirSeverImage,
    description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
    award: 'Победитель в номинации «Сделка Года. Индустриальная недвижимость 2021» в рамках ежегодной профессиональной премии в области коммерческой недвижимости Commercial Real Estate Awards (проект)',

    residents: {
      1: {
        name: 'Свободное назначение',
        description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
        status: 'Свободные земельные участки',
        area: '25 000',
        image: ResidentOneImage,
        award: 'Победитель в номинации «Сделка Года. Индустриальная недвижимость 2021» в рамках ежегодной профессиональной премии в области коммерческой недвижимости Commercial Real Estate Awards (резидент)',
      },
      2: {
        name: 'Свободное назначение',
        description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
        status: 'Завершен',
        area: '25 000',
        image: ResidentTwoImage,
        completion_time: '12 мес.',
      },
    },

    full_description: ['Lorem ipsum dolor sit amet consectetur. Pellentesque egestas viverra netus sed viverra purus pellentesque quam amet. Vestibulum venenatis viverra nunc ultricies tortor nunc ac. Nisi euismod eu in lacinia commodo.', 'Vitae leo nulla dolor amet nec id. Scelerisque nibh sed mauris nibh pharetra. Semper malesuada vitae ut habitasse cursus. Id odio consequat orci malesuada cras et risus magna. Commodo.'],
    project_area: '400 000',
    zone_area: '107',
    location: {
      address: 'Московская область, Городской округ Истра, село Петровское на пересечении федеральных трасс А-107 и М-9',
      link: 'https://yandex.ru/maps/-/CDhhjL1K',
      widget: 'https://yandex.ru/map-widget/v1/?ll=37.619406%2C55.749228&mode=poi&poi%5Bpoint%5D=37.618879%2C55.751426&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1023322799&z=16.8',
    },
    specifications: [
      {
        heading: 'Инфраструктура',
        caption: 'Современная инфраструктура с резервными мощностями инженерных систем.',
      },
      {
        heading: 'Транспорт',
        caption: 'Удобная транспортная доступность с прямым выездом на федеральные трассы А-107 и М-9.',
      },
      {
        heading: 'Планировка',
        caption: 'Эффективная планировка территории с учетом оптимизации логистических потоков.',
      },
      {
        heading: 'Безопасность',
        caption: 'Комплексная система безопасности с круглосуточным видеонаблюдением и контролем доступа.',
      },
    ],
    gallery: [
      {
        image: ProjectOneImage,
        caption: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
      },
      {
        image: ProjectTwoImage,
        caption: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut',
      },
      {
        image: ProjectThreeImage,
        caption: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        image: ProjectFourImage,
        caption: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco',
      },
      {
        image: ProjectFiveImage,
        caption: 'Laboris nisi ut aliquip ex ea commodo consequat',
      },
      {
        image: ProjectSixImage,
        caption: 'Duis aute irure dolor in reprehenderit in voluptate',
      },
    ],
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
        description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
        status: 'Свободные земельные участки',
        area: '25 000',
        image: ResidentThreeImage,
        award: 'Победитель в номинации «Сделка Года. Индустриальная недвижимость 2021» в рамках ежегодной профессиональной премии в области коммерческой недвижимости Commercial Real Estate Awards (резидент)',
      },
      2: {
        name: 'Свободное назначение',
        description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
        status: 'Свободные земельные участки',
        area: '25 000',
        image: ResidentTwoImage,
        award: 'Победитель в номинации «Сделка Года. Индустриальная недвижимость 2021» в рамках ежегодной профессиональной премии в области коммерческой недвижимости Commercial Real Estate Awards (резидент)',
      },
    },

    full_description: ['Lorem ipsum dolor sit amet consectetur. Pellentesque egestas viverra netus sed viverra purus pellentesque quam amet. Vestibulum venenatis viverra nunc ultricies tortor nunc ac. Nisi euismod eu in lacinia commodo.', 'Vitae leo nulla dolor amet nec id. Scelerisque nibh sed mauris nibh pharetra. Semper malesuada vitae ut habitasse cursus. Id odio consequat orci malesuada cras et risus magna. Commodo.'],
    project_area: '400 000',
    zone_area: '107',
    location: {
      address: 'Московская область, Городской округ Истра, село Петровское на пересечении федеральных трасс А-107 и М-9',
      link: 'https://yandex.ru/maps/-/CDhhjL1K',
      widget: 'https://yandex.ru/map-widget/v1/?ll=37.619406%2C55.749228&mode=poi&poi%5Bpoint%5D=37.618879%2C55.751426&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1023322799&z=16.8',
    },
    specifications: [
      {
        heading: 'Инфраструктура',
        caption: 'Современная инфраструктура с резервными мощностями инженерных систем.',
      },
      {
        heading: 'Транспорт',
        caption: 'Удобная транспортная доступность с прямым выездом на федеральные трассы А-107 и М-9.',
      },
      {
        heading: 'Планировка',
        caption: 'Эффективная планировка территории с учетом оптимизации логистических потоков.',
      },
      {
        heading: 'Безопасность',
        caption: 'Комплексная система безопасности с круглосуточным видеонаблюдением и контролем доступа.',
      },
    ],
    gallery: [
      {
        image: ProjectOneImage,
        caption: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
      },
      {
        image: ProjectTwoImage,
        caption: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut',
      },
      {
        image: ProjectThreeImage,
        caption: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        image: ProjectFourImage,
        caption: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco',
      },
      {
        image: ProjectFiveImage,
        caption: 'Laboris nisi ut aliquip ex ea commodo consequat',
      },
      {
        image: ProjectSixImage,
        caption: 'Duis aute irure dolor in reprehenderit in voluptate',
      },
    ],
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
        description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
        status: 'В процессе',
        type: 'ФФФ',
        area: '157 000',
        image: ResidentOneImage,
      },
      2: {
        name: 'ТехноАвиа',
        description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
        status: 'Завершен',
        type: 'ПК',
        area: '40 000',
        image: ResidentTwoImage,
        award: 'Победитель в номинации «Сделка Года. Индустриальная недвижимость 2021» в рамках ежегодной профессиональной премии в области коммерческой недвижимости Commercial Real Estate Awards (резидент)',
        completion_time: '10 мес.',
      },
      3: {
        name: 'Золотое яблоко',
        description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
        status: 'Завершен',
        type: 'РЦ',
        area: '46 000',
        image: ResidentThreeImage,
        completion_time: '9 мес.',
      },
    },

    full_description: ['Lorem ipsum dolor sit amet consectetur. Pellentesque egestas viverra netus sed viverra purus pellentesque quam amet. Vestibulum venenatis viverra nunc ultricies tortor nunc ac. Nisi euismod eu in lacinia commodo.', 'Vitae leo nulla dolor amet nec id. Scelerisque nibh sed mauris nibh pharetra. Semper malesuada vitae ut habitasse cursus. Id odio consequat orci malesuada cras et risus magna. Commodo.'],
    project_area: '400 000',
    zone_area: '107',
    location: {
      address: 'Московская область, Городской округ Истра, село Петровское на пересечении федеральных трасс А-107 и М-9',
      link: 'https://yandex.ru/maps/-/CDhhjL1K',
      widget: 'https://yandex.ru/map-widget/v1/?ll=37.619406%2C55.749228&mode=poi&poi%5Bpoint%5D=37.618879%2C55.751426&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1023322799&z=16.8',
    },
    specifications: [
      {
        heading: 'Инфраструктура',
        caption: 'Современная инфраструктура с резервными мощностями инженерных систем.',
      },
      {
        heading: 'Транспорт',
        caption: 'Удобная транспортная доступность с прямым выездом на федеральные трассы А-107 и М-9.',
      },
      {
        heading: 'Планировка',
        caption: 'Эффективная планировка территории с учетом оптимизации логистических потоков.',
      },
      {
        heading: 'Безопасность',
        caption: 'Комплексная система безопасности с круглосуточным видеонаблюдением и контролем доступа.',
      },
    ],
    gallery: [
      {
        image: ProjectOneImage,
        caption: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
      },
      {
        image: ProjectTwoImage,
        caption: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut',
      },
      {
        image: ProjectThreeImage,
        caption: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        image: ProjectFourImage,
        caption: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco',
      },
      {
        image: ProjectFiveImage,
        caption: 'Laboris nisi ut aliquip ex ea commodo consequat',
      },
      {
        image: ProjectSixImage,
        caption: 'Duis aute irure dolor in reprehenderit in voluptate',
      },
    ],
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
        description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
        status: 'Завершен',
        type: 'ФФФ',
        area: '157 000',
        image: ResidentTwoImage,
        award: 'Победитель в номинации «Сделка Года. Индустриальная недвижимость 2021» в рамках ежегодной профессиональной премии в области коммерческой недвижимости Commercial Real Estate Awards (резидент)',
        completion_time: '12 мес.',
      },
      2: {
        name: 'Золотое яблоко',
        description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
        status: 'В процессе',
        type: 'РЦ',
        area: '46 000',
        image: ResidentThreeImage,
      },
      3: {
        name: 'Свободное назначение',
        description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
        status: 'Свободные земельные участки',
        area: '25 000',
        image: ResidentOneImage,
        award: 'Победитель в номинации «Сделка Года. Индустриальная недвижимость 2021» в рамках ежегодной профессиональной премии в области коммерческой недвижимости Commercial Real Estate Awards (резидент)',
      },
      4: {
        name: 'Свободное назначение',
        description: 'Lorem ipsum dolor sit amet consectetur. In euismod malesuada nunc quam cras odio eu sed tortor. Mauris sed orci diam aliquet augue.',
        status: 'Свободные земельные участки',
        area: '25 000',
        image: ResidentTwoImage,
        award: 'Победитель в номинации «Сделка Года. Индустриальная недвижимость 2021» в рамках ежегодной профессиональной премии в области коммерческой недвижимости Commercial Real Estate Awards (резидент)',
      },
    },

    full_description: ['Lorem ipsum dolor sit amet consectetur. Pellentesque egestas viverra netus sed viverra purus pellentesque quam amet. Vestibulum venenatis viverra nunc ultricies tortor nunc ac. Nisi euismod eu in lacinia commodo.', 'Vitae leo nulla dolor amet nec id. Scelerisque nibh sed mauris nibh pharetra. Semper malesuada vitae ut habitasse cursus. Id odio consequat orci malesuada cras et risus magna. Commodo.'],
    project_area: '400 000',
    zone_area: '107',
    location: {
      address: 'Московская область, Городской округ Истра, село Петровское на пересечении федеральных трасс А-107 и М-9',
      link: 'https://yandex.ru/maps/-/CDhhjL1K',
      widget: 'https://yandex.ru/map-widget/v1/?ll=37.619406%2C55.749228&mode=poi&poi%5Bpoint%5D=37.618879%2C55.751426&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1023322799&z=16.8',
    },
    specifications: [
      {
        heading: 'Инфраструктура',
        caption: 'Современная инфраструктура с резервными мощностями инженерных систем.',
      },
      {
        heading: 'Транспорт',
        caption: 'Удобная транспортная доступность с прямым выездом на федеральные трассы А-107 и М-9.',
      },
      {
        heading: 'Планировка',
        caption: 'Эффективная планировка территории с учетом оптимизации логистических потоков.',
      },
      {
        heading: 'Безопасность',
        caption: 'Комплексная система безопасности с круглосуточным видеонаблюдением и контролем доступа.',
      },
    ],
    gallery: [
      {
        image: ProjectOneImage,
        caption: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
      },
      {
        image: ProjectTwoImage,
        caption: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut',
      },
      {
        image: ProjectThreeImage,
        caption: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        image: ProjectFourImage,
        caption: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco',
      },
      {
        image: ProjectFiveImage,
        caption: 'Laboris nisi ut aliquip ex ea commodo consequat',
      },
      {
        image: ProjectSixImage,
        caption: 'Duis aute irure dolor in reprehenderit in voluptate',
      },
    ],
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
