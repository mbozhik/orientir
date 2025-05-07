import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Ориентир CMS')
    .items([
      S.documentTypeListItem('page').title('Страницы'),
      S.divider(),
      S.documentTypeListItem('project').title('Проекты'),
      S.documentTypeListItem('direction').title('Направления'),
      S.documentTypeListItem('news').title('Новости'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['page', 'project', 'direction', 'news'].includes(item.getId()!), // что за фильтрация
      ),
    ])
// .items(S.documentTypeListItems())
