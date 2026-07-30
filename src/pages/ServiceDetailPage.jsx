import { Navigate, Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'
import { WhatsAppIcon } from '../components/WhatsAppContact'
import { useTheme } from '../context/useTheme'
import { ServiceIcon } from '../data/icons'
import { getServiceDetailContent } from '../data/serviceDetailContent'
import { getServiceMedia } from '../data/serviceMedia'
import { getServiceNarrative } from '../data/serviceNarratives'

function GridLines() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="home-grid-line absolute inset-y-0 left-[22%] w-px" />
      <span className="home-grid-line absolute inset-y-0 left-1/2 w-px" />
      <span className="home-grid-line absolute inset-y-0 right-[22%] w-px" />
    </div>
  )
}

function SectionLabel({ children }) {
  return (
    <p className="font-heading text-sm font-black uppercase tracking-[0.24em] text-brand-red">
      <span className="mr-5 inline-block h-4 w-2 skew-x-[-18deg] bg-brand-red align-middle" />
      {children}
    </p>
  )
}

function DarkButton({ children, href, icon = 'ArrowRight', className = '', external = false }) {
  const props = external ? { target: '_blank', rel: 'noreferrer' } : {}
  const buttonClass = icon === 'WhatsApp' ? 'service-whatsapp-button' : 'home-primary-button'

  return (
    <a
      className={`${buttonClass} focus-ring inline-flex min-h-14 w-full max-w-[316px] items-center justify-center gap-3 px-6 py-4 font-heading text-sm font-black uppercase tracking-[0.08em] transition sm:w-[316px] sm:gap-4 sm:px-10 sm:text-base sm:tracking-[0.14em] ${className}`}
      href={href}
      {...props}
    >
      <span className="whitespace-nowrap">{children}</span>
      {icon === 'WhatsApp' ? <WhatsAppIcon className="size-5" /> : <ServiceIcon name={icon} className="size-5" />}
    </a>
  )
}

export default function ServiceDetailPage() {
  const { serviceId } = useParams()
  const { t, i18n } = useTranslation()
  const { isDark } = useTheme()
  const services = t('services', { returnObjects: true })
  const serviceGroups = t('serviceGroups', { returnObjects: true })
  const service = services.find((item) => item.id === serviceId)

  if (!service) return <Navigate to="/service" replace />

  const media = getServiceMedia(service.id)
  const narrative = getServiceNarrative(i18n.language, service.id)
  const detail = getServiceDetailContent(i18n.language, service.id)
  // const trust = t('serviceDetail.trust', { returnObjects: true })
  const phone = t('site.phone')
  const telHref = `tel:${phone.replace(/\s/g, '')}`
  const whatsappNumber = phone.replace(/\D/g, '')
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    t('serviceDetail.whatsappMessage', { service: service.title }),
  )}`

  return (
    <main className={`home-page ${isDark ? 'home-page--dark' : 'home-page--light'}`}>
      <SEO page="service" />

      <section className="home-surface relative overflow-hidden border-b border-brand-black/10 px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <GridLines />
        <div className="relative mx-auto max-w-7xl">
          <Link
            to="/service"
            className="home-text-link focus-ring inline-flex items-center gap-3 font-heading text-sm font-black uppercase tracking-[0.18em] transition hover:text-brand-red"
          >
            <ServiceIcon name="ArrowRight" className="size-4 rotate-180" />
            {t('nav.service')}
          </Link>

          <div className="service-detail-hero-grid mt-8 gap-8 lg:items-end">
            <div className="max-w-3xl">
              <SectionLabel>{serviceGroups[service.group] || t('servicePage.eyebrow')}</SectionLabel>
              <h1 className="home-heading mt-6 font-heading text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
                {service.title}
              </h1>
              <p className="home-muted mt-6 max-w-2xl text-sm leading-6 sm:text-base sm:leading-7">
                {narrative.lead}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <DarkButton href={whatsappUrl} icon="WhatsApp" external className="bg-brand-whatsapp text-brand-black hover:bg-brand-whatsappHover">
                  {t('home.whatsappCta')}
                </DarkButton>
                <DarkButton href={telHref} icon="Phone">
                  {t('actions.callNow')}
                </DarkButton>
              </div>
            </div>

            <div className="relative overflow-hidden bg-brand-black shadow-[0_30px_80px_rgba(11,13,16,0.18)]">
              <img
                src={media.image}
                alt={service.title}
                className="aspect-[16/11] w-full object-cover lg:aspect-[16/10]"
                loading="eager"
              />
              <div className="absolute left-0 top-0 flex size-20 items-center justify-center bg-brand-red text-brand-white sm:size-24">
                <ServiceIcon name={service.icon} className="size-9 sm:size-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-surface relative overflow-hidden px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <GridLines />
        <div className="relative mx-auto max-w-7xl">
          <article>
            <SectionLabel>{t('serviceDetail.serviceScope')}</SectionLabel>
            <h2 className="home-heading mt-6 font-heading text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
              {detail.problemTitle}
            </h2>
            <div className="home-muted mt-7 max-w-3xl space-y-5 text-sm leading-6 sm:text-base sm:leading-7">
              <p>{detail.problemIntro}</p>
              <p>{narrative.body}</p>
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {detail.serviceItems.map((item) => (
                <div key={item} className="home-panel flex min-h-14 items-center gap-4 px-5 py-4">
                  <ServiceIcon name="Check" className="size-5 shrink-0 text-brand-red" />
                  <span className="home-muted font-semibold">{item}</span>
                </div>
              ))}
              <div className="flex min-h-14 items-center gap-4 bg-brand-red px-5 py-4 text-brand-white">
                <ServiceIcon name="Check" className="size-5 shrink-0" />
                <span className="font-semibold">{t('serviceDetail.andMore')}</span>
              </div>
            </div>
          </article>

          {/* <aside className="bg-brand-black p-6 text-brand-white shadow-[0_28px_70px_rgba(11,13,16,0.18)] sm:p-8 lg:sticky lg:top-28">
            <SectionLabel>{t('serviceDetail.whyBouz')}</SectionLabel>
            <h2 className="mt-6 font-heading text-3xl font-black uppercase leading-tight text-brand-white sm:text-4xl">
              {detail.localTitle}
            </h2>
            <p className="mt-5 text-sm leading-6 text-brand-text sm:text-base sm:leading-7">{detail.localText}</p>
            <div className="mt-7 grid gap-3">
              {trust.map((item, index) => (
                <div key={item.title} className="grid grid-cols-[44px_1fr] gap-4 border border-brand-steel/15 bg-brand-white/[0.06] p-4">
                  <ServiceIcon
                    name={['Gauge', 'ShieldCheck', 'Wrench', 'Camera'][index]}
                    className="size-8 text-brand-red"
                  />
                  <div>
                    <h3 className="font-heading text-lg font-black uppercase text-brand-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-brand-text">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside> */}
        </div>
      </section>

      <section className="home-surface relative overflow-hidden px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <GridLines />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <SectionLabel>{t('servicePage.eyebrow')}</SectionLabel>
            <h2 className="home-heading mt-6 font-heading text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
              {t('serviceDetail.signsTitle')}
            </h2>
            <p className="home-muted mt-6 text-sm leading-6 sm:text-base sm:leading-7">
              {t('serviceDetail.signsIntro')}
            </p>
          </div>

          <div className="service-signs-grid mt-10 grid gap-px overflow-hidden border md:grid-cols-2 xl:grid-cols-4">
            {detail.signs.map((sign, index) => (
              <article key={sign.title} className="home-panel p-6 sm:p-8">
                <p className="font-heading text-5xl font-black text-brand-red">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="home-heading mt-6 font-heading text-2xl font-black uppercase leading-tight">{sign.title}</h3>
                <p className="home-muted mt-4 text-sm leading-6">{sign.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-surface relative overflow-hidden px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <GridLines />
        <div className="service-detail-cta-grid relative mx-auto max-w-7xl gap-8 bg-brand-black p-7 text-brand-white sm:p-10 lg:items-center">
          <div>
            <SectionLabel>{t('actions.contact')}</SectionLabel>
            <h2 className="mt-6 font-heading text-4xl font-black uppercase leading-tight text-brand-white sm:text-5xl lg:text-6xl">
              {detail.readyTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-brand-text sm:text-base sm:leading-7">{detail.readyText}</p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <DarkButton href={whatsappUrl} icon="WhatsApp" external className="bg-brand-whatsapp text-brand-black hover:bg-brand-whatsappHover">
              {t('home.whatsappCta')}
            </DarkButton>
            <DarkButton href={telHref} icon="Phone" className="border border-brand-white/20">
              {t('actions.callNow')}
            </DarkButton>
          </div>
        </div>
      </section>
    </main>
  )
}
