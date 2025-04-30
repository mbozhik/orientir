import {defineType} from 'sanity'

export const typeParams = defineType({
  title: 'Параметры',
  name: 'typeParams',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          name: 'param',
          title: 'Параметр',
          type: 'string',
          validation: (rule) => rule.required(),
        },
        {
          name: 'value',
          title: 'Значение',
          type: 'string',
          validation: (rule) => rule.required(),
        },
      ],

      preview: {
        select: {
          param: 'param',
          value: 'value',
        },
        prepare({param, value}) {
          return {
            title: `${param} ${value && value !== ' ' ? ` — ${value}` : ''}`,
          }
        },
      },
    },
  ],
})
