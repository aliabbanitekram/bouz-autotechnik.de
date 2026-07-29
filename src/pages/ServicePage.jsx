import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { useTheme } from '../context/useTheme'
import { ServiceIcon } from '../data/icons'
import { getServiceMedia } from '../data/serviceMedia'

export default function ServicePage() {
  const { t } = useTranslation()
  const { isDark } = useTheme()
  const services = t('services', { returnObjects: true })
  const groups = t('serviceGroups', { returnObjects: true })

  return (
    <main className={`home-page ${isDark ? 'home-page--dark' : 'home-page--light'}`}>
      <SEO page="service" />
      <section className="home-surface relative overflow-hidden border-b border-brand-black/10 px-4 pb-14 pt-12 sm:px-6 sm:pb-18 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-22">
        <div className="home-grid-line pointer-events-none absolute inset-y-0 left-[22%] w-px" />
        <div className="home-grid-line pointer-events-none absolute inset-y-0 left-[50%] w-px" />
        <div className="home-grid-line pointer-events-none absolute inset-y-0 right-[22%] w-px" />
        <div className="pointer-events-none absolute -left-[190px] top-12 hidden h-28 w-[232px] skew-x-[-20deg] bg-brand-red xl:block" />

        <div className="relative mx-auto max-w-7xl">
          <Reveal className="max-w-5xl">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.28em] text-brand-red sm:text-sm">
              <span className="mr-5 inline-block h-4 w-2 skew-x-[-18deg] bg-brand-red align-middle" />
              {t('servicePage.eyebrow')}
            </p>
            <h1 className="home-heading mt-5 max-w-5xl font-heading text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-7xl">
              {t('servicePage.title')}
            </h1>
            <p className="home-muted mt-8 max-w-3xl text-sm leading-6 sm:text-base sm:leading-7">
              {t('servicePage.intro')}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="home-surface relative overflow-hidden px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24">
        <div className="home-grid-line pointer-events-none absolute inset-y-0 left-[22%] w-px" />
        <div className="home-grid-line pointer-events-none absolute inset-y-0 left-[50%] w-px" />
        <div className="home-grid-line pointer-events-none absolute inset-y-0 right-[22%] w-px" />

        <div className="relative mx-auto grid max-w-7xl gap-6 lg:gap-8">
          {services.map((service, index) => {
            const media = getServiceMedia(service.id)
            const isEven = index % 2 === 0

            return (
              <Reveal key={service.id} delay={index * 0.03}>
                <article className="service-list-card home-panel group grid overflow-hidden border shadow-[0_18px_55px_rgba(11,13,16,0.06)] transition hover:border-brand-red/25 lg:grid-cols-12">
                  <div className={`relative min-h-64 overflow-hidden sm:min-h-80 lg:col-span-5 lg:min-h-[420px] ${isEven ? '' : 'lg:order-2'}`}>
                    <img
                      src={media.image}
                      alt={service.title}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                      loading={index < 2 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 via-brand-black/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-brand-black/10" />
                    <div className="absolute right-5 top-5 flex size-18 items-center justify-center bg-brand-black text-brand-red shadow-steel sm:size-22">
                      <ServiceIcon name={service.icon} className="size-8 sm:size-10" />
                    </div>
                  </div>

                  <div className="flex min-h-[360px] flex-col justify-center p-6 sm:p-9 lg:col-span-7 lg:min-h-[420px] lg:p-12 xl:p-16">
                    <p className="font-heading text-xs font-bold uppercase tracking-[0.28em] text-brand-red sm:text-sm">
                      <span className="mr-4 inline-block h-3 w-2 skew-x-[-18deg] bg-brand-red align-middle" />
                      {groups[service.group] || t('servicePage.eyebrow')}
                    </p>
                    <h2 className="home-heading mt-5 max-w-3xl font-heading text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">
                      {service.title}
                    </h2>
                    <p className="home-muted mt-6 max-w-3xl text-sm leading-6 sm:text-base sm:leading-7">
                      {service.description}
                    </p>
                    <p className="home-muted mt-5 max-w-2xl text-sm font-semibold leading-6 sm:text-base">
                      {service.teaser}
                    </p>
                    <Link
                      to={`/service/${service.id}`}
                      className="home-primary-button focus-ring mt-8 inline-flex min-h-14 w-full max-w-[316px] items-center justify-center gap-4 px-8 py-4 font-heading text-sm font-black uppercase tracking-[0.24em] transition sm:w-[316px] sm:px-10 sm:text-base"
                    >
                      <span>{t('common.learnMore')}</span>
                      <ServiceIcon name="ArrowRight" className="size-5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </section>
    </main>
  )
}
