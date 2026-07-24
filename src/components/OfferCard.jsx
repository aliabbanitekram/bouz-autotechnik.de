import { useTranslation } from 'react-i18next'
import ButtonLink from './ButtonLink'

export default function OfferCard({ offer }) {
  const { t } = useTranslation()

  return (
    <article className="industrial-panel flex h-full flex-col rounded-lg p-6">
      <p className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-brand-red">
        {offer.label}
      </p>
      <h3 className="mt-3 font-heading text-3xl font-bold uppercase text-brand-white">
        {offer.title}
      </h3>
      <p className="mt-4 flex items-end gap-2">
        <span className="text-sm uppercase text-brand-steel">{t('common.from')}</span>
        <span className="steel-text font-heading text-5xl font-bold">{offer.price}</span>
        <span className="pb-2 font-heading text-xl text-brand-steelLight">{t('common.euro')}</span>
      </p>
      <p className="mt-4 flex-1 text-sm leading-6 text-brand-text">{offer.description}</p>
      <div className="mt-6">
        <ButtonLink to="/terminanfrage" icon="CalendarCheck">
          {t('actions.requestAppointment')}
        </ButtonLink>
      </div>
    </article>
  )
}
