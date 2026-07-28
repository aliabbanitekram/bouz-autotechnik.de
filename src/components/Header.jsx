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
      className="focus-ring inline-flex h-11 items-center gap-1 border border-brand-black/10 bg-brand-white px-3 font-heading text-sm font-black uppercase tracking-[0.16em] text-brand-black transition hover:border-brand-red hover:text-brand-red"
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
    `flex h-full items-center px-4 font-heading text-sm font-black uppercase tracking-[0.22em] transition xl:px-5 ${
      isActive ? 'bg-brand-black/[0.055] text-brand-red' : 'text-brand-black hover:bg-brand-black/[0.04] hover:text-brand-red'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-brand-black/10 bg-brand-white text-brand-black shadow-[0_1px_0_rgba(11,13,16,0.05)]">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[92px] lg:px-8">
        <Link to="/" className="focus-ring flex items-center gap-3 rounded-md" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt={t('site.name')}
            className="h-12 w-12 object-contain lg:h-14 lg:w-14"
            loading="eager"
          />
          <span className="hidden min-w-0 sm:block">
            <span className="block font-heading text-xl font-black uppercase leading-none tracking-[0.18em] text-brand-black lg:text-2xl">
              {t('site.name')}
            </span>
            <span className="block font-heading text-xs font-bold uppercase tracking-[0.28em] text-brand-red">
              {t('site.tagline')}
            </span>
          </span>
        </Link>

        <nav className="hidden h-full items-center lg:flex" aria-label="Primary">
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
            className="focus-ring inline-flex size-12 items-center justify-center border border-brand-black/10 bg-brand-white text-brand-black transition hover:border-brand-red hover:text-brand-red"
            aria-label={open ? t('common.menuClose') : t('common.menuOpen')}
            onClick={() => setOpen((current) => !current)}
          >
            <ServiceIcon name={open ? 'X' : 'Menu'} className="size-7 stroke-[2.6]" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-brand-black/10 bg-brand-white px-4 py-5 shadow-xl lg:hidden">
          <nav className="grid gap-2" aria-label="Mobile">
            {navItems.map((item) => (
              <NavLink
                key={item.key}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-4 font-heading text-base font-black uppercase tracking-[0.18em] transition ${
                    isActive
                      ? 'bg-brand-red text-white'
                      : 'bg-brand-black/[0.045] text-brand-black hover:bg-brand-black/[0.075] hover:text-brand-red'
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
