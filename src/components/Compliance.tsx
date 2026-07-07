import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { complianceIntro, compliancePlaceholders } from '../data/siteContent'

export default function Compliance() {
  return (
    <section id="cumplimiento" className="scroll-mt-16 bg-roca-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Cumplimiento y permisos"
          title="Seriedad documental para tu tranquilidad"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="rounded-2xl bg-roca-green-900 p-8 text-roca-white lg:p-10">
              <Icon name="shield" className="h-10 w-10 text-roca-lime" />
              <p className="mt-5 text-lg leading-relaxed text-roca-white/90">{complianceIntro}</p>
              <p className="mt-6 flex items-start gap-2 text-sm text-roca-white/70">
                <Icon name="document" className="mt-0.5 h-5 w-5 shrink-0 text-roca-lime" />
                Documentación disponible para procesos de alta de proveedor, auditorías internas y
                revisiones de cliente.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="morph-card p-8 lg:p-10">
              <h3 className="text-lg font-bold text-roca-graphite">
                Expediente documental
                <span className="ml-2 rounded-full bg-roca-brown-100 px-3 py-1 text-xs font-semibold text-roca-brown-700">
                  Editable
                </span>
              </h3>
              <p className="mt-2 text-sm text-roca-gray">
                Espacios para integrar evidencia documental específica:
              </p>
              <dl className="mt-6 divide-y divide-roca-green-100">
                {compliancePlaceholders.map((item) => (
                  <div key={item.label} className="flex flex-col gap-1 py-3.5 sm:flex-row sm:items-center sm:justify-between">
                    <dt className="text-sm font-semibold text-roca-graphite">{item.label}</dt>
                    <dd className="rounded-md bg-roca-green-100/70 px-3 py-1 font-mono text-xs text-roca-green-900">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
