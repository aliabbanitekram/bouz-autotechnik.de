import { useTranslation } from 'react-i18next'
import ButtonLink from '../components/ButtonLink'
import OfferCard from '../components/OfferCard'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'

export default function OffersPage() {
  const { t } = useTranslation()
  const offers = t('offers', { returnObjects: true })

  return (
    <main>
      <SEO page="offers" />
      <section className="bg-hero-vignette px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={t('offersPage.eyebrow')}
            title={t('offersPage.title')}
            text={t('offersPage.intro')}
          />
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {offers.map((offer, index) => (
            <Reveal key={offer.title} delay={index * 0.04}>
              <OfferCard offer={offer} />
            </Reveal>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-7xl">
          <ButtonLink to="/terminanfrage" icon="CalendarCheck">
            {t('actions.requestAppointment')}
          </ButtonLink>
        </div>
      </section>
    </main>
  )
}
