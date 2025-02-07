'use client'

import type {YMapLocationRequest, LngLat, VectorCustomizationItem} from '@yandex/ymaps3-types'
import CustomYMap from '@/lib/custom-ymap.json'

import React from 'react'
import {YMap, YMapComponentsProvider, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapListener, YMapDefaultMarker} from 'ymap3-components'

export type YMapCoordinates = YMapLocationRequest & {
  center: LngLat
  zoom: number
}

type Props = {
  coordinates: YMapCoordinates
  placemarks?: YMapCoordinates[]
}

const customYMapData: VectorCustomizationItem[] = CustomYMap as VectorCustomizationItem[]

export function Map({coordinates, placemarks}: Props) {
  const mapPlacemarks: LngLat[] = placemarks?.length ? placemarks.map((placemark) => placemark.center) : [coordinates.center]

  return (
    <YMapComponentsProvider apiKey={process.env.NEXT_PUBLIC_YMAPS_API_KEY ?? ''} lang="ru_RU">
      <YMap key="map" className="h-screen" location={coordinates} mode="vector" theme="dark">
        <YMapDefaultSchemeLayer customization={customYMapData} />
        <YMapDefaultFeaturesLayer />
        <YMapListener />

        {mapPlacemarks.map((placemark, idx) => (
          <YMapDefaultMarker coordinates={placemark} key={idx} />
        ))}
      </YMap>
    </YMapComponentsProvider>
  )
}
