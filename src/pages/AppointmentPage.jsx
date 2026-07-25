import { useTranslation } from 'react-i18next'
import ContactForm from '../components/ContactForm'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import { ServiceIcon } from '../data/icons'

export default function AppointmentPage() {
  const { t } = useTranslation()
  const hours = t('site.hours', { returnObjects: true })

  return (
    <main>
      <SEO page="appointment" />
      <section className="bg-hero-vignette px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={t('appointmentPage.eyebrow')}
            title={t('appointmentPage.title')}
            text={t('appointmentPage.intro')}
          />
        </div>
      </section>
      <section className="bg-brand-steelLight px-4 py-16 text-brand-black sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <ContactForm type="appointment" />
          </Reveal>
          <Reveal className="space-y-5" delay={0.06}>
            <aside className="rounded-lg border border-brand-black/10 bg-brand-white p-6 shadow-steel">
              <ServiceIcon name="Clock" className="size-8 text-brand-red" />
              <h2 className="mt-5 font-heading text-2xl font-bold uppercase text-brand-black">
                {t('appointmentPage.hoursTitle')}
              </h2>
              <dl className="mt-5 space-y-4">
                {hours.map((item) => (
                  <div key={item.days} className="border-b border-brand-black/10 pb-4 last:border-0 last:pb-0">
                    <dt className="font-semibold text-brand-black">{item.days}</dt>
                    <dd className="mt-1 text-brand-steelDark">{item.time}</dd>
                  </div>
                ))}
              </dl>
            </aside>
            <aside className="rounded-lg border border-brand-red/15 bg-brand-white p-6 shadow-steel">
              <ServiceIcon name="MessageSquare" className="size-8 text-brand-red" />
              <h2 className="mt-5 font-heading text-xl font-bold uppercase text-brand-black">
                {t('appointmentPage.noteTitle')}
              </h2>
              <p className="mt-3 text-sm leading-6 text-brand-steelDark">{t('appointmentPage.noteText')}</p>
            </aside>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
