import {type SchemaTypeDefinition} from 'sanity'

import {direction} from './direction'
import {news} from './news'

import {typeBlock} from './typeBlock'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [direction, news, typeBlock],
}
