import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { clients, clientsNote } from '../data/siteContent'

export default function Clients() {
  return (
    <section id="clientes" className="scroll-mt-16 bg-roca-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Referencias"
          title="Empresas y sectores que confían en soluciones de reciclaje industrial"
        />

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {clients.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.05}>
              <div className="morph-card flex flex-col items-center gap-1 px-8 py-5 text-center">
                <span className="text-lg font-bold tracking-tight text-roca-graphite">{c.name}</span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${
                    c.tag === 'Sector'
                      ? 'bg-roca-green-100 text-roca-green-900'
                      : 'bg-roca-brown-100 text-roca-brown-700'
                  }`}
                >
                  {c.tag}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <p className="text-xs text-roca-gray/80">{clientsNote}</p>
        </Reveal>
      </div>
    </section>
  )
}
