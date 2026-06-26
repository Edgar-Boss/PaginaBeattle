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
            Nuestra misión es ayudar a pequeñas y medianas empresas a digitalizar
            y automatizar sus procesos mediante soluciones tecnológicas modernas,
            integración con WhatsApp Business e inteligencia artificial.
          </p>
          <p className="text-base leading-relaxed text-slate-600">
            Creamos herramientas que simplifican la gestión de citas, la atención
            al cliente y otros procesos empresariales para impulsar el crecimiento
            de nuestros clientes.
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
