export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:2000'
// export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://10.99.12.151:2000'

export const WEBSITE_PATHS = {
  about: 'О компании',
  directions: 'Направления',
  projects: 'Проекты',
  // news: 'Новости',
}

export const WEBSITE_RESOURCES = {
  info: {
    'По общим вопросам': 'info@orientir.ru',
    'PR-служба (для СМИ)': 'pr@orientir.ru',
    // 'Отдел кадров': 'hr@orientir.ru',
  },
  contacts: {
    '+7 (499) 940 12-20': 'tel:+74999401220',
    'info@orientir.ru': 'mailto:info@orientir.ru',
    'Пресненская набережная, 10, Блок С, 25-й этаж': 'https://yandex.ru/maps/-/CDHoJ8JB',
  },
}
