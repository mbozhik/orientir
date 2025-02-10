import OzonLogo from '$/index/clients/ozon.svg'
import X5Logo from '$/index/clients/x5.svg'
import MiratorgLogo from '$/index/clients/miratorg.svg'
import UtkonosLogo from '$/index/clients/utkonos.svg'
import ObiLogo from '$/index/clients/obi.svg'

import {H1, H4} from '~/UI/Typography'
import ClientsModule from '~~/index/ClientsModule'

const logos = [OzonLogo, X5Logo, MiratorgLogo, UtkonosLogo, ObiLogo]

export default function Clients() {
  return (
    <section data-section="clients-index" className="space-y-14 sm:space-y-7">
      <div className="grid grid-cols-2 sm:grid-cols-1 sm:gap-3">
        <H1>Клиенты</H1>
        <H4 className="max-w-[50ch]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur in odio sed rhoncus.</H4>
      </div>

      <ClientsModule items={logos} />
    </section>
  )
}
