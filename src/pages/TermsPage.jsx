import PageHero from '../components/layout/PageHero'
import SectionContainer from '../components/layout/SectionContainer'
import { COMPANY } from '../data/content'

export default function TermsPage() {
  return (
    <>
      <PageHero
        badge="Términos y Condiciones"
        title="Términos y Condiciones"
        description="Lee con atención los términos que regulan el uso de este sitio web y de la plataforma."
      />

      <SectionContainer>
        <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-slate-600">
          <p>
            Los servicios ofrecidos en este sitio web son proporcionados por{' '}
            {COMPANY.legalName} bajo el nombre comercial {COMPANY.brand}.
          </p>
          <p>
            {COMPANY.brand} es el nombre comercial utilizado por {COMPANY.legalName}{' '}
            para la prestación de estos servicios.
          </p>
          <p>
            El uso del sitio implica la aceptación de estos términos y condiciones.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Uso del sitio y la plataforma
            </h2>
            <p className="mt-2">
              El usuario se compromete a hacer un uso adecuado del sitio web y de la
              plataforma, absteniéndose de utilizarlos con fines ilícitos o que
              puedan dañar los derechos o intereses de terceros.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Propiedad intelectual
            </h2>
            <p className="mt-2">
              Todos los contenidos, marcas, logotipos y desarrollos de {COMPANY.brand}{' '}
              son propiedad de {COMPANY.legalName} y están protegidos por la
              legislación aplicable en materia de propiedad intelectual.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Limitación de responsabilidad
            </h2>
            <p className="mt-2">
              {COMPANY.legalName}, bajo el nombre comercial {COMPANY.brand}, no será
              responsable por daños derivados del uso indebido del sitio o de la
              plataforma por parte del usuario.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Modificaciones
            </h2>
            <p className="mt-2">
              Estos términos y condiciones pueden ser modificados en cualquier
              momento. Las actualizaciones serán publicadas en esta misma página y
              entrarán en vigor a partir de su publicación.
            </p>
          </div>
        </div>
      </SectionContainer>
    </>
  )
}
