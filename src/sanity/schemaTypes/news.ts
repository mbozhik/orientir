import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const news = defineType({
  name: 'news',
  title: 'Новости',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Заголовок',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Тег',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Дата',
      description: 'Формат: xx.xx.xx (например, 04.04.24)',
      type: 'string',
      validation: (rule) =>
        rule
          .required()
          .regex(/^\d{2}\.\d{2}\.\d{2}$/)
          .error('Дата должна быть в формате xx.xx.xx (например, 01.02.24)'),
    }),
    defineField({
      name: 'source',
      title: 'Источник',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL новости',
      type: 'slug',
      options: {
        source: 'heading',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cover',
      title: 'Обложка',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Описание изображения',
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      type: 'typeBlock',
    }),
  ],

  preview: {
    select: {
      heading: 'heading',
      date: 'date',
      tag: 'tag',
    },

    prepare(selection) {
      const {heading, date, tag} = selection

      return {
        title: heading,
        subtitle: `${date} — ${tag}`,
      }
    },
  },
})
