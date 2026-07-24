import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ServiceIcon } from '../data/icons'
import { getServiceMedia } from '../data/serviceMedia'

export default function ServiceCard({ service, compact = false, tone = 'dark' }) {
  const { t } = useTranslation()
  const media = getServiceMedia(service.id)
  const isLight = tone === 'light'

  return (
    <article
      className={`group overflow-hidden rounded-lg shadow-steel ring-1 transition hover:-translate-y-1 hover:ring-brand-red/55 hover:shadow-red ${
        isLight ? 'bg-white ring-brand-steelDark/15' : 'bg-brand-panel ring-brand-steel/12'
      }`}
    >
      <div className="relative">
        <img
          src={media.image}
          alt={service.title}
          className="aspect-[16/10] w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
          loading={compact ? 'lazy' : 'eager'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 via-transparent to-transparent" />
        <span className="absolute right-5 top-5 flex size-20 items-center justify-center rounded-lg bg-brand-charcoal/95 text-brand-red shadow-xl ring-1 ring-brand-steel/15 sm:size-24">
          <ServiceIcon name={service.icon} className="size-9 sm:size-11" />
        </span>
      </div>
      <div className="flex min-h-60 flex-col justify-between p-6">
        <div>
          <h3 className={`font-heading text-3xl font-bold uppercase ${isLight ? 'text-brand-black' : 'text-brand-white'}`}>
            {service.title}
          </h3>
          {!compact && (
            <p className={`mt-4 text-sm leading-6 ${isLight ? 'text-brand-steelDark' : 'text-brand-text'}`}>
              {service.teaser}
            </p>
          )}
        </div>
        <Link
          to={`/service/${service.id}`}
          className="focus-ring mt-8 inline-flex min-h-12 w-fit items-center gap-3 rounded-md bg-brand-black px-6 py-3 font-heading text-base font-bold uppercase tracking-wider text-brand-white transition hover:bg-brand-red"
        >
          <ServiceIcon name="ExternalLink" className="size-5" />
          <span>{t('common.learnMore')}</span>
        </Link>
      </div>
    </article>
  )
}
