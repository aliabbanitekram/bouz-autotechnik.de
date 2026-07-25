import { useTranslation } from 'react-i18next'
import ContactForm from '../components/ContactForm'
import GoogleMapsEmbed from '../components/GoogleMapsEmbed'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import { ServiceIcon } from '../data/icons'

export default function ContactPage() {
  const { t } = useTranslation()
  const hours = t('site.hours', { returnObjects: true })

  return (
    <main>
      <SEO page="contact" />
      <section className="bg-hero-vignette px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={t('contactPage.eyebrow')}
            title={t('contactPage.title')}
            text={t('contactPage.intro')}
          />
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="space-y-5">
            <div className="industrial-panel rounded-lg p-6">
              <ServiceIcon name="MapPin" className="size-8 text-brand-red" />
              <address className="mt-5 not-italic text-base leading-8 text-brand-text">
                <span className="block font-semibold text-brand-white">{t('site.address.line1')}</span>
                <span className="block">{t('site.address.line2')}</span>
                <span className="mt-2 block text-sm text-brand-steel">{t('site.address.note')}</span>
              </address>
            </div>
            <div className="industrial-panel rounded-lg p-6">
              <ServiceIcon name="Phone" className="size-8 text-brand-red" />
              <div className="mt-5 grid gap-2 text-brand-text">
                <a className="hover:text-white" href={`tel:${t('site.phone').replaceAll(' ', '')}`}>
                  {t('site.phone')}
                </a>
                <a className="hover:text-white" href={`mailto:${t('site.email')}`}>
                  {t('site.email')}
                </a>
              </div>
            </div>
            <div className="industrial-panel rounded-lg p-6">
              <ServiceIcon name="Clock" className="size-8 text-brand-red" />
              <dl className="mt-5 space-y-3">
                {hours.map((item) => (
                  <div key={item.days} className="flex justify-between gap-4 text-sm">
                    <dt className="text-brand-white">{item.days}</dt>
                    <dd className="text-right text-brand-text">{item.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mb-4 font-heading text-2xl font-bold uppercase text-brand-white sm:text-3xl">
              {t('contactPage.formTitle')}
            </h2>
            <ContactForm type="contact" />
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-charcoal px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-5 font-heading text-2xl font-bold uppercase text-brand-white sm:text-3xl">
            {t('contactPage.mapTitle')}
          </h2>
          <div className="overflow-hidden rounded-lg border border-brand-steel/15">
            <GoogleMapsEmbed />
          </div>
        </div>
      </section>
    </main>
  )
}
