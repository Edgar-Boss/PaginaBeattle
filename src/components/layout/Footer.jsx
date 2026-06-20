import Icon from '../ui/Icon'
import { NAV_LINKS } from '../../data/content'

const FOOTER_SERVICES = [
  'Desarrollo de software a medida',
  'Automatización de procesos',
  'Integración WhatsApp Business',
  'Sistemas de citas y reservaciones',
  'Dashboards empresariales',
  'Consultoría tecnológica',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 bg-surface-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600">
                <span className="text-sm font-bold text-white">B</span>
              </div>
              <span className="text-xl font-bold text-white">Beattle</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed">
              Tecnología que elimina procesos manuales y potencia el crecimiento
              de PyMEs en Latinoamérica.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navegación
            </h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Servicios
            </h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_SERVICES.map((service) => (
                <li key={service} className="text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:contacto@beattle.com"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                >
                  <Icon name="Mail" className="h-4 w-4 shrink-0" />
                  contacto@beattle.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5210000000000"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="Phone" className="h-4 w-4 shrink-0" />
                  WhatsApp Business
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Icon name="MapPin" className="mt-0.5 h-4 w-4 shrink-0" />
                México · Atención remota en toda LATAM
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm">
            &copy; {year} Beattle. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="transition-colors hover:text-white">
              Aviso de privacidad
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Términos de servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
