'use client'

import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps'

type Props = {
  coordinates?: number[]
  placemarks?: number[][]
  zoom?: number
  height?: string
}

const defaultCoordinates = [55.63567511574693, 38.05576231324671]
const defaultPlacemarks = [
  [55.63567511574693, 38.05576231324671],
  [55.63447591574693, 38.05156231324671],
]

export default function YandexMap({coordinates = defaultCoordinates, placemarks = defaultPlacemarks, zoom = 16, height = '70vh'}: Props) {
  return (
    <YMaps query={{lang: 'ru_RU'}}>
      <div className="relative w-full overflow-hidden" style={{height: `calc(${height} - 35px)`}}>
        <Map className="absolute inset-0 w-full saturate-0" style={{height}} defaultState={{center: coordinates, zoom}}>
          {placemarks.map((placemark, index) => (
            <Placemark
              key={index}
              geometry={placemark}
              options={{
                preset: 'islands#circleIcon',
                iconColor: '#000',
              }}
            />
          ))}
        </Map>
      </div>
    </YMaps>
  )
}
