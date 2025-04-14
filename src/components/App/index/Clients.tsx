import AhlersLogo from '$/index/clients/ahlers.png'
import AlfabankLogo from '$/index/clients/alfa-bank.png'
import CapitalgroupLogo from '$/index/clients/capital-group.png'
import CijikLogo from '$/index/clients/cijik.png'
import DhollandiaLogo from '$/index/clients/dhollandia.png'
import EldoradoLogo from '$/index/clients/eldorado.png'
import GloriajeansLogo from '$/index/clients/gloria-jeans.png'
import GoldenappleLogo from '$/index/clients/golden-apple.png'
import IkeaLogo from '$/index/clients/ikea.png'
import ImlLogo from '$/index/clients/iml.png'
import LentaLogo from '$/index/clients/lenta.png'
import MajorlogisticLogo from '$/index/clients/major-logistic.png'
import MiratorgLogo from '$/index/clients/miratorg.png'
import ObiLogo from '$/index/clients/obi.png'
import OzonLogo from '$/index/clients/ozon.png'
import PltLogo from '$/index/clients/plt.png'
import PmefLogo from '$/index/clients/pmef-19.png'
import PsbLogo from '$/index/clients/psb.png'
import RfarmLogo from '$/index/clients/r-farm.png'
import RaifbankLogo from '$/index/clients/raif-bank.png'
import RavenrussiaLogo from '$/index/clients/raven-russia.png'
import RustonLogo from '$/index/clients/ruston.png'
import SberbankLogo from '$/index/clients/sber-bank.png'
import StatotalgroupLogo from '$/index/clients/sta-total-group.png'
import TechnoaviaLogo from '$/index/clients/techno-avia.png'
import UtkonosLogo from '$/index/clients/utkonos.png'
import VsrealestateLogo from '$/index/clients/vs-real-estate.png'
import X5Logo from '$/index/clients/x5.png'

import {H1, H4} from '~/UI/Typography'
import ClientsModule from '~~/index/ClientsModule'

const logos = [AhlersLogo, AlfabankLogo, CapitalgroupLogo, CijikLogo, DhollandiaLogo, EldoradoLogo, GloriajeansLogo, GoldenappleLogo, IkeaLogo, ImlLogo, LentaLogo, MajorlogisticLogo, MiratorgLogo, ObiLogo, OzonLogo, PltLogo, PmefLogo, PsbLogo, RfarmLogo, RaifbankLogo, RavenrussiaLogo, RustonLogo, SberbankLogo, StatotalgroupLogo, TechnoaviaLogo, UtkonosLogo, VsrealestateLogo, X5Logo]

export default function Clients() {
  return (
    <section data-section="clients-index" className="space-y-14 sm:space-y-7">
      <div className="grid grid-cols-2 sm:grid-cols-1 sm:gap-3">
        <H1>Клиенты</H1>
        <H4 className="max-w-[50ch]">Крупнейшие партнеры и игроки рынка e-commerce, retail, grocery, infrastructure, fashion, production.</H4>
      </div>

      <ClientsModule items={logos} />
    </section>
  )
}
