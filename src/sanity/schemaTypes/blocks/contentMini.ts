import {defineType, defineField} from 'sanity'

export const contentMini = defineType({
  name: 'contentMini',
  title: 'Мини-контент',
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
      name: 'content',
      title: 'Содержание',
      type: 'typeBlock',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      content: 'content',
      image: 'image',
    },
    prepare({content, image}) {
      let title = 'Мини-контент'

      if (content?.length > 0) {
        const firstBlock = content[0]

        if (firstBlock._type === 'block' && firstBlock.children?.length > 0) {
          const text = firstBlock.children
            .map((child: {text?: string}) => child.text || '')
            .join('')
            .trim()

          if (text) {
            title = text.length > 50 ? `${text.substring(0, 50)}...` : text
          }
        }
      }

      return {
        title,
        subtitle: 'Мини-контент (изображение, контент)',
        media: image,
      }
    },
  },
})
