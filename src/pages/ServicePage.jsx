import { useTranslation } from 'react-i18next'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'

const groupOrder = ['diagnose', 'reifen', 'karosserie', 'elektro']

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
        <div className="mx-auto grid max-w-7xl gap-12">
          {groupOrder.map((group) => {
            const groupServices = services.filter((service) => service.group === group)
            return (
              <Reveal key={group} className="scroll-mt-28">
                <h2 className="font-heading text-3xl font-bold uppercase text-brand-white">
                  {t(`serviceGroups.${group}`)}
                </h2>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {groupServices.map((service) => (
                    <div key={service.id} id={service.id} className="scroll-mt-28">
                      <ServiceCard service={service} />
                    </div>
                  ))}
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>
    </main>
  )
}
