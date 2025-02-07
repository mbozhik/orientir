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

export function Map({coordinates}: Props) {
  return (
    <YMapComponentsProvider apiKey={process.env.NEXT_PUBLIC_YMAPS_API_KEY ?? ''} lang="ru_RU">
      <YMap key="map" className="h-screen" location={coordinates} mode="vector" theme="dark">
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />
        <YMapListener />

        {'center' in coordinates && <YMapDefaultMarker coordinates={coordinates.center} />}
      </YMap>
    </YMapComponentsProvider>
  )
}
