import { Link } from 'react-router-dom'
import { ServiceIcon } from '../data/icons'

export default function ServiceCard({ service, compact = false }) {
  return (
    <Link
      to={`/service#${service.id}`}
      className="group industrial-panel focus-ring block rounded-lg p-5 transition hover:-translate-y-1 hover:border-brand-red/70 hover:shadow-red"
    >
      <div className="flex items-start gap-4">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-md bg-brand-red/12 text-brand-red ring-1 ring-brand-red/20">
          <ServiceIcon name={service.icon} className="size-6" />
        </span>
        <div>
          <h3 className="font-heading text-xl font-bold uppercase text-brand-white">
            {service.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-brand-text">
            {compact ? service.teaser : service.description}
          </p>
        </div>
      </div>
    </Link>
  )
}
