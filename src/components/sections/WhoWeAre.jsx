import SectionContainer, { SectionHeader } from '../layout/SectionContainer'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import { COMPANY } from '../../data/content'

export default function WhoWeAre() {
  return (
    <SectionContainer id="quienes-somos" className="bg-slate-50">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeader
          badge="Quiénes somos"
          title="La empresa detrás de Beattle Solution"
          description={`${COMPANY.brand} es una plataforma SaaS desarrollada y operada por ${COMPANY.legalName}.`}
        />

        <div className="space-y-6 text-left sm:text-center">
          <p className="text-base leading-relaxed text-slate-600">
            {COMPANY.brand} es una plataforma SaaS desarrollada y operada por{' '}
            {COMPANY.legalName}.
          </p>
          <p className="text-base leading-relaxed text-slate-600">
            Ayudamos a pequeñas y medianas empresas a automatizar procesos,
            gestionar citas, mejorar la atención al cliente e integrar soluciones
            digitales como WhatsApp Business e inteligencia artificial.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <Button to="/about" variant="primary" size="lg">
            Conoce más
            <Icon name="ArrowRight" className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </SectionContainer>
  )
}
