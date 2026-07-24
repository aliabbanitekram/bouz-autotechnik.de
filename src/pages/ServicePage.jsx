import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import Reveal from '../components/Reveal'

export default function ServicePage() {
  const { t } = useTranslation()
  const services = t('services', { returnObjects: true })

  return (
    <main>
      <SEO page="service" />
      <section className="bg-hero-vignette px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={t('servicePage.eyebrow')}
            title={t('servicePage.title')}
            text={t('servicePage.intro')}
          />
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.03}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  )
}
