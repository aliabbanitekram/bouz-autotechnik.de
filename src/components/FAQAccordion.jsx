import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ButtonLink from './ButtonLink'
import { ServiceIcon } from '../data/icons'

export default function FAQAccordion({
  showTitle = true,
  className = 'bg-brand-charcoal',
  itemIndexes,
  showViewAllLink = false,
  tone = 'dark',
}) {
  const { t } = useTranslation()
  const allItems = t('faq.items', { returnObjects: true })
  const items = itemIndexes ? itemIndexes.map((index) => allItems[index]).filter(Boolean) : allItems
  const [open, setOpen] = useState(0)
  const isLight = tone === 'light'

  return (
    <section className={`${className} px-4 py-16 sm:px-6 lg:px-8`}>
      <div className="mx-auto max-w-4xl">
        {showTitle && (
          <h2
            className={`font-heading text-3xl font-bold uppercase sm:text-5xl ${
              isLight ? 'text-brand-black' : 'text-brand-white'
            }`}
          >
            {t('faq.title')}
          </h2>
        )}
        <div
          className={`mt-8 divide-y overflow-hidden rounded-lg border ${
            isLight ? 'divide-brand-steelDark/12 border-brand-steelDark/15 shadow-steel' : 'divide-brand-steel/15 border-brand-steel/15'
          }`}
        >
          {items.map((item, index) => {
            const isOpen = open === index
            return (
              <div key={item.question} className={isLight ? 'bg-white' : 'bg-brand-black/60'}>
                <button
                  type="button"
                  className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span
                    className={`font-heading text-lg font-semibold uppercase ${
                      isLight ? 'text-brand-black' : 'text-brand-white'
                    }`}
                  >
                    {item.question}
                  </span>
                  <ServiceIcon
                    name="ChevronDown"
                    className={`size-5 shrink-0 text-brand-red transition ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <p className={`px-5 pb-5 text-sm leading-7 ${isLight ? 'text-brand-steelDark' : 'text-brand-text'}`}>
                    {item.answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>
        {showViewAllLink && (
          <div className="mt-8">
            <ButtonLink to="/faq" variant={isLight ? 'dark' : 'secondary'} icon="ArrowRight">
              {t('faq.viewAll')}
            </ButtonLink>
          </div>
        )}
      </div>
    </section>
  )
}
