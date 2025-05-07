import {defineField} from 'sanity'
import {isRequiredForPages, isHiddenForPages} from '@/sanity/schemaTypes/page'

export const indexDirections = defineField({
  name: 'indexDirections',
  title: 'Направления (Главная)',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Заголовок',
      type: 'string',
      validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['index'])),
    },
    {
      name: 'caption',
      title: 'Подзаголовок',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['index'])),
    },
    {
      name: 'image',
      title: 'Изображение',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['index'])),
    },
  ],
  validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['index'])),
  hidden: ({document}) => isHiddenForPages(document, 'include', ['index']),
})

export const indexClients = defineField({
  name: 'indexClients',
  title: 'Клиенты (Главная)',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Заголовок',
      type: 'string',
      validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['index'])),
    },
    {
      name: 'caption',
      title: 'Подзаголовок',
      type: 'text',
      rows: 2,
      validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['index'])),
    },
    {
      name: 'logos',
      title: 'Логотипы',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Изображение',
              type: 'image',
            },
            {
              name: 'company',
              title: 'Компания',
              type: 'string',
            },
          ],
        },
      ],
      validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['index'])),
    },
  ],
  validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['index'])),
  hidden: ({document}) => isHiddenForPages(document, 'include', ['index']),
})

export const indexTeam = defineField({
  name: 'indexTeam',
  title: 'Команда (Главная)',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Подзаголовок',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['index'])),
    },
    {
      name: 'heading2',
      title: 'Второй подзаголовок',
      description: 'Отображается только на мобильном устройстве',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['index'])),
    },
    {
      name: 'members',
      title: 'Участники',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Имя и Фамилия',
              type: 'string',
              validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['index'])),
            },
            {
              name: 'position',
              title: 'Должность',
              type: 'string',
              validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['index'])),
            },
            {
              name: 'photo',
              title: 'Фотография',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['index'])),
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'position',
              media: 'photo',
            },
          },
        },
      ],
      validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['index'])),
    },
  ],

  validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['index'])),
  hidden: ({document}) => isHiddenForPages(document, 'include', ['index']),
})

export const indexAwards = defineField({
  name: 'indexAwards',
  title: 'Награды (Главная)',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          name: 'year',
          title: 'Год',
          type: 'number',
          validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['index'])),
        },
        {
          name: 'achievements',
          title: 'Достижения',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'award',
                  title: 'Награда',
                  type: 'string',
                  validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['index'])),
                },
                {
                  name: 'object',
                  title: 'Объект',
                  type: 'text',
                  rows: 2,
                  validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['index'])),
                },
                {
                  name: 'status',
                  title: 'Статус',
                  type: 'string',
                  validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['index'])),
                },
              ],

              preview: {
                select: {
                  title: 'award',
                  subtitle: 'object',
                },
              },
            },
          ],
        },
      ],

      preview: {
        select: {
          year: 'year',
          achievements: 'achievements',
        },
        prepare({year, achievements}) {
          return {
            title: `${year} год`,
            subtitle: `(${achievements.length}) ${achievements.map((achievement: {award: string}) => achievement.award).join(', ')}`,
          }
        },
      },
    },
  ],
  validation: (rule) => rule.custom((value, context) => isRequiredForPages(value, 'include', context, ['index'])),
  hidden: ({document}) => isHiddenForPages(document, 'include', ['index']),
})
