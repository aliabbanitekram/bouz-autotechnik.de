import { useTranslation } from 'react-i18next'
import { ServiceIcon } from '../data/icons'
import { useConsent } from './CookieConsent/useConsent'

const mapSrc =
  'https://maps.google.com/maps?q=K%C3%B6lner%20Str.%2011%2C%2047805%20Krefeld%2C%20Germany&t=&z=15&ie=UTF8&iwloc=&output=embed'

export default function GoogleMapsEmbed() {
  const { t } = useTranslation()
  const { isServiceAllowed, openSettings } = useConsent()

  if (!isServiceAllowed('google-maps')) {
    return (
      <div className="flex min-h-96 flex-col items-center justify-center bg-brand-black p-6 text-center">
        <span className="flex size-14 items-center justify-center rounded-md bg-brand-red/12 text-brand-red">
          <ServiceIcon name="MapPin" className="size-7" />
        </span>
        <h3 className="mt-5 font-heading text-2xl font-bold uppercase text-brand-white">
          {t('cookie.disabledMapTitle')}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-6 text-brand-text">{t('cookie.disabledMapText')}</p>
        <button
          type="button"
          className="focus-ring mt-6 rounded-md bg-brand-red px-5 py-3 font-heading text-sm font-bold uppercase tracking-wider text-white hover:bg-brand-redDark"
          onClick={openSettings}
        >
          {t('actions.mapSettings')}
        </button>
      </div>
    )
  }

  return (
    <iframe
      title={t('contactPage.mapTitle')}
      src={mapSrc}
      className="min-h-96 w-full"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  )
}
