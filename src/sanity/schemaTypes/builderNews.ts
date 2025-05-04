import {defineType} from 'sanity'

export const builderNews = defineType({
  name: 'builderNews',
  type: 'array',
  of: [
    {name: 'content', type: 'content'},
    {name: 'picture', type: 'picture'},
    {name: 'quote', type: 'quote'},
  ],
  options: {
    insertMenu: {
      groups: [
        {
          name: 'content',
          title: 'Text Blocks',
          of: ['content', 'quote'],
        },
        {
          name: 'picture',
          title: 'Images',
          of: ['picture'],
        },
      ],
      views: [
        {
          name: 'grid',
          previewImageUrl: (schemaTypeName) => `/sanity/${schemaTypeName}.jpg`,
        },
      ],
    },
  },
})
