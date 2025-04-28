import {defineType} from 'sanity'

export const STATUS_VALUES = {
  completed: 'Завершен',
  in_progress: 'В процессе',
  free_lots: 'Свободный участок',
} as const

export type ResidentStatus = keyof typeof STATUS_VALUES

export const typeResident = defineType({
  title: 'Резидент',
  name: 'typeResident',
  type: 'object',
  fields: [
    {
      name: 'naming',
      title: 'Название',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'type',
      title: 'Тип',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'status',
      title: 'Статус',
      type: 'string',
      options: {
        list: Object.entries(STATUS_VALUES).map(([value, title]) => ({
          title,
          value,
        })),
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'completion_time',
      title: 'Время завершения',
      type: 'string',
      validation: (rule) => rule.regex(/^\d+ мес.$/),
      hidden: ({parent}) => parent?.status !== Object.keys(STATUS_VALUES)[0],
    },
    {
      name: 'area',
      title: 'Площадь',
      description: 'Формат: xxx xxx (например, 120 000 или 80 000)',
      type: 'string',
      validation: (rule) =>
        rule
          .required()
          .regex(/^\d+\s\d{3}$/)
          .error('Площадь должна быть в формате xxx xxx (например, 120 000 или 80 000)'),
    },
    // {
    //   name: 'image',
    //   title: 'Изображение',
    //   type: 'image',
    //   options: {hotspot: true},
    //   validation: (rule) => rule.required(),
    // },
    {
      name: 'info',
      title: 'Информация',
      type: 'typeParams',
      // validation: (rule) =>
      //   rule.custom((value) => {
      //     if (!value) return true // allow empty
      //     if (Array.isArray(value) && value.length % 2 === 0) return true // allow even number of elements
      //     return 'Должно быть четное количество элементов.'
      //   }),
    },
  ],

  preview: {
    select: {
      naming: 'naming',
      type: 'type',
      status: 'status',
    },
    prepare({naming, type, status}: {naming: string; type: string; status: ResidentStatus}) {
      return {
        title: naming,
        subtitle: `${type} — ${STATUS_VALUES[status]}`,
      }
    },
  },
})
