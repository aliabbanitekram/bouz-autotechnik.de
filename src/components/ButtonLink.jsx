import { Link } from 'react-router-dom'
import { ServiceIcon } from '../data/icons'

const base =
  'focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 font-heading text-sm font-bold uppercase tracking-wider transition'

const variants = {
  primary: 'bg-gradient-to-r from-brand-red to-brand-redDark text-white shadow-red hover:from-brand-redDark hover:to-brand-red',
  secondary:
    'border border-brand-steel/35 bg-brand-steelLight/5 text-brand-white hover:border-brand-red hover:text-white',
  dark: 'border border-brand-charcoal bg-brand-charcoal text-brand-white hover:border-brand-red hover:bg-brand-red',
  soft: 'border border-brand-black/5 bg-brand-black/[0.06] text-brand-steelDark hover:bg-brand-black/[0.1] hover:text-brand-black',
  ghost: 'text-brand-steelLight hover:text-brand-red',
}

export default function ButtonLink({ children, to, href, variant = 'primary', icon = 'ArrowRight', fullWidth = false }) {
  const classes = `${base} ${fullWidth ? 'w-full min-h-14 px-8 py-4 text-base' : ''} ${variants[variant]}`
  const content = (
    <>
      <span>{children}</span>
      {icon && <ServiceIcon name={icon} className="size-4" />}
    </>
  )

  if (href) {
    return (
      <a className={classes} href={href}>
        {content}
      </a>
    )
  }

  return (
    <Link className={classes} to={to}>
      {content}
    </Link>
  )
}
