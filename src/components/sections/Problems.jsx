import SectionContainer, { SectionHeader } from '../layout/SectionContainer'
import Icon from '../ui/Icon'
import { PROBLEMS } from '../../data/content'

export default function Problems() {
  return (
    <SectionContainer id="problemas" className="bg-slate-50">
      <SectionHeader
        badge="El problema"
        title="Tu PyME pierde dinero cada día que sigue operando manualmente"
        description="Estos son los retos más comunes que enfrentan las pequeñas y medianas empresas — y que Beattle resuelve con tecnología."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROBLEMS.map((problem, index) => (
          <article
            key={problem.title}
            className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-red-200 hover:shadow-lg hover:shadow-red-500/5"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-500 transition-colors group-hover:bg-red-100">
              <Icon name={problem.icon} className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{problem.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {problem.description}
            </p>
            <span className="absolute right-4 top-4 text-xs font-medium text-slate-300">
              0{index + 1}
            </span>
          </article>
        ))}

        <article className="relative flex flex-col justify-center rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-6 sm:col-span-2 lg:col-span-1">
          <Icon name="Zap" className="mb-4 h-8 w-8 text-brand-600" />
          <h3 className="text-lg font-semibold text-slate-900">
            ¿Te identificas con alguno?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            No estás solo. La mayoría de PyMEs enfrentan estos mismos obstáculos.
            La diferencia está en quién decide actuar.
          </p>
          <a
            href="#contacto"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            Hablemos de tu caso
            <Icon name="ArrowRight" className="h-4 w-4" />
          </a>
        </article>
      </div>
    </SectionContainer>
  )
}
