import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/bouz-autotechnik-logo-clean.png'
import { ServiceIcon } from '../data/icons'
import { navItems } from '../data/navigation'

function LanguageToggle() {
  const { i18n, t } = useTranslation()
  const nextLanguage = i18n.language === 'de' ? 'en' : 'de'

  return (
    <button
      type="button"
      className="focus-ring inline-flex h-10 items-center gap-1 rounded-md border border-brand-steel/30 bg-brand-panel/80 px-2 font-heading text-xs font-bold uppercase tracking-wider text-brand-steelLight transition hover:border-brand-red hover:text-white"
      aria-label={t('language.switch')}
      onClick={() => i18n.changeLanguage(nextLanguage)}
    >
      <span className={i18n.language === 'de' ? 'text-brand-red' : ''}>{t('language.de')}</span>
      <span className="text-brand-steelDark">/</span>
      <span className={i18n.language === 'en' ? 'text-brand-red' : ''}>{t('language.en')}</span>
    </button>
  )
}

export default function Header() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `font-heading text-sm font-semibold uppercase tracking-wider transition ${
      isActive ? 'text-brand-red' : 'text-brand-steelLight hover:text-white'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-brand-steel/15 bg-brand-black/88 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="focus-ring flex items-center gap-3 rounded-md" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt={t('site.name')}
            className="h-14 w-14 object-contain"
            loading="eager"
          />
          <span className="hidden min-w-0 sm:block">
            <span className="steel-text block font-heading text-2xl font-bold uppercase leading-none tracking-wider">
              {t('site.name')}
            </span>
            <span className="block font-heading text-xs font-bold uppercase tracking-[0.28em] text-brand-red">
              {t('site.tagline')}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-4 lg:flex xl:gap-6" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink key={item.key} to={item.path} className={navLinkClass}>
              {t(`nav.${item.key}`)}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <button
            type="button"
            className="focus-ring inline-flex size-11 items-center justify-center rounded-md border border-brand-steel/25 bg-brand-panel text-brand-white"
            aria-label={open ? t('common.menuClose') : t('common.menuOpen')}
            onClick={() => setOpen((current) => !current)}
          >
            <ServiceIcon name={open ? 'X' : 'Menu'} className="size-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-brand-steel/15 bg-brand-black px-4 py-5 lg:hidden">
          <nav className="grid gap-2" aria-label="Mobile">
            {navItems.map((item) => (
              <NavLink
                key={item.key}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-md px-4 py-3 font-heading text-base font-bold uppercase tracking-wider ${
                    isActive
                      ? 'bg-brand-red text-white'
                      : 'bg-brand-panel text-brand-steelLight hover:text-white'
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {t(`nav.${item.key}`)}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
