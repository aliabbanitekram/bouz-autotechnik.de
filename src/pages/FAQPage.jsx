import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import { useTheme } from '../context/useTheme'
import { ServiceIcon } from '../data/icons'

export default function FAQPage() {
  const { t } = useTranslation()
  const { isDark } = useTheme()
  const items = t('faq.items', { returnObjects: true })
  const [open, setOpen] = useState(0)

  return (
    <main className={`home-page ${isDark ? 'home-page--dark' : 'home-page--light'}`}>
      <SEO page="faq" />
      <section className="home-surface relative overflow-hidden border-b border-brand-black/10 px-4 pb-14 pt-12 sm:px-6 sm:pb-18 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-22">
        <div className="home-grid-line pointer-events-none absolute inset-y-0 left-[22%] w-px" />
        <div className="home-grid-line pointer-events-none absolute inset-y-0 left-[50%] w-px" />
        <div className="home-grid-line pointer-events-none absolute inset-y-0 right-[22%] w-px" />
        <div className="pointer-events-none absolute -left-[190px] top-12 hidden h-28 w-[232px] skew-x-[-20deg] bg-brand-red xl:block" />

        <div className="relative mx-auto max-w-7xl">
          <Reveal className="max-w-5xl">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.28em] text-brand-red sm:text-sm">
              <span className="mr-5 inline-block h-4 w-2 skew-x-[-18deg] bg-brand-red align-middle" />
              {t('faqPage.eyebrow')}
            </p>
            <h1 className="home-heading mt-5 max-w-5xl font-heading text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-7xl">
              {t('faq.title')}
            </h1>
            <p className="home-muted mt-8 max-w-3xl text-sm leading-6 sm:text-base sm:leading-7">
              {t('faqPage.intro')}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="home-surface relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="home-grid-line pointer-events-none absolute inset-y-0 left-[22%] w-px" />
        <div className="home-grid-line pointer-events-none absolute inset-y-0 left-[50%] w-px" />
        <div className="home-grid-line pointer-events-none absolute inset-y-0 right-[22%] w-px" />
        <div className="home-red-accent pointer-events-none absolute -left-[72px] top-14 hidden h-28 w-[232px] skew-x-[-20deg] bg-brand-red xl:block" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:h-fit">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.28em] text-brand-red sm:text-sm">
              <span className="mr-5 inline-block h-4 w-2 skew-x-[-18deg] bg-brand-red align-middle" />
              {t('home.faqEyebrow')}
            </p>
            <h2 className="home-heading mt-5 font-heading text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
              {t('home.faqTitle')}
            </h2>
            <p className="home-muted mt-8 max-w-xl text-sm leading-6 sm:text-base sm:leading-7">
              {t('home.faqText')}
            </p>
            <Link
              to="/kontakt"
              className="home-primary-button focus-ring mt-9 inline-flex min-h-14 w-full max-w-[316px] items-center justify-center gap-4 px-8 py-4 font-heading text-sm font-black uppercase tracking-[0.24em] transition sm:w-[316px] sm:px-10 sm:text-base"
            >
              <span>{t('nav.contact')}</span>
              <ServiceIcon name="ArrowRight" className="size-5" />
            </Link>
          </Reveal>

          <div className="space-y-4">
            {items.map((item, index) => {
              const isOpen = open === index

              return (
                <Reveal key={item.question} delay={Math.min(index * 0.02, 0.16)}>
                  <article
                    className={`home-faq-item overflow-hidden border transition ${
                      isOpen
                        ? 'home-faq-item--open border-brand-red/20 shadow-[0_18px_45px_rgba(11,13,16,0.08)]'
                        : 'home-faq-item--closed border-brand-black/5 hover:bg-brand-black/[0.07]'
                    }`}
                  >
                    <button
                      type="button"
                      className="focus-ring flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7 sm:py-6"
                      onClick={() => setOpen(isOpen ? -1 : index)}
                    >
                      <span className="home-heading font-heading text-lg font-black leading-tight sm:text-xl lg:text-[1.35rem]">
                        {item.question}
                      </span>
                      <ServiceIcon
                        name="ChevronDown"
                        className={`size-5 shrink-0 text-brand-red transition duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {isOpen && (
                      <p className="home-muted px-5 pb-6 text-sm leading-6 sm:px-7 sm:text-base sm:leading-7">
                        {item.answer}
                      </p>
                    )}
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
