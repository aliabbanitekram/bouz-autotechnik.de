import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import logo from '../assets/bouz-autotechnik-logo.jpeg'
import ButtonLink from '../components/ButtonLink'
import FAQAccordion from '../components/FAQAccordion'
import OfferCard from '../components/OfferCard'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import { ServiceIcon } from '../data/icons'

export default function HomePage() {
  const { t } = useTranslation()
  const services = t('services', { returnObjects: true })
  const offers = t('offers', { returnObjects: true })
  const badges = t('home.trustBadges', { returnObjects: true })
  const stats = t('home.heroStats', { returnObjects: true })
  const perks = t('home.perks', { returnObjects: true })

  return (
    <main>
      <SEO page="home" />
      <section className="relative overflow-hidden bg-hero-vignette px-4 py-16 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-px bg-steel-gradient opacity-50" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-heading text-sm font-bold uppercase tracking-[0.24em] text-brand-red">
              {t('home.heroEyebrow')}
            </p>
            <h1 className="mt-5 max-w-4xl font-heading text-5xl font-bold uppercase leading-[0.94] text-brand-white sm:text-7xl lg:text-8xl">
              <span className="steel-text block">{t('home.heroTitle')}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-text">{t('home.heroText')}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/terminanfrage" icon="CalendarCheck">
                {t('actions.requestAppointment')}
              </ButtonLink>
              <ButtonLink href={`tel:${t('site.phone').replaceAll(' ', '')}`} variant="secondary" icon="Phone">
                {t('actions.callNow')}
              </ButtonLink>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-xl"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="absolute inset-0 bg-red-glow blur-2xl" />
            <div className="industrial-panel relative overflow-hidden rounded-lg p-5 shadow-steel">
              <img
                src={logo}
                alt={t('site.name')}
                className="aspect-square w-full rounded-md object-cover"
                loading="eager"
              />
              <div className="mt-5 grid grid-cols-3 gap-2">
                {stats.map((stat) => (
                  <div key={stat.value} className="rounded-md bg-brand-black/80 p-3">
                    <p className="font-heading text-lg font-bold uppercase text-brand-white">{stat.value}</p>
                    <p className="mt-1 text-xs leading-5 text-brand-steel">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-brand-steel/15 bg-brand-charcoal px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((badge) => (
            <div key={badge} className="flex items-center gap-3 text-sm font-semibold text-brand-steelLight">
              <ServiceIcon name="CheckCircle2" className="size-5 text-brand-red" />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader title={t('home.servicesTitle')} text={t('home.servicesText')} />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 6).map((service, index) => (
              <Reveal key={service.id} delay={index * 0.03}>
                <ServiceCard service={service} compact />
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink to="/service" variant="secondary" icon="ArrowRight">
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
                  <h3 className="mt-5 font-heading text-2xl font-bold uppercase text-brand-white">
                    {perk.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-brand-text">{perk.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="industrial-panel rounded-lg p-6 sm:p-8">
            <SectionHeader title={t('home.aboutTitle')} text={t('home.aboutText')} />
            <div className="mt-7">
              <ButtonLink to="/unternehmen" variant="secondary" icon="ArrowRight">
                {t('common.learnMore')}
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal className="industrial-panel rounded-lg p-6 sm:p-8" delay={0.08}>
            <ServiceIcon name="Star" className="size-8 text-brand-red" />
            <blockquote className="mt-5 font-heading text-3xl font-bold uppercase leading-tight text-brand-white sm:text-4xl">
              {t('home.highlightQuote')}
            </blockquote>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-brand-steel">{t('home.highlightAuthor')}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {offers.slice(0, 2).map((offer) => (
                <OfferCard key={offer.title} offer={offer} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <FAQAccordion />

      <section className="bg-hero-vignette px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-4xl font-bold uppercase text-brand-white sm:text-6xl">
            {t('home.finalTitle')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-brand-text">{t('home.finalText')}</p>
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
