const images = {
  acHeatingUser: new URL('../assets/services/ac-heating-user-01-optimized.jpg', import.meta.url).href,
  acHeatingFreepik: new URL('../assets/services/ac-heating-01.jpg', import.meta.url).href,
  acHeatingPexels: new URL('../assets/services/ac-heating-03.jpg', import.meta.url).href,
  brakeServicesUser: new URL('../assets/services/brake-services-user-01-optimized.jpg', import.meta.url).href,
  brakeServicesWheel: new URL('../assets/services/brake-services-user-02-optimized.jpg', import.meta.url).href,
  brakeServicesFreepik: new URL('../assets/services/brake-services-01.jpg', import.meta.url).href,
  brakeServicesFallback: new URL('../assets/services/brake-services-fallback-01.jpg', import.meta.url).href,
  frontEndsAlignmentUser: new URL('../assets/services/front-ends-alignment-user-01-optimized.jpg', import.meta.url).href,
  frontEndsAlignmentFallback: new URL('../assets/services/front-ends-alignment-fallback-01.jpg', import.meta.url).href,
  shockSuspensionUser: new URL('../assets/services/shock-suspension-user-01.jpg', import.meta.url).href,
  shockSuspensionFallback: new URL('../assets/services/shock-suspension-fallback-01.jpg', import.meta.url).href,
  batteryElectricalUser: new URL('../assets/services/battery-electrical-user-01.jpg', import.meta.url).href,
  batteryElectricalFallback: new URL('../assets/services/battery-electrical-03.jpg', import.meta.url).href,
  diagnosticServiceUser: new URL('../assets/services/diagnostic-service-user-01.jpg', import.meta.url).href,
  diagnosticServiceTool: new URL('../assets/services/diagnostic-service-01.jpg', import.meta.url).href,
  diagnosticServiceEngine: new URL('../assets/services/diagnostic-service-03.jpg', import.meta.url).href,
  oilFilterChangesUser: new URL('../assets/services/oil-filter-changes-user-01-optimized.jpg', import.meta.url).href,
  oilFilterChangesFallback: new URL('../assets/services/oil-filter-changes-fallback-01.jpg', import.meta.url).href,
  beltsHosesUser: new URL('../assets/services/belts-hoses-user-01.jpg', import.meta.url).href,
  beltsHosesFallback: new URL('../assets/services/belts-hoses-fallback-01.jpg', import.meta.url).href,
  fuelSystemRepairsUser: new URL('../assets/services/fuel-system-repairs-user-01-optimized.jpg', import.meta.url).href,
  fuelSystemRepairsFallback: new URL('../assets/services/fuel-system-repairs-02.jpg', import.meta.url).href,
  transmissionRepairUser: new URL('../assets/services/transmission-repair-user-01-optimized.jpg', import.meta.url).href,
  transmissionRepairFallback: new URL('../assets/services/transmission-repair-01.jpg', import.meta.url).href,
}

export const serviceMedia = {
  'ac-heating': {
    image: images.acHeatingUser,
    source: 'User provided',
    asset: 'ac-heating-user-01-optimized.jpg',
    alternates: [
      { image: images.acHeatingFreepik, source: 'Freepik', asset: 'ac-heating-01.jpg' },
      { image: images.acHeatingPexels, source: 'Pexels', asset: 'ac-heating-03.jpg' },
    ],
  },
  'brake-services': {
    image: images.brakeServicesUser,
    source: 'User provided',
    asset: 'brake-services-user-01-optimized.jpg',
    alternates: [
      { image: images.brakeServicesWheel, source: 'User provided', asset: 'brake-services-user-02-optimized.jpg' },
      { image: images.brakeServicesFreepik, source: 'Freepik', asset: 'brake-services-01.jpg' },
      { image: images.brakeServicesFallback, source: 'Pexels fallback', asset: 'brake-services-fallback-01.jpg' },
    ],
  },
  'front-ends-alignment': {
    image: images.frontEndsAlignmentUser,
    source: 'User provided',
    asset: 'front-ends-alignment-user-01-optimized.jpg',
    alternates: [
      { image: images.frontEndsAlignmentFallback, source: 'Pexels fallback', asset: 'front-ends-alignment-fallback-01.jpg' },
    ],
  },
  'shock-suspension': {
    image: images.shockSuspensionUser,
    source: 'User provided',
    asset: 'shock-suspension-user-01.jpg',
    alternates: [
      { image: images.shockSuspensionFallback, source: 'Pexels fallback', asset: 'shock-suspension-fallback-01.jpg' },
    ],
  },
  'battery-electrical': {
    image: images.batteryElectricalUser,
    source: 'User provided',
    asset: 'battery-electrical-user-01.jpg',
    alternates: [
      { image: images.batteryElectricalFallback, source: 'Pexels', asset: 'battery-electrical-03.jpg' },
    ],
  },
  'diagnostic-service': {
    image: images.diagnosticServiceUser,
    source: 'User provided',
    asset: 'diagnostic-service-user-01.jpg',
    alternates: [
      { image: images.diagnosticServiceTool, source: 'Pexels', asset: 'diagnostic-service-01.jpg' },
      { image: images.diagnosticServiceEngine, source: 'Pexels', asset: 'diagnostic-service-03.jpg' },
    ],
  },
  'oil-filter-changes': {
    image: images.oilFilterChangesUser,
    source: 'User provided',
    asset: 'oil-filter-changes-user-01-optimized.jpg',
    alternates: [
      { image: images.oilFilterChangesFallback, source: 'Pexels fallback', asset: 'oil-filter-changes-fallback-01.jpg' },
    ],
  },
  'belts-hoses': {
    image: images.beltsHosesUser,
    source: 'User provided',
    asset: 'belts-hoses-user-01.jpg',
    alternates: [
      { image: images.beltsHosesFallback, source: 'Pexels fallback', asset: 'belts-hoses-fallback-01.jpg' },
    ],
  },
  'fuel-system-repairs': {
    image: images.fuelSystemRepairsUser,
    source: 'User provided',
    asset: 'fuel-system-repairs-user-01-optimized.jpg',
    alternates: [
      { image: images.fuelSystemRepairsFallback, source: 'Pexels', asset: 'fuel-system-repairs-02.jpg' },
    ],
  },
  'transmission-repair': {
    image: images.transmissionRepairUser,
    source: 'User provided',
    asset: 'transmission-repair-user-01-optimized.jpg',
    alternates: [
      { image: images.transmissionRepairFallback, source: 'Pexels', asset: 'transmission-repair-01.jpg' },
    ],
  },
}

export function getServiceMedia(id) {
  return serviceMedia[id] || serviceMedia['diagnostic-service']
}
