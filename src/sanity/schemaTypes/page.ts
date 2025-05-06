import {DocumentTextIcon} from '@sanity/icons'
import {defineType, isDev, ValidationContext} from 'sanity'

import {hero} from '@/sanity/schemaTypes/pageElements/hero'
import {directionsDetails, directionsSpecs} from '@/sanity/schemaTypes/pageElements/directions'

export const PAGES_TOKENS = {
  index: 'Главная',
  about: 'О компании',
  directions: 'Направления',
  news: 'Новости',
} as const

export type PageToken = keyof typeof PAGES_TOKENS

export const isRequiredForPages = (value: unknown, mode: 'include' | 'exclude', context: ValidationContext, pageTokens: PageToken[]) => {
  const pageToken = context.document?.token as PageToken | undefined

  if (!pageToken) return true

  // 'include' (для указанных страниц), 'exclude' (для всех страниц, кроме указанных)
  const isRequired =
    mode === 'include'
      ? pageTokens.includes(pageToken) // Обязательно, если токен В списке
      : !pageTokens.includes(pageToken) // Обязательно, если токен НЕ в списке

  return isRequired ? (value ? true : 'Это поле обязательно для данной страницы') : true
}

export const isHiddenForPages = (
  document:
    | {
        token?: string
        [key: string]: unknown
      }
    | undefined,
  mode: 'include' | 'exclude',
  pageTokens: PageToken[],
) => {
  const pageToken = document?.token as PageToken | undefined

  if (!pageToken) return true

  // 'include' (для указанных страниц), 'exclude' (для всех страниц, кроме указанных)
  return mode === 'include'
    ? !pageTokens.includes(pageToken) // Скрыть, если токен НЕ в списке
    : pageTokens.includes(pageToken) // Скрыть, если токен В списке
}

export const page = defineType({
  name: 'page',
  title: 'Страница',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    {
      name: 'token',
      title: 'Страница',
      options: {
        list: Object.entries(PAGES_TOKENS).map(([value, title]) => ({title, value})),
      },
      type: 'string',
      validation: (rule) => rule.required(),
      readOnly: !isDev,
    },

    hero,

    directionsDetails,
    directionsSpecs,
  ],

  preview: {
    select: {
      token: 'token',
      hero: 'hero',
    },

    prepare(selection) {
      const {token, hero} = selection

      return {
        title: PAGES_TOKENS[token as keyof typeof PAGES_TOKENS],
        subtitle: hero.heading,
        media: hero.image,
      }
    },
  },
})
