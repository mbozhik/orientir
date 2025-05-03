import {YMapCoordinates} from '~/UI/Map'

export const defaultCoordinates: YMapCoordinates = {center: [37.136252026184, 56.066764158270715], zoom: 15}

export const parseCoordinates = (coordsString: string | undefined): YMapCoordinates | null => {
  if (!coordsString) return null
  try {
    const [lng, lat] = JSON.parse(coordsString)
    return {
      center: [lng, lat],
      zoom: 15,
    }
  } catch {
    return null
  }
}
