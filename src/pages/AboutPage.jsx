import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import meisterBadge from '../assets/logo-kfz-meisterbetrieb-menden.png'
import aboutWorkshop from '../assets/services/diagnostic-service-03.jpg'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import { useTheme } from '../context/useTheme'
import { ServiceIcon } from '../data/icons'

export default function AboutPage() {
  const { t } = useTranslation()
  const { isDark } = useTheme()
  const story = t('aboutPage.story', { returnObjects: true })
  const values = t('aboutPage.values', { returnObjects: true })
  const team = t('aboutPage.team', { returnObjects: true })
  const quality = t('aboutPage.quality', { returnObjects: true })

  return (
    <main className={`home-page ${isDark ? 'home-page--dark' : 'home-page--light'}`}>
      <SEO page="about" />
      <section className="home-surface relative overflow-hidden border-b border-brand-black/10 px-4 pb-14 pt-12 sm:px-6 sm:pb-18 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-22">
        <div className="home-grid-line pointer-events-none absolute inset-y-0 left-[22%] w-px" />
        <div className="home-grid-line pointer-events-none absolute inset-y-0 left-[50%] w-px" />
        <div className="home-grid-line pointer-events-none absolute inset-y-0 right-[22%] w-px" />
        <div className="pointer-events-none absolute -left-[190px] top-12 hidden h-28 w-[232px] skew-x-[-20deg] bg-brand-red xl:block" />

        <div className="relative mx-auto max-w-7xl">
          <Reveal className="max-w-5xl">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.28em] text-brand-red sm:text-sm">
              <span className="mr-5 inline-block h-4 w-2 skew-x-[-18deg] bg-brand-red align-middle" />
              {t('aboutPage.eyebrow')}
            </p>
            <h1 className="home-heading mt-5 max-w-5xl font-heading text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-7xl">
              {t('aboutPage.title')}
            </h1>
            <p className="home-muted mt-8 max-w-3xl text-sm leading-6 sm:text-base sm:leading-7">
              {story[0]}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="home-surface relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="home-grid-line pointer-events-none absolute inset-y-0 left-[22%] w-px" />
        <div className="home-grid-line pointer-events-none absolute inset-y-0 left-[50%] w-px" />
        <div className="home-grid-line pointer-events-none absolute inset-y-0 right-[22%] w-px" />
        <div className="home-red-accent pointer-events-none absolute -left-[70px] top-14 hidden h-[124px] w-[270px] skew-x-[-20deg] bg-brand-red xl:block" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <Reveal className="relative pb-20 sm:pb-24">
            <div className="relative overflow-hidden bg-brand-steelLight shadow-[0_22px_60px_rgba(11,13,16,0.16)]">
              <img
                src={aboutWorkshop}
                alt={t('home.aboutImageAlt')}
                className="h-90 w-full object-cover object-[52%_center] sm:h-[520px] lg:h-[610px]"
                loading="eager"
              />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
              <span className="block rounded-sm bg-brand-white px-7 py-6 shadow-[0_24px_64px_rgba(11,13,16,0.26)] ring-1 ring-brand-black/10 sm:px-9 sm:py-7">
                <img
                  src={meisterBadge}
                  alt="Meisterbetrieb der Kfz-Innung"
                  className="h-36 w-auto sm:h-44 lg:h-48"
                  loading="lazy"
                />
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="font-heading text-xs font-bold uppercase tracking-[0.28em] text-brand-red sm:text-sm">
              <span className="mr-5 inline-block h-4 w-2 skew-x-[-18deg] bg-brand-red align-middle" />
              {t('home.aboutEyebrow')}
            </p>
            <h2 className="home-heading mt-5 font-heading text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
              {t('home.aboutTitle')}
            </h2>
            <div className="home-muted mt-8 space-y-5 text-sm leading-6 sm:text-base sm:leading-7">
              {story.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {values.map((value) => (
                <article key={value.title} className="home-panel border border-brand-black/5 p-5">
                  <h3 className="home-heading font-heading text-xl font-black uppercase">{value.title}</h3>
                  <p className="home-muted mt-2 text-sm leading-6">{value.description}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="home-surface relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="home-grid-line pointer-events-none absolute inset-y-0 left-[22%] w-px" />
        <div className="home-grid-line pointer-events-none absolute inset-y-0 left-[50%] w-px" />
        <div className="home-grid-line pointer-events-none absolute inset-y-0 right-[22%] w-px" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal className="max-w-3xl lg:mx-auto lg:text-center">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.28em] text-brand-red sm:text-sm">
              <span className="mr-5 inline-block h-4 w-2 skew-x-[-18deg] bg-brand-red align-middle" />
              {t('aboutPage.qualityTitle')}
            </p>
            <h2 className="home-heading mt-5 font-heading text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
              {t('common.badge')}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quality.map((item, index) => (
              <Reveal key={item} delay={index * 0.04}>
                <article className="home-panel h-full border border-brand-black/5 p-6">
                  <ServiceIcon name="CheckCircle2" className="size-8 text-brand-red" />
                  <p className="home-heading mt-5 font-heading text-xl font-black uppercase leading-tight">
                    {item}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-surface relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="home-grid-line pointer-events-none absolute inset-y-0 left-[22%] w-px" />
        <div className="home-grid-line pointer-events-none absolute inset-y-0 left-[50%] w-px" />
        <div className="home-grid-line pointer-events-none absolute inset-y-0 right-[22%] w-px" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <p className="font-heading text-xs font-bold uppercase tracking-[0.28em] text-brand-red sm:text-sm">
              <span className="mr-5 inline-block h-4 w-2 skew-x-[-18deg] bg-brand-red align-middle" />
              {t('aboutPage.teamTitle')}
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {team.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.05}>
                <article className="home-panel h-full border border-brand-black/5 p-6">
                  <div className="flex aspect-[4/3] items-center justify-center bg-brand-black text-brand-red">
                    <ServiceIcon name="Users" className="size-12" />
                  </div>
                  <h3 className="home-heading mt-5 font-heading text-xl font-black uppercase">{member.name}</h3>
                  <p className="home-muted mt-2 text-sm leading-6">{member.role}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-surface relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="home-grid-line pointer-events-none absolute inset-y-0 left-[22%] w-px" />
        <div className="home-grid-line pointer-events-none absolute inset-y-0 left-[50%] w-px" />
        <div className="home-grid-line pointer-events-none absolute inset-y-0 right-[22%] w-px" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <h2 className="home-heading font-heading text-3xl font-black uppercase sm:text-4xl">
              {t('aboutPage.galleryTitle')}
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[0, 1, 2, 3].map((item) => (
              <Reveal key={item} delay={item * 0.04}>
                <div className="home-panel flex aspect-[4/3] items-center justify-center border border-brand-black/5">
                  <div className="text-center">
                    <ServiceIcon name="Camera" className="mx-auto size-9 text-brand-red" />
                    <p className="home-heading mt-3 font-heading text-sm font-bold uppercase tracking-wider">
                      {t('common.placeholderImage')}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Link
            to="/kontakt"
            className="home-primary-button focus-ring mt-10 inline-flex min-h-14 w-full max-w-[316px] items-center justify-center gap-4 px-8 py-4 font-heading text-sm font-black uppercase tracking-[0.24em] transition sm:w-[316px] sm:px-10 sm:text-base"
          >
            <span>{t('nav.contact')}</span>
            <ServiceIcon name="ArrowRight" className="size-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
