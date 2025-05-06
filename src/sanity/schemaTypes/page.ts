import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType, isDev} from 'sanity'

export const PAGES_TOKENS = {
  index: 'Главная',
  about: 'О компании',
  directions: 'Направления',
  projects: 'Проекты',
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

    defineField({
      name: 'hero',
      title: 'Hero-блок',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Заголовок',
          type: 'text',
          rows: 2,
          validation: (rule) => rule.required(),
        },
        {
          name: 'caption',
          title: 'Подзаголовок',
          type: 'text',
          rows: 4,
          validation: (rule) =>
            rule.custom((value, context) => {
              const pageToken = context.document?.token as string | undefined

              if (pageToken && ['directions', 'news'].includes(pageToken)) {
                return value ? true : 'Подзаголовок обязателен для этой страницы'
              }

              return true
            }),
          hidden: ({document}) => {
            const pageToken = document?.token as string | undefined
            return !pageToken || !['directions', 'news'].includes(pageToken)
          },
        },
        {
          name: 'image',
          title: 'Изображение',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (rule) => rule.required(),
        },
      ],
      validation: (rule) => rule.required(),
    }),
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
