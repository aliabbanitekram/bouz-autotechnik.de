import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ServiceIcon } from '../../data/icons'
import { useConsent } from './useConsent'
import { consentCategories, consentServices, getDefaultConsent, getDefaultServices } from './consentConfig'

function Toggle({ checked, disabled = false, onChange, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => !disabled && onChange?.(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition ${
        checked ? 'bg-brand-red' : 'bg-brand-steelDark'
      } ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
    >
      <span
        className={`inline-block size-5 rounded-full bg-white shadow transition ${
          checked ? 'translate-x-5' : 'translate-x-0.5'
        }`}
      />
    </button>
  )
}

function LanguageButton() {
  const { i18n, t } = useTranslation()
  const nextLanguage = i18n.language === 'de' ? 'en' : 'de'

  return (
    <button
      type="button"
      className="focus-ring rounded-md border border-brand-steel/25 px-3 py-2 font-heading text-xs font-bold uppercase tracking-wider text-brand-steelLight hover:border-brand-red"
      aria-label={t('language.switch')}
      onClick={() => i18n.changeLanguage(nextLanguage)}
    >
      {i18n.language === 'de' ? t('language.en') : t('language.de')}
    </button>
  )
}

function ConsentRow({ service, checked, disabled, onToggle }) {
  const { t } = useTranslation()

  return (
    <div className="rounded-md border border-brand-steel/15 bg-brand-black/80 p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-heading text-lg font-semibold uppercase text-brand-white">
            {t(`cookie.services.${service.id}.name`)}
          </p>
          <p className="mt-1 text-xs text-brand-steel">{t(`cookie.services.${service.id}.provider`)}</p>
        </div>
        <Toggle
          checked={checked}
          disabled={disabled}
          label={t(`cookie.services.${service.id}.name`)}
          onChange={(value) => onToggle(service, value)}
        />
      </div>
      <dl className="mt-4 grid gap-3 text-sm leading-6 text-brand-text">
        {['purpose', 'storageDuration'].map((key) => (
          <div key={key}>
            <dt className="font-semibold text-brand-white">{t(`cookie.${key}`)}</dt>
            <dd>{t(`cookie.services.${service.id}.${key}`)}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-sm leading-6 text-brand-text">
        {t(`cookie.services.${service.id}.description`)}
      </p>
    </div>
  )
}

function IntroNotice({ onMoreInfo, onClose }) {
  const { t } = useTranslation()
  const { acceptAll, rejectAll } = useConsent()

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-0">
      <div className="w-full border-t border-brand-steel/25 bg-brand-black shadow-2xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl font-bold uppercase text-brand-white">{t('cookie.title')}</h2>
            <p className="mt-3 text-sm leading-6 text-brand-text">
              {t('cookie.summary')}{' '}
              <Link className="font-semibold text-brand-red hover:text-white" to="/datenschutz">
                {t('nav.privacy')}
              </Link>
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-4 lg:min-w-[36rem]">
            <LanguageButton />
            <button
              type="button"
              className="focus-ring rounded-md border border-brand-steel/30 px-4 py-3 font-heading text-sm font-bold uppercase tracking-wider text-brand-steelLight hover:border-brand-red"
              onClick={onMoreInfo}
            >
              {t('cookie.moreInfo')}
            </button>
            <button
              type="button"
              className="focus-ring rounded-md bg-brand-steelDark px-4 py-3 font-heading text-sm font-bold uppercase tracking-wider text-white hover:bg-brand-steel"
              onClick={rejectAll}
            >
              {t('cookie.reject')}
            </button>
            <button
              type="button"
              className="focus-ring rounded-md bg-brand-red px-4 py-3 font-heading text-sm font-bold uppercase tracking-wider text-white hover:bg-brand-redDark"
              onClick={acceptAll}
            >
              {t('cookie.acceptAll')}
            </button>
          </div>
          <button
            type="button"
            className="focus-ring absolute right-3 top-3 inline-flex size-10 items-center justify-center rounded-md text-brand-steel hover:text-white"
            aria-label={t('cookie.close')}
            onClick={onClose}
          >
            <ServiceIcon name="X" className="size-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function CookieConsentModal({ initialView = 'summary', onClose }) {
  const { t } = useTranslation()
  const { consent, services, saveConsent, acceptAll, rejectAll } = useConsent()
  const [view, setView] = useState(initialView)
  const [activeTab, setActiveTab] = useState('categories')
  const [draftConsent, setDraftConsent] = useState(() => ({
    ...getDefaultConsent(),
    ...consent,
    essential: true,
  }))
  const [draftServices, setDraftServices] = useState(() => ({
    ...getDefaultServices(),
    ...services,
  }))

  const servicesByCategory = useMemo(
    () =>
      consentCategories.reduce((acc, category) => {
        acc[category.id] = consentServices.filter((service) => service.category === category.id)
        return acc
      }, {}),
    [],
  )

  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  const setCategory = (categoryId, value, serviceId = null) => {
    const category = consentCategories.find((item) => item.id === categoryId)
    if (!category || category.required) return

    if (serviceId) {
      setDraftServices((current) => {
        const next = { ...current, [serviceId]: value }
        const hasAllowedService = servicesByCategory[categoryId].some((service) => next[service.id])
        setDraftConsent((currentConsent) => ({ ...currentConsent, [categoryId]: hasAllowedService }))
        return next
      })
      return
    }

    setDraftConsent((current) => ({ ...current, [categoryId]: value }))
    setDraftServices((current) => {
      const next = { ...current }
      servicesByCategory[categoryId].forEach((service) => {
        next[service.id] = value
      })
      return next
    })
  }

  if (view === 'summary') {
    return <IntroNotice onClose={onClose} onMoreInfo={() => setView('details')} />
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-4 py-5">
      <div
        className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-lg border border-brand-steel/20 bg-brand-charcoal shadow-2xl"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-start justify-between gap-4 border-b border-brand-steel/15 p-5">
          <div>
            <h2 className="font-heading text-3xl font-bold uppercase text-brand-white">{t('cookie.title')}</h2>
            <p className="mt-2 text-sm leading-6 text-brand-text">{t('cookie.detailsIntro')}</p>
          </div>
          <div className="flex items-center gap-2">
            <LanguageButton />
            <button
              type="button"
              className="focus-ring inline-flex size-10 items-center justify-center rounded-md text-brand-steel hover:text-white"
              aria-label={t('cookie.close')}
              onClick={onClose}
            >
              <ServiceIcon name="X" className="size-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 border-b border-brand-steel/15">
          {['categories', 'services'].map((tab) => (
            <button
              key={tab}
              type="button"
              className={`focus-ring px-4 py-3 font-heading text-sm font-bold uppercase tracking-wider ${
                activeTab === tab ? 'bg-brand-red text-white' : 'text-brand-steelLight hover:text-white'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {t(`cookie.${tab}Tab`)}
            </button>
          ))}
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-5">
          {activeTab === 'categories' ? (
            <div className="grid gap-4">
              {consentCategories.map((category) => (
                <div key={category.id} className="rounded-md border border-brand-steel/15 bg-brand-black/80 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-heading text-xl font-semibold uppercase text-brand-white">
                          {t(`cookie.categories.${category.id}.title`)}
                        </h3>
                        {category.required && <ServiceIcon name="Lock" className="size-4 text-brand-steel" />}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-brand-text">
                        {t(`cookie.categories.${category.id}.description`)}
                      </p>
                    </div>
                    <Toggle
                      checked={Boolean(draftConsent[category.id])}
                      disabled={category.required}
                      label={t(`cookie.categories.${category.id}.title`)}
                      onChange={(value) => setCategory(category.id, value)}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-4">
              {consentServices.map((service) => {
                const category = consentCategories.find((item) => item.id === service.category)
                return (
                  <ConsentRow
                    key={service.id}
                    service={service}
                    checked={Boolean(draftServices[service.id])}
                    disabled={category?.required}
                    onToggle={(item, value) => setCategory(item.category, value, item.id)}
                  />
                )
              })}
            </div>
          )}
        </div>

        <div className="grid gap-3 border-t border-brand-steel/15 p-4 sm:grid-cols-3">
          <button
            type="button"
            className="focus-ring rounded-md border border-brand-steel/30 px-4 py-3 font-heading text-sm font-bold uppercase tracking-wider text-brand-steelLight hover:border-brand-red"
            onClick={() => saveConsent(draftConsent, draftServices)}
          >
            {t('cookie.save')}
          </button>
          <button
            type="button"
            className="focus-ring rounded-md bg-brand-steelDark px-4 py-3 font-heading text-sm font-bold uppercase tracking-wider text-white hover:bg-brand-steel"
            onClick={rejectAll}
          >
            {t('cookie.reject')}
          </button>
          <button
            type="button"
            className="focus-ring rounded-md bg-brand-red px-4 py-3 font-heading text-sm font-bold uppercase tracking-wider text-white hover:bg-brand-redDark"
            onClick={acceptAll}
          >
            {t('cookie.acceptAll')}
          </button>
        </div>
      </div>
    </div>
  )
}
