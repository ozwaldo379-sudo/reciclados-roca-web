import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { services } from '../data/siteContent'

export default function Services() {
  return (
    <section id="servicios" className="texture-fiber scroll-mt-16 bg-roca-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Servicios"
          title="Soluciones de reciclaje para tu operación industrial"
          subtitle="Convierte tus residuos en valor documentado: manejo, acopio, separación, valorización y canalización responsable de materiales reciclables."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.08}>
              <article className="morph-card flex h-full flex-col p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-roca-green-100 text-roca-green-900">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-roca-graphite">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-roca-gray">{s.description}</p>
                <p className="mt-4 flex items-start gap-2 border-t border-roca-green-100 pt-4 text-sm font-medium text-roca-green-900">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-roca-lime-dark" />
                  {s.benefit}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
