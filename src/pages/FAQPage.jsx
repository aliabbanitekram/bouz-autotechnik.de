import { useTranslation } from 'react-i18next'
import FAQAccordion from '../components/FAQAccordion'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'

export default function FAQPage() {
  const { t } = useTranslation()

  return (
    <main>
      <SEO page="faq" />
      <section className="bg-hero-vignette px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={t('faqPage.eyebrow')}
            title={t('faq.title')}
            text={t('faqPage.intro')}
          />
        </div>
      </section>
      <FAQAccordion showTitle={false} className="bg-brand-black" />
    </main>
  )
}
