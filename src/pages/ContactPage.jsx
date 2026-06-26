import PageHero from '../components/layout/PageHero'
import SectionContainer from '../components/layout/SectionContainer'
import Icon from '../components/ui/Icon'
import { COMPANY } from '../data/content'

const DETAILS = [
  { label: 'Nombre comercial', value: COMPANY.brand },
  { label: 'Operado por', value: COMPANY.legalName },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contacto"
        title="Contacto"
        description="¿Tienes preguntas sobre Beattle Solution? Estamos para ayudarte."
      />

      <SectionContainer>
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <dl className="space-y-6">
              {DETAILS.map((detail) => (
                <div key={detail.label}>
                  <dt className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                    {detail.label}
                  </dt>
                  <dd className="mt-1 text-base text-slate-700">{detail.value}</dd>
                </div>
              ))}

              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                  Sitio web
                </dt>
                <dd className="mt-1 text-base">
                  <a
                    href={COMPANY.domain}
                    className="text-brand-600 transition-colors hover:text-brand-700"
                  >
                    {COMPANY.domain}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                  Correo electrónico
                </dt>
                <dd className="mt-1 text-base">
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="inline-flex items-center gap-2 text-brand-600 transition-colors hover:text-brand-700"
                  >
                    <Icon name="Mail" className="h-4 w-4" />
                    {COMPANY.email}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-brand-600"
              >
                <Icon name="Phone" className="h-4 w-4" />
                Escríbenos por WhatsApp Business
              </a>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  )
}
