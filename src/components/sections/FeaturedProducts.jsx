import SectionContainer, { SectionHeader } from '../layout/SectionContainer'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import { PRODUCTS } from '../../data/content'

export default function FeaturedProducts() {
  return (
    <SectionContainer id="productos" dark className="bg-surface-950">
      <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent"
        aria-hidden="true"
      />

      <SectionHeader
        badge="Productos destacados"
        title="Plataformas listas para transformar tu operación"
        description="Soluciones probadas con PyMEs reales. Implementación rápida, resultados medibles desde la primera semana."
        dark
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {PRODUCTS.map((product) => (
          <article
            key={product.title}
            className={`group relative flex flex-col rounded-2xl border p-6 transition-all lg:p-8 ${
              product.highlight
                ? 'border-brand-500/50 bg-gradient-to-br from-brand-950/50 to-surface-900 shadow-xl shadow-brand-900/20'
                : 'border-slate-800 bg-surface-900 hover:border-slate-700'
            }`}
          >
            {product.highlight && (
              <span className="absolute -top-3 left-6 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                Más popular
              </span>
            )}

            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/10 text-brand-400">
              <Icon name={product.icon} className="h-6 w-6" />
            </div>

            <h3 className="text-xl font-semibold text-white">{product.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
              {product.description}
            </p>

            <ul className="mt-6 space-y-2">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                  <Icon name="Check" className="h-4 w-4 shrink-0 text-brand-400" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              href="#contacto"
              variant={product.highlight ? 'white' : 'outlineWhite'}
              className="mt-6 w-full sm:w-auto"
            >
              Solicitar demo
              <Icon name="ArrowRight" className="h-4 w-4" />
            </Button>
          </article>
        ))}
      </div>
    </SectionContainer>
  )
}
