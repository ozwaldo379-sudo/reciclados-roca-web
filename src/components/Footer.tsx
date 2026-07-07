import Icon from './Icon'
import { contact } from '../data/siteContent'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-roca-graphite text-roca-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-roca-brown-700">
              <Icon name="recycle" className="h-5 w-5 text-roca-white" />
            </span>
            <span className="text-lg font-bold">
              Reciclados <span className="text-roca-lime">Roca</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-roca-white/65">
            Reciclaje y valorización de residuos de manejo especial para la industria
            manufacturera y automotriz.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-roca-lime">Ubicaciones</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-roca-white/75">
            <li className="flex items-center gap-2">
              <Icon name="pin" className="h-4 w-4 shrink-0 text-roca-lime" />
              Coronango, Puebla
            </li>
            <li className="flex items-center gap-2">
              <Icon name="pin" className="h-4 w-4 shrink-0 text-roca-lime" />
              Tlaxcala, Tlaxcala
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-roca-lime">Contacto</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-roca-white/75">
            <li>Teléfono: {contact.phone}</li>
            <li>Correo: {contact.email}</li>
            <li>WhatsApp: {contact.whatsapp}</li>
            <li>
              <a
                href={contact.privacyUrl}
                className="underline decoration-roca-lime/60 underline-offset-4 hover:text-roca-lime"
              >
                Aviso de privacidad
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-roca-white/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-roca-white/50 sm:px-6 lg:px-8">
          © {year} Reciclados Roca. Todos los derechos reservados. · Residuos de manejo especial ·
          Puebla y Tlaxcala, México.
        </p>
      </div>
    </footer>
  )
}
