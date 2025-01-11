'use client'

import {YMaps, Map} from '@pbe/react-yandex-maps'

type Props = {
  coordinates?: number[]
  zoom?: number
}

const testPoint = [55.63567511574693, 38.05576231324671]

export default function YandexMap({coordinates = testPoint, zoom = 16}: Props) {
  return (
    <YMaps query={{lang: 'ru_RU'}}>
      <Map className="w-full h-[60vh] saturate-0" defaultState={{center: coordinates, zoom: zoom}} />
    </YMaps>
  )
}
