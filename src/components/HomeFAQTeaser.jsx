import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ButtonLink from './ButtonLink'
import { ServiceIcon } from '../data/icons'

export default function HomeFAQTeaser({ itemIndexes }) {
  const { t } = useTranslation()
  const allItems = t('faq.items', { returnObjects: true })
  const items = itemIndexes.map((index) => allItems[index]).filter(Boolean)
  const [open, setOpen] = useState(0)

  return (
    <section className="bg-brand-white px-4 py-16 text-brand-black sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-brand-red">
            {t('home.faqEyebrow')}
          </p>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-brand-black sm:text-4xl">
            {t('home.faqTitle')}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-8 text-brand-steelDark">
            {t('home.faqText')}
          </p>
        </div>

        <div className="space-y-3">
          {items.map((item, index) => {
            const isOpen = open === index

            return (
              <article
                key={item.question}
                className="overflow-hidden rounded-2xl border border-brand-steelDark/10 bg-brand-black/[0.03] shadow-sm transition hover:border-brand-red/35"
              >
                <button
                  type="button"
                  className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span className="text-base font-bold leading-snug text-brand-black sm:text-lg">
                    {item.question}
                  </span>
                  <ServiceIcon
                    name="ChevronDown"
                    className={`size-5 shrink-0 text-brand-red transition ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <p className="px-5 pb-5 text-sm leading-7 text-brand-steelDark sm:text-base">
                    {item.answer}
                  </p>
                )}
              </article>
            )
          })}
          <div className="pt-3">
            <ButtonLink to="/faq" icon="ArrowRight" fullWidth>
              {t('home.faqPrimary')}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
