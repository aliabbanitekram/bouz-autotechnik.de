import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import heroBmw from '../assets/hero/carserv-bmw.png'
import aboutWorkshop from '../assets/services/diagnostic-service-03.jpg'
import ButtonLink from '../components/ButtonLink'
import HomeFAQTeaser from '../components/HomeFAQTeaser'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import WhatsAppContact from '../components/WhatsAppContact'
import { ServiceIcon } from '../data/icons'

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

function AccentEdgeWords({ text }) {
  const words = text.split(' ')
  const first = words.slice(0, 2).join(' ')
  const middle = words.slice(2, -1).join(' ')
  const last = words.at(-1)

  return (
    <>
      <span className="text-brand-red">{first}</span>
      {middle && <span> {middle}</span>}
      {last && <span className="text-brand-red"> {last}</span>}
    </>
  )
}

function VehiclesSection() {
  const { t } = useTranslation()
  const scrollingBrands = [...vehicleBrands, ...vehicleBrands]

  return (
    <section className="relative overflow-hidden bg-brand-white px-4 py-16 text-brand-black sm:px-6 sm:py-20 lg:px-8">
      <div className="pointer-events-none absolute inset-y-0 left-[50%] w-px bg-brand-steel/20" />
      <div className="pointer-events-none absolute -left-[72px] top-14 hidden h-28 w-[232px] skew-x-[-20deg] bg-brand-red lg:block" />
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.32em] text-brand-red">
            <span className="mr-4 inline-block h-3 w-2 skew-x-[-18deg] bg-brand-red align-middle" />
            {t('home.vehiclesEyebrow')}
          </p>
          <h2 className="mt-6 text-4xl font-black uppercase leading-tight text-brand-black sm:text-5xl lg:text-6xl">
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

      <div className="relative mt-14 overflow-hidden sm:mt-20">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-brand-white to-transparent sm:w-36" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-brand-white to-transparent sm:w-36" />
        <div className="brand-marquee-track flex w-max items-center gap-5 sm:gap-8">
          {scrollingBrands.map((brand, index) => (
            <div
              key={`${brand}-${index}`}
              className="flex h-24 w-40 shrink-0 items-center justify-center border-y border-brand-steel/12 text-center sm:h-[120px] sm:w-56"
              aria-hidden={index >= vehicleBrands.length}
            >
              <span className="font-heading text-xl font-black uppercase italic tracking-tight text-brand-steel/68 transition hover:text-brand-steelDark sm:text-2xl">
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
  const { t } = useTranslation()
  const services = t('services', { returnObjects: true })
  const aboutParagraphs = t('home.aboutParagraphs', { returnObjects: true })
  const perks = t('home.perks', { returnObjects: true })
  const addressLine = `${t('site.address.line1')}, ${t('site.address.line2')}`

  return (
    <main>
      <SEO page="home" />
      <section className="relative isolate flex min-h-[calc(100svh-80px)] items-center overflow-hidden bg-brand-white px-4 py-12 text-brand-black sm:min-h-[calc(100svh-80px)] sm:px-6 sm:py-14 lg:min-h-[calc(100vh-92px)] lg:px-8">
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
            className="mx-auto max-w-3xl pb-48 pt-6 text-left sm:pb-64 sm:pt-14 lg:mx-0 lg:pb-0 lg:pt-0"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-heading text-xs font-bold uppercase tracking-[0.28em] text-brand-red sm:text-sm">
              <span className="mr-5 inline-block h-4 w-2 skew-x-[-18deg] bg-brand-red align-middle" />
              {t('home.heroEyebrow')}
            </p>
            <h1 className="mt-5 font-heading text-4xl font-black uppercase leading-[1.08] text-brand-black sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.4rem]">
              <span className="block">{t('home.heroTitle')}</span>
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-6 text-brand-steelDark sm:text-base sm:leading-7 lg:text-lg lg:leading-8">{t('home.heroText')}</p>
            <div className="mt-8 flex max-w-xl">
              <Link
                to="/service"
                className="focus-ring inline-flex min-h-14 items-center justify-center gap-4 bg-brand-black px-8 py-4 font-heading text-sm font-black uppercase tracking-[0.24em] text-brand-white transition hover:bg-brand-red sm:px-10 sm:text-base"
              >
                <span>{t('actions.viewServices')}</span>
                <ServiceIcon name="ArrowRight" className="size-5" />
              </Link>
            </div>
          </motion.div>
          <div className="hidden min-h-[420px] lg:block" aria-hidden="true" />
        </div>
      </section>

      <WhatsAppContact disabled />

      <VehiclesSection />

      <section className="px-4 py-16 border-y border-brand-steel/15 bg-brand-charcoal sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-3xl mx-auto text-center">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.24em] text-brand-red">
              {t('home.aboutEyebrow')}
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight uppercase font-heading text-brand-white sm:text-5xl">
              {t('home.aboutTitle')}
            </h2>
            <p className="mt-5 text-sm leading-6 text-brand-text sm:text-base sm:leading-7">{t('home.aboutLead')}</p>
          </Reveal>

          <Reveal className="p-5 mt-10 overflow-hidden rounded-lg industrial-panel sm:p-6 lg:p-8" delay={0.08}>
            <div className="relative overflow-hidden rounded-md">
              <img
                src={aboutWorkshop}
                alt={t('home.aboutImageAlt')}
                className="h-85 w-full object-cover brightness-[0.68] sm:h-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-black via-brand-black/45 to-brand-black/20" />
              <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <h3 className="max-w-xl text-xl font-bold leading-tight uppercase font-heading text-brand-white sm:text-3xl lg:text-4xl">
                    <AccentEdgeWords text={t('home.aboutShortLine')} />
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-brand-white sm:text-base">{addressLine}</p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-3 py-3 mx-auto text-sm font-bold tracking-wider uppercase transition border rounded-md focus-ring min-h-12 border-brand-red bg-brand-black/60 px-7 font-heading text-brand-white backdrop-blur hover:bg-brand-red"
                >
                  <ServiceIcon name="MapPin" className="size-4" />
                  <span>{t('actions.openInMaps')}</span>
                </button>
              </div>
            </div>

            <div className="max-w-4xl mt-8">
              <p className="font-heading text-sm font-bold uppercase tracking-[0.22em] text-brand-red">
                {t('home.aboutCardKicker')}
              </p>
              <h3 className="mt-3 text-2xl font-bold leading-tight uppercase font-heading text-brand-white sm:text-4xl">
                {t('home.aboutCardTitle')}
              </h3>
              <p className="mt-4 text-sm leading-6 text-brand-text sm:text-base sm:leading-7">{t('home.aboutCardText')}</p>
            </div>

            <div className="max-w-4xl space-y-4 text-sm leading-6 mt-7 text-brand-text sm:text-base sm:leading-7">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <StaticButton variant="secondary" icon="ArrowRight">
                  {t('common.learnMore')}
                </StaticButton>
                <StaticButton icon="MessageSquare">
                  {t('nav.contact')}
                </StaticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-16 bg-brand-white text-brand-black sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader title={t('home.servicesTitle')} text={t('home.servicesText')} tone="light" />
          </Reveal>
          <div className="grid gap-6 mt-10 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 6).map((service, index) => (
              <Reveal key={service.id} delay={index * 0.03}>
                <ServiceCard service={service} compact tone="light" showDescription />
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink to="/service" variant="dark" icon="ArrowRight">
              {t('actions.viewServices')}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 bg-brand-charcoal sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader title={t('home.perksTitle')} />
          </Reveal>
          <div className="grid gap-4 mt-8 md:grid-cols-3">
            {perks.map((perk, index) => (
              <Reveal key={perk.title} delay={index * 0.06}>
                <article className="h-full p-6 rounded-lg industrial-panel">
                  <ServiceIcon
                    name={['KeyRound', 'Car', 'FileCheck2'][index]}
                    className="size-8 text-brand-red"
                  />
                  <h3 className="mt-5 text-xl font-bold uppercase font-heading text-brand-white">
                    {perk.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-brand-text">{perk.description}</p>
                </article>
              </Reveal>
            ))}
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
