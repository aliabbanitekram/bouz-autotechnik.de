import { Navigate, Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ButtonLink from '../components/ButtonLink'
import SEO from '../components/SEO'
import { WhatsAppIcon } from '../components/WhatsAppContact'
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
  const whatsappNumber = t('site.phone').replace(/\D/g, '')
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t('serviceDetail.whatsappMessage', { service: service.title }))}`

  return (
    <main>
      <SEO page="service" />
      <section className="bg-hero-vignette px-4 pt-6 pb-4 sm:px-6 sm:pb-6 lg:px-8 lg:py-10">
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
                <h1 className="steel-text font-heading text-3xl font-bold uppercase leading-tight">
                  {service.title}
                </h1>
                <p className="mt-5 text-sm leading-6 text-brand-white sm:text-base sm:leading-7">{narrative.lead}</p>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-3">
              <a
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-brand-whatsapp px-5 py-3 font-heading text-sm font-bold uppercase tracking-wider text-brand-black shadow-lg shadow-black/20 transition hover:bg-brand-whatsappHover"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span>{t('home.whatsappCta')}</span>
                <WhatsAppIcon className="size-5" />
              </a>
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
              <h1 className="steel-text mt-4 font-heading text-4xl font-bold uppercase leading-tight lg:text-6xl xl:text-7xl">
                {service.title}
              </h1>
              <p className="mt-6 text-sm leading-6 text-brand-text sm:text-base sm:leading-7">{narrative.lead}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  className="focus-ring inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-brand-whatsapp px-5 py-3 font-heading text-sm font-bold uppercase tracking-wider text-brand-black shadow-lg shadow-black/20 transition hover:bg-brand-whatsappHover"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{t('home.whatsappCta')}</span>
                  <WhatsAppIcon className="size-5" />
                </a>
                <ButtonLink href={`tel:${t('site.phone').replaceAll(' ', '')}`} variant="secondary" icon="Phone">
                  {t('actions.callNow')}
                </ButtonLink>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border border-brand-steel/15 bg-brand-panel shadow-steel">
              <img
                src={media.image}
                alt={service.title}
                className="aspect-16/11 w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {trust.map((item, index) => (
              <div
                key={item.title}
                className="industrial-panel grid grid-cols-[20%_1fr] items-start rounded-lg p-4 lg:block"
              >
                <ServiceIcon
                  name={['Gauge', 'ShieldCheck', 'Wrench', 'Camera'][index]}
                  className="mt-1 h-auto w-[82%] max-w-14 text-brand-red lg:mt-0 lg:size-6 lg:w-6 lg:max-w-none"
                />
                <div className="min-w-0 pl-3 sm:pl-2 lg:pl-0">
                  <h2 className="font-heading text-lg font-bold uppercase text-brand-white lg:mt-3">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-brand-text">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pt-8 pb-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.85fr]">
          <article className="industrial-panel rounded-lg p-6 sm:p-8">
            <h2 className="font-heading text-2xl font-bold uppercase leading-tight text-brand-white sm:text-4xl">
              {detail.problemTitle}
            </h2>
            <p className="mt-5 text-sm leading-6 text-brand-text sm:text-base sm:leading-7">{detail.problemIntro}</p>
            <p className="mt-5 text-sm leading-6 text-brand-text sm:text-base sm:leading-7">{service.description}</p>
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
            <blockquote className="mt-8 border-l-4 border-brand-red pl-5 font-heading text-xl font-bold uppercase leading-tight text-brand-white sm:text-2xl">
              "{detail.quote}"
            </blockquote>
          </article>

          <aside className="industrial-panel rounded-lg p-6 sm:p-8">
            <h2 className="font-heading text-2xl font-bold uppercase text-brand-white sm:text-3xl">
              {t('serviceDetail.includes')}
            </h2>
            <ul className="mt-6 grid gap-4">
              {narrative.bullets.map((item) => (
                <li key={item} className="flex gap-3 text-brand-text">
                  <ServiceIcon name="CheckCircle2" className="mt-0.5 size-5 shrink-0 text-brand-red" />
                  <span className="text-sm leading-6 sm:text-base">{item}</span>
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
            <h2 className="font-heading text-2xl font-bold uppercase leading-tight text-brand-white sm:text-4xl">
              {t('serviceDetail.signsTitle')}
            </h2>
            <p className="mt-4 text-sm leading-6 text-brand-text sm:text-base sm:leading-7">{t('serviceDetail.signsIntro')}</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {detail.signs.map((sign, index) => (
              <article key={sign.title} className="industrial-panel rounded-lg p-6">
                <p className="steel-text font-heading text-4xl font-bold sm:text-5xl">{index + 1}</p>
                <h3 className="mt-5 font-heading text-xl font-bold uppercase text-brand-white">
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
          <article className="steel-hero-light rounded-lg border border-brand-black/10 p-6 text-brand-black shadow-steel sm:p-8">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.24em] text-brand-red">
              {t('serviceDetail.whyBouz')}
            </p>
            <h2 className="steel-text-dark mt-4 font-heading text-2xl font-bold uppercase leading-tight sm:text-4xl">
              {detail.localTitle}
            </h2>
            <p className="mt-5 text-sm leading-6 text-brand-steelDark sm:text-base sm:leading-7">{detail.localText}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {trust.map((item) => (
                <div key={item.title} className="rounded-md border border-brand-black/10 bg-brand-steelLight/75 p-4 shadow-sm">
                  <h3 className="font-heading text-lg font-bold uppercase text-brand-black">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-brand-steelDark">{item.description}</p>
                </div>
              ))}
            </div>
          </article>
          <article className="bg-hero-vignette rounded-lg border border-brand-steel/15 p-6 sm:p-8">
            <ServiceIcon name={service.icon} className="size-10 text-brand-red" />
            <h2 className="mt-5 font-heading text-3xl font-bold uppercase leading-tight text-brand-white sm:text-4xl">
              {detail.readyTitle}
            </h2>
            <p className="mt-4 text-sm leading-6 text-brand-text sm:text-base sm:leading-7">{detail.readyText}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-brand-whatsapp px-5 py-3 font-heading text-sm font-bold uppercase tracking-wider text-brand-black shadow-lg shadow-black/20 transition hover:bg-brand-whatsappHover"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span>{t('home.whatsappCta')}</span>
                <WhatsAppIcon className="size-5" />
              </a>
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
