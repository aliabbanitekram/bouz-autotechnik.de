import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const inputClass =
  'focus-ring w-full rounded-md border border-brand-steel/20 bg-brand-black px-4 py-3 text-brand-white placeholder:text-brand-steelDark'

function buildMailto({ to, subject, fields }) {
  const body = fields.map(([label, value]) => `${label}: ${value || '-'}`).join('\n')
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export default function ContactForm({ type = 'contact' }) {
  const { t } = useTranslation()
  const services = t('services', { returnObjects: true })
  const [sent, setSent] = useState(false)
  const fieldsKey = type === 'appointment' ? 'appointmentPage.fields' : 'contactPage.fields'
  const successKey = type === 'appointment' ? 'appointmentPage.success' : 'contactPage.success'

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
      fields: entries.map(([key, value]) => [t(`${fieldsKey}.${key}`), value]),
    })
  }

  return (
    <form className="industrial-panel rounded-lg p-5 sm:p-6" onSubmit={onSubmit}>
      {sent && (
        <div className="mb-5 rounded-md border border-brand-red/35 bg-brand-red/10 px-4 py-3 text-sm text-brand-white">
          {t(successKey)}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-brand-text">
          <span>{t(`${fieldsKey}.name`)}</span>
          <input className={inputClass} name="name" autoComplete="name" required />
        </label>
        <label className="grid gap-2 text-sm text-brand-text">
          <span>{t(`${fieldsKey}.phone`)}</span>
          <input className={inputClass} name="phone" autoComplete="tel" />
        </label>
        <label className="grid gap-2 text-sm text-brand-text">
          <span>{t(`${fieldsKey}.email`)}</span>
          <input className={inputClass} name="email" type="email" autoComplete="email" required />
        </label>

        {type === 'appointment' && (
          <>
            <label className="grid gap-2 text-sm text-brand-text">
              <span>{t(`${fieldsKey}.vehicle`)}</span>
              <input className={inputClass} name="vehicle" required />
            </label>
            <label className="grid gap-2 text-sm text-brand-text">
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
            <label className="grid gap-2 text-sm text-brand-text">
              <span>{t(`${fieldsKey}.date`)}</span>
              <input className={inputClass} name="date" type="date" />
            </label>
          </>
        )}
      </div>

      <label className="mt-4 grid gap-2 text-sm text-brand-text">
        <span>{t(`${fieldsKey}.message`)}</span>
        <textarea
          className={`${inputClass} min-h-36 resize-y`}
          name="message"
          placeholder={t(`${fieldsKey}.messagePlaceholder`)}
          required={type !== 'appointment'}
        />
      </label>

      <button
        type="submit"
        className="focus-ring mt-5 inline-flex min-h-12 items-center justify-center rounded-md bg-brand-red px-6 py-3 font-heading text-sm font-bold uppercase tracking-wider text-white transition hover:bg-brand-redDark"
      >
        {t(type === 'appointment' ? 'actions.sendRequest' : 'actions.sendMessage')}
      </button>
    </form>
  )
}
