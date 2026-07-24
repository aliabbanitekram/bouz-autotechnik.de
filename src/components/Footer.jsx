import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import logo from '../assets/bouz-autotechnik-logo.jpeg'
import { ServiceIcon } from '../data/icons'
import { legalNavItems, navItems } from '../data/navigation'
import { useConsent } from './CookieConsent/useConsent'

export default function Footer() {
  const { t } = useTranslation()
  const { openSettings } = useConsent()
  const hours = t('site.hours', { returnObjects: true })
  const social = t('footer.social', { returnObjects: true })

  return (
    <footer className="border-t border-brand-steel/15 bg-brand-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <img
            src={logo}
            alt={t('site.name')}
            className="h-20 w-20 rounded-md object-cover ring-1 ring-brand-steel/25"
            loading="lazy"
          />
          <p className="mt-5 max-w-sm text-sm leading-6 text-brand-text">{t('home.heroText')}</p>
          <div className="mt-6 flex gap-2">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.url}
                aria-label={item.label}
                className="focus-ring inline-flex size-10 items-center justify-center rounded-md border border-brand-steel/20 text-brand-steelLight transition hover:border-brand-red hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                <ServiceIcon name={item.icon} className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
            {t('nav.contact')}
          </h2>
          <address className="mt-4 not-italic text-sm leading-7 text-brand-text">
            <span className="block">{t('site.address.line1')}</span>
            <span className="block">{t('site.address.line2')}</span>
            <a className="block hover:text-white" href={`tel:${t('site.phone').replaceAll(' ', '')}`}>
              {t('site.phone')}
            </a>
            <a className="block hover:text-white" href={`mailto:${t('site.email')}`}>
              {t('site.email')}
            </a>
          </address>
        </div>

        <div>
          <h2 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
            {t('appointmentPage.hoursTitle')}
          </h2>
          <dl className="mt-4 space-y-3 text-sm text-brand-text">
            {hours.map((item) => (
              <div key={item.days}>
                <dt className="font-semibold text-brand-white">{item.days}</dt>
                <dd>{item.time}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
            {t('nav.service')}
          </h2>
          <nav className="mt-4 grid gap-2 text-sm text-brand-text" aria-label="Footer">
            {[...navItems, ...legalNavItems].map((item) => (
              <Link key={item.key} to={item.path} className="hover:text-white">
                {t(`nav.${item.key}`)}
              </Link>
            ))}
            <button type="button" className="text-left hover:text-white" onClick={openSettings}>
              {t('nav.cookieSettings')}
            </button>
          </nav>
        </div>
      </div>
      <div className="border-t border-brand-steel/10 px-4 py-5 text-center text-xs text-brand-steel sm:px-6">
        © {new Date().getFullYear()} {t('site.name')}
      </div>
    </footer>
  )
}
