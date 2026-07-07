import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { benefits } from '../data/siteContent'

export default function Benefits() {
  return (
    <section id="beneficios" className="texture-fiber scroll-mt-16 bg-roca-green-100/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Beneficios"
          title="Lo que tu planta gana al trabajar con nosotros"
          subtitle="Evaluamos tus materiales y proponemos una ruta responsable de valorización."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 4) * 0.07}>
              <div className="morph-card h-full p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-roca-green-900 text-roca-lime">
                  <Icon name={b.icon} className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-4 font-bold text-roca-graphite">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-roca-gray">{b.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
