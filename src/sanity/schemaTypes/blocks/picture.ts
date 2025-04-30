import {defineType, defineField} from 'sanity'

export const picture = defineType({
  name: 'picture',
  title: 'Изображение',
  type: 'object',
  fields: [
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
      name: 'caption',
      title: 'Подпись',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      caption: 'caption',
      image: 'image',
    },
    prepare({caption, image}) {
      return {
        title: caption || 'Изображение',
        subtitle: 'Изображение',
        media: image,
      }
    },
  },
})
