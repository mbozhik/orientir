import MiratorgLogo from '$/index/clients/miratorg.svg'
import ObiLogo from '$/index/clients/obi.svg'
import OzonLogo from '$/index/clients/ozon.svg'
import UtkonosLogo from '$/index/clients/utkonos.svg'
import X5Logo from '$/index/clients/x5.svg'

import Image from 'next/image'
import Heading from '~/UI/Heading'
import Text from '~/UI/Text'

const logos = [OzonLogo, X5Logo, MiratorgLogo, UtkonosLogo, ObiLogo]

export default function Clients() {
  return (
    <section data-section="clients-index" className="space-y-20 sm:space-y-5">
      <div className="grid grid-cols-2 sm:grid-cols-1 sm:gap-3">
        <Heading type="h1" text="Клиенты" />
        <Text type="h4" className="max-w-[50ch]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur in odio sed rhoncus." />
      </div>

      <div className="w-[75%] sm:w-full mx-auto border-t-2 border-gray-light">
        <div className="flex items-center justify-around gap-5 overflow-hidden sm:gap-10">
          {logos.map((logo, index) => (
            <Image className="object-contain s-32 hover:scale-[1.1] duration-300" key={index} src={logo} alt="" />
          ))}
        </div>
      </div>
    </section>
  )
}
