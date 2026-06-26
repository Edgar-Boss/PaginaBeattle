import { useState } from 'react'
import SectionContainer, { SectionHeader } from '../layout/SectionContainer'
import Button from '../ui/Button'
import Icon from '../ui/Icon'

const INITIAL_FORM = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')

    setTimeout(() => {
      setStatus('success')
      setForm(INITIAL_FORM)
    }, 1200)
  }

  const inputClasses =
    'w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20'

  return (
    <SectionContainer id="contacto">
      <SectionHeader
        badge="Contacto"
        title="Solicita tu demostración gratuita"
        description="Cuéntanos sobre tu negocio y te mostraremos cómo Beattle puede eliminar procesos manuales y acelerar tu crecimiento."
      />

      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="font-semibold text-slate-900">
              ¿Qué incluye la demostración?
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                'Análisis de tus procesos actuales',
                'Demo personalizada de soluciones',
                'Estimación de ahorro de tiempo y costos',
                'Propuesta sin compromiso',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                  <Icon name="Check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-4 border-t border-slate-200 pt-6">
              <a
                href="mailto:contacto@beattlesolution.com"
                className="flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-brand-600"
              >
                <Icon name="Mail" className="h-5 w-5 text-brand-600" />
                contacto@beattlesolution.com
              </a>
              <a
                href="https://wa.me/5210000000000"
                className="flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-brand-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="Phone" className="h-5 w-5 text-brand-600" />
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="lg:col-span-3"
          noValidate
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center py-12 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
                  <Icon name="Check" className="h-7 w-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  ¡Mensaje enviado!
                </h3>
                <p className="mt-2 max-w-sm text-sm text-slate-600">
                  Gracias por contactarnos. Nuestro equipo se comunicará contigo en
                  menos de 24 horas hábiles.
                </p>
                <Button
                  variant="secondary"
                  className="mt-6"
                  onClick={() => setStatus('idle')}
                >
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Juan Pérez"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-slate-700">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={form.company}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Mi Negocio S.A."
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="juan@minegocio.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-700">
                      Teléfono / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="+52 55 1234 5678"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
                    ¿Cómo podemos ayudarte? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClasses} resize-none`}
                    placeholder="Cuéntanos sobre tu negocio, los procesos que quieres automatizar o las herramientas que necesitas..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="mt-6 w-full sm:w-auto"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    'Enviando...'
                  ) : (
                    <>
                      Solicitar demostración
                      <Icon name="Send" className="h-4 w-4" />
                    </>
                  )}
                </Button>

                <p className="mt-4 text-xs text-slate-500">
                  Al enviar este formulario, aceptas que Beattle Solution se comunique
                  contigo para coordinar la demostración. No compartimos tus datos con
                  terceros.
                </p>
              </>
            )}
          </div>
        </form>
      </div>
    </SectionContainer>
  )
}
