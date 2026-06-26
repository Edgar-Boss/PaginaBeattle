import PageHero from '../components/layout/PageHero'
import SectionContainer from '../components/layout/SectionContainer'
import { COMPANY } from '../data/content'

function Field({ label, children }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-600">
        {label}
      </h3>
      <p className="mt-1 text-base text-slate-700">{children}</p>
    </div>
  )
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        badge="Aviso de Privacidad"
        title="Aviso de Privacidad"
        description="Tu privacidad es importante para nosotros. A continuación se describe cómo tratamos tus datos personales."
      />

      <SectionContainer>
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:grid-cols-2 sm:p-8">
            <Field label="Responsable del tratamiento de los datos personales">
              {COMPANY.legalName}
            </Field>
            <Field label="Nombre comercial">{COMPANY.brand}</Field>
            <Field label="Sitio web">
              <a
                href={COMPANY.domain}
                className="text-brand-600 transition-colors hover:text-brand-700"
              >
                {COMPANY.domain}
              </a>
            </Field>
            <Field label="Correo electrónico">
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-brand-600 transition-colors hover:text-brand-700"
              >
                {COMPANY.email}
              </a>
            </Field>
          </div>

          <div className="mt-10 space-y-6 text-base leading-relaxed text-slate-600">
            <p>
              {COMPANY.brand} es un producto desarrollado y operado por{' '}
              {COMPANY.legalName}.
            </p>
            <p>
              Los datos personales proporcionados por los usuarios serán utilizados
              únicamente para prestar los servicios ofrecidos por la plataforma,
              responder solicitudes, brindar soporte y mejorar la experiencia del
              usuario.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Uso de la información
              </h2>
              <p className="mt-2">
                No compartimos tus datos personales con terceros con fines
                comerciales. La información recabada se trata de forma confidencial
                y se emplea exclusivamente para las finalidades descritas en este
                aviso.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Derechos del usuario
              </h2>
              <p className="mt-2">
                Puedes solicitar en cualquier momento el acceso, rectificación,
                cancelación u oposición respecto al tratamiento de tus datos
                personales escribiendo a{' '}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-brand-600 transition-colors hover:text-brand-700"
                >
                  {COMPANY.email}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Cambios al aviso de privacidad
              </h2>
              <p className="mt-2">
                Este aviso de privacidad puede ser actualizado en cualquier momento
                para reflejar cambios en nuestros servicios o en la normativa
                aplicable. Las modificaciones se publicarán en esta misma página.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  )
}
