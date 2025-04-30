import {defineType, defineField} from 'sanity'

export const quote = defineType({
  name: 'quote',
  title: 'Цитата',
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      title: 'Текст цитаты',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Автор',
      type: 'object',
      fields: [
        defineField({
          name: 'image',
          title: 'Фото автора',
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
          name: 'name',
          title: 'ФИО автора',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'position',
          title: 'Должность',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      author: 'author',
    },
    prepare({author}) {
      return {
        title: `${author.name} (${author.position})}`,
        subtitle: 'Цитата',
        media: author.image,
      }
    },
  },
})
