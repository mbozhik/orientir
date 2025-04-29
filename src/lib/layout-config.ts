import type {Metadata} from 'next'
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: {
    template: '%s — Ориентир',
    default: 'Ориентир — Девелопмент полного цикла',
  },
  description: 'Девелопер полного цикла в сфере складской и индустриальной недвижимости.',
  robots: {
    index: false,
    follow: false,
  },
}

export const circe = localFont({
  src: [
    {
      path: '../assets/fonts/Circe-Light.woff',
      weight: '300',
    },
    {
      path: '../assets/fonts/Circe-Regular.woff',
      weight: '400',
    },
    {
      path: '../assets/fonts/Circe-Bold.woff',
      weight: '700',
    },
  ],
})
