import SectionContainer, { SectionHeader } from '../layout/SectionContainer'
import { Accordion } from '../ui/Accordion'
import { FAQ_ITEMS } from '../../data/content'

export default function FAQ() {
  return (
    <SectionContainer id="faq" className="bg-slate-50">
      <SectionHeader
        badge="Preguntas frecuentes"
        title="Resolvemos tus dudas antes de empezar"
        description="Si no encuentras la respuesta que buscas, contáctanos directamente. Respondemos en menos de 24 horas."
      />

      <div className="mx-auto max-w-3xl">
        <Accordion items={FAQ_ITEMS} />
      </div>
    </SectionContainer>
  )
}
