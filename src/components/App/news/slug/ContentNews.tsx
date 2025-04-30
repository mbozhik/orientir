import type {BuilderNews} from '-/sanity.types'

export default function ContentNews({content}: {content: BuilderNews | null | undefined}) {
  return <section data-section="content-news">{JSON.stringify(content)}</section>
}
