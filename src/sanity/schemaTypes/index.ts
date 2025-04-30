import {type SchemaTypeDefinition} from 'sanity'

import {project} from './project'
import {direction} from './direction'
import {news} from './news'

import {typeBlock, typeParams, typeResident} from './types'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [
    project,
    direction,
    news,

    // Типы
    typeBlock,
    typeParams,
    typeResident,
  ],
}
