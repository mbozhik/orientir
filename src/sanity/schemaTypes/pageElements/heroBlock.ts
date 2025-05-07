import {defineField} from 'sanity'
import {isRequiredForPages, isHiddenForPages} from '@/sanity/schemaTypes/page'

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
      validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['directions', 'news'])),
      hidden: ({document}) => isHiddenForPages(document, 'include', ['directions', 'news']),
    },
    {
      name: 'image',
      title: 'Изображение',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'exclude', context, ['news'])),
      hidden: ({document}) => isHiddenForPages(document, 'exclude', ['news']),
    },
  ],
  validation: (rule) => rule.required(),
})
