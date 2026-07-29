import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import heroBmw from '../assets/hero/carserv-bmw.png'
import meisterBadge from '../assets/logo-kfz-meisterbetrieb-menden.png'
import aboutWorkshop from '../assets/services/diagnostic-service-03.jpg'
import HomeFAQTeaser from '../components/HomeFAQTeaser'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import WhatsAppContact from '../components/WhatsAppContact'
import { useTheme } from '../context/useTheme'
import { ServiceIcon } from '../data/icons'
import { serviceDetailContent } from '../data/serviceDetailContent'
import { getServiceMedia } from '../data/serviceMedia'

const homeFaqIndexes = [17, 4, 8, 21]

const vehicleBrands = [
  'Audi',
  'BMW',
  'Mercedes-Benz',
  'Volkswagen',
  'Porsche',
  'Opel',
  'Ford',
  'Skoda',
  'Seat',
  'Cupra',
  'Peugeot',
  'Renault',
  'Citroen',
  'Fiat',
  'Alfa Romeo',
  'Volvo',
  'Toyota',
  'Hyundai',
  'Kia',
  'Land Rover',
  'Mini',
  'Nissan',
  'Mazda',
  'Tesla',
  'Dacia',
]

function VehiclesSection() {
  const { t } = useTranslation()
  const { isDark } = useTheme()
  const scrollingBrands = [...vehicleBrands, ...vehicleBrands]

  return (
    <section className="home-surface relative px-4 pt-16 pb-10 overflow-hidden sm:px-6 sm:pb-12 sm:pt-20 lg:px-8 lg:pb-14">
      <div className="home-grid-line pointer-events-none absolute inset-y-0 left-[50%] w-px" />
      <div className="home-red-accent pointer-events-none absolute -left-[72px] top-14 hidden h-28 w-[232px] skew-x-[-20deg] bg-brand-red xl:block" />
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-xl mx-auto text-center">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.32em] text-brand-red">
            <span className="mr-4 inline-block h-3 w-2 skew-x-[-18deg] bg-brand-red align-middle" />
            {t('home.vehiclesEyebrow')}
          </p>
          <h2 className="home-heading mt-6 text-4xl font-black leading-tight uppercase sm:text-5xl lg:text-6xl">
            {t('home.vehiclesTitle')}
          </h2>
          <button
            type="button"
            className="home-text-link focus-ring mt-8 inline-flex items-center gap-4 font-heading text-sm font-black uppercase tracking-[0.28em] transition hover:text-brand-red sm:text-base"
          >
            <span>{t('home.vehiclesCta')}</span>
            <ServiceIcon name="ArrowRight" className="size-5" />
          </button>
        </Reveal>
      </div>

      <div className="relative overflow-hidden mt-14 sm:mt-20">
        <div className={`absolute inset-y-0 left-0 z-10 w-20 pointer-events-none bg-gradient-to-r sm:w-36 ${isDark ? 'from-brand-black to-transparent' : 'from-brand-white to-transparent'}`} />
        <div className={`absolute inset-y-0 right-0 z-10 w-20 pointer-events-none bg-gradient-to-l sm:w-36 ${isDark ? 'from-brand-black to-transparent' : 'from-brand-white to-transparent'}`} />
        <div className="flex items-center gap-5 brand-marquee-track w-max sm:gap-8">
          {scrollingBrands.map((brand, index) => (
            <div
              key={`${brand}-${index}`}
              className="home-brand-card flex h-24 w-40 shrink-0 items-center justify-center border-y text-center sm:h-[120px] sm:w-56"
              aria-hidden={index >= vehicleBrands.length}
            >
              <span className="home-brand-name text-xl italic font-black tracking-tight uppercase transition font-heading sm:text-2xl">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
      <p className="sr-only">{vehicleBrands.join(', ')}</p>
    </section>
  )
}

export default function HomePage() {
  const { t, i18n } = useTranslation()
  const { isDark } = useTheme()
  const services = t('services', { returnObjects: true })
  const aboutParagraphs = t('home.aboutParagraphs', { returnObjects: true })
  const homeServices = services
  const [activeServiceId, setActiveServiceId] = useState(homeServices[0]?.id)
  const serviceDetailRef = useRef(null)
  const activeService = homeServices.find((service) => service.id === activeServiceId) ?? homeServices[0]
  const activeMedia = activeService ? getServiceMedia(activeService.id) : null
  const detailLanguage = i18n.resolvedLanguage?.startsWith('de') ? 'de' : 'en'
  const activeDetail = activeService ? serviceDetailContent[detailLanguage]?.[activeService.id] : null
  const serviceScope = activeDetail?.serviceItems?.slice(0, 3) ?? []
  const handleServiceSelect = (serviceId) => {
    setActiveServiceId(serviceId)
    window.setTimeout(() => {
      serviceDetailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
  }

  return (
    <main className={`home-page ${isDark ? 'home-page--dark' : 'home-page--light'}`}>
      <SEO page="home" />
      <section className="home-surface relative isolate flex min-h-[calc(100svh-80px)] items-start overflow-hidden px-4 pb-8 pt-12 sm:min-h-[calc(100svh-80px)] sm:px-6 sm:py-12 lg:min-h-[calc(100vh-92px)] lg:items-center lg:px-8">
        <div className="home-grid-line absolute inset-y-0 left-[22%] -z-30 w-px" />
        <div className="home-grid-line absolute inset-y-0 left-[50%] -z-30 w-px" />
        <div className="home-grid-line absolute inset-y-0 right-[22%] -z-30 w-px" />
        <div className="home-hero-angle absolute inset-y-0 right-0 -z-20 w-[66%] [clip-path:polygon(26%_0,100%_0,100%_100%,0_100%)]" />
        <div className="home-red-accent absolute -left-16 top-12 -z-10 hidden h-[120px] w-[248px] skew-x-[-20deg] bg-brand-red xl:block" />

        <motion.img
          src={heroBmw}
          alt={t('home.heroImageAlt')}
          className="home-hero-car pointer-events-none absolute -bottom-8 left-1/2 z-0 w-[118vw] max-w-none -translate-x-1/2 object-contain opacity-[0.58] drop-shadow-[0_24px_55px_rgba(11,13,16,0.22)] sm:-bottom-10 sm:w-[88vw] md:w-[72vw] lg:left-auto lg:right-[-9vw] lg:bottom-10 lg:w-[58vw] lg:translate-x-0 lg:opacity-[0.82] xl:right-0 xl:w-[52vw] 2xl:w-[48vw]"
          loading="eager"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.08 }}
        />
        <div className="home-mobile-hero-fade absolute inset-x-0 bottom-0 z-0 h-52 bg-gradient-to-t lg:hidden" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,1.05fr)]">
          <motion.div
            className="max-w-3xl pb-48 mx-auto text-left sm:pb-64 sm:pt-10 lg:mx-0 lg:pb-0 lg:pt-0"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-heading text-xs font-bold uppercase tracking-[0.28em] text-brand-red sm:text-sm">
              <span className="mr-5 inline-block h-4 w-2 skew-x-[-18deg] bg-brand-red align-middle" />
              {t('home.heroEyebrow')}
            </p>
            <h1 className="home-heading mt-5 text-4xl font-black leading-tight uppercase font-heading sm:text-5xl lg:text-6xl">
              <span className="block">{t('home.heroTitle')}</span>
            </h1>
            <p className="home-muted max-w-xl mt-6 text-sm leading-6 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">{t('home.heroText')}</p>
            <div className="flex max-w-xl mt-8">
              <Link
                to="/service"
                className="home-primary-button focus-ring inline-flex min-h-14 w-full max-w-[316px] items-center justify-center gap-4 px-8 py-4 font-heading text-sm font-black uppercase tracking-[0.24em] transition sm:w-[316px] sm:px-10 sm:text-base"
              >
                <span>{t('actions.viewServices')}</span>
                <ServiceIcon name="ArrowRight" className="size-5" />
              </Link>
            </div>
          </motion.div>
          <div className="hidden min-h-105 lg:block" aria-hidden="true" />
        </div>
      </section>

      <WhatsAppContact disabled />

      <VehiclesSection />

      <section className="home-surface relative px-4 py-16 overflow-hidden sm:px-6 sm:py-20 lg:px-8">
        <div className="home-grid-line pointer-events-none absolute inset-y-0 left-[22%] w-px" />
        <div className="home-grid-line pointer-events-none absolute inset-y-0 left-[50%] w-px" />
        <div className="home-grid-line pointer-events-none absolute inset-y-0 right-[22%] w-px" />
        <div className="home-red-accent pointer-events-none absolute -left-[70px] top-14 hidden h-[124px] w-[270px] skew-x-[-20deg] bg-brand-red xl:block" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <Reveal className="relative pb-20 sm:pb-24">
            <div className="relative overflow-hidden bg-brand-steelLight shadow-[0_22px_60px_rgba(11,13,16,0.16)]">
              <img
                src={aboutWorkshop}
                alt={t('home.aboutImageAlt')}
                className="h-90 w-full object-cover object-[52%_center] sm:h-[520px] lg:h-[610px]"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-0 -translate-x-1/2 left-1/2">
              <span className="block rounded-sm bg-brand-white px-6 py-5 shadow-[0_24px_64px_rgba(11,13,16,0.26)] ring-1 ring-brand-black/10 sm:px-8 sm:py-6">
                <img
                  src={meisterBadge}
                  alt="Meisterbetrieb der Kfz-Innung"
                  className="w-auto h-32 sm:h-40 lg:h-44"
                  loading="lazy"
                />
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="font-heading text-xs font-bold uppercase tracking-[0.28em] text-brand-red sm:text-sm">
              <span className="mr-5 inline-block h-4 w-2 skew-x-[-18deg] bg-brand-red align-middle" />
              {t('home.aboutEyebrow')}
            </p>
            <h2 className="home-heading mt-5 text-4xl font-black leading-tight uppercase font-heading sm:text-5xl lg:text-6xl">
              {t('home.aboutTitle')}
            </h2>
            <p className="home-muted mt-8 text-sm leading-6 sm:text-base sm:leading-7">
              {t('home.aboutLead')}
            </p>
            <div className="home-muted mt-6 space-y-4 text-sm leading-6 sm:text-base sm:leading-7">
              <p>
                <strong className="home-heading font-black">{t('home.aboutCardTitle')}</strong>{' '}
                {t('home.aboutCardText')}
              </p>
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <button
              type="button"
              className="home-text-link focus-ring mt-9 inline-flex items-center gap-4 font-heading text-sm font-black uppercase tracking-[0.28em] transition hover:text-brand-red sm:text-base"
            >
              <span>{t('home.aboutCta')}</span>
              <ServiceIcon name="ArrowRight" className="size-5" />
            </button>
          </Reveal>
        </div>
      </section>

      <section className="home-surface relative px-4 py-16 overflow-hidden sm:px-6 lg:px-8">
        <div className="home-grid-line pointer-events-none absolute inset-y-0 left-[22%] w-px" />
        <div className="home-grid-line pointer-events-none absolute inset-y-0 left-[50%] w-px" />
        <div className="home-grid-line pointer-events-none absolute inset-y-0 right-[22%] w-px" />
        <div className="home-red-accent pointer-events-none absolute -left-[72px] top-14 hidden h-28 w-[232px] skew-x-[-20deg] bg-brand-red xl:block" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <div className="max-w-3xl lg:mx-auto lg:text-center">
              <p className="font-heading text-xs font-bold uppercase tracking-[0.28em] text-brand-red sm:text-sm">
                <span className="mr-5 inline-block h-4 w-2 skew-x-[-18deg] bg-brand-red align-middle" />
                {t('home.servicesEyebrow')}
              </p>
              <h2 className="home-heading mt-5 text-4xl font-black leading-tight uppercase font-heading sm:text-5xl lg:text-6xl">
                {t('home.servicesTitle')}
              </h2>
              <p className="home-muted mt-8 text-sm leading-6 sm:text-base sm:leading-7">
                {t('home.servicesText')}
              </p>
            </div>
          </Reveal>
          {activeService && (
            <Reveal className="mt-10" delay={0.06}>
              <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
                <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5">
                  {homeServices.map((service) => {
                    const isActive = service.id === activeService.id

                    return (
                      <button
                        key={service.id}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => handleServiceSelect(service.id)}
                        className={`focus-ring flex min-h-22 items-center gap-4 px-4 py-5 text-left transition sm:min-h-24 lg:min-h-23 xl:gap-5 xl:px-6 ${
                          isActive ? 'bg-brand-red text-brand-white shadow-red' : 'home-service-tab'
                        }`}
                      >
                        <ServiceIcon
                          name={service.icon}
                          className={`size-9 shrink-0 lg:size-7 xl:size-9 ${isActive ? 'text-brand-white' : 'text-brand-red'}`}
                        />
                        <span className="min-w-0 text-xl font-black leading-tight text-current font-heading lg:text-lg xl:text-2xl">
                          {service.title}
                        </span>
                      </button>
                    )
                  })}
                </div>

                <motion.div
                  ref={serviceDetailRef}
                  key={activeService.id}
                  className="home-panel scroll-mt-28 overflow-hidden sm:scroll-mt-24 lg:col-span-7"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.34, ease: 'easeOut' }}
                >
                  <img
                    src={activeMedia.image}
                    alt={activeService.title}
                    className="h-72 w-full object-cover sm:h-95 lg:h-[238px] xl:h-[258px]"
                    loading="lazy"
                  />
                  <div className="p-6 sm:p-8 lg:p-6 xl:p-7">
                    <h3 className="home-heading font-heading text-3xl font-black leading-tight sm:text-4xl lg:text-[2.45rem] xl:text-[2.75rem]">
                      {activeService.title}
                    </h3>
                    <p className="home-muted max-w-3xl mt-4 text-sm leading-6 sm:text-base sm:leading-7 lg:mt-3">
                      {activeService.description}
                    </p>
                    {serviceScope.length > 0 && (
                      <ul className="home-muted grid gap-3 mt-5 text-sm font-semibold leading-6 sm:grid-cols-3 sm:text-base lg:mt-4 lg:gap-4">
                        {serviceScope.map((item) => (
                          <li key={item} className="flex gap-3">
                            <ServiceIcon name="Check" className="mt-1 size-5 shrink-0 text-brand-red" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <Link
                      to={`/service/${activeService.id}`}
                      className="focus-ring mt-6 inline-flex w-fit items-center gap-3 font-heading text-sm font-black uppercase tracking-[0.24em] text-brand-red transition hover:text-brand-redDark sm:text-base lg:mt-5"
                    >
                      <span>{t('common.learnMore')}</span>
                      <ServiceIcon name="ArrowRight" className="size-5" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </Reveal>
          )}
          <div className="mt-10">
            <Link
              to="/service"
              className="home-primary-button focus-ring inline-flex min-h-14 w-full max-w-[316px] items-center justify-center gap-4 px-8 py-4 font-heading text-sm font-black uppercase tracking-[0.24em] transition sm:w-[316px] sm:px-10 sm:text-base"
            >
              <span>{t('actions.viewServices')}</span>
              <ServiceIcon name="ArrowRight" className="size-5" />
            </Link>
          </div>
        </div>
      </section>

      <HomeFAQTeaser itemIndexes={homeFaqIndexes} disableNavigation />

      <section className="home-surface relative pt-20 overflow-hidden text-brand-white sm:pt-24 lg:pt-32">
        <div className="home-grid-line pointer-events-none absolute inset-y-0 left-[22%] w-px" />
        <div className="home-grid-line pointer-events-none absolute inset-y-0 left-[50%] w-px" />
        <div className="home-grid-line pointer-events-none absolute inset-y-0 right-[22%] w-px" />

        <div className="relative min-h-[360px] overflow-hidden bg-brand-black px-4 py-12 sm:min-h-[390px] sm:px-6 sm:py-14 lg:min-h-[355px] lg:px-8">
          <img
            src={aboutWorkshop}
            alt={t('home.finalImageAlt')}
            className="pointer-events-none absolute inset-y-0 right-0 h-full w-full object-cover object-[52%_center] opacity-25 mix-blend-luminosity sm:opacity-35 lg:w-[48%] lg:object-[45%_center] lg:opacity-75"
            loading="lazy"
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-brand-black via-brand-black/92 to-brand-black/45 lg:to-brand-black/10" />
          <div className="pointer-events-none absolute bottom-0 right-0 hidden bg-brand-red lg:left-[48%] lg:block lg:h-24 lg:-skew-x-[22deg]" />
          <div className="relative mx-auto max-w-7xl">
            <Reveal className="relative z-10 max-w-2xl">
              <p className="font-heading text-xs font-bold uppercase tracking-[0.28em] text-brand-red sm:text-sm">
                <span className="mr-5 inline-block h-4 w-2 skew-x-[-18deg] bg-brand-red align-middle" />
                {t('home.finalEyebrow')}
              </p>
              <h2 className="mt-5 text-4xl font-black leading-tight uppercase font-heading text-brand-white sm:text-5xl lg:text-6xl">
                {t('home.finalTitle')}
              </h2>
              <a
                href={`tel:${t('site.phone').replaceAll(' ', '')}`}
                className="inline-flex items-center gap-3 text-3xl font-black tracking-wide uppercase transition focus-ring mt-7 font-heading text-brand-white hover:text-brand-red sm:gap-4 sm:text-5xl lg:text-6xl"
              >
                <ServiceIcon name="Phone" className="size-7 text-brand-red sm:size-9" />
                <span>{t('site.phone')}</span>
              </a>
              <p className="max-w-xl mt-5 text-sm leading-6 text-brand-white/78 sm:text-base sm:leading-7">
                {t('home.finalText')}
              </p>
              <Link
                to="/kontakt"
                className="focus-ring mt-8 inline-flex min-h-14 w-full max-w-[316px] items-center justify-center gap-4 bg-brand-red px-8 py-4 font-heading text-sm font-black uppercase tracking-[0.24em] text-brand-white transition hover:bg-brand-redDark sm:w-[316px] sm:px-10 sm:text-base"
              >
                <span>{t('nav.contact')}</span>
                <ServiceIcon name="ArrowRight" className="size-5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
