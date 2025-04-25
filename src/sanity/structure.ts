import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Ориентир CMS')
    .items([
      S.documentTypeListItem('direction').title('Направление'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['direction'].includes(item.getId()!),
      ),
    ])
    
