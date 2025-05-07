import {type SchemaTypeDefinition} from 'sanity'

import {page} from './page'
import {project} from './project'
import {direction} from './direction'
import {news} from './news'

import {typeBlock, typeParams, typeResident} from './types'

import {builderNews} from './builderNews'
import {content, picture, quote} from './blocks'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [
    page,
    project,
    direction,
    news,

    // Типы
    typeBlock,
    typeParams,
    typeResident,

    // Билдеры
    builderNews,

    // Блоки
    content,
    picture,
    quote,
  ],
}
