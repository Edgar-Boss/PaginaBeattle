import SectionContainer, { SectionHeader } from '../layout/SectionContainer'
import Icon from '../ui/Icon'
import { BENEFITS } from '../../data/content'

export default function Benefits() {
  return (
    <SectionContainer id="beneficios" className="bg-slate-50">
      <SectionHeader
        badge="Beneficios"
        title="Resultados concretos para tu negocio"
        description="Nuestros clientes no solo adoptan tecnología: transforman la forma en que operan y compiten."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map((benefit) => (
          <article
            key={benefit.title}
            className="group rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
              <Icon name={benefit.icon} className="h-6 w-6" />
            </div>
            <p className="text-3xl font-bold text-brand-600">{benefit.stat}</p>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
              {benefit.statLabel}
            </p>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">{benefit.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {benefit.description}
            </p>
          </article>
        ))}
      </div>
    </SectionContainer>
  )
}
