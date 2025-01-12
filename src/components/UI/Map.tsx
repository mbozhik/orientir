'use client'

import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps'

type Props = {
  coordinates: number[]
  placemarks?: number[][]
  zoom?: number
  height?: string
}

export default function YandexMap({coordinates, placemarks, zoom = 16, height = '80vh'}: Props) {
  const mapPlacemarks = placemarks?.length ? placemarks : [coordinates]

  return (
    <YMaps query={{lang: 'ru_RU'}}>
      <div className="relative w-full overflow-hidden" style={{height: `calc(${height} - 35px)`}}>
        <Map className="absolute inset-0 w-full saturate-0" style={{height}} state={{center: coordinates, zoom}}>
          {mapPlacemarks.map((placemark, index) => (
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
