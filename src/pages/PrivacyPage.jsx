import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'

export default function PrivacyPage() {
  const { t } = useTranslation()
  const sections = t('legal.privacySections', { returnObjects: true })

  return (
    <main className="bg-hero-vignette px-4 py-16 sm:px-6 lg:px-8">
      <SEO page="privacy" />
      <section className="mx-auto max-w-4xl">
        <p className="font-heading text-sm font-bold uppercase tracking-[0.22em] text-brand-red">
          {t('legal.placeholder')}
        </p>
        <h1 className="mt-4 font-heading text-4xl font-bold uppercase text-brand-white sm:text-5xl">
          {t('legal.privacyTitle')}
        </h1>
        <div className="industrial-panel mt-8 rounded-lg p-6">
          <div className="space-y-4 text-brand-text">
            {sections.map((section) => (
              <p key={section}>{section}</p>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
