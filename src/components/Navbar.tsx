import { useState } from 'react'
import Icon from './Icon'

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#circularidad', label: 'Circularidad' },
  { href: '#industrias', label: 'Industrias' },
  { href: '#cumplimiento', label: 'Cumplimiento' },
  { href: '#cobertura', label: 'Cobertura' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-roca-green-100/60 bg-roca-white/80 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        <a href="#inicio" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-roca-brown-700 text-roca-white">
            <Icon name="recycle" className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight text-roca-green-900">
            Reciclados <span className="text-roca-brown-700">Roca</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-roca-gray transition-colors hover:text-roca-green-700"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#contacto"
            className="morph-cta inline-flex items-center rounded-full bg-roca-green-900 px-5 py-2.5 text-sm font-semibold text-roca-white"
          >
            Solicitar diagnóstico
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-roca-graphite lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-roca-green-100 bg-roca-white px-4 pb-6 pt-3 lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-roca-graphite hover:bg-roca-green-100"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-roca-green-900 px-5 py-3 text-center text-sm font-semibold text-roca-white"
          >
            Solicitar diagnóstico
          </a>
        </div>
      )}
    </header>
  )
}
