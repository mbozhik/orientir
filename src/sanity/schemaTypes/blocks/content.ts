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
      content: 'content',
      image: 'image',
    },
    prepare({heading, content, image}) {
      let text = 'Мини-контент'

      if (content?.length > 0) {
        const firstBlock = content[0]

        if (firstBlock._type === 'block' && firstBlock.children?.length > 0) {
          const value = firstBlock.children
            .map((child: {text?: string}) => child.text || '')
            .join('')
            .trim()

          if (value) {
            text = value.length > 50 ? `${value.substring(0, 50)}...` : value
          }
        }
      }

      return {
        title: heading ? heading : text,
        subtitle: `Контент ${heading ? '+' : ''}`,
        media: image,
      }
    },
  },
})
