import type {PAGES_ITEM_QUERYResult} from '-/sanity.types'

import {H1, H4} from '~/UI/Typography'
import ClientsModule from '~~/index/ClientsModule'

export default function Clients({page}: {page: PAGES_ITEM_QUERYResult}) {
  return (
    <section data-section="clients-index" className="space-y-14 sm:space-y-7">
      <div className="grid grid-cols-2 sm:grid-cols-1 sm:gap-3">
        <H1>{page?.indexClients?.heading}</H1>
        <H4 className="max-w-[50ch]">{page?.indexClients?.caption}</H4>
      </div>

      <ClientsModule page={page} />
    </section>
  )
}
