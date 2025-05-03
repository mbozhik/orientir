import {DashboardIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const direction = defineType({
  name: 'direction',
  title: 'Направление',
  type: 'document',
  icon: DashboardIcon,
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Заголовок',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'params',
      title: 'Параметры',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'item',
          title: 'Параметр',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'id',
    },
  },
})
