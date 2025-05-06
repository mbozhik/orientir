import {defineField} from 'sanity'
import {isRequiredForPages, isHiddenForPages} from '@/sanity/schemaTypes/page'

export const directionsDetails = defineField({
  name: 'directionsDetails',
  title: 'Детали (Направления)',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Заголовок',
      type: 'text',
      rows: 2,
      validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['directions'])),
    },
    {
      name: 'caption',
      title: 'Подзаголовок',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['directions'])),
    },
    {
      name: 'image',
      title: 'Изображение',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['directions'])),
    },
  ],
  validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['directions'])),
  hidden: ({document}) => isHiddenForPages(document, 'include', ['directions']),
})

export const directionsSpecs = defineField({
  name: 'directionsSpecs',
  title: 'Показатели (Направления)',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Заголовок',
      type: 'string',
      validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['directions'])),
    },
    defineField({
      name: 'specifications',
      title: 'Спецификации',
      type: 'typeParams',
      validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['directions'])),
    }),
  ],
  validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['directions'])),
  hidden: ({document}) => isHiddenForPages(document, 'include', ['directions']),
})
