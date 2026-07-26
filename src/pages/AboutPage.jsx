import { useTranslation } from 'react-i18next'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import { ServiceIcon } from '../data/icons'

export default function AboutPage() {
  const { t } = useTranslation()
  const story = t('aboutPage.story', { returnObjects: true })
  const values = t('aboutPage.values', { returnObjects: true })
  const team = t('aboutPage.team', { returnObjects: true })
  const quality = t('aboutPage.quality', { returnObjects: true })

  return (
    <main>
      <SEO page="about" />
      <section className="bg-hero-vignette px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={t('aboutPage.eyebrow')}
            title={t('aboutPage.title')}
            text={story[0]}
          />
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr]">
          <Reveal className="industrial-panel rounded-lg p-6 sm:p-8">
            <div className="space-y-4 text-sm leading-6 text-brand-text sm:text-base sm:leading-7">
              {story.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {values.map((value) => (
                <article key={value.title} className="rounded-md bg-brand-black p-4">
                  <h3 className="font-heading text-xl font-bold uppercase text-brand-white">{value.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-brand-text">{value.description}</p>
                </article>
              ))}
            </div>
          </Reveal>
          <Reveal className="industrial-panel rounded-lg p-6 sm:p-8" delay={0.06}>
            <ServiceIcon name="BadgeCheck" className="size-9 text-brand-red" />
            <h2 className="mt-5 font-heading text-2xl font-bold uppercase text-brand-white sm:text-3xl">
              {t('aboutPage.qualityTitle')}
            </h2>
            <ul className="mt-5 grid gap-3">
              {quality.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm leading-6 text-brand-text sm:text-base">
                  <ServiceIcon name="CheckCircle2" className="size-5 text-brand-red" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-charcoal px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold uppercase text-brand-white sm:text-4xl">
              {t('aboutPage.teamTitle')}
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {team.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.05}>
                <article className="industrial-panel rounded-lg p-6">
                  <div className="flex aspect-[4/3] items-center justify-center rounded-md bg-brand-black text-brand-steel">
                    <ServiceIcon name="Users" className="size-12" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-bold uppercase text-brand-white">{member.name}</h3>
                  <p className="mt-2 text-sm text-brand-text">{member.role}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold uppercase text-brand-white sm:text-4xl">
              {t('aboutPage.galleryTitle')}
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[0, 1, 2, 3].map((item) => (
              <Reveal key={item} delay={item * 0.04}>
                <div className="industrial-panel flex aspect-[4/3] items-center justify-center rounded-lg">
                  <div className="text-center">
                    <ServiceIcon name="Camera" className="mx-auto size-9 text-brand-red" />
                    <p className="mt-3 font-heading text-sm font-bold uppercase tracking-wider text-brand-steelLight">
                      {t('common.placeholderImage')}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
