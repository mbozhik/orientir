import {defineField} from 'sanity'
import {isRequiredForPages, isHiddenForPages} from '@/sanity/schemaTypes/page'

export const aboutQuote = defineField({
  name: 'aboutQuote',
  title: 'Цитата (О компании)',
  type: 'object',
  fields: [
    {
      name: 'quote',
      title: 'Цитата',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['about'])),
    },
    {
      name: 'caption',
      title: 'Подзаголовок',
      type: 'text',
      rows: 6,
      validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['about'])),
    },
  ],
  validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['about'])),
  hidden: ({document}) => isHiddenForPages(document, 'include', ['about']),
})

export const aboutResources = defineField({
  name: 'aboutResources',
  title: 'Ресурсы (О компании)',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Заголовок',
      type: 'string',
      validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['about'])),
    },
    defineField({
      name: 'resources',
      title: 'Ресурсы',
      type: 'typeParams',
      validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['about'])),
    }),
    {
      name: 'image',
      title: 'Изображение',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['about'])),
    },
  ],
  validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['about'])),
  hidden: ({document}) => isHiddenForPages(document, 'include', ['about']),
})
