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
  height?: string
}

const customYMapData: VectorCustomizationItem[] = CustomYMap as VectorCustomizationItem[]

export function Map({coordinates, placemarks, height = '80vh'}: Props) {
  const mapPlacemarks: LngLat[] = placemarks?.length ? placemarks.map((placemark) => placemark.center) : [coordinates.center]

  return (
    <YMapComponentsProvider apiKey={process.env.NEXT_PUBLIC_YMAPS_API_KEY ?? ''} lang="ru_RU">
      <div className="relative w-full overflow-hidden" style={{height: `calc(${height} - 35px)`}}>
        <div style={{height}}>
          <YMap key="map" location={coordinates} mode="vector" theme="dark">
            <YMapDefaultSchemeLayer customization={customYMapData} />
            <YMapDefaultFeaturesLayer />
            <YMapListener />

            {mapPlacemarks.map((placemark, idx) => (
              <YMapDefaultMarker coordinates={placemark} key={idx} color="#0033a0" />
            ))}
          </YMap>
        </div>
      </div>
    </YMapComponentsProvider>
  )
}
