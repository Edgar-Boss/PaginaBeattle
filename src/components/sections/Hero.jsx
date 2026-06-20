import Button from '../ui/Button'
import Badge from '../ui/Badge'
import Icon from '../ui/Icon'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28 lg:pt-40 lg:pb-32">
      <div className="hero-glow absolute inset-0" aria-hidden="true" />
      <div className="grid-pattern absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Badge className="mb-6">
            <Icon name="Sparkles" className="mr-1.5 h-3.5 w-3.5" />
            Tecnología para PyMEs que quieren crecer
          </Badge>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
            Deja de perder tiempo en lo manual.{' '}
            <span className="text-gradient">Automatiza tu negocio.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            Beattle diseña software, automatización e inteligencia artificial
            para que tu PyME opere con la eficiencia de una gran empresa — sin
            la complejidad ni el costo.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="#contacto" variant="primary" size="lg">
              Solicitar demostración
              <Icon name="ArrowRight" className="h-4 w-4" />
            </Button>
            <Button href="#soluciones" variant="secondary" size="lg">
              Conocer soluciones
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: '50+', label: 'PyMEs automatizadas' },
              { value: '24/7', label: 'Atención automatizada' },
              { value: '3x', label: 'Respuesta más rápida' },
              { value: '98%', label: 'Satisfacción clientes' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-brand-600 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-brand-500/20 via-brand-400/10 to-brand-600/20 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-surface-950 shadow-2xl shadow-brand-900/20">
            <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <span className="ml-2 text-xs text-slate-500">beattle — panel de control</span>
            </div>
            <div className="grid gap-px bg-slate-800 p-6 sm:grid-cols-3">
              <div className="rounded-lg bg-surface-900 p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Citas hoy
                </p>
                <p className="mt-1 text-2xl font-bold text-white">24</p>
                <p className="mt-1 text-xs text-emerald-400">+18% vs. ayer</p>
              </div>
              <div className="rounded-lg bg-surface-900 p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Mensajes WhatsApp
                </p>
                <p className="mt-1 text-2xl font-bold text-white">156</p>
                <p className="mt-1 text-xs text-brand-400">92% automatizados</p>
              </div>
              <div className="rounded-lg bg-surface-900 p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Tiempo ahorrado
                </p>
                <p className="mt-1 text-2xl font-bold text-white">12h</p>
                <p className="mt-1 text-xs text-slate-400">esta semana</p>
              </div>
            </div>
            <div className="border-t border-slate-800 p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-300">
                  Flujos de automatización activos
                </p>
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                  En línea
                </span>
              </div>
              <div className="mt-4 space-y-2">
                {[
                  'Confirmación de citas por WhatsApp',
                  'Seguimiento post-servicio automático',
                  'Reporte semanal de ventas',
                ].map((flow) => (
                  <div
                    key={flow}
                    className="flex items-center gap-3 rounded-lg bg-surface-900 px-3 py-2.5"
                  >
                    <Icon name="Check" className="h-4 w-4 text-emerald-400" />
                    <span className="text-sm text-slate-300">{flow}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
