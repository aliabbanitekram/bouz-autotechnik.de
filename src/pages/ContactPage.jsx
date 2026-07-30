import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import GoogleMapsEmbed from '../components/GoogleMapsEmbed'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import WhatsAppContact from '../components/WhatsAppContact'
import { useTheme } from '../context/useTheme'
import { ServiceIcon } from '../data/icons'

export default function ContactPage() {
  const { t } = useTranslation()
  const { isDark } = useTheme()
  const hours = t('site.hours', { returnObjects: true })
  const phoneHref = `tel:${t('site.phone').replaceAll(' ', '')}`
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=K%C3%B6lner%20Str.%2011%2C%2047805%20Krefeld'

  return (
    <main className={`home-page ${isDark ? 'home-page--dark' : 'home-page--light'}`}>
      <SEO page="contact" />
      <section className="home-surface relative overflow-hidden border-b border-brand-black/10 px-4 pb-14 pt-12 sm:px-6 sm:pb-18 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-22">
        <div className="home-grid-line pointer-events-none absolute inset-y-0 left-[22%] w-px" />
        <div className="home-grid-line pointer-events-none absolute inset-y-0 left-[50%] w-px" />
        <div className="home-grid-line pointer-events-none absolute inset-y-0 right-[22%] w-px" />
        <div className="pointer-events-none absolute -left-[190px] top-12 hidden h-28 w-[232px] skew-x-[-20deg] bg-brand-red xl:block" />

        <div className="relative mx-auto max-w-7xl">
          <Reveal className="max-w-5xl">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.28em] text-brand-red sm:text-sm">
              <span className="mr-5 inline-block h-4 w-2 skew-x-[-18deg] bg-brand-red align-middle" />
              {t('contactPage.eyebrow')}
            </p>
            <h1 className="home-heading mt-5 max-w-5xl font-heading text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-7xl">
              {t('contactPage.title')}
            </h1>
            <p className="home-muted mt-8 max-w-3xl text-sm leading-6 sm:text-base sm:leading-7">
              {t('contactPage.intro')}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="home-surface relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="home-grid-line pointer-events-none absolute inset-y-0 left-[22%] w-px" />
        <div className="home-grid-line pointer-events-none absolute inset-y-0 left-[50%] w-px" />
        <div className="home-grid-line pointer-events-none absolute inset-y-0 right-[22%] w-px" />
        <div className="home-red-accent pointer-events-none absolute -left-[72px] top-14 hidden h-28 w-[232px] skew-x-[-20deg] bg-brand-red xl:block" />

        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <Reveal className="grid gap-5">
            <article className="home-panel border border-brand-black/5 p-6 sm:p-8">
              <ServiceIcon name="MapPin" className="size-8 text-brand-red" />
              <address className="home-muted mt-5 not-italic text-sm leading-6 sm:text-base sm:leading-7">
                <span className="home-heading block font-bold">{t('site.address.line1')}</span>
                <span className="block">{t('site.address.line2')}</span>
                <span className="mt-2 block text-sm">{t('site.address.note')}</span>
              </address>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="home-text-link focus-ring mt-6 inline-flex items-center gap-4 font-heading text-sm font-black uppercase tracking-[0.24em] transition hover:text-brand-red"
              >
                <span>{t('actions.openInMaps')}</span>
                <ServiceIcon name="ArrowRight" className="size-5" />
              </a>
            </article>

            <article className="home-panel border border-brand-black/5 p-6 sm:p-8">
              <ServiceIcon name="Phone" className="size-8 text-brand-red" />
              <div className="home-muted mt-5 grid gap-3 text-sm leading-6 sm:text-base">
                <a className="home-heading font-bold transition hover:text-brand-red" href={phoneHref}>
                  {t('site.phone')}
                </a>
                <a className="home-heading font-bold transition hover:text-brand-red" href={`mailto:${t('site.email')}`}>
                  {t('site.email')}
                </a>
              </div>
            </article>

            <article className="home-panel border border-brand-black/5 p-6 sm:p-8">
              <ServiceIcon name="Clock" className="size-8 text-brand-red" />
              <h2 className="home-heading mt-5 font-heading text-2xl font-black uppercase sm:text-3xl">
                {t('appointmentPage.hoursTitle')}
              </h2>
              <dl className="home-muted mt-5 space-y-4">
                {hours.map((item) => (
                  <div
                    key={item.days}
                    className="border-b border-brand-black/10 pb-4 last:border-0 last:pb-0"
                  >
                    <dt className="home-heading font-bold">{item.days}</dt>
                    <dd className="mt-1">{item.time}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </Reveal>
          <WhatsAppContact variant="card" delay={0.08} />
        </div>
      </section>

      <section className="home-surface relative overflow-hidden px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="home-grid-line pointer-events-none absolute inset-y-0 left-[22%] w-px" />
        <div className="home-grid-line pointer-events-none absolute inset-y-0 left-[50%] w-px" />
        <div className="home-grid-line pointer-events-none absolute inset-y-0 right-[22%] w-px" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal className="mb-8">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.28em] text-brand-red sm:text-sm">
              <span className="mr-5 inline-block h-4 w-2 skew-x-[-18deg] bg-brand-red align-middle" />
              {t('contactPage.mapTitle')}
            </p>
            <h2 className="home-heading mt-5 font-heading text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
              {t('actions.openInMaps')}
            </h2>
          </Reveal>
          <div className="home-panel overflow-hidden border border-brand-black/5">
            <GoogleMapsEmbed />
          </div>
          <div className="mt-8">
            <Link
              to="/"
              className="home-primary-button focus-ring inline-flex min-h-14 w-full max-w-[316px] items-center justify-center gap-4 px-8 py-4 font-heading text-sm font-black uppercase tracking-[0.24em] transition sm:w-[316px] sm:px-10 sm:text-base"
            >
              <span>{t('nav.home')}</span>
              <ServiceIcon name="ArrowRight" className="size-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
