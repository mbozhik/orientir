'use client'

export type YMapCoordinates = YMapLocationRequest & {
  center: LngLat
  zoom: number
}

import {YMapLocationRequest, LngLat} from '@yandex/ymaps3-types'
import React from 'react'
import {YMap, YMapComponentsProvider, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapListener, YMapDefaultMarker} from 'ymap3-components'

type Props = {
  coordinates: YMapCoordinates
  placemarks?: YMapCoordinates[]
}

export function Map({coordinates, placemarks}: Props) {
  const mapPlacemarks: LngLat[] = placemarks?.length ? placemarks.map((placemark) => placemark.center) : [coordinates.center]

  return (
    <YMapComponentsProvider apiKey={process.env.NEXT_PUBLIC_YMAPS_API_KEY ?? ''} lang="ru_RU">
      <YMap key="map" className="h-screen" location={coordinates} mode="vector" theme="dark">
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />
        <YMapListener />

        {mapPlacemarks.map((placemark, idx) => (
          <YMapDefaultMarker coordinates={placemark} key={idx} />
        ))}
      </YMap>
    </YMapComponentsProvider>
  )
}
