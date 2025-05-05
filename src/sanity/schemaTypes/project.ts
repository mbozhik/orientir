import {CaseIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import React from 'react'

const CoordinatesDescription = () =>
  React.createElement(
    'span',
    null,
    'Формат: [yy.yyyyy, xx.xxxxxx] — ',
    React.createElement(
      'a',
      {
        href: 'https://yandex.ru/map-constructor/location-tool/?coordorder=longlat',
        target: '_blank',
      },
      'Сервис для определения координат',
    ),
  )

export const project = defineType({
  name: 'project',
  title: 'Проект',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'naming',
      title: 'Название',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL проекта',
      type: 'slug',
      options: {
        source: 'naming',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'id',
      title: 'ID',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'information',
      title: 'Информация',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (rule) => rule.required(),
            },
            {
              name: 'text',
              type: 'typeBlock',
              validation: (rule) => rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'text',
              media: 'image',
            },
          },
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'residents',
      title: 'Резиденты',
      type: 'array',
      of: [{type: 'typeResident'}],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'area',
      title: 'Площадь',
      type: 'object',
      fields: [
        {
          name: 'project',
          title: 'Площадь проекта',
          description: 'Формат: xxx xxx (например, 120 000 или 80 000)',
          type: 'string',
          validation: (rule) =>
            rule
              .required()
              .regex(/^\d+\s\d{3}$/)
              .error('Площадь должна быть в формате xxx xxx (например, 120 000 или 80 000)'),
        },
        {
          name: 'zone',
          title: 'Площадь участка',
          description: 'Формат: xx.xx или xx (например, 15.50 или 25)',
          type: 'string',
          validation: (rule) =>
            rule
              .required()
              .regex(/^\d+(\.\d{1,2})?$/)
              .error('Формат: xx.xx или xx (например, 15.50 или 25)'),
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Местоположение',
      type: 'object',
      fields: [
        {
          name: 'address',
          title: 'Адрес',
          type: 'string',
          validation: (rule) => rule.required(),
        },
        {
          name: 'link',
          title: 'Ссылка на Яндекс Карты',
          description: 'Пример: https://yandex.ru/maps/-/CHfkn8l3',
          type: 'url',
          validation: (rule) => rule.required(),
        },
        {
          name: 'coordinates',
          title: 'Координаты',
          description: CoordinatesDescription(), // Add parentheses here to call the function
          type: 'string',
          validation: (rule) =>
            rule
              .required()
              .regex(/^\[\d+\.\d+,\s?\d+\.\d+\]$/)
              .error('Координаты должны быть в формате [yy.yyyyy, xx.xxxxxx]'),
        },
        {
          name: 'availability',
          title: 'Доступность',
          type: 'typeParams',
          validation: (rule) => rule.required().min(1),
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'specifications',
      title: 'Спецификации',
      type: 'typeParams',
      validation: (rule) => rule.required(), // .min(4).max(4),
    }),
    defineField({
      name: 'awards',
      title: 'Награды',
      type: 'array',
      of: [{type: 'text', rows: 3}],
    }),
    defineField({
      name: 'image',
      title: 'Изображения',
      type: 'object',
      fields: [
        {
          name: 'desktop',
          title: 'Изображение',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (rule) => rule.required(),
        },
        // {
        //   name: 'mobile',
        //   title: 'Изображение (Mobile)',
        //   type: 'image',
        //   options: {
        //     hotspot: true,
        //   },
        //   validation: (rule) => rule.required(),
        // },
        {
          name: 'alt',
          title: 'Описание изображения',
          type: 'string',
          validation: (rule) => rule.required(),
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Галерея',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Подпись',
            },
          ],
        },
      ],
      validation: (rule) => rule.required().min(2),
    }),
  ],
  preview: {
    select: {
      naming: 'naming',
      id: 'id',
      description: 'description',
      media: 'image',
    },
    prepare({id, naming, description, media}) {
      return {
        title: naming,
        subtitle: `(${id}) ${description}`,
        media: media.image,
      }
    },
  },
})
