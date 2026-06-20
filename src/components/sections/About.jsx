import SectionContainer, { SectionHeader } from '../layout/SectionContainer'
import Button from '../ui/Button'
import Icon from '../ui/Icon'

const VALUES = [
  {
    title: 'Enfoque en PyMEs',
    description: 'Entendemos las limitaciones de presupuesto, tiempo y equipo de las pequeñas empresas.',
  },
  {
    title: 'Tecnología accesible',
    description: 'Soluciones potentes sin la complejidad ni el precio de las grandes consultoras.',
  },
  {
    title: 'Resultados medibles',
    description: 'Cada proyecto se define con KPIs claros: tiempo ahorrado, costos reducidos, conversiones.',
  },
  {
    title: 'Acompañamiento continuo',
    description: 'No desaparecemos después del lanzamiento. Evolucionamos contigo.',
  },
]

export default function About() {
  return (
    <SectionContainer id="nosotros">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeader
            badge="Sobre Beattle"
            title="Tecnología con propósito para negocios reales"
            description="Nacimos con una convicción clara: las PyMEs merecen las mismas herramientas que usan las grandes empresas, adaptadas a su escala y presupuesto."
            centered={false}
          />

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                Nuestra historia
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Beattle surge de ver de cerca cómo cientos de PyMEs pierden clientes,
                tiempo y dinero por depender de procesos manuales y herramientas que
                no se comunican entre sí. Decidimos construir la alternativa: tecnología
                práctica, accesible y orientada a resultados.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                Nuestra visión
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Ser el partner tecnológico de referencia para PyMEs en Latinoamérica,
                democratizando la automatización, la inteligencia artificial y el
                software de calidad empresarial.
              </p>
            </div>
          </div>

          <Button href="#contacto" variant="primary" className="mt-8">
            Conoce más sobre nosotros
            <Icon name="ArrowRight" className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {VALUES.map((value) => (
            <article
              key={value.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-brand-200 hover:shadow-md"
            >
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50">
                <Icon name="Check" className="h-4 w-4 text-brand-600" />
              </div>
              <h3 className="font-semibold text-slate-900">{value.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
