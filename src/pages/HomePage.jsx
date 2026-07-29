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

const staticButtonBase =
  'focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 font-heading text-sm font-bold uppercase tracking-wider transition'

const staticButtonVariants = {
  primary: 'bg-gradient-to-r from-brand-red to-brand-redDark text-white shadow-red hover:from-brand-redDark hover:to-brand-red',
  secondary:
    'border border-brand-steel/35 bg-brand-steelLight/5 text-brand-white hover:border-brand-red hover:text-white',
}

function StaticButton({ children, variant = 'primary', icon = 'ArrowRight', fullWidth = false }) {
  return (
    <button
      type="button"
      className={`${staticButtonBase} ${fullWidth ? 'w-full min-h-14 px-8 py-4 text-base' : ''} ${staticButtonVariants[variant]}`}
    >
      <span>{children}</span>
      {icon && <ServiceIcon name={icon} className="size-4" />}
    </button>
  )
}

function VehiclesSection() {
  const { t } = useTranslation()
  const scrollingBrands = [...vehicleBrands, ...vehicleBrands]

  return (
    <section className="relative px-4 py-16 overflow-hidden bg-brand-white text-brand-black sm:px-6 sm:py-20 lg:px-8">
      <div className="pointer-events-none absolute inset-y-0 left-[50%] w-px bg-brand-steel/20" />
      <div className="pointer-events-none absolute -left-[72px] top-14 hidden h-28 w-[232px] skew-x-[-20deg] bg-brand-red lg:block" />
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-xl mx-auto text-center">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.32em] text-brand-red">
            <span className="mr-4 inline-block h-3 w-2 skew-x-[-18deg] bg-brand-red align-middle" />
            {t('home.vehiclesEyebrow')}
          </p>
          <h2 className="mt-6 text-4xl font-black leading-tight uppercase text-brand-black sm:text-5xl lg:text-6xl">
            {t('home.vehiclesTitle')}
          </h2>
          <button
            type="button"
            className="focus-ring mt-8 inline-flex items-center gap-4 font-heading text-sm font-black uppercase tracking-[0.28em] text-brand-black transition hover:text-brand-red sm:text-base"
          >
            <span>{t('home.vehiclesCta')}</span>
            <ServiceIcon name="ArrowRight" className="size-5" />
          </button>
        </Reveal>
      </div>

      <div className="relative overflow-hidden mt-14 sm:mt-20">
        <div className="absolute inset-y-0 left-0 z-10 w-20 pointer-events-none bg-gradient-to-r from-brand-white to-transparent sm:w-36" />
        <div className="absolute inset-y-0 right-0 z-10 w-20 pointer-events-none bg-gradient-to-l from-brand-white to-transparent sm:w-36" />
        <div className="flex items-center gap-5 brand-marquee-track w-max sm:gap-8">
          {scrollingBrands.map((brand, index) => (
            <div
              key={`${brand}-${index}`}
              className="flex h-24 w-40 shrink-0 items-center justify-center border-y border-brand-steel/12 text-center sm:h-[120px] sm:w-56"
              aria-hidden={index >= vehicleBrands.length}
            >
              <span className="text-xl italic font-black tracking-tight uppercase transition font-heading text-brand-steel/68 hover:text-brand-steelDark sm:text-2xl">
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
    <main>
      <SEO page="home" />
      <section className="relative isolate flex min-h-[calc(100svh-80px)] items-start overflow-hidden bg-brand-white px-4 pb-8 pt-12 text-brand-black sm:min-h-[calc(100svh-80px)] sm:px-6 sm:py-12 lg:min-h-[calc(100vh-92px)] lg:items-center lg:px-8">
        <div className="absolute inset-y-0 left-[22%] -z-30 w-px bg-brand-black/8" />
        <div className="absolute inset-y-0 left-[50%] -z-30 w-px bg-brand-black/8" />
        <div className="absolute inset-y-0 right-[22%] -z-30 w-px bg-brand-black/8" />
        <div className="absolute inset-y-0 right-0 -z-20 w-[66%] bg-[#f1f2f3] [clip-path:polygon(26%_0,100%_0,100%_100%,0_100%)]" />
        <div className="absolute -left-16 top-12 -z-10 hidden h-[120px] w-[248px] skew-x-[-20deg] bg-brand-red lg:block" />

        <motion.img
          src={heroBmw}
          alt={t('home.heroImageAlt')}
          className="pointer-events-none absolute -bottom-8 left-1/2 z-0 w-[118vw] max-w-none -translate-x-1/2 object-contain opacity-[0.58] drop-shadow-[0_24px_55px_rgba(11,13,16,0.22)] sm:-bottom-10 sm:w-[88vw] md:w-[72vw] lg:left-auto lg:right-[-9vw] lg:bottom-10 lg:w-[58vw] lg:translate-x-0 lg:opacity-[0.82] xl:right-0 xl:w-[52vw] 2xl:w-[48vw]"
          loading="eager"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.08 }}
        />
        <div className="absolute inset-x-0 bottom-0 z-0 h-52 bg-gradient-to-t from-brand-white via-brand-white/80 to-transparent lg:hidden" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,1.05fr)]">
          <motion.div
            className="max-w-3xl pb-48 mx-auto text-left sm:pb-64 sm:pt-10 lg:mx-0 lg:pb-0 lg:pt-0"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-heading text-sm font-black uppercase leading-6 tracking-[0.3em] text-brand-red sm:text-base sm:leading-7">
              <span className="mr-5 inline-block h-4 w-2 skew-x-[-18deg] bg-brand-red align-middle" />
              {t('home.heroEyebrow')}
            </p>
            <h1 className="mt-5 font-heading text-3xl font-black uppercase leading-[1.08] text-brand-black sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.8rem]">
              <span className="block">{t('home.heroTitle')}</span>
            </h1>
            <p className="max-w-xl mt-6 text-sm leading-6 text-brand-steelDark sm:text-base sm:leading-7 lg:text-lg lg:leading-8">{t('home.heroText')}</p>
            <div className="flex max-w-xl mt-8">
              <Link
                to="/service"
                className="focus-ring inline-flex min-h-14 items-center justify-center gap-4 bg-brand-black px-8 py-4 font-heading text-sm font-black uppercase tracking-[0.24em] text-brand-white transition hover:bg-brand-red sm:px-10 sm:text-base"
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

      <section className="relative px-4 py-16 overflow-hidden bg-brand-white text-brand-black sm:px-6 sm:py-20 lg:px-8">
        <div className="pointer-events-none absolute inset-y-0 left-[22%] w-px bg-brand-black/8" />
        <div className="pointer-events-none absolute inset-y-0 left-[50%] w-px bg-brand-black/8" />
        <div className="pointer-events-none absolute inset-y-0 right-[22%] w-px bg-brand-black/8" />
        <div className="pointer-events-none absolute -left-[70px] top-14 hidden h-[124px] w-[270px] skew-x-[-20deg] bg-brand-red lg:block" />
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
                  className="h-32 w-auto sm:h-40 lg:h-44"
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
            <h2 className="mt-5 text-4xl font-black leading-tight uppercase font-heading text-brand-black sm:text-5xl lg:text-6xl">
              {t('home.aboutTitle')}
            </h2>
            <p className="mt-8 text-sm leading-6 text-brand-steelDark sm:text-base sm:leading-7">
              {t('home.aboutLead')}
            </p>
            <div className="mt-6 space-y-4 text-sm leading-6 text-brand-steelDark sm:text-base sm:leading-7">
              <p>
                <strong className="font-black text-brand-black">{t('home.aboutCardTitle')}</strong>{' '}
                {t('home.aboutCardText')}
              </p>
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <button
              type="button"
              className="focus-ring mt-9 inline-flex items-center gap-4 font-heading text-sm font-black uppercase tracking-[0.28em] text-brand-black transition hover:text-brand-red sm:text-base"
            >
              <span>{t('home.aboutCta')}</span>
              <ServiceIcon name="ArrowRight" className="size-5" />
            </button>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-16 bg-brand-white text-brand-black sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-y-0 left-[22%] w-px bg-brand-black/8" />
        <div className="pointer-events-none absolute inset-y-0 left-[50%] w-px bg-brand-black/8" />
        <div className="pointer-events-none absolute inset-y-0 right-[22%] w-px bg-brand-black/8" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-heading text-xs font-bold uppercase tracking-[0.28em] text-brand-red sm:text-sm">
                <span className="mr-5 inline-block h-4 w-2 skew-x-[-18deg] bg-brand-red align-middle" />
                {t('home.servicesEyebrow')}
              </p>
              <h2 className="mt-5 text-4xl font-black leading-tight uppercase font-heading text-brand-black sm:text-5xl lg:text-6xl">
                {t('home.servicesTitle')}
              </h2>
              <p className="mt-8 text-sm leading-6 text-brand-steelDark sm:text-base sm:leading-7">
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
                        className={`focus-ring flex min-h-22 items-center gap-5 px-6 py-5 text-left transition sm:min-h-24 lg:min-h-23 ${
                          isActive
                            ? 'bg-brand-red text-brand-white shadow-red'
                            : 'bg-brand-black/[0.045] text-brand-black hover:bg-brand-black/[0.075]'
                        }`}
                      >
                        <ServiceIcon
                          name={service.icon}
                          className={`size-9 shrink-0 ${isActive ? 'text-brand-white' : 'text-brand-red'}`}
                        />
                        <span className="font-heading text-xl font-black leading-tight text-current sm:text-2xl">
                          {service.title}
                        </span>
                      </button>
                    )
                  })}
                </div>

                <motion.div
                  ref={serviceDetailRef}
                  key={`${activeService.id}-image`}
                  className="scroll-mt-28 overflow-hidden bg-brand-black/[0.04] sm:scroll-mt-24 lg:col-span-3"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.34, ease: 'easeOut' }}
                >
                  <img
                    src={activeMedia.image}
                    alt={activeService.title}
                    className="h-72 w-full object-cover sm:h-95 lg:h-full"
                    loading="lazy"
                  />
                </motion.div>

                <motion.div
                  key={`${activeService.id}-copy`}
                  className="flex flex-col justify-center lg:col-span-4"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.34, ease: 'easeOut', delay: 0.04 }}
                >
                  <h3 className="font-heading text-3xl font-black leading-tight text-brand-black sm:text-4xl">
                    {activeService.title}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-brand-steelDark sm:text-base sm:leading-7">
                    {activeService.description}
                  </p>
                  {serviceScope.length > 0 && (
                    <ul className="mt-7 space-y-4 text-sm font-semibold leading-6 text-brand-steelDark sm:text-base">
                      {serviceScope.map((item) => (
                        <li key={item} className="flex gap-4">
                          <ServiceIcon name="Check" className="mt-1 size-5 shrink-0 text-brand-red" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link
                    to={`/service/${activeService.id}`}
                    className="focus-ring mt-8 inline-flex w-fit items-center gap-3 font-heading text-sm font-black uppercase tracking-[0.24em] text-brand-red transition hover:text-brand-redDark sm:text-base"
                  >
                    <span>{t('common.learnMore')}</span>
                    <ServiceIcon name="ArrowRight" className="size-5" />
                  </Link>
                </motion.div>
              </div>
            </Reveal>
          )}
          <div className="mt-10">
            <Link
              to="/service"
              className="focus-ring inline-flex min-h-14 items-center justify-center gap-4 bg-brand-black px-8 py-4 font-heading text-sm font-black uppercase tracking-[0.24em] text-brand-white transition hover:bg-brand-red sm:px-10 sm:text-base"
            >
              <span>{t('actions.viewServices')}</span>
              <ServiceIcon name="ArrowRight" className="size-5" />
            </Link>
          </div>
        </div>
      </section>

      <HomeFAQTeaser itemIndexes={homeFaqIndexes} disableNavigation />

      <section className="px-4 py-16 bg-hero-vignette sm:px-6 lg:px-8">
        <Reveal className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight uppercase steel-text font-heading sm:text-5xl">
            {t('home.finalTitle')}
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-sm leading-6 text-brand-text sm:text-base sm:leading-7">{t('home.finalText')}</p>
          <div className="flex justify-center mt-8">
            <StaticButton icon="MessageSquare">
              {t('nav.contact')}
            </StaticButton>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
