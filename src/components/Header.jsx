import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router-dom'
import logoDark from '../assets/bouz-autotechnik-logo-clean.png'
import logoLight from '../assets/bouz-autotechnik-logo-light.png'
import { useTheme } from '../context/useTheme'
import { ServiceIcon } from '../data/icons'
import { navItems } from '../data/navigation'

function LanguageToggle({ isDark = false }) {
  const { i18n, t } = useTranslation()
  const nextLanguage = i18n.language === 'de' ? 'en' : 'de'

  return (
    <button
      type="button"
      className={`focus-ring inline-flex h-11 items-center gap-1 border px-3 font-heading text-sm font-black uppercase tracking-[0.16em] transition hover:border-brand-red hover:text-brand-red ${
        isDark
          ? 'border-brand-white/15 bg-brand-black text-brand-white'
          : 'border-brand-black/10 bg-brand-white text-brand-black'
      }`}
      aria-label={t('language.switch')}
      onClick={() => i18n.changeLanguage(nextLanguage)}
    >
      <span className={i18n.language === 'de' ? 'text-brand-red' : ''}>{t('language.de')}</span>
      <span className="text-brand-steelDark">/</span>
      <span className={i18n.language === 'en' ? 'text-brand-red' : ''}>{t('language.en')}</span>
    </button>
  )
}

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      className={`focus-ring inline-flex size-11 items-center justify-center border transition hover:border-brand-red hover:text-brand-red ${
        isDark
          ? 'border-brand-white/15 bg-brand-black text-brand-white'
          : 'border-brand-black/10 bg-brand-white text-brand-black'
      }`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggleTheme}
    >
      <ServiceIcon name={isDark ? 'Sun' : 'Moon'} className="size-5 stroke-[2.4]" />
    </button>
  )
}

export default function Header() {
  const { t } = useTranslation()
  const { isDark } = useTheme()
  const [open, setOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `flex h-full items-center px-4 font-heading text-sm font-black uppercase tracking-[0.22em] transition xl:px-5 ${
      isActive
        ? isDark
          ? 'bg-brand-white/[0.07] text-brand-red'
          : 'bg-brand-black/[0.055] text-brand-red'
        : isDark
          ? 'text-brand-white hover:bg-brand-white/[0.06] hover:text-brand-red'
          : 'text-brand-black hover:bg-brand-black/[0.04] hover:text-brand-red'
    }`

  return (
    <header
      className={`sticky top-0 z-50 border-b shadow-[0_1px_0_rgba(11,13,16,0.05)] transition-colors ${
        isDark ? 'border-brand-white/10 bg-brand-black text-brand-white' : 'border-brand-black/10 bg-brand-white text-brand-black'
      }`}
    >
      <div className="mx-auto flex h-28 w-full max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:h-[92px] lg:px-8">
        <Link to="/" className="flex items-center gap-3 rounded-md focus-ring" onClick={() => setOpen(false)}>
          <span className="flex items-center justify-center overflow-hidden h-28 w-28 shrink-0 sm:h-24 sm:w-24 lg:h-24 lg:w-24">
            <img
              src={isDark ? logoDark : logoLight}
              alt={t('site.name')}
              className={`h-full w-full object-contain${!isDark ? ' scale-[0.7]' : ''}`}
              loading="eager"
            />
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className={`block font-heading text-xl font-black uppercase leading-none tracking-[0.18em] lg:text-2xl ${isDark ? 'text-brand-white' : 'text-brand-black'}`}>
              {t('site.name')}
            </span>
            <span className="block font-heading text-xs font-bold uppercase tracking-[0.28em] text-brand-red">
              {t('site.tagline')}
            </span>
          </span>
        </Link>

        <nav className="items-center hidden h-full lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink key={item.key} to={item.path} className={navLinkClass}>
              {t(`nav.${item.key}`)}
            </NavLink>
          ))}
        </nav>

        <div className="items-center hidden gap-3 lg:flex">
          <ThemeToggle />
          <LanguageToggle isDark={isDark} />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            className={`inline-flex items-center justify-center border transition focus-ring size-12 hover:border-brand-red hover:text-brand-red ${
              isDark ? 'border-brand-white/15 bg-brand-black text-brand-white' : 'border-brand-black/10 bg-brand-white text-brand-black'
            }`}
            aria-label={open ? t('common.menuClose') : t('common.menuOpen')}
            onClick={() => setOpen((current) => !current)}
          >
            <ServiceIcon name={open ? 'X' : 'Menu'} className="size-7 stroke-[2.6]" />
          </button>
        </div>
      </div>

      {open && (
        <div className={`px-4 py-5 border-t shadow-xl lg:hidden ${isDark ? 'border-brand-white/10 bg-brand-black' : 'border-brand-black/10 bg-brand-white'}`}>
          <nav className="grid gap-2" aria-label="Mobile">
            {navItems.map((item) => (
              <NavLink
                key={item.key}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-4 font-heading text-base font-black uppercase tracking-[0.18em] transition ${
                    isActive
                      ? 'bg-brand-red text-white'
                      : isDark
                        ? 'bg-brand-white/[0.06] text-brand-white hover:bg-brand-white/[0.1] hover:text-brand-red'
                        : 'bg-brand-black/[0.045] text-brand-black hover:bg-brand-black/[0.075] hover:text-brand-red'
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {t(`nav.${item.key}`)}
              </NavLink>
            ))}
          </nav>
          <div className={`mt-5 flex items-center gap-3 border-t pt-5 ${isDark ? 'border-brand-white/10' : 'border-brand-black/10'}`}>
            <ThemeToggle />
            <LanguageToggle isDark={isDark} />
          </div>
        </div>
      )}
    </header>
  )
}
