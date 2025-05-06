import {defineField} from 'sanity'

export const hero = defineField({
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
      validation: (rule) =>
        rule.custom((value, context) => {
          const pageToken = context.document?.token as string | undefined

          if (pageToken && pageToken !== 'news') {
            return value ? true : 'Изображение обязательно для этой страницы'
          }

          return true
        }),
      hidden: ({document}) => {
        const pageToken = document?.token as string | undefined
        return pageToken === 'news'
      },
    },
  ],
  validation: (rule) => rule.required(),
})
