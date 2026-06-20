import SectionContainer, { SectionHeader } from '../layout/SectionContainer'
import Icon from '../ui/Icon'
import { SOLUTIONS } from '../../data/content'

export default function HowWeHelp() {
  return (
    <SectionContainer id="soluciones">
      <SectionHeader
        badge="Cómo ayudamos"
        title="Soluciones tecnológicas diseñadas para la realidad de tu PyME"
        description="No vendemos software genérico. Construimos herramientas que se adaptan a tu operación, tu equipo y tus clientes."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {SOLUTIONS.map((solution, index) => (
          <article
            key={solution.title}
            className="group relative flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 lg:p-8"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
              <Icon name={solution.icon} className="h-6 w-6" />
            </div>
            <div>
              <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-brand-600">
                0{index + 1}
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{solution.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {solution.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  )
}
