import {type SchemaTypeDefinition} from 'sanity'

import {project} from './project'
import {direction} from './direction'
import {news} from './news'

import {typeBlock} from './typeBlock'
import {typeParams} from './typeParams'
import {typeResident} from './typeResident'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [project, direction, news, typeBlock, typeParams, typeResident],
}
