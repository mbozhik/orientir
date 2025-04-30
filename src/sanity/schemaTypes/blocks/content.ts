import {defineType, defineField} from 'sanity'

export const content = defineType({
  name: 'content',
  title: 'Контент',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Заголовок',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Изображение',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Описание изображения',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Содержание',
      type: 'typeBlock',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      image: 'image',
    },
    prepare({heading, image}) {
      return {
        title: heading,
        subtitle: 'Контент (подпись, изображение, контент)',
        media: image,
      }
    },
  },
})
