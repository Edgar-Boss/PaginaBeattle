import PageHero from '../components/layout/PageHero'
import SectionContainer from '../components/layout/SectionContainer'
import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import { COMPANY } from '../data/content'

const PILLARS = [
  {
    icon: 'Workflow',
    title: 'Automatización de procesos',
    description:
      'Flujos que ejecutan tareas repetitivas de forma automática para liberar tiempo de tu equipo.',
  },
  {
    icon: 'CalendarCheck',
    title: 'Gestión de citas',
    description:
      'Agenda inteligente con confirmaciones y recordatorios automáticos para tus clientes.',
  },
  {
    icon: 'MessageCircle',
    title: 'Integración con WhatsApp Business',
    description:
      'Comunicación centralizada y atención automatizada directamente desde WhatsApp.',
  },
  {
    icon: 'Brain',
    title: 'Inteligencia artificial',
    description:
      'Respuestas contextuales y análisis que ayudan a tomar mejores decisiones.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="Acerca de"
        title="Acerca de Beattle Solution"
        description={`Plataforma SaaS desarrollada y operada por ${COMPANY.legalName}.`}
      />

      <SectionContainer>
        <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-slate-600">
          <p>
            {COMPANY.brand} es una plataforma SaaS enfocada en la automatización de
            procesos, gestión de citas, integración con WhatsApp Business e
            inteligencia artificial para pequeñas y medianas empresas.
          </p>
          <p>
            El sitio web, la plataforma y todos los servicios ofrecidos son
            desarrollados y operados por {COMPANY.legalName}.
          </p>
          <p>
            Nuestro objetivo es ayudar a las empresas a digitalizar sus procesos
            mediante soluciones tecnológicas modernas, intuitivas y escalables.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-brand-200 hover:shadow-md"
            >
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50">
                <Icon name={pillar.icon} className="h-4 w-4 text-brand-600" />
              </div>
              <h3 className="font-semibold text-slate-900">{pillar.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button to="/contact" variant="primary" size="lg">
            Contáctanos
            <Icon name="ArrowRight" className="h-4 w-4" />
          </Button>
        </div>
      </SectionContainer>
    </>
  )
}
