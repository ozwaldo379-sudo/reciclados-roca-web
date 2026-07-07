import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { industries, industriesNote } from '../data/siteContent'

export default function Industries() {
  return (
    <section id="industrias" className="scroll-mt-16 bg-roca-brown-100/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industrias atendidas"
          title="Especialistas en el ritmo de la industria"
          subtitle="Soluciones de reciclaje para industrias que necesitan cumplimiento, trazabilidad y confianza."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 0.05}>
              <div className="morph-card flex items-center gap-3 px-6 py-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-roca-brown-100 text-roca-brown-700">
                  <Icon name={ind.icon} className="h-5 w-5" />
                </span>
                <span className="font-semibold text-roca-graphite">{ind.name}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-10 max-w-3xl">
          <p className="rounded-2xl border border-roca-brown-100 bg-roca-white px-6 py-5 text-center text-sm leading-relaxed text-roca-gray">
            {industriesNote}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
