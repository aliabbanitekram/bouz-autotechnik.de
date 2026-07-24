import { useCallback, useMemo, useState } from 'react'
import CookieConsentModal from './CookieConsentModal'
import ConsentScripts from './ConsentScripts'
import { ConsentContext } from './ConsentContext'
import {
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION,
  consentCategories,
  consentServices,
  getDefaultConsent,
  getDefaultServices,
} from './consentConfig'

function readStoredConsent() {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    if (!raw) return null

    const parsed = JSON.parse(raw)
    if (parsed.version !== CONSENT_VERSION) return null

    return parsed
  } catch {
    return null
  }
}

function normalizeServices(consent, serviceChoices) {
  const nextServices = { ...getDefaultServices(), ...serviceChoices }

  consentServices.forEach((service) => {
    if (service.category === 'essential') {
      nextServices[service.id] = true
      return
    }

    if (!consent[service.category]) nextServices[service.id] = false
  })

  return nextServices
}

function createPayload(consent, services) {
  const normalizedConsent = {
    ...getDefaultConsent(),
    ...consent,
    essential: true,
  }

  return {
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
    consent: normalizedConsent,
    services: normalizeServices(normalizedConsent, services),
  }
}

export function ConsentProvider({ children }) {
  const [state, setState] = useState(() => {
    const stored = readStoredConsent()

    return {
      storedConsent: stored,
      modalOpen: !stored,
      modalView: stored ? 'details' : 'summary',
    }
  })
  const { storedConsent, modalOpen, modalView } = state

  const saveConsent = useCallback((consent, services) => {
    const payload = createPayload(consent, services)
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(payload))
    setState({ storedConsent: payload, modalOpen: false })
  }, [])

  const acceptAll = useCallback(() => {
    const consent = Object.fromEntries(consentCategories.map((category) => [category.id, true]))
    const services = Object.fromEntries(consentServices.map((service) => [service.id, true]))
    saveConsent(consent, services)
  }, [saveConsent])

  const rejectAll = useCallback(() => {
    saveConsent(getDefaultConsent(), getDefaultServices())
  }, [saveConsent])

  const openSettings = useCallback(() => {
    setState((current) => ({ ...current, modalOpen: true, modalView: 'details' }))
  }, [])

  const closeSettings = useCallback(() => {
    if (storedConsent) {
      setState((current) => ({ ...current, modalOpen: false }))
      return
    }

    rejectAll()
  }, [rejectAll, storedConsent])

  const value = useMemo(() => {
    const consent = storedConsent?.consent ?? getDefaultConsent()
    const services = storedConsent?.services ?? getDefaultServices()

    return {
      consent,
      services,
      hasConsented: Boolean(storedConsent),
      openSettings,
      saveConsent,
      acceptAll,
      rejectAll,
      isServiceAllowed: (serviceId) => {
        const service = consentServices.find((item) => item.id === serviceId)
        if (!service) return false
        if (service.category === 'essential') return true

        return Boolean(consent[service.category] && services[serviceId])
      },
    }
  }, [acceptAll, openSettings, rejectAll, saveConsent, storedConsent])

  return (
    <ConsentContext.Provider value={value}>
      {children}
      <ConsentScripts />
      {modalOpen && <CookieConsentModal initialView={modalView} onClose={closeSettings} />}
    </ConsentContext.Provider>
  )
}
