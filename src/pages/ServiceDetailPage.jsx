import { Navigate, Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ButtonLink from '../components/ButtonLink'
import SEO from '../components/SEO'
import { ServiceIcon } from '../data/icons'
import { getServiceDetailContent } from '../data/serviceDetailContent'
import { getServiceMedia } from '../data/serviceMedia'
import { getServiceNarrative } from '../data/serviceNarratives'

export default function ServiceDetailPage() {
  const { serviceId } = useParams()
  const { t, i18n } = useTranslation()
  const services = t('services', { returnObjects: true })
  const service = services.find((item) => item.id === serviceId)

  if (!service) return <Navigate to="/service" replace />

  const media = getServiceMedia(service.id)
  const narrative = getServiceNarrative(i18n.language, service.id)
  const detail = getServiceDetailContent(i18n.language, service.id)
  const trust = t('serviceDetail.trust', { returnObjects: true })

  return (
    <main>
      <SEO page="service" />
      <section className="bg-hero-vignette px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/service"
            className="focus-ring inline-flex items-center gap-2 rounded-md font-heading text-sm font-bold uppercase tracking-wider text-brand-steelLight transition hover:text-brand-red"
          >
            <ServiceIcon name="ArrowRight" className="size-4 rotate-180" />
            {t('nav.service')}
          </Link>

          <div className="mt-5 lg:hidden">
            <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-brand-steel/15 bg-brand-panel shadow-steel">
              <img
                src={media.image}
                alt={service.title}
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/55 to-brand-black/10" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h1 className="font-heading text-4xl font-bold uppercase leading-none text-brand-white">
                  {service.title}
                </h1>
                <p className="mt-5 text-lg leading-7 text-brand-white">{narrative.lead}</p>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-3">
              <ButtonLink to="/terminanfrage" icon="CalendarCheck">
                {t('actions.requestAppointment')}
              </ButtonLink>
              <ButtonLink href={`tel:${t('site.phone').replaceAll(' ', '')}`} variant="secondary" icon="Phone">
                {t('actions.callNow')}
              </ButtonLink>
            </div>
          </div>

          <div className="mt-8 hidden items-center gap-10 lg:grid lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="flex size-16 items-center justify-center rounded-lg bg-brand-red/12 text-brand-red ring-1 ring-brand-red/25">
                <ServiceIcon name={service.icon} className="size-8" />
              </div>
              <p className="mt-6 font-heading text-sm font-bold uppercase tracking-[0.24em] text-brand-red">
                {t('servicePage.eyebrow')}
              </p>
              <h1 className="mt-4 font-heading text-5xl font-bold uppercase leading-tight text-brand-white sm:text-7xl">
                {service.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-brand-text">{narrative.lead}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink to="/terminanfrage" icon="CalendarCheck">
                  {t('actions.requestAppointment')}
                </ButtonLink>
                <ButtonLink href={`tel:${t('site.phone').replaceAll(' ', '')}`} variant="secondary" icon="Phone">
                  {t('actions.callNow')}
                </ButtonLink>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border border-brand-steel/15 bg-brand-panel shadow-steel">
              <img
                src={media.image}
                alt={service.title}
                className="aspect-[16/11] w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {trust.map((item, index) => (
              <div key={item.title} className="industrial-panel rounded-lg p-4">
                <ServiceIcon
                  name={['SearchCheck', 'CheckCircle2', 'Settings', 'FileCheck2'][index]}
                  className="size-6 text-brand-red"
                />
                <h2 className="mt-3 font-heading text-lg font-bold uppercase text-brand-white">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-brand-text">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.85fr]">
          <article className="industrial-panel rounded-lg p-6 sm:p-8">
            <h2 className="font-heading text-3xl font-bold uppercase text-brand-white sm:text-5xl">
              {detail.problemTitle}
            </h2>
            <p className="mt-5 text-base leading-8 text-brand-text">{detail.problemIntro}</p>
            <p className="mt-5 text-base leading-8 text-brand-text">{service.description}</p>
            <div className="mt-8">
              <h3 className="font-heading text-xl font-bold uppercase text-brand-white">
                {t('serviceDetail.serviceScope')}
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {detail.serviceItems.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-brand-steel/20 bg-brand-black px-4 py-2 text-sm font-semibold text-brand-steelLight"
                  >
                    {item}
                  </span>
                ))}
                <span className="rounded-md border border-brand-red/25 bg-brand-red/12 px-4 py-2 text-sm font-semibold text-brand-white">
                  {t('serviceDetail.andMore')}
                </span>
              </div>
            </div>
            <blockquote className="mt-8 border-l-4 border-brand-red pl-5 font-heading text-2xl font-bold uppercase leading-tight text-brand-white">
              "{detail.quote}"
            </blockquote>
          </article>

          <aside className="industrial-panel rounded-lg p-6 sm:p-8">
            <h2 className="font-heading text-3xl font-bold uppercase text-brand-white">
              {t('serviceDetail.includes')}
            </h2>
            <ul className="mt-6 grid gap-4">
              {narrative.bullets.map((item) => (
                <li key={item} className="flex gap-3 text-brand-text">
                  <ServiceIcon name="CheckCircle2" className="mt-0.5 size-5 shrink-0 text-brand-red" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-brand-steel/15 pt-6">
              <p className="text-sm leading-6 text-brand-steelLight">{t('serviceDetail.note')}</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-brand-charcoal px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl font-bold uppercase text-brand-white sm:text-5xl">
              {t('serviceDetail.signsTitle')}
            </h2>
            <p className="mt-4 text-base leading-7 text-brand-text">{t('serviceDetail.signsIntro')}</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {detail.signs.map((sign, index) => (
              <article key={sign.title} className="industrial-panel rounded-lg p-6">
                <p className="steel-text font-heading text-5xl font-bold">{index + 1}</p>
                <h3 className="mt-5 font-heading text-2xl font-bold uppercase text-brand-white">
                  {sign.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-brand-text">{sign.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="industrial-panel rounded-lg p-6 sm:p-8">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.24em] text-brand-red">
              {t('serviceDetail.whyBouz')}
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold uppercase text-brand-white sm:text-5xl">
              {detail.localTitle}
            </h2>
            <p className="mt-5 text-base leading-8 text-brand-text">{detail.localText}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {trust.map((item) => (
                <div key={item.title} className="rounded-md bg-brand-black p-4">
                  <h3 className="font-heading text-lg font-bold uppercase text-brand-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-brand-text">{item.description}</p>
                </div>
              ))}
            </div>
          </article>
          <article className="bg-hero-vignette rounded-lg border border-brand-steel/15 p-6 sm:p-8">
            <ServiceIcon name={service.icon} className="size-10 text-brand-red" />
            <h2 className="mt-5 font-heading text-4xl font-bold uppercase text-brand-white sm:text-5xl">
              {detail.readyTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-brand-text">{detail.readyText}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/terminanfrage" icon="CalendarCheck">
                {t('serviceDetail.readyButton')}
              </ButtonLink>
              <ButtonLink href={`tel:${t('site.phone').replaceAll(' ', '')}`} variant="secondary" icon="Phone">
                {t('actions.callNow')}
              </ButtonLink>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
