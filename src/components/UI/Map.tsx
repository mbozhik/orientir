'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import {useMediaQuery} from '@/lib/use-media-query'

const YMap = dynamic(() => import('ymap3-components').then((mod) => mod.YMap), {ssr: false})
const YMapComponentsProvider = dynamic(() => import('ymap3-components').then((mod) => mod.YMapComponentsProvider), {ssr: false})
const YMapDefaultSchemeLayer = dynamic(() => import('ymap3-components').then((mod) => mod.YMapDefaultSchemeLayer), {ssr: false})
const YMapDefaultFeaturesLayer = dynamic(() => import('ymap3-components').then((mod) => mod.YMapDefaultFeaturesLayer), {ssr: false})
const YMapListener = dynamic(() => import('ymap3-components').then((mod) => mod.YMapListener), {ssr: false})
const YMapDefaultMarker = dynamic(() => import('ymap3-components').then((mod) => mod.YMapDefaultMarker), {ssr: false})

import type {YMapLocationRequest, LngLat, VectorCustomizationItem} from '@yandex/ymaps3-types'
import CustomYMap from '@/lib/custom-ymap.json'

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
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const mapHeight = isDesktop ? height : '50vh'

  return (
    <YMapComponentsProvider apiKey={process.env.NEXT_PUBLIC_YMAPS_API_KEY ?? ''} lang="ru_RU">
      <div className="relative w-full overflow-hidden" style={{height: `calc(${mapHeight} - 35px)`}}>
        <div style={{height: mapHeight}}>
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
