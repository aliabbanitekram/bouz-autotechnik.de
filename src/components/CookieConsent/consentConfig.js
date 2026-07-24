export const CONSENT_STORAGE_KEY = 'bouz-autotechnik-consent'
export const CONSENT_VERSION = 1

export const consentCategories = [
  { id: 'essential', required: true },
  { id: 'functional', required: false },
]

export const consentServices = [
  { id: 'consent-storage', category: 'essential' },
  { id: 'session-security', category: 'essential' },
  { id: 'google-maps', category: 'functional' },
]

export function getDefaultConsent() {
  return {
    essential: true,
    functional: false,
  }
}

export function getDefaultServices() {
  return Object.fromEntries(
    consentServices.map((service) => [service.id, service.category === 'essential']),
  )
}
