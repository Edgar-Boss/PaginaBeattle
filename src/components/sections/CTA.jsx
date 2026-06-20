import SectionContainer from '../layout/SectionContainer'
import Button from '../ui/Button'
import Icon from '../ui/Icon'

export default function CTA() {
  return (
    <SectionContainer dark className="bg-surface-950 py-16 sm:py-20">
      <div className="absolute inset-0 hero-glow opacity-50" aria-hidden="true" />

      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          ¿Listo para dejar atrás los procesos manuales?
        </h2>
        <p className="mt-4 text-lg text-slate-400">
          Agenda una demostración gratuita y descubre cuánto tiempo y dinero puede
          ahorrar tu PyME con Beattle.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="#contacto" variant="white" size="lg">
            Solicitar demostración
            <Icon name="ArrowRight" className="h-4 w-4" />
          </Button>
          <Button href="https://wa.me/5210000000000" variant="outlineWhite" size="lg">
            WhatsApp directo
          </Button>
        </div>
      </div>
    </SectionContainer>
  )
}
