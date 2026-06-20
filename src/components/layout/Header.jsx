import { useState, useEffect } from 'react'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import { NAV_LINKS } from '../../data/content'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/80 bg-white/80 backdrop-blur-xl shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        <a href="#" className="group flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 shadow-lg shadow-brand-600/30 transition-transform group-hover:scale-105">
            <span className="text-sm font-bold text-white">B</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Beattle
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="#contacto" variant="primary" size="sm">
            Solicitar demostración
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileOpen}
        >
          <Icon name={mobileOpen ? 'X' : 'Menu'} className="h-6 w-6" />
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              href="#contacto"
              variant="primary"
              className="mt-3 w-full"
              onClick={() => setMobileOpen(false)}
            >
              Solicitar demostración
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
