'use client'

import {YMaps, Map} from '@pbe/react-yandex-maps'

type Props = {
  coordinates?: number[]
  zoom?: number
  height?: string
}

const testPoint = [55.63567511574693, 38.05576231324671]

export default function YandexMap({coordinates = testPoint, zoom = 16, height = '65vh'}: Props) {
  return (
    <YMaps query={{lang: 'ru_RU'}}>
      <div className="relative w-full overflow-hidden" style={{height: `calc(${height} - 35px)`}}>
        <Map className="absolute inset-0 w-full saturate-0" style={{height: height}} defaultState={{center: coordinates, zoom: zoom}} />
      </div>
    </YMaps>
  )
}
