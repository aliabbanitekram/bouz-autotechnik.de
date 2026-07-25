import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ServiceIcon } from '../data/icons'
import { phoneCountries } from '../data/phoneCountries'

const darkInputClass =
  'focus-ring w-full rounded-md border border-brand-steel/20 bg-brand-black px-4 py-3 text-brand-white placeholder:text-brand-steelDark'

const lightInputClass =
  'focus-ring w-full rounded-md border border-brand-steel/35 bg-brand-white px-4 py-3 text-brand-black shadow-sm [color-scheme:light] placeholder:text-brand-steelDark'

const getFlagUrl = (iso2) => `https://flagcdn.com/w40/${iso2.toLowerCase()}.png`

function buildMailto({ to, subject, fields }) {
  const body = fields.map(([label, value]) => `${label}: ${value || '-'}`).join('\n')
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export default function ContactForm({ type = 'contact' }) {
  const { t } = useTranslation()
  const services = t('services', { returnObjects: true })
  const [sent, setSent] = useState(false)
  const [countryPickerOpen, setCountryPickerOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(phoneCountries[0])
  const phoneFieldRef = useRef(null)
  const fieldsKey = type === 'appointment' ? 'appointmentPage.fields' : 'contactPage.fields'
  const successKey = type === 'appointment' ? 'appointmentPage.success' : 'contactPage.success'
  const isAppointment = type === 'appointment'
  const inputClass = isAppointment ? lightInputClass : darkInputClass
  const labelClass = isAppointment ? 'grid gap-2 text-sm font-medium text-brand-steelDark' : 'grid gap-2 text-sm text-brand-text'
  const phoneShellClass = isAppointment
    ? 'border-brand-steel/35 bg-brand-white text-brand-black shadow-sm'
    : 'border-brand-steel/20 bg-brand-black text-brand-white'
  const phoneDividerClass = isAppointment ? 'border-brand-steel/35' : 'border-brand-steel/20'
  const phoneInputClass = isAppointment
    ? 'text-brand-black placeholder:text-brand-steelDark'
    : 'text-brand-white placeholder:text-brand-steelDark'

  useEffect(() => {
    if (!countryPickerOpen) return undefined

    const closePicker = (event) => {
      if (!phoneFieldRef.current?.contains(event.target)) setCountryPickerOpen(false)
    }
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setCountryPickerOpen(false)
    }

    document.addEventListener('pointerdown', closePicker)
    document.addEventListener('keydown', closeOnEscape)

    return () => {
      document.removeEventListener('pointerdown', closePicker)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [countryPickerOpen])

  const onSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const entries = Array.from(form.entries())
    const subject =
      type === 'appointment'
        ? `${t('nav.appointment')} - ${form.get('name') || t('site.name')}`
        : `${t('nav.contact')} - ${form.get('name') || t('site.name')}`

    setSent(true)
    window.location.href = buildMailto({
      to: t('site.email'),
      subject,
      fields: entries.map(([key, value]) => [
        t(`${fieldsKey}.${key}`),
        key === 'phone' && value ? `${selectedCountry.dialCode} ${value}` : value,
      ]),
    })
  }

  return (
    <form
      className={
        isAppointment
          ? 'rounded-lg border border-brand-black/10 bg-brand-white p-5 text-brand-black shadow-steel sm:p-6 lg:p-8'
          : 'industrial-panel rounded-lg p-5 sm:p-6'
      }
      onSubmit={onSubmit}
    >
      {sent && (
        <div
          className={`mb-5 rounded-md border border-brand-red/35 bg-brand-red/10 px-4 py-3 text-sm ${
            isAppointment ? 'text-brand-redDark' : 'text-brand-white'
          }`}
        >
          {t(successKey)}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          <span>{t(`${fieldsKey}.name`)}</span>
          <input
            className={inputClass}
            name="name"
            placeholder={t(`${fieldsKey}.placeholders.name`)}
            autoComplete="name"
            required
          />
        </label>
        <label className={labelClass}>
          <span>{t(`${fieldsKey}.phone`)}</span>
          <div className="relative" ref={phoneFieldRef}>
            <div
              className={`focus-within:ring-brand-red/35 flex overflow-hidden rounded-md border transition focus-within:ring-3 ${phoneShellClass}`}
            >
              <button
                type="button"
                className={`flex min-h-12 shrink-0 items-center gap-2 border-r px-3 text-sm font-semibold transition hover:bg-brand-red/10 ${phoneDividerClass}`}
                onClick={() => setCountryPickerOpen((current) => !current)}
                aria-label={t(`${fieldsKey}.phoneCountry`, {
                  country: selectedCountry.name,
                  code: selectedCountry.dialCode,
                })}
                aria-expanded={countryPickerOpen}
              >
                <img
                  src={getFlagUrl(selectedCountry.iso2)}
                  alt=""
                  className="h-4 w-6 rounded-sm object-cover shadow-sm ring-1 ring-brand-black/10"
                  loading="lazy"
                />
                <span>{selectedCountry.dialCode}</span>
                <ServiceIcon
                  name="ChevronDown"
                  className={`size-4 transition ${countryPickerOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <input
                className={`min-w-0 flex-1 bg-transparent px-4 py-3 text-sm outline-none ${phoneInputClass}`}
                name="phone"
                type="tel"
                placeholder={t(`${fieldsKey}.placeholders.phone`)}
                autoComplete="tel-national"
              />
            </div>

            {countryPickerOpen && (
              <div className="absolute left-0 right-0 top-full z-30 mt-2 max-h-72 overflow-y-auto rounded-lg border border-brand-steel/25 bg-brand-white py-1 text-brand-black shadow-steel">
                {phoneCountries.map((country) => {
                  const selected = country.iso2 === selectedCountry.iso2

                  return (
                    <button
                      key={country.iso2}
                      type="button"
                      className={`flex min-h-11 w-full items-center gap-3 px-4 py-2 text-left text-sm transition ${
                        selected ? 'bg-brand-red/10 text-brand-black' : 'hover:bg-brand-steelLight'
                      }`}
                      onClick={() => {
                        setSelectedCountry(country)
                        setCountryPickerOpen(false)
                      }}
                    >
                      <img
                        src={getFlagUrl(country.iso2)}
                        alt=""
                        className="h-5 w-7 shrink-0 rounded-sm object-cover shadow-sm ring-1 ring-brand-black/10"
                        loading="lazy"
                      />
                      <span className="w-14 shrink-0 font-semibold">{country.dialCode}</span>
                      <span className="min-w-0 truncate text-brand-steelDark">{country.name}</span>
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        </label>
        <label className={labelClass}>
          <span>{t(`${fieldsKey}.email`)}</span>
          <input
            className={inputClass}
            name="email"
            type="email"
            placeholder={t(`${fieldsKey}.placeholders.email`)}
            autoComplete="email"
            required
          />
        </label>

        {type === 'appointment' && (
          <>
            <label className={labelClass}>
              <span>{t(`${fieldsKey}.vehicle`)}</span>
              <input
                className={inputClass}
                name="vehicle"
                placeholder={t(`${fieldsKey}.placeholders.vehicle`)}
                required
              />
            </label>
            <label className={labelClass}>
              <span>{t(`${fieldsKey}.service`)}</span>
              <select className={inputClass} name="service" required defaultValue="">
                <option value="" disabled>
                  {t('common.selectedService')}
                </option>
                {services.map((service) => (
                  <option key={service.id} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </label>
            <label className={labelClass}>
              <span>{t(`${fieldsKey}.date`)}</span>
              <input className={inputClass} name="date" type="date" aria-label={t(`${fieldsKey}.date`)} />
            </label>
          </>
        )}
      </div>

      <label className={`mt-4 ${labelClass}`}>
        <span>{t(`${fieldsKey}.message`)}</span>
        <textarea
          className={`${inputClass} min-h-36 resize-y`}
          name="message"
          placeholder={t(`${fieldsKey}.messagePlaceholder`)}
          required={type !== 'appointment'}
        />
      </label>

      <label
        className={`mt-5 flex items-start gap-3 text-sm leading-6 ${
          isAppointment ? 'text-brand-steelDark' : 'text-brand-text'
        }`}
      >
        <input
          type="checkbox"
          required
          className="mt-1 size-5 shrink-0 rounded border border-brand-steel/50 bg-brand-white [color-scheme:light] accent-brand-red"
        />
        <span>
          {t('form.privacyPrefix')}{' '}
          <Link className="font-semibold text-brand-red hover:text-brand-redDark" to="/datenschutz">
            {t('form.privacyLink')}
          </Link>
          {t('form.privacySuffix')}
        </span>
      </label>

      <button
        type="submit"
        className="focus-ring mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-brand-red to-brand-redDark px-7 py-3 font-heading text-sm font-bold uppercase tracking-wider text-white shadow-red transition hover:from-brand-redDark hover:to-brand-red sm:w-auto"
      >
        {t(type === 'appointment' ? 'actions.sendRequest' : 'actions.sendMessage')}
      </button>
    </form>
  )
}
