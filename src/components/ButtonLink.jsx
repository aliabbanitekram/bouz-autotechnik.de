import { Link } from 'react-router-dom'
import { ServiceIcon } from '../data/icons'

const base =
  'focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 font-heading text-sm font-bold uppercase tracking-wider transition'

const variants = {
  primary: 'bg-brand-red text-white shadow-red hover:bg-brand-redDark',
  secondary:
    'border border-brand-steel/35 bg-brand-steelLight/5 text-brand-white hover:border-brand-red hover:text-white',
  dark: 'border border-brand-charcoal bg-brand-charcoal text-brand-white hover:border-brand-red hover:bg-brand-red',
  ghost: 'text-brand-steelLight hover:text-brand-red',
}

export default function ButtonLink({ children, to, href, variant = 'primary', icon = 'ArrowRight' }) {
  const classes = `${base} ${variants[variant]}`
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
