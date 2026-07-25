import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import heroRoad from '../assets/home-hero-road-vw.jpg'
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

export default function HomePage() {
  const { t } = useTranslation()
  const services = t('services', { returnObjects: true })
  const aboutParagraphs = t('home.aboutParagraphs', { returnObjects: true })
  const perks = t('home.perks', { returnObjects: true })
  const addressLine = `${t('site.address.line1')}, ${t('site.address.line2')}`
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressLine)}`

  return (
    <main>
      <SEO page="home" />
      <section className="relative flex min-h-[84svh] items-end overflow-hidden px-4 pb-8 pt-12 sm:min-h-[86svh] sm:px-6 sm:pb-10 sm:pt-14 lg:min-h-[88svh] lg:px-8 lg:py-14">
        <img
          src={heroRoad}
          alt={t('home.heroImageAlt')}
          className="absolute inset-0 h-full w-full object-cover object-[58%_center] sm:object-[62%_center] lg:object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/48 to-brand-black/5" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/68 via-brand-black/16 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-brand-black to-transparent" />
        <div className="absolute inset-x-0 top-0 h-px bg-steel-gradient opacity-50" />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-heading text-sm font-bold uppercase tracking-[0.24em] text-brand-red">
              {t('home.heroEyebrow')}
            </p>
            <h1 className="steel-text mt-5 font-heading text-4xl font-bold uppercase leading-[1.08] drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              <span className="block">{t('home.heroTitle')}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-6 text-brand-white/90 drop-shadow-lg sm:text-base sm:leading-7">{t('home.heroText')}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`tel:${t('site.phone').replaceAll(' ', '')}`} variant="secondary" icon="Phone" fullWidth>
                {t('actions.callNow')}
              </ButtonLink>
            </div>
          </motion.div>
        </div>
      </section>

      <WhatsAppContact />

      <section className="border-y border-brand-steel/15 bg-brand-charcoal px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.24em] text-brand-red">
              {t('home.aboutEyebrow')}
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold uppercase leading-tight text-brand-white sm:text-5xl">
              {t('home.aboutTitle')}
            </h2>
            <p className="mt-5 text-sm leading-6 text-brand-text sm:text-base sm:leading-7">{t('home.aboutLead')}</p>
          </Reveal>

          <Reveal className="industrial-panel mt-10 overflow-hidden rounded-lg p-5 sm:p-6 lg:p-8" delay={0.08}>
            <div className="relative overflow-hidden rounded-md">
              <img
                src={aboutWorkshop}
                alt={t('home.aboutImageAlt')}
                className="h-[340px] w-full object-cover brightness-[0.68] sm:h-[420px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/45 to-brand-black/20" />
              <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <h3 className="max-w-xl font-heading text-xl font-bold uppercase leading-tight text-brand-white sm:text-3xl lg:text-4xl">
                    <AccentEdgeWords text={t('home.aboutShortLine')} />
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-brand-white sm:text-base">{addressLine}</p>
                </div>
                <a
                  className="focus-ring mx-auto inline-flex min-h-12 items-center justify-center gap-3 rounded-md border border-brand-red bg-brand-black/60 px-7 py-3 font-heading text-sm font-bold uppercase tracking-wider text-brand-white backdrop-blur transition hover:bg-brand-red"
                  href={mapUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ServiceIcon name="MapPin" className="size-4" />
                  <span>{t('actions.openInMaps')}</span>
                </a>
              </div>
            </div>

            <div className="mt-8 max-w-4xl">
              <p className="font-heading text-sm font-bold uppercase tracking-[0.22em] text-brand-red">
                {t('home.aboutCardKicker')}
              </p>
              <h3 className="mt-3 font-heading text-2xl font-bold uppercase leading-tight text-brand-white sm:text-4xl">
                {t('home.aboutCardTitle')}
              </h3>
              <p className="mt-4 text-sm leading-6 text-brand-text sm:text-base sm:leading-7">{t('home.aboutCardText')}</p>
            </div>

            <div className="mt-7 max-w-4xl space-y-4 text-sm leading-6 text-brand-text sm:text-base sm:leading-7">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <ButtonLink to="/unternehmen" variant="secondary" icon="ArrowRight">
                  {t('common.learnMore')}
                </ButtonLink>
                <ButtonLink to="/terminanfrage" icon="CalendarCheck">
                  {t('actions.requestAppointment')}
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-white px-4 py-16 text-brand-black sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader title={t('home.servicesTitle')} text={t('home.servicesText')} tone="light" />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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

      <section className="bg-brand-charcoal px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader title={t('home.perksTitle')} />
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {perks.map((perk, index) => (
              <Reveal key={perk.title} delay={index * 0.06}>
                <article className="industrial-panel h-full rounded-lg p-6">
                  <ServiceIcon
                    name={['KeyRound', 'Car', 'FileCheck2'][index]}
                    className="size-8 text-brand-red"
                  />
                  <h3 className="mt-5 font-heading text-xl font-bold uppercase text-brand-white">
                    {perk.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-brand-text">{perk.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <HomeFAQTeaser itemIndexes={homeFaqIndexes} />

      <section className="bg-hero-vignette px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 className="steel-text font-heading text-3xl font-bold uppercase leading-tight sm:text-5xl">
            {t('home.finalTitle')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-brand-text sm:text-base sm:leading-7">{t('home.finalText')}</p>
          <div className="mt-8 flex justify-center">
            <ButtonLink to="/terminanfrage" icon="CalendarCheck">
              {t('actions.requestAppointment')}
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
