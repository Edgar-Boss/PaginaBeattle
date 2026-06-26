import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import { NAV_LINKS, LEGAL_LINKS, COMPANY } from '../../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 bg-surface-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600">
                <span className="text-sm font-bold text-white">B</span>
              </div>
              <span className="whitespace-nowrap text-xl font-bold text-white">
                Beattle Solution
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Plataforma SaaS para la automatización de procesos empresariales.
            </p>

            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-white">
              Información de la empresa
            </h3>
            <dl className="mt-4 space-y-3 text-sm leading-relaxed">
              <div>
                <dt className="text-slate-500">Nombre comercial</dt>
                <dd className="text-slate-300">{COMPANY.brand}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Operado por</dt>
                <dd className="text-slate-300">{COMPANY.legalName}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Sitio web</dt>
                <dd>
                  <a
                    href={COMPANY.domain}
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    {COMPANY.domain}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-slate-500">Correo</dt>
                <dd>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    {COMPANY.email}
                  </a>
                </dd>
              </div>
            </dl>

            <p className="mt-4 text-sm leading-relaxed">
              {COMPANY.brand} es el nombre comercial utilizado por{' '}
              {COMPANY.legalName} para la prestación de estos servicios.
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
              Empresa
            </h3>
            <ul className="mt-4 space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
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
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                >
                  <Icon name="Mail" className="h-4 w-4 shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.whatsapp}
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
                {COMPANY.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm">
            &copy; {year} {COMPANY.brand}. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link to="/privacy-policy" className="transition-colors hover:text-white">
              Aviso de Privacidad
            </Link>
            <Link to="/terms" className="transition-colors hover:text-white">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
