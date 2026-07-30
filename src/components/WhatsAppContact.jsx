import { useTranslation } from 'react-i18next'
import Reveal from './Reveal'

export function WhatsAppIcon({ className = 'size-6' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M6.25 25.72 7.6 20.8A10.72 10.72 0 1 1 11.78 25l-5.53.72Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
      />
      <path
        d="M12.15 10.9c.24-.15.6-.2.86.06l1.14 1.4c.24.3.23.72-.03 1l-.6.66c-.18.2-.2.5-.05.72.54.82 1.2 1.56 1.98 2.2.76.62 1.58 1.12 2.48 1.49.25.1.53.04.7-.16l.72-.84c.25-.3.68-.38 1.02-.18l1.6.95c.31.18.44.56.31.9-.24.67-.75 1.24-1.41 1.56-.72.35-1.63.35-2.69.05a12.29 12.29 0 0 1-4.5-2.46 12.7 12.7 0 0 1-3.02-3.77c-.48-.93-.7-1.77-.62-2.47.08-.7.47-1.28 1.1-1.64l1.01-.47Z"
        fill="currentColor"
      />
    </svg>
  )
}

function WhatsAppContent({ layout = 'row', disabled = false }) {
  const { t } = useTranslation()
  const whatsappNumber = t('site.phone').replace(/\D/g, '')
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t('home.whatsappMessage'))}`
  const isRow = layout === 'row'

  return (
    <>
      <div className={`flex size-18 items-center justify-center rounded-full border border-brand-whatsapp/45 bg-brand-whatsapp/10 text-brand-whatsapp ${isRow ? 'mx-auto md:mx-0' : 'mx-auto'}`}>
        <WhatsAppIcon className="size-10" />
      </div>
      <div>
        <p className="font-heading text-xs font-bold uppercase tracking-[0.24em] text-brand-whatsapp sm:text-sm">
          {t('home.whatsappEyebrow')}
        </p>
        <h2 className={`mt-2 font-heading text-xl font-bold leading-tight text-brand-white sm:text-2xl ${isRow ? 'mx-auto max-w-xl md:mx-0 md:max-w-none' : 'mx-auto max-w-xl'}`}>
          {t('home.whatsappTitle')}
        </h2>
        <p className={`mt-2 max-w-2xl text-sm leading-6 text-brand-white/90 sm:text-base ${isRow ? 'mx-auto md:mx-0' : 'mx-auto'}`}>
          {t('home.whatsappText')}
        </p>
      </div>
      {disabled ? (
        <button
          type="button"
          className={`focus-ring inline-flex min-h-14 w-full max-w-[316px] items-center justify-center gap-3 bg-brand-whatsapp px-6 py-4 font-heading text-sm font-black uppercase tracking-[0.08em] text-brand-black shadow-lg shadow-black/20 transition hover:bg-brand-whatsappHover sm:w-[316px] sm:gap-4 sm:px-10 sm:text-base sm:tracking-[0.14em] ${isRow ? 'mx-auto md:mx-0' : 'mx-auto'}`}
        >
          <WhatsAppIcon className="size-5" />
          <span className="whitespace-nowrap">{t('home.whatsappCta')}</span>
        </button>
      ) : (
        <a
          className={`focus-ring inline-flex min-h-14 w-full max-w-[316px] items-center justify-center gap-3 bg-brand-whatsapp px-6 py-4 font-heading text-sm font-black uppercase tracking-[0.08em] text-brand-black shadow-lg shadow-black/20 transition hover:bg-brand-whatsappHover sm:w-[316px] sm:gap-4 sm:px-10 sm:text-base sm:tracking-[0.14em] ${isRow ? 'mx-auto md:mx-0' : 'mx-auto'}`}
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon className="size-5" />
          <span className="whitespace-nowrap">{t('home.whatsappCta')}</span>
        </a>
      )}
    </>
  )
}

export default function WhatsAppContact({ variant = 'section', delay = 0, disabled = false }) {
  if (variant === 'card') {
    return (
      <Reveal className="h-full" delay={delay}>
        <div className="flex h-full flex-col items-center justify-center gap-5 rounded-lg border border-brand-whatsapp/20 bg-brand-whatsappDark px-5 py-10 text-center text-brand-white shadow-steel sm:px-8">
          <WhatsAppContent layout="stack" disabled={disabled} />
        </div>
      </Reveal>
    )
  }

  return (
    <section className="border-y border-brand-whatsapp/20 bg-brand-whatsappDark px-4 py-8 text-brand-white sm:px-6 sm:py-10 lg:px-8">
      <Reveal className="mx-auto grid max-w-7xl items-center gap-5 text-center md:grid-cols-[84px_1fr_auto] md:text-left" delay={delay}>
        <WhatsAppContent disabled={disabled} />
      </Reveal>
    </section>
  )
}
