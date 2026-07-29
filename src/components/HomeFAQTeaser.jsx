import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ButtonLink from './ButtonLink'
import { ServiceIcon } from '../data/icons'

export default function HomeFAQTeaser({ itemIndexes, disableNavigation = false }) {
  const { t } = useTranslation()
  const allItems = t('faq.items', { returnObjects: true })
  const items = itemIndexes.map((index) => allItems[index]).filter(Boolean)
  const [open, setOpen] = useState(0)

  return (
    <section className="relative overflow-hidden bg-brand-white px-4 py-16 text-brand-black sm:px-6 sm:py-20 lg:px-8">
      <div className="pointer-events-none absolute inset-y-0 left-[22%] w-px bg-brand-black/8" />
      <div className="pointer-events-none absolute inset-y-0 left-[50%] w-px bg-brand-black/8" />
      <div className="pointer-events-none absolute inset-y-0 right-[22%] w-px bg-brand-black/8" />
      <div className="pointer-events-none absolute -left-[72px] top-14 hidden h-28 w-[232px] skew-x-[-20deg] bg-brand-red xl:block" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl lg:mx-auto lg:text-center">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.28em] text-brand-red sm:text-sm">
            <span className="mr-5 inline-block h-4 w-2 skew-x-[-18deg] bg-brand-red align-middle" />
            {t('home.faqEyebrow')}
          </p>
          <h2 className="mt-5 font-heading text-4xl font-black leading-tight uppercase text-brand-black sm:text-5xl lg:text-6xl">
            {t('home.faqTitle')}
          </h2>
          <p className="mt-8 max-w-3xl text-sm leading-6 text-brand-steelDark sm:text-base sm:leading-7 lg:mx-auto">
            {t('home.faqText')}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl space-y-4 sm:mt-12">
          {items.map((item, index) => {
            const isOpen = open === index

            return (
              <article
                key={item.question}
                className={`overflow-hidden border transition ${
                  isOpen
                    ? 'border-brand-red/20 bg-brand-white shadow-[0_18px_45px_rgba(11,13,16,0.08)]'
                    : 'border-brand-black/5 bg-brand-black/[0.045] hover:bg-brand-black/[0.07]'
                }`}
              >
                <button
                  type="button"
                  className="focus-ring flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7 sm:py-6"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span className="font-heading text-xl font-black leading-tight text-brand-black sm:text-2xl lg:text-[1.45rem]">
                    {item.question}
                  </span>
                  <ServiceIcon
                    name="ChevronDown"
                    className={`size-5 shrink-0 text-brand-red transition duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <p className="px-5 pb-6 text-sm leading-6 text-brand-steelDark sm:px-7 sm:text-base sm:leading-7">
                    {item.answer}
                  </p>
                )}
              </article>
            )
          })}
          <div className="pt-3">
            {disableNavigation ? (
              <button
                type="button"
                className="focus-ring inline-flex min-h-14 w-full max-w-[316px] items-center justify-center gap-4 bg-brand-black px-8 py-4 font-heading text-sm font-black uppercase tracking-[0.24em] text-brand-white transition hover:bg-brand-red sm:w-[316px] sm:px-10 sm:text-base"
              >
                <span>{t('home.faqPrimary')}</span>
                <ServiceIcon name="ArrowRight" className="size-5" />
              </button>
            ) : (
              <ButtonLink to="/faq" icon="ArrowRight">
                {t('home.faqPrimary')}
              </ButtonLink>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
