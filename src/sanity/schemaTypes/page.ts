import {DocumentTextIcon} from '@sanity/icons'
import {defineType, isDev} from 'sanity'

import {hero} from './pageElements/hero'

export const PAGES_TOKENS = {
  index: 'Главная',
  about: 'О компании',
  directions: 'Направления',
  news: 'Новости',
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
